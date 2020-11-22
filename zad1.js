let numbers = [1, 5, 9];

function sumOfCubes(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
      sum +=  numbers[i]**3; 
    }
    return sum;
}


console.log(sumOfCubes(numbers));



