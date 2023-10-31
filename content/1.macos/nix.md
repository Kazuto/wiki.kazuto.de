---
title: 'Using Nix'
description: 'Tips and tricks related to running Nix on MacOS'
---

## Hide "Other" users from login screen

```bash
sudo defaults write /Library/Preferences/com.apple.loginwindow SHOWOTHERUSERS_MANAGED -bool FALSE
```
