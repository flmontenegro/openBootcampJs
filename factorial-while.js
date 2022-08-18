function factorial(num) {
let final = 1;
let i = 1;
while (i <= num){
    final *=i;
    ++i;

}
return final;
}
console.log(factorial(10));