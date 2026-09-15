// Nykaa coupon field — the fixture your brief names: a bag, and codes with their rules.
//
// The rules are data; applying them is the work. Note there are three outcomes to tell apart —
// a code that does not exist, one that has expired, and one whose conditions are not met — and
// your brief is evaluated on failing with a reason that says which.

export interface BagLine {
  id: string
  name: string
  /** Whole rupees. Prices are integers so a wrong total is a wrong total, not a float artefact. */
  priceInr: number
  quantity: number
}

export type CouponKind = 'percent' | 'flat'

export interface Coupon {
  code: string
  kind: CouponKind
  /** Percent (e.g. 15 = 15%) or whole rupees off, depending on `kind`. */
  value: number
  /** The bag subtotal this code needs, in rupees. 0 = no minimum. */
  minSubtotalInr: number
  /** Percent coupons only: the most it can take off, in rupees. null = uncapped. */
  maxDiscountInr: number | null
  /** ISO date. A code is expired when this date is in the past. */
  expiresOn: string
}

export const bag: BagLine[] = [
  { id: 'lak-01', name: 'Lakmé Absolute Matte Lipstick', priceInr: 725,  quantity: 1 },
  { id: 'mam-02', name: 'Mamaearth Vitamin C Face Wash', priceInr: 249,  quantity: 2 },
  { id: 'min-03', name: 'Minimalist Niacinamide 10%',    priceInr: 599,  quantity: 1 },
  { id: 'nyk-04', name: 'Nykaa Wanderlust Body Lotion',  priceInr: 449,  quantity: 1 },
]

/** Live and expired codes together — your brief needs both to build the two failure messages. */
export const coupons: Coupon[] = [
  { code: 'NYKAA15',  kind: 'percent', value: 15,  minSubtotalInr: 999,  maxDiscountInr: 300, expiresOn: '2030-12-31' },
  { code: 'FLAT200',  kind: 'flat',    value: 200, minSubtotalInr: 1499, maxDiscountInr: null, expiresOn: '2030-12-31' },
  { code: 'GLOW10',   kind: 'percent', value: 10,  minSubtotalInr: 0,    maxDiscountInr: 150, expiresOn: '2030-12-31' },
  { code: 'DIWALI24', kind: 'flat',    value: 500, minSubtotalInr: 1999, maxDiscountInr: null, expiresOn: '2024-11-05' },
  { code: 'HOLI25',   kind: 'percent', value: 25,  minSubtotalInr: 0,    maxDiscountInr: 400, expiresOn: '2025-03-20' },
]
