function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}

// reduce
const numbs = [34, 56, 78, 92];
let sum = 0;
for (const num of numbs) {
    sum = sum + num;
}

const jinis = [
    { id: 1, name: 'Rony', price: 25 },
    { id: 2, name: 'Rony1', price: 500 },
    { id: 3, name: 'Rony2', price: 255 },
    { id: 4, name: 'Rony3', price: 590 },
]
let total = 0;
for (const jini of jinis) {
    total = total + jini.price;
}
const jinisReducer = (previous, curent) => previous + curent.price;
const jinisTotal = jinis.reduce(jinisReducer, 0)

const reducer = (previous, curent) => previous + curent;
numbs.reduce(reducer, 0)

function substract(num1, num2) {
    return num1 - num2;
}
export { add, multiply, substract }