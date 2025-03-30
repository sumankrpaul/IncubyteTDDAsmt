export function myStringCalculator(numbers: string){
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
        return numStr.split(regex).map(val=>parseInt(val)).reduce((acc, curr)=> acc+curr, 0);
        
    } else if(numbers.split(/[,\n]/).length > 1){
        return numbers.split(/[,\n]/).map(val=>parseInt(val)).reduce((acc, curr)=> acc+curr, 0);
    } else return +numbers;
}