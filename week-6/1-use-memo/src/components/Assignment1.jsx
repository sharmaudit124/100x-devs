import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    
    // const calculateFactorial = () => {
    //     console.log("calculating factorial...");
    //     let number = 1;
    //     for (let i = input; i >= 1; i--) {
    //         number = number * i;
    //     }
    //     return number;
    // };
    // const expensiveValue = calculateFactorial();
    // Your solution starts here
    const expensiveValue = useMemo(
        () => {
            console.log("calculating factorial...");
            let number = 1;
            for (let i = input; i >= 1; i--) {
                number = number * i;
            }
            return number;
        }, [input]
    );
    // Your solution ends here

    return (
        <div>
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(Number(e.target.value))}
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}