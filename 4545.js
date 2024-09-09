let int = 12435;
let string = "asd"

const a = {
    0: int,
    1: string
}
const b = a; 
int = 3;
b[1] = 'ahah';

console.dir({a, b, int, string})


