export const ENQUIRY_SERVICE_OPTIONS = [
  'Trained Attendants',
  'Nursing Care',
  'Physiotherapy',
  'Medical Equipment',
  'Critical Care',
  'Baby Care',
  'Elder Care',
  'Lab Testing',
  'Corporate Health',
  'General Inquiry',
] as const;

export type EnquiryServiceOption = (typeof ENQUIRY_SERVICE_OPTIONS)[number];

/**
 * Returns the list of service options for the enquiry form.
 * Can be extended later to fetch from API if needed.
 */
export function useEnquiryServiceOptions(): readonly string[] {
  return ENQUIRY_SERVICE_OPTIONS;
}
