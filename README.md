# fe-v2-react-ts-starter

A React + TypeScript starter that runs on clone, a token file for colours and spacing, and your
project's data as a typed fixture. **There is no backend** — the fixture is the source of truth.

## Run it

```bash
npm install
npm run dev
```

The dev server prints **http://localhost:5173**. Do this before you change anything: if it starts,
then anything that breaks later is your code rather than your setup, and knowing which is which
saves an afternoon.

Node **18+** and npm **9+**. `node --version` and `npm --version` tell you what you have; install
the LTS build from https://nodejs.org if either is missing, and open a new terminal afterwards.

Other commands:

```bash
npm run build     # type-check the whole project and build for production
npm run preview   # serve that build locally
```

## What is in here

| Path | What it is |
|---|---|
| `src/main.tsx` | Mounts the app. You will rarely touch it. |
| `src/App.tsx` | **A placeholder. Replace it.** It renders so the first run shows something real. |
| `src/styles/tokens.css` | The token file: colours, spacing, radius, type scale. Use `var(--…)`, not literals. |
| `src/data/` | The fixture for your project — see the table below. |
| `tsconfig.app.json` | TypeScript in **strict** mode. Your brief says no `any`; this is what enforces it. |

## Find your fixture

This template is shared by several projects. Open the file named for yours, and **read its types
before you render anything** — the shape is part of the brief.

| Project | File |
|---|---|
| Practo — appointment slot picker | `src/data/practo.ts` |
| DigiLocker — document cards | `src/data/digilocker.ts` |
| Paytm — KYC form | `src/data/paytm.ts` (no fixture: a simulated verification call, as your brief says) |
| Nykaa — coupon field | `src/data/nykaa.ts` |
| Ola — fare card | `src/data/ola.ts` |
| Myntra — variant picker | `src/data/myntra.ts` |
| Dream11 — team builder | `src/data/dream11.ts` |

The files for other projects do no harm — delete the ones you are not using if you would rather
have a clean tree.

## What is deliberately NOT in here

The screen you were asked to build. The components, the state, the validation and the rules your
tickets describe are the project — this repository is the starting point, not a worked example.
Everything you need to begin is above; everything you have to build is on your tickets.
