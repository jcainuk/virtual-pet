function Pet(name) {
    this.name = name;

    this.sayHi = function () {
        alert("My name is: " + this.name);
    };
};




module.exports = Pet;