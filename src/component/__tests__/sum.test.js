

import { sum } from "../sum";

test("Sume of the function", ()=>{

    const result = sum(1,2);

    // Assertion
    expect(result).toBe(3);
});

