import { useEffect, MutableRefObject } from 'react';

function useInfiniteScroll(ref: MutableRefObject<HTMLElement | null>, callback: () => void): void {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref.current]);
}

export default useInfiniteScroll;
