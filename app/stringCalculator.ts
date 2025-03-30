class MyError extends Error{
    constructor(numbers: string[]){
        super(`negatives not allowed ${numbers.join(',')}`)
    }
}

const convertVal = (chracter: string)=> {
    let num = parseInt(chracter);
    if(num >= 0) {
        return num
    }
    throw new Error(chracter);
}
export function myStringCalculator(numbers: string){
    const errors: string[] = [];
    const handleMultipleNegative = (val: string)=>{
        try{
            return convertVal(val)
        } catch(e) {
            if(e instanceof Error){
                errors.push(e.message);
            }
            return 0;
        }
    }
    let sum = 0;
    if(numbers === ""){
        return 0;
    } else if(numbers.match(/\/\/\W\n/)){
        const [_, numStr] = numbers.split(/\/\/\W\n/);
        const delimeter = numbers.match(/\/\/\W\n/) instanceof Array ? numbers.match(/\/\/\W\n/)?.[0] : "";
        let delem = "";
        if(delimeter){
            delem = delimeter.split(/\/\//)[1].split(/\n/)[0];
        }
        const regex = new RegExp(`[,\n${delem}]`);
        sum = numStr.split(regex).map(chac=> chac.trim()).map(handleMultipleNegative).reduce((acc, curr)=> acc+curr, 0);
        
    } else if(numbers.split(/[,\n]/).length > 1){
        sum =  numbers.split(/[,\n]/).map(chac=> chac.trim()).map(handleMultipleNegative).reduce((acc, curr)=> acc+curr, 0);
    } else return +numbers;
    
    if(errors.length){
        throw new MyError(errors);
    }
    return sum;
}