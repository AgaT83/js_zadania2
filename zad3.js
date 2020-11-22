let numbers = [1];

function minMax(numbers){
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    return [min, max];
}

console.log(minMax(numbers));