const sayHello = function(name){
  console.log("Hello," + name);
}

sayHello("Pratik");
sayHello("John Doe")

const returnSayHello = function(name){
  return ("Hello, " + name);
}

const greeting = returnSayHello("Jack");

console.log(greeting)