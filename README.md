# Fortune Cookie Wisdom for Developers

[![make.fun](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/c/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Erwinsays12/makefun-fortune-cookie/rank.svg)](https://make.fun/c/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/Erwinsays12/makefun-fortune-cookie/reward.svg)](https://make.fun/c/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

Entry for the [Fortune Cookie Wisdom for Developers](https://make.fun/c/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44) competition on [make.fun](https://make.fun).

## What it does

`main.ts` writes one original fortune-cookie line for a software developer to `/output/entry.txt`:

> The bug hides where you are most certain it cannot be; certainty is its favorite camouflage.

The program is fully deterministic — no clock, no network, no environment input — and self-checks the gate contract (1–120 characters, a single non-blank line) before writing.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later.
