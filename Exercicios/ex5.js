var array = [100]
for(let i = 0; i < 3; i++){
    array.push(array[i]*0.05)
}

console.log(array)