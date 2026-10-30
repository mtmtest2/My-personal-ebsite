export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

/** Converts Latin digits to Persian digits, with optional thousands separators for numbers. */
export function fa(value: number | string) {
  const str = typeof value === 'number' ? value.toLocaleString('en-US') : value;
  return str.replace(/\d/g, (d) => faDigits[Number(d)]).replace(/,/g, '٬');
}
