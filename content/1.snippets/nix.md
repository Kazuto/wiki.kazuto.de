---
title: 'Nix'
description: 'Tips and tricks related to Nix'
---

## Get SHA of URL

```bash
nix shell nixpkgs#nix-prefetch

nix-prefetch-url URL
```

## Find name of theme, cursor or icons

```bash
cd $(nix build nixpkgs#PACKAGE --print-out-paths --no-link)

nix run nixpkgs#exa -- --tree --level 4
```
