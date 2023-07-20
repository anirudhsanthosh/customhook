import { useState } from "react";

export function useCustomState() {
    const [state1, setState1] = useState();
    const [state2, setState2] = useState();
    const [state3, setState3] = useState();
    const [state4, setState4] = useState();
    const [state5, setState5] = useState();
    const [state6, setState6] = useState();

    return {
        values: {
            state1,
            state2,
            state3,
            state4,
            state5,
            state6,
        },
        setters: {
            setState1,
            setState2,
            setState3,
            setState4,
            setState5,
            setState6,
        },
    };
}
