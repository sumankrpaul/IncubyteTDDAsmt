export function myStringCalculator(numbers: string){
    if(numbers === ""){
        return 0;
    } else if(numbers.split(',').length > 1){
        const [num1, num2] = numbers.split(',').map(val=>parseInt(val));
        return num1+num2;
    } else return +numbers;
}