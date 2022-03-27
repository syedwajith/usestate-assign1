import { useState } from "react";

export default function NumberOps() {
    
    const [num, setX] = useState(0)

    function IncrementByOne() {
        setX(num + 1)
        console.log(num)
    }

    function DecrementByOne() {
        setX(num - 1)
        console.log(num)
    }

    return (
        <div>
            <p>
                This is the value: {num}
            </p>
            <button onClick={IncrementByOne}>IncrementOne </button>
            <p>
            <button onClick={DecrementByOne}>DecrementOne </button>
            </p>
        </div >
        
    );
}