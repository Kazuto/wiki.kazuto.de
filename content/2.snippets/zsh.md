---
title: 'ZSH'
description: 'Useful aliases and hooks for ZSH'
---

## Run `nvm` before executing `npm` commands

```bash
preexec() {
  local nvmrc_path
  nvmrc_path="$(nvm_find_nvmrc)"

  if [[ "$1" == npm\ * && -n "$nvmrc_path" ]]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  fi
}
```
