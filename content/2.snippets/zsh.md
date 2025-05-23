---
title: 'ZSH'
description: 'Useful aliases and hooks for ZSH'
---

## Run `nvm` before executing `npm`, `yarn` or `bun` commands

```bash
preexec() {
  if [[ "$1" == @(npm|yarn|bun) ]] && [ -f .nvmrc ]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat .nvmrc)")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  fi
}
```
