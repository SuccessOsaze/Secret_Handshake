const input = document.querySelector("input");
const handshake = document.getElementById("the-handshake");
const shakeHands = document.querySelector("#secret-handshake");

// window.addEventListener("DOMContentLoaded", () => {
//   const savedHandShake = localStorage.getItem(handshake);
//   myHandShake(savedHandShake);
// })

shakeHands.addEventListener("click", (event) => {
  event.preventDefault();
  myHandShake(input.value);
  // if(input.value === ""){
  //   // halfIt(shakeNum);
  //   alert("You didn't give us any number! \nPlease enter a valid number to show your secret handshake.")
  // }else{
  // }
  /*

  if (input.value === '16') {
    halfIt(input.value)
  }else{
    myHandShake(input.value);
  }
  */
  // saveData();
  //input.value = "";
});

const myHandShake = (decimal) => {
  //let letsShake = [];
  let binary = "";
  while (decimal > 0) {
    if (decimal % 2 === 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    decimal = Math.floor(decimal / 2);
  }
  // letsShake.push(expandedForm(binary));
  // console.log(letsShake);
  let binaryArr = expandedForm(binary);
  let notZero = (baseTwo) => {
    return baseTwo > 0;
  };
  let noZeroArr = binaryArr.filter(notZero);
  // let newArr = noZeroArr.reverse();
  // for (let i = 0; i < noZeroArr.length - 1; i++) {
  //   if (noZeroArr[i] === 10000) {
  //     console.log(noZeroArr);
  //   }else{
  //     console.log(noZeroArr.reverse());
  //   }
  // }

  // noZeroArr.forEach((binary) => {
  //   if (binary !==10000) {
  //     console.log(noZeroArr.reverse());
  //   }
  //   return
  // })
  if (noZeroArr.includes(10000, 0)) {
    //console.log(secretHandShake(noZeroArr));
    handshake.textContent = `Your secret handshake is ${secretHandShake(
      noZeroArr
    )}`;
  } else {
    let reverseArr = noZeroArr.reverse();
    //console.log(secretHandShake(reverseArr));
    handshake.textContent = `Your secret handshake is ${secretHandShake(
      reverseArr
    )}`;
  }
};

const expandedForm = (binaryNum) => {
  //let binaryNum = Number(sample);
  let res = [];
  for (let i = 0; i < binaryNum.length; i++) {
    const placeValue = binaryNum[i] * Math.pow(10, binaryNum.length - 1 - i);
    res.push(placeValue);
    //if (binaryNum.length - i > 1) {
    // res += `${placeValue},`
    // }
    // else{
    //   res += placeValue;
    // };
  }
  return res;
};

const secretHandShake = (array) => {
  let filtered = array.filter(function (value) {
    return value < 10000;
  });
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === 1) {
      filtered[i] = " wink";
    } else if (filtered[i] === 10) {
      filtered[i] = " double blink";
    } else if (filtered[i] === 100) {
      filtered[i] = " close your eyes";
    } else if (filtered[i] === 1000) {
      filtered[i] = " jump";
      //} else if (filtered[i] === 10000){
      // array.splice(i, 1);
      //let filtered = array.filter(function (value) {
      //return value != 10000
      //})
      //return filtered;
    }
  }
  return filtered;
};

/*
// AN ATTEMPT TO USE PERSISTENT STORAGE FOR THE PROJECT

const saveData = () => {
  localStorage.setItem("handshake", handshake.textContent);
}

*/

/* 
  // AN ATTEMPT TO CREATE A SEPERATE LOGIC FOR AN INPUT OF 16, FOR IT TO PRODUCE A SECRET HANDSHAKE.
  // COMMENT: Work In Progress
  // STAGE: 60% complete (guesstimate).


  function halfIt(num) {
    let nowNum = Number(num)
    let arrHalf = [];
    // const  = 16;
    for (let i = 0; i < 2; i++) {
      //let num = 16;
      let half = nowNum/2;
      arrHalf.push(half)
      console.log(arrHalf);
    }
    arrHalf.forEach(arrElement => {
      let binary = "";
      while (arrElement > 0) {
        if (arrElement % 2 === 1) {
          binary = "1" + binary;
        } else {
          binary = "0" + binary;
        }
        arrElement = Math.floor(arrElement / 2);
      };
    })
  }  
  arrHalf.splice(0, 2, binary) Read how to use splice to remove & replace elements in an array
    */

//console.log(arrHalf);
// arrHalf.push(16/2,16/2);
//return arrHalf;
// //console.log(arrHalf);
// arrHalf.forEach((arrElement) => {
//   let binary = myHandShake(arrElement);
//   console.log(binary);
//   // let theHandShake = secretHandShake(binary);
//   // console.log(theHandShake);
// })
