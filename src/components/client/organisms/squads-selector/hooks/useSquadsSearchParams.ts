import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useSquadsSearchParams = (selectedSquads: number[]) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (!searchParams.has('squads')) {
      const params = new URLSearchParams(searchParams);
      const sorted = selectedSquads.sort((a, b) => a - b);

      params.set('squads', sorted.join('-'));
      router.replace(`${pathname}?${params.toString()}`);
    }
  }, [router, pathname, searchParams, selectedSquads]);
};
