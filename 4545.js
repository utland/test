let int = 12435;
let string = "asd"

const a = {
    0: int,
    1: string
}
const b = a; 
int = 3;
b[1] = 'ahah';

console.log(a[0])
const c = [a, b, int, 24324, "agjh"];
c.push(6);
c.forEach(e => console.log(e))

console.dir({a, b, int, string})


