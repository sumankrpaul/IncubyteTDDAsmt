import { myStringCalculator } from "../app/stringCalculator";

// Check function prototype 
it('myStringCalculator is callable function',()=>{
    expect(myStringCalculator).toBeInstanceOf(Function);
    expect(myStringCalculator.length).toBe(1);
})

it("Returns number and takes string as input ", ()=>{
    const resp = myStringCalculator("");
    expect(typeof resp).toBe("number");
})

it("Returns 0 on empty string and the number if only one number have been called", ()=>{
    const resp1 = myStringCalculator("");
    const resp2 = myStringCalculator("2");
    expect(resp1).toBe(0);
    expect(resp2).toBe(2);
})

it("Returns sum of two comma seperated numbers", ()=>{
    const sum = myStringCalculator("1,2");
    expect(sum).toBe(3);
})