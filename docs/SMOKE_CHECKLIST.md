# Relay Landing Smoke Checklist

Run this checklist before publishing website changes.

## Rendering and Navigation

- [ ] Homepage loads without console errors.
- [ ] Main sections (`Features`, `Catalog`, `How it Works`, `FAQ`) render and anchor links jump correctly.
- [ ] Docs index and docs routes render: `installation`, `quick-start`, `custom-servers`, `security`, `transports`, `debugging`.
- [ ] Mobile navigation opens/closes and links navigate correctly.

## Links and Assets

- [ ] External links (GitHub, Discord, X, docs references) open valid targets.
- [ ] Client/server logo assets load correctly.
- [ ] YouTube thumbnails in MCP section render in both desktop and mobile.

## Quality Gates

- [ ] `npm run build` passes.
- [ ] `npm run lint` passes.
