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
