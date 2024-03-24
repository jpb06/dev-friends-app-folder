"use client";

import { Title } from "../atoms/Title";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export const Error = ({ error, reset }: ErrorProps) => (
    <div>
      <Title>Oh no!</Title>
      <div>{error.message}</div>
      <button className="btn btn-accent mt-4" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
