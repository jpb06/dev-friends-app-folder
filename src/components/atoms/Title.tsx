import type { PropsWithChildren } from 'react';

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className="mb-3 bg-gradient-to-bl from-emerald-500 to-violet-700 bg-clip-text text-4xl font-semibold text-transparent">
    {children}
  </h1>
);
