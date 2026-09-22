// export import

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

export const pi = 3.14;

export default { add, sub, mul, div };
