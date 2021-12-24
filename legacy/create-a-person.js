let Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFullName = function () {
        return fullName;
    };
    this.getFirstName = () => {
        return fullName.split(' ')[0];
    };
    this.getLastName = () => {
        return fullName.split(' ')[1];
    };

    this.setFullName = (firstAndLast) => {
        fullName = firstAndLast;
    };
    this.setFirstName = (firstName) => {
        fullName = `${firstName} ${fullName.split(' ')[1]}`;
    };
    this.setLastName = (lastName) => {
        fullName = `${fullName.split(' ')[0]} ${lastName}`;
    };
};

var bob = new Person('Bob Ross');

console.log(bob.getFullName());
console.log(bob.setFirstName('Chaz'));
console.log(bob.getFullName());
