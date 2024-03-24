import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export const useSquadsSearchParams = (selectedSquads: number[]) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (selectedSquads.length === 0) {
      router.replace(pathname);
      return;
    }

    const params = new URLSearchParams(searchParams);
    const sorted = selectedSquads.sort((a, b) => a - b);

    params.set('squads', sorted.join('-'));
    router.replace(`${pathname}?${params.toString()}`);
  }, [router, selectedSquads]);
};
