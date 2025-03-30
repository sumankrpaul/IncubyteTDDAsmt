import { myStringCalculator } from "../app/stringCalculator";

// Check function prototype 
it('myStringCalculator is callable function',()=>{
    expect(myStringCalculator).toBeInstanceOf(Function);
    expect(myStringCalculator.length).toBe(1);
})
