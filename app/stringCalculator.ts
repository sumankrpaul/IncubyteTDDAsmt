export function myStringCalculator(numbers: string){
    if(numbers === ""){
        return 0;
    } else if(numbers.split(/[,\n]/).length > 1){
        return numbers.split(/[,\n]/).map(val=>parseInt(val)).reduce((acc, curr)=> acc+curr, 0);
    } else return +numbers;
}