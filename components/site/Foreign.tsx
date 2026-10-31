import { Fragment } from 'react';

const codes: Record<string, string> = { english: 'en', german: 'de', french: 'fr' };

/** A run of English, German or French inside Persian text: correct `lang`, isolated LTR direction. */
export function Foreign({ lang, children, className }: { lang: string; children: React.ReactNode; className?: string }) {
  return (
    <span lang={codes[lang] ?? lang} dir="ltr" translate="no" className={className}>
      {children}
    </span>
  );
}

/** Renders text that embeds foreign phrases as `{{de|der Tisch}}`. */
export function Inline({ text, foreignClassName = 'font-medium text-ink' }: { text: string; foreignClassName?: string }) {
  const parts = text.split(/(\{\{\w+\|[^}]+\}\})/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\{\{(\w+)\|([^}]+)\}\}$/);
        return m ? (
          <Foreign key={i} lang={m[1]} className={foreignClassName}>{m[2]}</Foreign>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}

/** Strips the inline markup, for meta descriptions and other plain-text uses. */
export const plain = (text: string) => text.replace(/\{\{\w+\|([^}]+)\}\}/g, '$1');
