import { ViewTransition } from 'react';

/**
 * Page-level view transition (vercel-react-view-transitions skill): the outgoing page
 * fades out where it was, the new one fades in with a short rise. Next.js navigations are
 * React Transitions, so this runs on every link click. On dynamic routes pass `key` so
 * moving between two articles or two languages counts as a new page.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-in" exit="page-out" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
