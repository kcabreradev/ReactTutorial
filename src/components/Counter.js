import { useEffect, useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    });
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter</h2>
            <button className="btn btn-primary" onClick={increment}>
                Clicked {count} times
            </button>
        </div>
    );
}