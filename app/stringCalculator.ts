const convertVal = (chracter: string)=> {
    let num = parseInt(chracter);
    if(num >= 0) {
        return num
    }
    throw new Error("negative numbers not allowed");
}
export function myStringCalculator(numbers: string){
    try{
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
            return numStr.split(regex).map(convertVal).reduce((acc, curr)=> acc+curr, 0);
            
        } else if(numbers.split(/[,\n]/).length > 1){
            return numbers.split(/[,\n]/).map(convertVal).reduce((acc, curr)=> acc+curr, 0);
        } else return +numbers;
    } catch(e){
        throw e;
    }
}