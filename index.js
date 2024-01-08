//if statment
let degree = prompt("please enter your score exam ");
if (degree = 100){
  console.log(" perfect scoree ✨");
} else if (degree >= 85) {
  console.log("you got A🎉");
} else if (degree >= 75) {
  console.log("you got B 🎉");
} else if (degree >= 65) {
  console.log("you got C 🎉");
} else if (degree >= 50) {
  console.log("you got D 🙃");
} else if (degree >= 0) {
  console.log("you got F 😐");
} else if (degree < 0 && degree == 100) {
  console.log(" INVALID SCORE ❌");
} else {
  console.get("NOT A Number ❌");
}
//switch statment
switch (true) {
  case 100:
    console.log(" perfect score ✨");
    break;
  case degree >= 85:
    console.log("you got A🎉");
    break;
  case degree >= 75:
    console.log("you got B 🎉");
    break;
  case degree >= 65:
    console.log("you got C 🎉");
    break;
  case degree >= 60:
    console.log("you got D 🙃");
    break;
  case degree >= 0:
    console.log("you got F 😐");
    break;
  case degree > 0:
    console.log(" INVALID SCORE ❌");
    break;
  default:
    console.get("NOT A nNumber ❌");
}
