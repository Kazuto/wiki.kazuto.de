---
title: 'FileBot'
description: 'FileBot is a free, open-source, cross-platform, cross-device, and cross-platform, file management utility.'
icon: 'tabler:file-neutral'
---

## My presets
I use the following presets to organize my files and establish compatibility with other programs such as:
- [Emby](https://emby.media/)
- [Radarr](https://radarr.video/)
- [Sonarr](https://sonarr.tv/)

*All presets move files to their appropriate folders.*

### Movies
```
{localize.de.ny}\{localize.de.ny} [{"$vs-"}{vf}, {vc}, {ac}, {channels}] {audioLanguages.ISO2*.upper().sort()}

```
**Result:** *Akira (1988)\Akira (1988) \[BluRay-2160p, x265, DTS, 5.1\] \[DE, EN, JA\]*

### TV Shows & Anime
```
{n}/{'Staffel '+ s.pad(2)}/{sxe} - {t} [{"$vs-"}{vf}, {vc}, {ac}, {channels}] {audioLanguages.ISO2*.upper().sort()}
```
**Result:** *Bleach/Staffel 01/ 1x01 - Der Tag, an dem ich ein Shinigami wurde \[BluRay-720p, x264, AC3, 2.0\] \[DE, JA\]*

#### Expressions
| Expression                              | Description                                                      |
|-----------------------------------------|------------------------------------------------------------------|
| `{n}`                                   | Name                                                             |
| `{s}`                                   | Season                                                           |
| `{sxe}`                                 | Season and episode                                               |
| `{t}`                                   | Episode Title                                                    |
| `{vf}`                                  | Video format                                                     |
| `{vc}`                                  | Video codec                                                      |
| `{ac}`                                  | Audio codec                                                      |
| `{channels}`                            | Audio channels                                                   |
| `{localize.de.ny}`                      | Localized name with year                                         |
| `{"vs-"}`                               | Video source with separator                                      |
| `{audioLanguages.ISO2*.upper().sort()}` | Audio languages in ISO 639-2 (DE, EN, etc) sorted alphabetically |

