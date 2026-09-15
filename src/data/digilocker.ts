// DigiLocker document cards — the fixture your brief names.
//
// `status` carries the meaning. Your brief is evaluated on a screen reader announcing verified
// versus pending, so keep the meaning in this value and in your markup, never in colour alone.
export type DocumentStatus = 'verified' | 'pending'

export interface StoredDocument {
  id: string
  /** The authority that issued it, e.g. a state transport department. */
  issuer: string
  title: string
  /** ISO date, "YYYY-MM-DD". */
  issuedOn: string
  status: DocumentStatus
}

export const documents: StoredDocument[] = [
  { id: 'dl-mh-1', issuer: 'Transport Department, Maharashtra', title: 'Driving Licence',       issuedOn: '2021-06-14', status: 'verified' },
  { id: 'pan-1',   issuer: 'Income Tax Department',             title: 'PAN Card',             issuedOn: '2018-02-02', status: 'verified' },
  { id: 'cbse-1',  issuer: 'CBSE',                              title: 'Class XII Marksheet',  issuedOn: '2019-07-21', status: 'verified' },
  { id: 'uid-1',   issuer: 'UIDAI',                             title: 'Aadhaar Card',         issuedOn: '2016-11-30', status: 'pending'  },
  { id: 'rc-1',    issuer: 'Transport Department, Karnataka',   title: 'Vehicle Registration', issuedOn: '2022-09-09', status: 'pending'  },
]

/** An empty wallet is one of the states your brief asks for. Swap this in to build it. */
export const emptyWallet: StoredDocument[] = []
