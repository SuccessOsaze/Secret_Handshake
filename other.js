const input = document.querySelector("input");
const handshake = document.getElementById("the-handshake");
const shakeHands = document.querySelector("#secret-handshake");


shakeHands.addEventListener("click", (event) => {
  event.preventDefault();
  myHandShake(input.value);
});


const myHandShake = (decimal) => {
  let binary = "";
  while (decimal > 0) {
    if (decimal % 2 === 1) {
      binary = "1" + binary;
    } else {
      binary = "0" + binary;
    }
    decimal = Math.floor(decimal / 2);
  }
  let binaryArr = expandedForm(binary);

  let notZero = (baseTwo) => {
    return baseTwo > 0;
  };
  let noZeroArr = binaryArr.filter(notZero);
  if (noZeroArr.includes(10000, 0)) { 
    handshake.textContent = `Your secret handshake is ${secretHandShake(
      noZeroArr
    )}`;
  } else {
    let reverseArr = noZeroArr.reverse();
    handshake.textContent = `Your secret handshake is \r\n ${secretHandShake(
      reverseArr
    )}`;
  }
};

const expandedForm = (binaryNum) => {
  let res = [];
  for (let i = 0; i < binaryNum.length; i++) {
    const placeValue = binaryNum[i] * Math.pow(10, binaryNum.length - 1 - i);
    res.push(placeValue);
  }
  return res;
};

const secretHandShake = (array) => {
  let filtered = array.filter(function (value) {
    return value < 10000;
  });
  for (let i = 0; i < filtered.length; i++) {
    if (filtered[i] === 1) {
      filtered[i] = " Wink ";
    } else if (filtered[i] === 10) {
      filtered[i] = " Double Blink ";
    } else if (filtered[i] === 100) {
      filtered[i] = " Close Your Eyes ";
    } else if (filtered[i] === 1000) {
      filtered[i] = " Jump ";
    }
  }
  return filtered;
};

