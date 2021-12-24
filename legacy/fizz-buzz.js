function fizzBuzz(num) {
    let result = [];
    for (let i = 0; i < num; i++) {
        result.push((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i);
    }
    return result;
}

console.log(fizzBuzz(100));
