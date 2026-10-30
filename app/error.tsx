'use client';

import { RotateCw } from 'lucide-react';
import Button from '@/components/ui/Button';

// Shown when a page throws while rendering. Says what happened and offers the next step.
export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="container-x grid min-h-[70vh] place-items-center py-16">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold text-ink">این صفحه باز نشد</h1>
        <p className="mt-3 text-muted">
          در بارگذاری اطلاعات مشکلی پیش آمد. دوباره امتحان کن؛ اگر باز هم باز نشد، با پشتیبانی تماس بگیر: <span dir="ltr">021-9100 0000</span>
        </p>
        <div className="mt-6 flex justify-center gap-2">
          <Button icon={RotateCw} onClick={reset}>
            دوباره امتحان کن
          </Button>
          <Button href="/" variant="secondary">
            صفحه‌ی اصلی
          </Button>
        </div>
      </div>
    </main>
  );
}
