export interface ContactSubjectOption {
  value: string;
  label: string;
}

export const CONTACT_SUBJECT_OPTIONS: ContactSubjectOption[] = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'nursing', label: 'Nursing Services' },
  { value: 'caretaker', label: 'Care Taker Services' },
  { value: 'lab', label: 'Lab Tests' },
  { value: 'equipment', label: 'Medical Equipment' },
  { value: 'elder', label: 'Elder Care' },
  { value: 'baby', label: 'Baby Care' },
  { value: 'physiotherapy', label: 'Physiotherapy' },
  { value: 'corporate', label: 'Corporate Health' },
  { value: 'appointment', label: 'Book Appointment' },
  { value: 'other', label: 'Other' },
];

/**
 * Returns the list of subject options for the contact form.
 * Can be extended later to fetch from API if needed.
 */
export function useContactSubjectOptions(): ContactSubjectOption[] {
  return CONTACT_SUBJECT_OPTIONS;
}
