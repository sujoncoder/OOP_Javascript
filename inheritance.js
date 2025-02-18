// INHERITANCE

// CRICKETER
class Cricketer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
};


// FOOTBALLER
class Footballer {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
};


// cricket player
const sakib = new Cricketer("Sakib", 35);
const tamim = new Cricketer("Tamim", 37);
console.log(sakib, tamim);

// football player
const messi = new Footballer("Messi", 39);
console.log(messi);
