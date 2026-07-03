# Deployment runbook

This app is **self-contained**: source, image, manifests, and CI/CD all live in this repo.
It is **not** managed by the `foxhound` Flux repo.

## How a release happens

```bash
git switch main && git pull
# ...merge your changes...
git tag v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0        # ← the deploy button
```

Pushing a `v*` tag runs `.github/workflows/release.yml`:

1. **image job** (cloud runner): builds `deploy/Dockerfile`, pushes
   `d4knezsl1me/chri-portfolio:<tag>` + `:latest` to Docker Hub, scans with Trivy.
2. **deploy job** (self-hosted runner on `naked-glados`): pins the image tag with
   `kustomize` and `kubectl apply -k .` into the `apps` namespace, then waits for rollout.

## One-time prerequisites

### GitHub repo secrets

| Secret | Value |
|---|---|
| `DOCKERHUB_USERNAME` | your Docker Hub username (`d4knezsl1me`) |
| `DOCKERHUB_TOKEN` | a Docker Hub **access token** (Account → Security), not your password |

### Self-hosted runner on `naked-glados`

Register a runner scoped to this repo with the label `naked-glados`:

```bash
# on the server, as a dedicated low-privilege user
mkdir -p ~/actions-runner && cd ~/actions-runner
# grab the download + token from:
#   GitHub repo → Settings → Actions → Runners → New self-hosted runner (Linux)
./config.sh --url https://github.com/D4rknezSl1me/chri-portfolio \
            --token <REG_TOKEN> --labels naked-glados --unattended
sudo ./svc.sh install && sudo ./svc.sh start
```

Ensure the runner user has `kubectl` **and** `kustomize` on its PATH, and a kubeconfig
scoped (via RBAC) to only the `apps` namespace. Never give it cluster-admin.

## Manual deploy / rollback

```bash
# manual apply (from the server, with cluster access)
cd deploy/k8s
kustomize edit set image d4knezsl1me/chri-portfolio=d4knezsl1me/chri-portfolio:v1.0.0
kubectl apply -k .

# rollback to the previous ReplicaSet
kubectl -n apps rollout undo deploy/chri-portfolio

# logs
kubectl -n apps logs deploy/chri-portfolio -f
```

## Cluster facts (verified)

- Namespace: `apps` · IngressClass: `traefik` · Pull secret: `registry-secret`
- Edge: Cloudflare Tunnel `glados-server` → `traefik.kube-system` (has a catch-all route)
- TLS: cert-manager ClusterIssuer `letsencrypt-prod` (only needed for end-to-end TLS)
