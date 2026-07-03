# Christian Cangelli — Portfolio: The Complete Build Guide

> A single-repository, enterprise-grade personal portfolio designed to **impress engineers, entrepreneurs, and investors**.
> Built to stun visually, engineered to pass a security review, and shipped through a fully automated `v*`-tag release pipeline onto your own `naked-glados` k3s cluster behind Cloudflare.

---

## 0. Table of Contents

1. [Vision & Positioning](#1-vision--positioning)
2. [Experience & Design Philosophy](#2-experience--design-philosophy)
3. [Tech Stack (and why)](#3-tech-stack-and-why)
4. [Repository Architecture](#4-repository-architecture)
5. [Content Architecture — the sections that sell you](#5-content-architecture--the-sections-that-sell-you)
6. [Local Development Setup](#6-local-development-setup)
7. [Security — Enterprise Hardening](#7-security--enterprise-hardening)
8. [Performance, SEO & Accessibility](#8-performance-seo--accessibility)
9. [Containerization](#9-containerization)
10. [Kubernetes Manifests (in-repo)](#10-kubernetes-manifests-in-repo)
11. [CI/CD — Release on `v*` tag](#11-cicd--release-on-v-tag)
12. [Domain & Cloudflare Wiring](#12-domain--cloudflare-wiring)
13. [Observability, Backups & Maintenance](#13-observability-backups--maintenance)
14. [Roadmap — 3D & Future Enhancements](#14-roadmap--3d--future-enhancements)
15. [Launch Checklist](#15-launch-checklist)
16. [Appendix — Your Infrastructure Snapshot](#16-appendix--your-infrastructure-snapshot)

---

## 1. Vision & Positioning

You are **not** presenting yourself as "just a developer." The narrative is deliberate:

> **A high-skill software developer today, an engineer tomorrow, and a founder in the making — someone worth investing in.**

Every design and content decision in this guide serves three audiences at once:

| Audience | What they want to see | How the site delivers it |
|---|---|---|
| **Engineers / hiring managers** | Technical depth, clean code, real projects | Live projects, GitHub links, architecture write-ups, this very repo as proof |
| **Entrepreneurs / collaborators** | Vision, execution, momentum | A "Vision" section, a timeline of shipped work, clear positioning |
| **Investors** | A founder-shaped mind, trajectory, low risk | Polished professional presentation, a story arc, evidence of self-hosting/ownership |

**Positioning statement to anchor all copy** (put a refined version of this on your hero):

> *"I build software that ships. I'm sharpening into a world-class engineer — and building toward a company of my own. Here's the evidence, and the vision."*

The single most persuasive asset you have is **this site itself**: self-hosted on your own Kubernetes cluster, deployed via GitOps-grade CI/CD, secured to enterprise standards. It *is* the portfolio piece. Say so, subtly, in an "How this site is built" easter-egg page (see §14).

---

## 2. Experience & Design Philosophy

Goal: **stun and amaze, while staying unmistakably professional.** The line between "wow" and "gimmick" is restraint. Rules:

- **One hero moment.** A single, memorable, high-craft interaction on the landing view (a subtle 3D scene, a shader gradient, or physics-based type). Everything else is calm and confident.
- **Motion with meaning.** Animations guide attention and reward scroll; they never block reading or delay content. Respect `prefers-reduced-motion`.
- **Editorial typography.** Big, confident type. A serif/sans pairing or a single high-quality variable font. Generous whitespace.
- **Dark-first, with a light mode.** Dark reads as "premium/technical"; offer light for accessibility and preference.
- **60 fps or don't ship it.** Every effect is profiled. Jank reads as amateur.
- **Content is king.** The most impressive thing is *what you've done*, presented clearly. Effects frame it, never bury it.

**Design system foundations**

- **Color:** one accent that's yours (pick a signature — e.g. an electric cyan or a warm amber), a near-black background, 2–3 neutral grays. Define as CSS variables / Tailwind theme tokens.
- **Type scale:** modular scale (e.g. 1.25 ratio). Define once as tokens.
- **Spacing:** 4/8px base grid.
- **Components:** build a tiny design system (Button, Card, Section, Tag, Prose) so the site stays consistent as it grows over years.

Curate 3–5 reference sites you admire (award-winning studio/portfolio sites) and note *what* you're borrowing (pacing, type, one interaction) — not to copy, but to set the bar.

---

## 3. Tech Stack (and why)

You said: *heavily edited over years, must welcome new tech (e.g. 3D), must stun but stay professional.* That points to a mainstream, extensible, enterprise-standard stack:

### Core

| Layer | Choice | Why |
|---|---|---|
| **Framework** | **Next.js (App Router) + React + TypeScript** | Industry-standard, enormous ecosystem, hybrid static/SSR, first-class SEO, easy to add anything later. TypeScript is table-stakes for "enterprise." |
| **Styling** | **Tailwind CSS** + CSS variables for theming | Fast, consistent, tree-shaken; tokens make multi-year theming sane. |
| **UI primitives** | **shadcn/ui** (Radix under the hood) | Accessible, unstyled-but-beautiful components you own in-repo — no lock-in. |
| **Animation** | **Framer Motion** (a.k.a. `motion`) | Declarative, production-grade, respects reduced-motion easily. |
| **3D / WebGL** | **React Three Fiber + drei + Three.js** | The React way to do 3D. Add it to *one* component without rewriting anything — perfect for your "add 3D later" requirement. |
| **Content** | **MDX** for project write-ups + a typed content layer (e.g. Contentlayer or local `content/` + Zod) | Write case studies in Markdown with embedded components. Type-safe. |
| **Forms/Contact** | Serverless route → email (Resend) or a form service, with spam protection | Lets investors/collaborators reach you without exposing your inbox. |

### Why Next.js over Astro/SvelteKit for *you*

All three are excellent. Next.js wins here because: (a) you'll hire/collaborate with people who know React; (b) the R3F 3D ecosystem is React-native; (c) it scales from a static site today to an app (blog, CMS, dashboard) tomorrow without a migration. Astro is lighter but you'd fight it the day you want rich app-like interactivity. **Decision: Next.js.**

### Rendering strategy

- **Static-first (SSG/ISR).** The portfolio is mostly content → pre-render everything possible. Fast, cheap, secure (tiny attack surface).
- Use **Server Components** for content, **Client Components** only for interactive/3D bits.
- The only server-side code is the contact endpoint — keep it minimal and hardened.

### Pinned tooling

- **Package manager:** `pnpm` (fast, strict, great for a long-lived repo).
- **Node:** current LTS, pinned via `.nvmrc` and in the Docker image.
- **Lint/format:** ESLint (with `@typescript-eslint`, `eslint-plugin-security`) + Prettier.
- **Git hooks:** Husky + lint-staged (block commits that fail lint/type/format).
- **Testing:** Vitest + React Testing Library (unit), Playwright (e2e/visual). Keep it light but real.

---

## 4. Repository Architecture

**Everything in one repo** (`chri-portfolio`), as you want. Layout:

```
chri-portfolio/
├─ README.md                     # Public-facing: what this is, how to run, links
├─ BUILD_GUIDE.md                # THIS FILE — the master playbook
├─ LICENSE
├─ .nvmrc                        # Node version pin
├─ .editorconfig
├─ .gitignore
├─ .dockerignore
├─ package.json / pnpm-lock.yaml
├─ next.config.mjs               # incl. security headers
├─ tailwind.config.ts
├─ tsconfig.json
├─ .eslintrc.cjs / .prettierrc
├─ .env.example                  # documented env vars, NEVER real secrets
│
├─ src/
│  ├─ app/                       # Next.js App Router
│  │  ├─ layout.tsx              # root layout, metadata, theme provider
│  │  ├─ page.tsx                # landing / hero
│  │  ├─ work/                   # projects index + [slug] case studies
│  │  ├─ about/
│  │  ├─ vision/                 # the founder narrative
│  │  ├─ contact/
│  │  ├─ colophon/               # "how this site is built" (credibility flex)
│  │  ├─ robots.ts / sitemap.ts  # generated
│  │  └─ api/contact/route.ts    # hardened serverless endpoint
│  ├─ components/                # design system + sections
│  │  ├─ ui/                     # shadcn components (owned)
│  │  ├─ three/                  # R3F scenes (lazy-loaded)
│  │  └─ sections/
│  ├─ content/                   # MDX case studies, typed
│  ├─ lib/                       # utils, validation (zod), metadata helpers
│  ├─ styles/                    # globals.css, tokens
│  └─ types/
│
├─ public/                       # static assets, optimized images, favicons, og
│
├─ deploy/                       # ← self-contained deployment (NOT foxhound)
│  ├─ Dockerfile
│  ├─ k8s/
│  │  ├─ namespace.yaml          # (optional; you already have `apps`)
│  │  ├─ deployment.yaml
│  │  ├─ service.yaml
│  │  ├─ ingress.yaml
│  │  ├─ certificate.yaml        # optional end-to-end TLS via cert-manager
│  │  └─ kustomization.yaml      # image tag substitution target
│  └─ README.md                  # deploy runbook
│
├─ tests/                        # playwright e2e, vitest
│
└─ .github/
   └─ workflows/
      ├─ ci.yml                  # lint + type + test + build + security scan (on PR/push)
      └─ release.yml             # build image + push + deploy (on tag v*)
```

**Branching model:** `main` is always deployable. Feature branches → PR → CI must pass → merge. **Releases happen by tagging** `main` (or a commit) with `vX.Y.Z`. That tag is the only thing that ships to production.

---

## 5. Content Architecture — the sections that sell you

Order matters; this is a narrative, not a menu.

1. **Hero.** Name, one-line positioning, the single "wow" interaction, and one primary CTA ("See my work" / "Get in touch"). Above the fold, loads instantly, effect enhances after.
2. **Selected Work (3–6 projects).** Each card → a full **case study**: problem, your role, stack, decisions, outcome, links (live + repo). This is where engineers *and* investors judge you. Show impact and thinking, not just screenshots.
3. **About.** Human, sharp, honest. The "developer now → engineer in 3 years → founder" arc, told with confidence, not as a disclaimer.
4. **Vision.** The investor magnet. What you believe about software/your field, the kind of company you want to build, why now, why you. Keep it real and specific — vague ambition reads as noise; a concrete thesis reads as a founder.
5. **Skills / Toolbox.** Grouped, honest proficiency. Avoid the cliché "99% CSS" bars — use tags grouped by domain (Languages, Frontend, Backend, Infra/DevOps, Learning).
6. **Timeline / "Momentum."** Shipped things over time — proof of consistent execution. Investors bet on trajectory.
7. **Colophon / "How this site is built."** Quietly devastating credibility: self-hosted k3s, GitOps-grade CI/CD, security-hardened, Cloudflare. Links to this repo.
8. **Contact.** Low-friction: a short form + direct email + LinkedIn/GitHub. Make it trivial for an investor to reach you.

**Copywriting principles:** short sentences, active voice, specifics over adjectives, numbers where you have them. Get one strong professional headshot and a consistent set of project visuals. Proofread ruthlessly — a single typo undercuts "enterprise standards."

---

## 6. Local Development Setup

```bash
# prerequisites: Node LTS (via nvm), pnpm, git, docker (for image builds)
git clone https://github.com/D4rknezSl1me/chri-portfolio.git
cd chri-portfolio
nvm use                       # respects .nvmrc
corepack enable && corepack prepare pnpm@latest --activate
pnpm install
cp .env.example .env.local    # fill in local values (never commit)
pnpm dev                      # http://localhost:3000
```

Scaffolding the app the first time:

```bash
pnpm create next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*"
# then add:
pnpm add framer-motion three @react-three/fiber @react-three/drei zod
pnpm add -D vitest @testing-library/react @playwright/test husky lint-staged prettier \
           eslint-plugin-security @next/eslint-plugin-next
npx shadcn@latest init
```

**Common scripts (`package.json`):**

```jsonc
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit",
    "test": "vitest run",
    "test:e2e": "playwright test",
    "format": "prettier --write .",
    "prepare": "husky"
  }
}
```

---

## 7. Security — Enterprise Hardening

Your requirement: **free of security issues, enterprise standards.** A portfolio is low-risk, but treating it as production is exactly the signal investors/engineers respect. Layered defense:

### 7.1 Application layer

- **Security headers** (set in `next.config.mjs` and enforced again at the ingress). Minimum set:
  - `Content-Security-Policy` — strict, nonce-based; only allow what you use (self, your analytics, Cloudflare). No `unsafe-inline` for scripts.
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY` (and `frame-ancestors 'none'` in CSP)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy` — disable camera, mic, geolocation, etc.
  - `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Resource-Policy: same-origin`
- **Target A+ on** [securityheaders.com](https://securityheaders.com) and [Mozilla Observatory](https://observatory.mozilla.org). This is a concrete, screenshot-able flex.

```js
// next.config.mjs (sketch — tighten CSP to your actual asset sources)
const securityHeaders = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
];

export default {
  reactStrictMode: true,
  poweredByHeader: false, // don't advertise Next.js version
  output: 'standalone',   // for the Docker image
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};
```

### 7.2 Contact endpoint (the only real attack surface)

- **Validate every input with Zod**; reject oversized bodies.
- **Rate-limit** (per-IP; e.g. Upstash Redis or an in-memory limiter behind the tunnel) to stop abuse.
- **Spam protection:** Cloudflare Turnstile (privacy-friendly CAPTCHA) + honeypot field.
- **Never** reflect user input into HTML. Send mail via a provider (Resend) using a server-side API key stored as a Kubernetes Secret — never in the repo or client bundle.
- **No secrets in `NEXT_PUBLIC_*`.** Anything with that prefix ships to the browser.

### 7.3 Dependency & supply-chain security

- **Lockfile committed**, installs use `--frozen-lockfile`.
- **Dependabot** (or Renovate) enabled for automated dependency PRs.
- **`pnpm audit`** in CI; fail on high/critical.
- **CodeQL** GitHub Actions scan on push/PR.
- **Trivy** scans the built container image for OS/library CVEs (fail on HIGH/CRITICAL).
- **Gitleaks** in CI to catch committed secrets.
- Pin base images by digest; rebuild regularly for patches.

### 7.4 Container & cluster security

- **Distroless / minimal, non-root** runtime image (see §9).
- **Read-only root filesystem**, drop all capabilities, `runAsNonRoot`, `seccompProfile: RuntimeDefault` in the Deployment `securityContext`.
- **Resource limits** set (prevents a runaway pod from starving the node).
- **No cluster-admin in CI.** The deploy identity gets a narrowly-scoped ServiceAccount/RBAC limited to the `apps` namespace and only the resources it manages.
- **Secrets** live in the cluster (or SOPS-encrypted), never in Git.

### 7.5 Edge

- **Cloudflare** in front of everything (you already tunnel through it): WAF managed rules, bot fight mode, TLS 1.2+ only, always-use-HTTPS, HSTS.
- The origin is **never publicly exposed** — traffic reaches your cluster only through the `cloudflared` tunnel. Your home IP stays private. This is already how your other apps work.

---

## 8. Performance, SEO & Accessibility

Speed and polish *are* professionalism. Targets:

- **Lighthouse 95+** on Performance, Accessibility, Best Practices, SEO (mobile *and* desktop).
- **Core Web Vitals green:** LCP < 2.5s, INP < 200ms, CLS < 0.1.

How:

- Static/ISR rendering; ship minimal JS. **Lazy-load the 3D scene** (`next/dynamic`, `ssr:false`) and gate it behind viewport + `prefers-reduced-motion`.
- `next/image` for every image; serve AVIF/WebP; explicit dimensions (no layout shift).
- `next/font` self-hosted fonts (no external font CDN = better privacy + speed + CSP).
- Preload the hero, defer the rest. Budget: keep initial JS lean; the 3D bundle loads only when needed.
- **SEO:** per-page `metadata`, Open Graph + Twitter cards, a generated **OG image**, `sitemap.ts`, `robots.ts`, JSON-LD `Person` schema (helps you show up as a knowledge entity).
- **Accessibility:** semantic HTML, keyboard nav, focus states, alt text, WCAG AA contrast, reduced-motion paths. Test with axe + Playwright.
- **Privacy-friendly analytics:** Cloudflare Web Analytics or Plausible — no cookie banner needed, cleaner CSP, respects visitors. Reads as classy to a privacy-aware investor.

---

## 9. Containerization

Multi-stage, non-root, minimal. Uses Next.js `output: 'standalone'`.

```dockerfile
# deploy/Dockerfile
# ---- deps ----
FROM node:22-bookworm-slim AS deps
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- build ----
FROM node:22-bookworm-slim AS build
WORKDIR /app
RUN corepack enable
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build            # produces .next/standalone

# ---- runtime (minimal, non-root) ----
FROM gcr.io/distroless/nodejs22-debian12 AS runner
WORKDIR /app
ENV NODE_ENV=production PORT=3000
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public
USER nonroot
EXPOSE 3000
CMD ["server.js"]
```

`.dockerignore` must exclude `.git`, `node_modules`, `.env*`, `tests`, `*.md` (except what you need), `.next/cache`, etc.

Image name follows your existing convention: **`d4knezsl1me/chri-portfolio:<tag>`** on Docker Hub (same namespace as `cs-frontend`, `nas-frontend`). The `registry-secret` for pulls already exists in the `apps` namespace.

---

## 10. Kubernetes Manifests (in-repo)

These live in `deploy/k8s/` **inside this repo** — the deployment is self-contained and **not** managed by the `foxhound` Flux repo. Your cluster facts (verified): namespace `apps`, ingressClass `traefik`, ClusterIssuer `letsencrypt-prod`, Docker Hub pull secret `registry-secret`, tunnel `glados-server` → `traefik.kube-system` with a catch-all route.

**deployment.yaml**

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: chri-portfolio
  namespace: apps
spec:
  replicas: 2                       # HA across restarts; small footprint
  selector:
    matchLabels: { app: chri-portfolio }
  template:
    metadata:
      labels: { app: chri-portfolio }
    spec:
      imagePullSecrets:
        - name: registry-secret
      securityContext:
        runAsNonRoot: true
        seccompProfile: { type: RuntimeDefault }
      containers:
        - name: web
          image: d4knezsl1me/chri-portfolio:latest   # overwritten by CI (kustomize)
          ports: [{ containerPort: 3000 }]
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            capabilities: { drop: ["ALL"] }
          resources:
            requests: { cpu: "50m", memory: "128Mi" }
            limits:   { cpu: "500m", memory: "256Mi" }
          readinessProbe:
            httpGet: { path: /, port: 3000 }
            initialDelaySeconds: 5
          livenessProbe:
            httpGet: { path: /, port: 3000 }
            initialDelaySeconds: 10
          # If the contact endpoint needs secrets:
          # envFrom: [{ secretRef: { name: chri-portfolio-secrets } }]
```

**service.yaml**

```yaml
apiVersion: v1
kind: Service
metadata:
  name: chri-portfolio
  namespace: apps
spec:
  selector: { app: chri-portfolio }
  ports:
    - port: 80
      targetPort: 3000
```

**ingress.yaml** — matches how `nas-ingress` is configured (Traefik). Because the Cloudflare tunnel has a **catch-all** route to Traefik, adding this host is enough on the cluster side.

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: chri-portfolio
  namespace: apps
  # annotations:
  #   traefik.ingress.kubernetes.io/router.entrypoints: web
spec:
  ingressClassName: traefik
  rules:
    - host: christiancangelli.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: chri-portfolio
                port: { number: 80 }
    - host: www.christiancangelli.com
      http:
        paths:
          - path: /
            pathType: Prefix
            backend:
              service:
                name: chri-portfolio
                port: { number: 80 }
```

**kustomization.yaml** — the CI target for pinning the image tag.

```yaml
apiVersion: kustomize.config.k8s.io/v1beta1
kind: Kustomization
namespace: apps
resources:
  - deployment.yaml
  - service.yaml
  - ingress.yaml
images:
  - name: d4knezsl1me/chri-portfolio
    newTag: latest        # CI runs `kustomize edit set image ...=:vX.Y.Z`
```

**TLS note:** since `cloudflared` terminates TLS at Cloudflare's edge and tunnels to Traefik over the internal cluster network, you don't strictly need a cert on the ingress. For **end-to-end encryption** (Cloudflare "Full (strict)"), add a `certificate.yaml` using ClusterIssuer `letsencrypt-prod` with a **DNS-01** solver (HTTP-01 won't work behind the tunnel) and reference the secret in the ingress `tls:` block. Start with edge TLS; upgrade to end-to-end when you want the extra flex.

---

## 11. CI/CD — Release on `v*` tag

Two workflows. **CI** runs on every PR/push and must be green to merge. **Release** runs only when you push a tag matching `v*` and is the *only* path to production.

### 11.1 `.github/workflows/ci.yml`

```yaml
name: CI
on:
  pull_request:
  push: { branches: [main] }
permissions: { contents: read }
jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - uses: actions/setup-node@v4
        with: { node-version-file: .nvmrc, cache: pnpm }
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm typecheck
      - run: pnpm test
      - run: pnpm build
      - name: Gitleaks (secret scan)
        uses: gitleaks/gitleaks-action@v2
  codeql:
    runs-on: ubuntu-latest
    permissions: { security-events: write, contents: read }
    steps:
      - uses: actions/checkout@v4
      - uses: github/codeql-action/init@v3
        with: { languages: javascript-typescript }
      - uses: github/codeql-action/analyze@v3
```

### 11.2 `.github/workflows/release.yml` — triggered by `v*`

**Deployment challenge:** your Kubernetes API is *not* publicly exposed (traffic only enters via the Cloudflare tunnel). So a cloud GitHub runner can't reach `kubectl` directly. Two clean options — pick one:

- **Option A (recommended): self-hosted runner on `naked-glados`.** A GitHub Actions runner registered to this repo, running on the server (ideally as a low-privilege systemd service or a pod with a scoped ServiceAccount). It has local cluster access, so `kubectl apply` just works. No inbound ports, no kubeconfig leaving the box. Most secure and simplest.
- **Option B: cloud runner + SSH deploy.** The cloud runner builds/pushes the image, then SSHes to the server (SSH exposed via a locked-down Cloudflare Tunnel + Access policy, or Tailscale) and runs the apply script. More moving parts.

Below is **Option A**.

```yaml
name: Release
on:
  push:
    tags: ["v*"]
permissions: { contents: read }

jobs:
  # 1) Build, scan, and push the image (cloud runner — has internet)
  image:
    runs-on: ubuntu-latest
    outputs: { tag: ${{ steps.meta.outputs.tag }} }
    steps:
      - uses: actions/checkout@v4
      - id: meta
        run: echo "tag=${GITHUB_REF_NAME}" >> "$GITHUB_OUTPUT"   # e.g. v1.2.3
      - uses: docker/setup-buildx-action@v3
      - uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      - uses: docker/build-push-action@v6
        with:
          context: .
          file: deploy/Dockerfile
          push: true
          tags: |
            d4knezsl1me/chri-portfolio:${{ steps.meta.outputs.tag }}
            d4knezsl1me/chri-portfolio:latest
          cache-from: type=gha
          cache-to: type=gha,mode=max
      - name: Trivy image scan (fail on HIGH/CRITICAL)
        uses: aquasecurity/trivy-action@0.24.0
        with:
          image-ref: d4knezsl1me/chri-portfolio:${{ steps.meta.outputs.tag }}
          severity: HIGH,CRITICAL
          exit-code: "1"

  # 2) Deploy to the cluster (self-hosted runner on naked-glados)
  deploy:
    needs: image
    runs-on: [self-hosted, naked-glados]
    steps:
      - uses: actions/checkout@v4
      - name: Pin image tag & apply
        run: |
          cd deploy/k8s
          kustomize edit set image d4knezsl1me/chri-portfolio=d4knezsl1me/chri-portfolio:${{ needs.image.outputs.tag }}
          kubectl apply -k .
          kubectl -n apps rollout status deploy/chri-portfolio --timeout=120s
```

**Required GitHub secrets:** `DOCKERHUB_USERNAME`, `DOCKERHUB_TOKEN` (scoped access token, not your password). The self-hosted runner needs **no** secrets in GitHub — it uses the server's local kubeconfig/ServiceAccount.

**Release flow you'll actually use:**

```bash
git switch main && git pull
# ... merge your changes ...
git tag v1.0.0 -m "Launch"
git push origin v1.0.0        # ← this is the deploy button
```

Rollback is just re-tagging/redeploying a previous version, or `kubectl -n apps rollout undo deploy/chri-portfolio`.

### 11.3 Self-hosted runner setup (one-time, on the server)

```bash
# on naked-glados, as a dedicated non-root user with kubectl access
mkdir -p ~/actions-runner && cd ~/actions-runner
# download the runner from: repo → Settings → Actions → Runners → New self-hosted runner
./config.sh --url https://github.com/D4rknezSl1me/chri-portfolio \
            --token <REG_TOKEN> --labels naked-glados --unattended
sudo ./svc.sh install && sudo ./svc.sh start   # runs as a service
# ensure `kubectl` and `kustomize` are on PATH for the runner user,
# and its kubeconfig is scoped to the `apps` namespace only (least privilege)
```

Harden it: dedicated user, no sudo, RBAC limited to `apps` namespace, auto-update enabled. Treat the runner as production infra.

---

## 12. Domain & Cloudflare Wiring

You own **christiancangelli.com** on Cloudflare. Your cluster is already reachable through the `glados-server` tunnel, whose config ends in a **catch-all** route to Traefik — meaning any hostname Cloudflare sends into the tunnel will reach your ingress. So wiring the new domain is mostly DNS.

**Steps:**

1. **Add christiancangelli.com as a zone** in the same Cloudflare account that owns the tunnel (if it isn't already). Set your registrar nameservers to Cloudflare's (already done if bought via Cloudflare Registrar).
2. **Point DNS at the tunnel.** In the christiancangelli.com zone, create a **proxied (orange-cloud) CNAME**:
   - `christiancangelli.com` → `<TUNNEL-UUID>.cfargotunnel.com`
   - `www` → `<TUNNEL-UUID>.cfargotunnel.com`

   The tunnel UUID is on the server:
   ```bash
   ssh chri@naked-glados 'ls /etc/cloudflared 2>/dev/null; kubectl -n infrastructure get cm cloudflared-config -o jsonpath="{.data.config\.yaml}"'
   ```
   (Or, cleaner: use the Cloudflare dashboard → Zero Trust → Networks → Tunnels → `glados-server` → **Public Hostnames** → add `christiancangelli.com` → service `http://traefik.kube-system.svc.cluster.local:80`. This auto-creates the DNS record. Do the same for `www`.)
3. **Apply the Ingress** (§10) with host `christiancangelli.com` — the release pipeline does this. Traefik now routes the host to your Service.
4. **TLS/SSL settings** in Cloudflare for the zone:
   - SSL/TLS mode: **Full (strict)** if you add cert-manager end-to-end TLS; **Full** if relying on edge-only for now.
   - **Always Use HTTPS: On**, **HSTS: On** (with preload once you're confident), **Minimum TLS 1.2**.
   - Enable **Web Analytics**, **Bot Fight Mode**, and the managed **WAF** rules.
5. **Redirect `www` → apex** (or vice-versa) with a Cloudflare Redirect Rule, so you have one canonical URL (matters for SEO).

> Note: the tunnel config currently lists explicit hostnames plus a catch-all. If you prefer explicitness (recommended for clarity), add a `christiancangelli.com` entry to the cloudflared config. **That config lives in the `foxhound` infrastructure repo / a ConfigMap** — editing it is an *infra* change, separate from this app's deploy. The catch-all means you can launch without touching it, then tidy up later.

---

## 13. Observability, Backups & Maintenance

- **Uptime:** external monitor (UptimeRobot / Cloudflare Health Checks / Better Stack) hitting `https://christiancangelli.com` → alert to email/Telegram.
- **Logs:** `kubectl logs -n apps deploy/chri-portfolio`; if you run Loki/Grafana on the cluster, ship there.
- **Metrics:** the Deployment exposes standard signals; add a `/api/health` route if you want a dedicated readiness/liveness target with a stable, cheap response.
- **Backups:** the app is stateless (content is in Git) — **the repo IS the backup**. Only stateful piece would be a contact-message store; prefer emailing messages out so there's nothing to back up.
- **Maintenance cadence:** merge Dependabot PRs weekly, rebuild the image monthly for base-image patches (a scheduled workflow can rebuild `latest`), re-run Lighthouse + securityheaders before each notable release.
- **Cost:** essentially zero beyond the domain and your existing server/electricity — a strong "I own my stack" story.

---

## 14. Roadmap — 3D & Future Enhancements

The stack is chosen so you can add these *incrementally*, one component at a time, without rewrites:

- **Signature 3D hero** — R3F scene: instanced particles, a GLSL shader gradient, or an interactive object reacting to cursor/scroll. Lazy-loaded, reduced-motion fallback to a static render.
- **Scroll-driven storytelling** — GSAP ScrollTrigger or Framer Motion scroll hooks for the case studies.
- **Interactive "how this site is built" page** — a live diagram of the k3s → Traefik → tunnel → Cloudflare path. Uniquely you; deeply impressive to technical investors.
- **Blog / "Notes"** — MDX-powered; demonstrates thinking and consistency (great for the founder narrative). Adds SEO surface area.
- **CMS (later)** — if editing MDX gets tiring, add a headless CMS (Sanity/Payload) behind the same app. The Next.js choice makes this painless.
- **i18n** — if you target international investors, Next.js i18n routing is built-in.
- **Guestbook / testimonials** — social proof from people you've worked with.

Golden rule as it grows: **every new effect must keep Lighthouse ≥ 95 and 60fps, or it doesn't ship.**

---

## 15. Launch Checklist

**Content & design**
- [ ] Hero with one polished "wow" interaction + clear CTA
- [ ] 3–6 real case studies with problem/role/stack/outcome/links
- [ ] About + Vision written, proofread, in your voice
- [ ] Professional headshot + consistent project visuals
- [ ] Contact form works end-to-end; email arrives

**Engineering**
- [ ] TypeScript strict, ESLint + Prettier + Husky green
- [ ] Unit + e2e tests passing in CI
- [ ] `output: standalone`, multi-stage non-root Dockerfile builds
- [ ] K8s manifests apply cleanly to `apps` namespace

**Security**
- [ ] A+ on securityheaders.com and Mozilla Observatory
- [ ] Strict CSP, HSTS, all headers set at app *and* edge
- [ ] Contact endpoint: Zod validation + Turnstile + rate limit
- [ ] Dependabot/Renovate + CodeQL + Trivy + Gitleaks all wired
- [ ] No secrets in repo or client bundle; K8s Secrets used
- [ ] Pod runs non-root, read-only FS, dropped caps, resource limits
- [ ] Cloudflare: Full (strict) or Full, HTTPS-only, WAF, Bot Fight

**Performance & SEO**
- [ ] Lighthouse ≥ 95 across the board (mobile + desktop)
- [ ] Core Web Vitals green
- [ ] `sitemap.ts`, `robots.ts`, per-page metadata, OG image, JSON-LD Person
- [ ] Privacy-friendly analytics live

**Release & domain**
- [ ] Self-hosted runner registered & healthy on naked-glados
- [ ] `DOCKERHUB_USERNAME` / `DOCKERHUB_TOKEN` secrets set
- [ ] Cloudflare DNS/tunnel routes christiancangelli.com → Traefik
- [ ] `www` → apex canonical redirect
- [ ] Tag `v1.0.0` pushed → pipeline green → site live over HTTPS
- [ ] Uptime monitor + alerting configured

---

## 16. Appendix — Your Infrastructure Snapshot

Captured from `naked-glados` while writing this guide, so the manifests above match reality:

| Component | Value |
|---|---|
| OS | Ubuntu 26.04 LTS |
| Cluster | **k3s** `v1.35.4+k3s1`, single control-plane node `naked-glados` |
| GitOps | **Flux** from `github.com/Naked-GLaDOS/foxhound` (kustomizations: `apps`, `infrastructure`) — **this portfolio does NOT use it** |
| Ingress | **Traefik** (ingressClass `traefik`), built into k3s |
| TLS | **cert-manager** with ClusterIssuer `letsencrypt-prod`; existing `naked-glados-tls` cert |
| Edge | **cloudflared** tunnel `glados-server` → `http://traefik.kube-system.svc.cluster.local:80`, with a **catch-all** route |
| App namespace | `apps` (existing apps: aperture-dashboard, cs-frontend/backend, nas-frontend, minecraft, football-manager, …) |
| Registry | **Docker Hub**, namespace `d4knezsl1me/*`; pull secret `registry-secret` in `apps` |
| Image convention | `d4knezsl1me/<app>:vX.Y.Z` (e.g. `d4knezsl1me/nas-frontend:v1.7.5`) |

**Deployment model for THIS repo (by design):** self-contained. Source, Dockerfile, K8s manifests, and CI/CD all live in `chri-portfolio`. Pushing a `v*` tag builds + scans + pushes the image and applies the manifests to the `apps` namespace via a self-hosted runner. No coupling to `foxhound`.

---

*Written as the master playbook for christiancangelli.com. Keep this file updated as the source of truth as the site evolves.*
