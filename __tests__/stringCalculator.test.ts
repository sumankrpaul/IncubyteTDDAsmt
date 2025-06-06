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

it("Returns sum of any mumber of numbers seperated by comma", ()=>{
    const sumOf2 = myStringCalculator("1,2");
    const sumOf4 = myStringCalculator("1,2,3,4");
    const sumOf5 = myStringCalculator("1,2,3,4,5");
    expect(sumOf2).toBe(3);
    expect(sumOf4).toBe(10);
    expect(sumOf5).toBe(15);
})

it("Retuns sum of any numbers of sumber seperated by comma or new line", ()=>{
    const sumOf2 = myStringCalculator("1,2");
    const sumOf4 = myStringCalculator(`1,2
        3,4`);
    const sumOf5 = myStringCalculator(`1,2,3
        4
        5`);
    expect(sumOf2).toBe(3);
    expect(sumOf4).toBe(10);
    expect(sumOf5).toBe(15);
})

it("Takes new user defined delimeters of format //\n and returns sum of numbers", ()=>{
    const sumOf2 = myStringCalculator(`//;
    1;2`);
    expect(sumOf2).toBe(3);
})

it("Takes new user defined delimeters of format //\n but also suppost comma and new line as delimeter returns sum of numbers", ()=>{
    const sumOf5 = myStringCalculator(`//;
    1;2,3
        4
        5`);
    expect(sumOf5).toBe(15);
})

it("Throws expection when negative numbers are passed", ()=>{
    expect(()=>myStringCalculator("1,2,-3,4")).toThrow();
    expect(()=>myStringCalculator(`//;
        1;-2,3
            4
            5`)).toThrow()
})

it("Throws expeption with all the number of negative numbers supplied", ()=>{
    expect(()=>myStringCalculator("1,2,-3,4")).toThrow("negatives not allowed -3")
    expect(()=>myStringCalculator(`//;
        1;-2,3
            -4
            5`)).toThrow("negatives not allowed -2,-4");
})
