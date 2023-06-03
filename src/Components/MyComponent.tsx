import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export const MyComponent: React.FC = () => {
    const { appState, incrementCounter, resetCounter } =
        useContext(AppContext)!;

    return (
        <div>
            <p>Counter: {appState.counter}</p>
            <button onClick={incrementCounter}>Increment</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    );
};
