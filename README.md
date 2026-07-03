# chri-portfolio

Personal portfolio for **Christian Cangelli** — [christiancangelli.com](https://christiancangelli.com).

Self-hosted on a private **k3s** cluster, behind **Cloudflare**, shipped through a
`v*`-tag release pipeline, and hardened to enterprise security standards.

> 📘 The full build/design/security/deploy playbook lives in **[BUILD_GUIDE.md](./BUILD_GUIDE.md)**.
> 🚀 The deployment runbook lives in **[deploy/README.md](./deploy/README.md)**.

## Stack

- **Next.js (App Router) + TypeScript** — static-first rendering
- **Tailwind CSS** with CSS-variable design tokens
- **Framer Motion** for motion (R3F/Three.js ready for future 3D)
- Nonce-based **strict CSP** + full security-header set
- **Docker** (distroless, non-root) → **k3s** via **Kustomize**
- **GitHub Actions**: CI (lint/type/build/CodeQL/Gitleaks) + Release (build/Trivy/deploy)

## Local development

```bash
nvm use
corepack enable
pnpm install
cp .env.example .env.local
pnpm dev            # http://localhost:3000
```

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build (standalone output) |
| `pnpm start` | Run the production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | TypeScript, no emit |
| `pnpm format` | Prettier write |

## Deploy

Push a tag:

```bash
git tag v1.0.0 -m "Release" && git push origin v1.0.0
```

See [deploy/README.md](./deploy/README.md) for the pipeline, secrets, and runner setup.
