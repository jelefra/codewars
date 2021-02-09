/*
https://www.codewars.com/kata/reverse-polish-notation-calculator/train/javascript

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).
*/

// Submission
function calc(expr) {
  if (expr === "") {
    return 0;
  }

  if (expr.split(" ").length === 1) {
    return Number(expr);
  }

  const re = new RegExp(/(\d+) (\d+) ([+\-*\/])/);
  while (expr.match(re)) {
    const found = expr.match(re);
    if (found[3] === "+") {
      expr = expr.replace(
        /(\d+) (\d+) ([+\-*\/])/,
        Number(found[1]) + Number(found[2])
      );
    }
    if (found[3] === "-") {
      expr = expr.replace(
        /(\d+) (\d+) ([+\-*\/])/,
        Number(found[1]) - Number(found[2])
      );
    }
    if (found[3] === "*") {
      expr = expr.replace(
        /(\d+) (\d+) ([+\-*\/])/,
        Number(found[1]) * Number(found[2])
      );
    }
    if (found[3] === "/") {
      expr = expr.replace(
        /(\d+) (\d+) ([+\-*\/])/,
        Number(found[1]) / Number(found[2])
      );
    }
  }
  return Number(expr);
}

// Inspiration
const calc2 = expr => {
  const result = [];
  const atoms = expr.split(/\s+/);
  for (let i = 0; i < atoms.length; i++) {
    switch (atoms[i]) {
      case "+":
        result.push(result.pop() + result.pop());
        break;
      case "-":
        result.push(-result.pop() + result.pop());
        break;
      case "*":
        result.push(result.pop() * result.pop());
        break;
      case "/":
        result.push(1 / (result.pop() / result.pop()));
        break;
      default:
        result.push(parseFloat(atoms[i]));
    }
  }
  return result.pop() || 0;
};

const operands = {
  "+": (b, a) => a + b,
  "-": (b, a) => a - b,
  "*": (b, a) => a * b,
  "/": (b, a) => a / b
};

const calc3 = expr => {
  expr = expr || "0";
  return +expr
    .split(/\s/g)
    .reduce((stack, current) => {
      stack.push(
        operands[current]
          ? operands[current](+stack.pop(), +stack.pop())
          : current
      );
      return stack;
    }, [])
    .pop();
};

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
};

const calc4 = expr => {
  if (expr === "") return 0;
  while (/[+\-*/](?!\d)/g.test(expr)) {
    const matches = expr.match(/(\d+) (\d+) ([+\-*/])/);
    const operationResult = operators[matches[3]](
      Number(matches[1]),
      Number(matches[2])
    );
    expr = expr.replace(matches[0], operationResult);
  }
  return Number(expr);
};

const calc5 = expr => {
  const stack = [];
  expr.split(" ").forEach(e => {
    if (e === "+") stack.push(stack.pop() + stack.pop());
    else if (e === "-") stack.push(-stack.pop() + stack.pop());
    else if (e === "*") stack.push(stack.pop() * stack.pop());
    else if (e === "/") stack.push((1 / stack.pop()) * stack.pop());
    else stack.push(parseFloat(e));
  });
  return stack[stack.length - 1] || 0;
};

// Practicing
const calcZ = expr => {
  return 1;
};

module.exports = calc;
