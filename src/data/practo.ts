// Practo appointment slot picker — the fixture your brief names.
//
// This is the source of truth for what is booked. Derive every button's appearance from it plus
// your own selection state; never read the selection back out of the DOM.
export interface Slot {
  /** 24-hour "HH:MM", the start of a 15-minute consultation. */
  time: string
  /** Already taken by another patient. Nothing may make one of these selectable. */
  booked: boolean
}

export interface Doctor {
  id: string
  name: string
  speciality: string
  /** Consultation fee in rupees. */
  feeInr: number
  /** Out of 5, one decimal place. */
  rating: number
  slots: Slot[]
}

const grid = (taken: string[], from = 9, to = 17): Slot[] => {
  const out: Slot[] = []
  for (let h = from; h < to; h++) {
    for (const m of ['00', '30']) {
      const time = `${String(h).padStart(2, '0')}:${m}`
      out.push({ time, booked: taken.includes(time) })
    }
  }
  return out
}

export const doctors: Doctor[] = [
  {
    id: 'dr-anitha-rao',
    name: 'Dr Anitha Rao',
    speciality: 'General Physician',
    feeInr: 500,
    rating: 4.6,
    slots: grid(['09:30', '10:00', '12:00', '15:30']),
  },
  {
    id: 'dr-vikram-shetty',
    name: 'Dr Vikram Shetty',
    speciality: 'Dermatologist',
    feeInr: 800,
    rating: 4.8,
    slots: grid(['11:00', '11:30', '13:00', '13:30', '14:00', '16:00']),
  },
  {
    id: 'dr-fatima-sheikh',
    name: 'Dr Fatima Sheikh',
    speciality: 'Paediatrician',
    feeInr: 650,
    rating: 4.9,
    slots: grid(['09:00', '09:30', '10:30']),
  },
  {
    // Fully booked today. Your brief asks for a real empty state, not an empty grid — this is
    // the doctor that gets you there.
    id: 'dr-suresh-menon',
    name: 'Dr Suresh Menon',
    speciality: 'Orthopaedic Surgeon',
    feeInr: 1200,
    rating: 4.4,
    slots: grid([], 10, 13).map(s => ({ ...s, booked: true })),
  },
]
