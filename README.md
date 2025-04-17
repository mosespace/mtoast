# Run only the NextJS app

npm run dev --workspace=apps/web

# Or run everything in dev mode through Turborepo

npm run dev

# Run with filtered workspaces

If you only want to run the NextJS app through Turborepo:
npx turbo run dev --filter=web
