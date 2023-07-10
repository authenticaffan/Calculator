console.log("calculator");

console.log("Addition");
console.log("Subtraction");
console.log("Multiplication");
console.log("Division");

var Addition,Subtraction,Multiplication,Division,input,inp1,inp2;

const prompt = require ("prompt-sync")();
input = prompt("Enter your operation = ");
inp1 = parseInt(prompt("Enter your First Value = "));
inp2 = parseInt(prompt("Enter your Second Value = "));

if (input=="Addition") {
    console.log(inp1+inp2);
} 
else if (input=="Subtraction"){
    console.log(inp1-inp2);
}
else if (input=="Multiplication"){
    console.log(inp1*inp2);
}
else {
    console.log(inp1/inp2);
}
