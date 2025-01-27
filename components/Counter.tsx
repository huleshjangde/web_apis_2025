'use client';

import { useCounterStore } from '@/store/store';

export function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="rounded bg-blue-500 px-4 py-2 text-white">
          Decrement
        </button>
        <button
          onClick={reset}
          className="rounded bg-gray-500 px-4 py-2 text-white">
          Reset
        </button>
        <button
          onClick={increment}
          className="rounded bg-blue-500 px-4 py-2 text-white">
          Increment
        </button>
      </div>
    </div>
  );
}
