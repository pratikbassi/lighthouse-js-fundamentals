const raining = true;
const cold = false;
const temp = 12;

if (raining){
  console.log("Don't forget your umbrella!")
}

if (cold){
  console.log("mMake sure you pick out a scarf?")
} else if (temp < 15){
  console.log("Short sleeves wont cut it!")
}
else {
  console.log("Short sleeves are fine!")
}

console.log("Now you're ready to go outside!")


const isCitizen = true;
const age = 26;

if (isCitizen && age > 18){
  console.log("You are eligible to vote")
}

if (!raining){
  console.log("Leave your umbrella at home!")
}