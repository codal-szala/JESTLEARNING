import React, { useState, useEffect } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [isEven, setIsEven] = useState(true);

    useEffect(() => {
        setIsEven(count % 2 === 0);
    }, [count]);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>{isEven ? 'Even' : 'Odd'}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};

export default Counter;