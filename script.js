const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputbox = document.querySelector("#output-box");


function compareValues(sum,luckyNumber) {
  if(sum%luckyNumber===0){
    outputbox.innerText = "Your Birthday is Lucky 😍";
  }else {
    outputbox.innerText = "Your Birthday is not Lucky 🤣";
  }
}

function checkBirthDateIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum&&dob)
  compareValues(sum,luckyNumber.value)
  else 
  outputbox.innerText = "Please enter both the fields 🤔";
}

function calculateSum(dob) {
  dob = dob.replaceAll ("-","");
  let sum=0;
  for(let index=0; index<dob.length;index++) {
    sum = sum + Number(dob.charAt(index));
  }

  return sum;
}

checkNumberButton.addEventListener('click',checkBirthDateIsLucky)

