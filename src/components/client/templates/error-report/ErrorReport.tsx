'use client';

import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

import { Button } from '@client/atoms';

import { useErrorMessage } from './hooks/useErrorMessage';

type ErrorReportProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export const ErrorReport = ({ error, reset }: ErrorReportProps) => {
  const errorMessage = useErrorMessage(error);

  return (
    <div className="flex flex-col">
      <ExclamationCircleIcon className="h-20 w-20 self-center text-red-500" />
      <h2 className="mb-3 self-center text-2xl text-red-500">Oh no!</h2>
      <div className="self-baseline text-red-400">
        {typeof errorMessage === 'string' ? (
          error.message
        ) : (
          <div className="flex flex-col">
            <span>{`${errorMessage.status} - ${errorMessage.type}`}</span>
            <span>{errorMessage.details}</span>
          </div>
        )}
      </div>
      <div className="mt-5 justify-end">
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
};
