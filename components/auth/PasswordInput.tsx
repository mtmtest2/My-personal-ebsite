'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/** Password field with a show/hide toggle. Accepts the id/aria props `Field` passes to its control. */
export default function PasswordInput({
  autoComplete = 'current-password',
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>) {
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <input {...props} type={show ? 'text' : 'password'} autoComplete={autoComplete} dir="ltr" className="input pl-12" />
      <button
        type="button"
        onClick={() => setShow((v) => !v)}
        className="btn-quiet btn-icon absolute left-0.5 top-1/2 -translate-y-1/2"
        aria-label={show ? 'پنهان کردن رمز' : 'نمایش رمز'}
        aria-pressed={show}
      >
        {show ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  );
}
