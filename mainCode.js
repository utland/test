const a = [1, 3, 454, 656]
a[6] = 12


const iterateArray = (a) => {
    a.forEach((e, i) => console.log(e + `, index: ${i}`))
} 

iterateArray(a)