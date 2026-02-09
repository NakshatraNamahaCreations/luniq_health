export const APPOINTMENT_DEPARTMENT_OPTIONS = [
  'Nursing Care',
  'Lab Tests',
  'Medical Equipment',
  'Physiotherapy',
  'Elder Care',
  'Baby Care',
  'Intensive Care',
  'Corporate Health',
  'Trained Caretakers',
] as const;

export type AppointmentDepartmentOption = (typeof APPOINTMENT_DEPARTMENT_OPTIONS)[number];

/**
 * Returns the list of department options for the appointment form.
 * Can be extended later to fetch from API if needed.
 */
export function useAppointmentDepartmentOptions(): readonly string[] {
  return APPOINTMENT_DEPARTMENT_OPTIONS;
}
