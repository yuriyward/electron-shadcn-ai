/**
 * Base layout with title bar region
 */
import type React from 'react';
import DragWindowRegion from '@/renderer/components/drag-window-region';

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DragWindowRegion title="fix-grammar" />
      <main className="h-screen p-2 pb-20">{children}</main>
    </>
  );
}
