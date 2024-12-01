'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(1);

    return (
        <div className='bg-black text-gray-300 text-3xl p-6'>
            <h1>Count: {count}</h1>
            <button className='bg-slate-500 px-4 py-2'
                onClick={() => setCount(count + 1)}>Increment</button>
            <button className='bg-slate-500 px-4 py-2 ml-2'
                onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}
