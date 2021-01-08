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
function calc2(expr) {
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
}

const operands = {
  "+": function(b, a) {
    return a + b;
  },
  "-": function(b, a) {
    return a - b;
  },
  "*": function(b, a) {
    return a * b;
  },
  "/": function(b, a) {
    return a / b;
  }
};

function calc3(expr) {
  expr = expr || "0";
  return +expr
    .split(/\s/g)
    .reduce(function(stack, current) {
      stack.push(
        operands[current]
          ? operands[current](+stack.pop(), +stack.pop())
          : current
      );
      return stack;
    }, [])
    .pop();
}

function calc4(expr) {
  const stack = [];
  expr.split(" ").forEach(function(e) {
    if (e === "+") stack.push(stack.pop() + stack.pop());
    else if (e === "-") stack.push(-stack.pop() + stack.pop());
    else if (e === "*") stack.push(stack.pop() * stack.pop());
    else if (e === "/") stack.push((1 / stack.pop()) * stack.pop());
    else stack.push(parseFloat(e));
  });
  return stack[stack.length - 1] || 0;
}

// Practicing
function calcZ(exp) {
  return 1;
}

module.exports = calc;
