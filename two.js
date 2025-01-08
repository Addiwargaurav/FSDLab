function calculateTotal(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
const result = calculateTotal(10, 20, 30, 40);
console.log(result); 