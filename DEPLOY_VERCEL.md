# Deploy `examples/nhaxe` to Vercel

## Tiếng Việt — GitHub và CI/CD

- **GitHub:** Thường đẩy repo OpenCalf lên GitHub, rồi trên Vercel chọn **Import** và trỏ **Root Directory** vào `examples/nhaxe`. Có thể dùng GitLab/Bitbucket tương tự.
- **CI/CD:** Vercel tự build mỗi khi có push (Preview cho nhánh/PR, Production cho nhánh production). Đó là pipeline do Vercel cung cấp; **không bắt buộc** có file `.github/workflows` trong repo trừ khi bạn muốn thêm bước lint/test riêng.
- **Biến môi trường:** Trên máy chủ build Vercel, `VERCEL` được set — `vite.config.ts` dùng Nitro và ghi ra `.vercel/output` (để trống ô Output Directory trong dashboard).

---

This app is **TanStack Start** with two build targets:

| Environment | Build | Output |
|-------------|--------|--------|
| **Vercel** (`VERCEL` is set) | Nitro preset `vercel` | `.vercel/output` |
| **Cloudflare / local** (no `VERCEL`) | `@cloudflare/vite-plugin` | `dist/client`, `dist/server` |

`vite.config.ts` turns off the Cloudflare plugin and enables **Nitro** when Vercel runs the build (Vercel always sets `VERCEL=1`).

## Option A — Vercel Dashboard (recommended)

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. **Root Directory:** `examples/nhaxe`  
   (If the repo root is OpenCalf, you must set this; otherwise the build will not find `package.json`.)
4. **Framework Preset:** Vercel may detect **TanStack Start** or **Other** — both work if the build command below runs Nitro.
5. **Build Command:** `npm run build` (default)  
6. **Install Command:** `npm install` (default)  
7. **Output Directory:** leave **empty** — Nitro writes `.vercel/output`, which Vercel’s builder consumes automatically (do not set this to `dist` for Vercel builds).
8. Deploy. Preview URLs are created for every branch/PR.

### Environment variables

This demo has no required secrets. Add any `VITE_*` keys in **Project → Settings → Environment Variables** if you add client-side config later.

## Option B — Vercel CLI

From the monorepo root (or any directory):

```bash
cd examples/nhaxe
npm install
npx vercel
```

Link the project when prompted. For production:

```bash
npx vercel --prod
```

The CLI uses the same `package.json` `build` script; `VERCEL=1` is set on Vercel’s servers automatically.

## Local Vercel-shaped build

```bash
cd examples/nhaxe
VERCEL=1 npm run build
```

Preview (if supported by your Nitro/Vite version):

```bash
npx vite preview
```

## Cloudflare (unchanged)

To keep deploying to **Cloudflare Workers** with Wrangler, build **without** `VERCEL`:

```bash
npm run build
npx wrangler deploy
```

## References

- [TanStack Start on Vercel](https://vercel.com/docs/frameworks/full-stack/tanstack-start)
- [Nitro Vercel provider](https://v3.nitro.build/deploy/providers/vercel)
