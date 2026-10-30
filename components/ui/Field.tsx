import { cloneElement, isValidElement } from 'react';
import { CircleAlert } from 'lucide-react';

/**
 * Label + control + hint/error. The label is always visible; the error replaces
 * the hint and is linked to the control with aria-describedby.
 */
export default function Field({
  id,
  label,
  hint,
  error,
  aside,
  children,
  className,
}: {
  id: string;
  label: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** Something that sits on the label row, at the far edge (e.g. "forgot password"). */
  aside?: React.ReactNode;
  children: React.ReactElement<{ id?: string; 'aria-invalid'?: boolean; 'aria-describedby'?: string }>;
  className?: string;
}) {
  const noteId = error ? `${id}-error` : hint ? `${id}-hint` : undefined;
  const control = isValidElement(children)
    ? cloneElement(children, { id, 'aria-invalid': error ? true : undefined, 'aria-describedby': noteId })
    : children;

  return (
    <div className={className}>
      <div className="flex items-baseline justify-between gap-3">
        <label htmlFor={id} className="label">
          {label}
        </label>
        {aside}
      </div>
      {control}
      {error ? (
        <p id={noteId} className="field-error">
          <CircleAlert size={14} aria-hidden /> {error}
        </p>
      ) : (
        hint && (
          <p id={noteId} className="hint">
            {hint}
          </p>
        )
      )}
    </div>
  );
}
