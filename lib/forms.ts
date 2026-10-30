const persianDigits = /[۰-۹]/g;
const arabicDigits = /[٠-٩]/g;

/** Persian/Arabic digits to Latin, so «۰۹۱۲…» validates the same as "0912…". */
export function toLatinDigits(value: string) {
  return value
    .replace(persianDigits, (d) => String(d.charCodeAt(0) - 0x06f0))
    .replace(arabicDigits, (d) => String(d.charCodeAt(0) - 0x0660));
}

/** Iranian mobile number: 11 digits starting with 09, spaces and dashes ignored. */
export function isMobile(value: string) {
  return /^09\d{9}$/.test(toLatinDigits(value).replace(/[\s-]/g, ''));
}

/** Moves focus to the first field (in form order) that has an error. Returns true if there was one. */
export function focusFirstError(form: HTMLFormElement, errors: Record<string, string | undefined>) {
  const first = [...form.elements].find((el) => (el as HTMLInputElement).id && errors[(el as HTMLInputElement).id]) as HTMLElement | undefined;
  first?.focus();
  return Object.values(errors).some(Boolean);
}
