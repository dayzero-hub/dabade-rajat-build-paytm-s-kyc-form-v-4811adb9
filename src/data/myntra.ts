// Myntra variant picker — the fixture your brief names: colours, sizes, and stock PER COMBINATION.
//
// The stock grid is keyed by colour AND size on purpose. Your brief is evaluated on availability
// being derived from the combination rather than greyed by size alone, and a fixture with one
// number per size could not tell those two apart.

export interface ColourOption {
  id: string
  label: string
  /** For the swatch. The image below is what a colour change has to swap. */
  hex: string
  imageUrl: string
}

export type SizeLabel = 'XS' | 'S' | 'M' | 'L' | 'XL'

export interface Product {
  id: string
  brand: string
  name: string
  priceInr: number
  mrpInr: number
  colours: ColourOption[]
  sizes: SizeLabel[]
  /** stock[colourId][size] — units left. 0 means that exact pair cannot be bought. */
  stock: Record<string, Record<SizeLabel, number>>
}

// Plain SVG data URIs rather than remote images: the template must run on a clone with no
// network, and a broken <img> on first run reads as "I broke it".
const swatchImage = (hex: string, label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="400"><rect width="300" height="400" fill="${hex}"/>` +
    `<text x="150" y="210" font-family="sans-serif" font-size="20" fill="#ffffff" text-anchor="middle">${label}</text></svg>`,
  )}`

export const product: Product = {
  id: 'roadster-tee-01',
  brand: 'Roadster',
  name: 'Pure Cotton Round Neck T-Shirt',
  priceInr: 649,
  mrpInr: 1299,
  colours: [
    { id: 'navy',    label: 'Navy',    hex: '#1f2a44', imageUrl: swatchImage('#1f2a44', 'Navy') },
    { id: 'olive',   label: 'Olive',   hex: '#4a5230', imageUrl: swatchImage('#4a5230', 'Olive') },
    { id: 'maroon',  label: 'Maroon',  hex: '#6b2233', imageUrl: swatchImage('#6b2233', 'Maroon') },
    { id: 'offwhite',label: 'Off White',hex: '#e6e1d6', imageUrl: swatchImage('#e6e1d6', 'Off White') },
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  stock: {
    // M is out in Navy and in stock in Olive — the case your brief asks you to prove.
    navy:     { XS: 3, S: 7, M: 0, L: 4, XL: 2 },
    olive:    { XS: 0, S: 2, M: 6, L: 0, XL: 1 },
    maroon:   { XS: 1, S: 0, M: 2, L: 9, XL: 0 },
    // Entirely out of stock — the all-out state for a colour.
    offwhite: { XS: 0, S: 0, M: 0, L: 0, XL: 0 },
  },
}

/** At or below this many units, your brief asks for a low-stock hint. */
export const LOW_STOCK_AT = 2
