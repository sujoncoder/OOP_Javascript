var a = 1;

function first() {
    var b = 2;
    function second() {
        var c = 3;
        console.log(a + b + c);
    };
    return second; // function referecne
};

var result = first();
result();

function greet() {
    console.log("Hello!");
};

// Function reference
const funcRef = greet(); // No parentheses, so the function is not executed
console.log(funcRef); // Output: [Function: greet]