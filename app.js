function Person(firstName, lastName){

this.firstName = firstName;
this.lastName = lastName;

}

Person.prototype.greet = function(){
  return 'Hello'+' '+ this.firstName+' '+ this.lastName
}

var John = new Person('John', 'Doe');
console.log(John.firstName);
console.log(John.greet());
var Jean = new Person('Jane', 'Doll');
console.log(John.__proto__); // this lets us see on what function we are working with


