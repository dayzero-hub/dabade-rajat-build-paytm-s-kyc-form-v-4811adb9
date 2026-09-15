// Ola fare card — the example inputs your brief names, and the rates they are computed against.
//
// These are the business inputs, not the calculation: turning them into a fare, clamping the
// multiplier and formatting the rupee total are the work. `rawMultiplier` is what the demand
// engine returned — deliberately, some of these are above the cap.

export interface FareInput {
  label: string
  /** Whole rupees before distance and time. */
  baseFareInr: number
  distanceKm: number
  durationMin: number
  /** What the demand engine returned. NOT what may be charged — see SURGE_CAP. */
  rawMultiplier: number
}

/** Ola's published rates for this city, in rupees. */
export const RATE_PER_KM_INR = 12
export const RATE_PER_MIN_INR = 1.5

/**
 * The most a demand multiplier may ever be applied at, however high the raw value is. Your brief
 * is explicit that 2.6 must be charged as 2.0 and the card must say a cap applied — clamping it
 * once, at the source, is the work this constant exists for.
 */
export const SURGE_CAP = 2.0

export const fareInputs: FareInput[] = [
  { label: 'Koramangala → Indiranagar, midday',   baseFareInr: 50, distanceKm: 5.4,  durationMin: 18, rawMultiplier: 1.0 },
  { label: 'Andheri → BKC, evening peak',         baseFareInr: 60, distanceKm: 9.1,  durationMin: 42, rawMultiplier: 1.4 },
  { label: 'Gurugram → IGI Terminal 3, 6am',      baseFareInr: 80, distanceKm: 22.6, durationMin: 38, rawMultiplier: 1.8 },
  { label: 'Bandra → Powai, heavy rain',          baseFareInr: 60, distanceKm: 14.2, durationMin: 65, rawMultiplier: 2.6 },
  { label: 'Hitech City → Gachibowli, New Year',  baseFareInr: 50, distanceKm: 6.8,  durationMin: 25, rawMultiplier: 3.2 },
]
