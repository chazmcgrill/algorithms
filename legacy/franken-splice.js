function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice();
    result.splice(n, 0, ...arr1);
    return result;
}

console.log(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2));
