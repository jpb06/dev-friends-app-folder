import type { PropsWithChildren } from "react";

export const Title = ({ children }: PropsWithChildren) => (
  <h1 className="text-4xl font-bold text-yellow-600 mb-4">{children}</h1>
);
