import { useRef, useLayoutEffect, useCallback } from 'react';

function useEffectEvent<F extends (...args: any[]) => any>(handler: F): F {
  const handlerRef = useRef<F>(handler);

  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback(((...args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }) as F, []);
}

export default useEffectEvent;
