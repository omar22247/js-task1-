// ---------------even or odd----------------------
document.write(`<p style="background-color: blue; font-size:xx-large; margin-left: auto; margin-right: auto; width: fit-content;">---------------even or odd----------------------</p>
    `);
let a = -4;
if (a == 0) {
  document.write(`<p style="color: blue; font-size: xx-large;">Zero</p>`);
} else {
  if (a % 2 == 0) {
    document.write(
      `<p style="color: blue; font-size: xx-large;">(${a}) is even</p>`
    );
  } else {
    document.write(
      `<p style="color: blue; font-size: xx-large;">(${a}) is odd</p>`
    );
  }
}
// ------------------------Circumference and CircleAria ------------------------------

document.write(`<p style="background-color: blue; font-size:xx-large; margin-left: auto; margin-right: auto; width: fit-content;">------------Circumference and CircleAria-----------------</p>
    `);
let radius = 10;
let Circumference = radius * 2 * Math.PI;
let CircleAria = Math.pow(radius, 2) * Math.PI;
document.write(`<p style="color: blue; font-size: xx-large;">Circumference = ${Circumference}</p>
    <p style="color: red; font-size: xx-large;">Circle Aria = ${CircleAria}</p>`);

// -----------------------  + or -   -------------------------

document.write(`<p style="background-color: blue; font-size:xx-large; margin-left: auto; margin-right: auto; width: fit-content;">------------ + or - -----------------</p>
    `);
let num1 = 10,
  num2 = -8;
if (num1 == 0) {
  document.write(
    `<span style="color: black; font-size: xx-large;">Zero and </span>`
  );
} else {
  if (num1 > 0) {
    document.write(
      `<span style="color: blue; font-size: xx-large;">(${num1}) is Positive and </span>`
    );
  } else {
    document.write(
      `<span style="color: red; font-size: xx-large;">(${num1}) is Negative and </span>`
    );
  }
}
if (num2 == 0) {
  document.write(`<span style="color: black; font-size: xx-large;">Zero</p>`);
} else {
  if (num2 > 0) {
    document.write(
      `<span style="color: blue; font-size: xx-large;">(${num2}) is Positive</span>`
    );
  } else {
    document.write(
      `<span style="color: red; font-size: xx-large;">(${num2}) is Negative</span>`
    );
  }
}
