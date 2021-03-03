import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter</h2>
            <button onClick={increment}>
                Clicked {count} times
            </button>
        </div>
    );
}