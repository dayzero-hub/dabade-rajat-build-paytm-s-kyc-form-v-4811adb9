// Paytm KYC form — there is no fixture here on purpose, because your brief provides no backend.
//
// What it does promise is that "verifying" is simulated with a short delay, so you can build the
// pending and verified states against something that behaves like a network call. That is this
// file. The PAN and Aadhaar validity rules are the work — they are not here.

export interface KycSubmission {
  pan: string
  aadhaar: string
}

export interface KycResult {
  status: 'verified'
  /** A reference the confirmation state can show. */
  referenceId: string
}

/**
 * Resolves after a short delay, the way a real verification call would. It does NOT check the
 * PAN or the Aadhaar — gating submission on real validity is ticket work, and this call is only
 * here so the pending state has something to wait for.
 */
export function submitKyc(_submission: KycSubmission): Promise<KycResult> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ status: 'verified', referenceId: `KYC${Math.floor(Math.random() * 900000 + 100000)}` })
    }, 1400)
  })
}
