import type { ReactNode } from "react";

type MobileShellProps = {
  headerAction?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
};

export function MobileShell({ headerAction, footer, children }: MobileShellProps) {
  return (
    <div className="mobile-shell mx-auto flex min-h-dvh w-full max-w-md flex-col bg-background text-foreground">
      <header className="shell-header flex shrink-0 items-center justify-between gap-3 border-b border-foreground/10 px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/55">
            LunchDecisionStudio
          </p>
          <h1 className="text-lg font-semibold leading-tight">Today&apos;s lunch</h1>
        </div>
        {headerAction}
      </header>

      <main className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-4 py-4">
        {children}
      </main>

      {footer ? (
        <footer className="shell-footer shrink-0 border-t border-foreground/10 bg-background px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
          {footer}
        </footer>
      ) : null}
    </div>
  );
}
