import { useEffect, useState } from 'react';
import { Nullable } from 'types/common';

const useMediaQuery = (mediaQuery: string) => {
  const [matched, setMatched] = useState<Nullable<boolean>>(null);

  const handleIsMatched = (event: MediaQueryListEvent) => {
    setMatched(event.matches);
  };

  useEffect(() => {
    setMatched(window.matchMedia(mediaQuery).matches);

    const mql = window.matchMedia(mediaQuery);
    mql.addEventListener('change', handleIsMatched);

    return () => mql.removeEventListener('change', handleIsMatched);
  }, []);

  return {
    isCheckedScreenSize: matched !== null,
    isMatched: matched,
    isNotMatched: !matched,
  };
};

export default useMediaQuery;
