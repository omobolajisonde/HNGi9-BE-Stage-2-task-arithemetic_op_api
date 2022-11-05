const parseWordProblem = (str) => {
  const wordProblem = str.replace(/,/g, ""); // removes , from the str
  const ops = ["add", "plus", "sub", "minus", "times", "multi"];
  const words = wordProblem.split(" ");
  let op_type;
  for (let op of ops) {
    if (wordProblem.includes(op)) {
      op_type = op;
      break;
    }
  }
  const nums = [];
  for (let word of words) {
    if (!+word) continue;
    nums.push(+word);
  }
  return {
    op_type,
    nums,
  };
};

exports.solveArithemeticOp = (req, res, next) => {
  try {
    let { operation_type, x, y } = req.body;
    operation_type = operation_type.toLowerCase(); // converts the operation or word problem to lowercase
    let result;

    const operations = ["addition", "subtraction", "multiplication"]; // allowed operations
    if (operations.includes(operation_type)) {
      // checks if it is an operation
      if (operation_type === operations[0]) {
        result = x + y;
      } else if (operation_type === operations[1]) {
        result = x - y;
      } else {
        result = x * y;
      }
      return res.status(200).json({
        slackUsername: "Omobolaji Sonde",
        operation_type,
        result,
      });
    } else {
      // Takes care of word problem
      const { op_type, nums } = parseWordProblem(operation_type); // parses word problem and returns the operation type and an array of integers
      let arith_op_type;
      if (op_type === "plus" || op_type === "add") {
        arith_op_type = "addition";
        result = nums.reduce((curr_num, num) => curr_num + num, 0);
      } else if (op_type === "minus" || op_type === "sub") {
        arith_op_type = "subtraction";
        result = nums[0] - nums[1];
      } else if (op_type === "times" || op_type === "multi") {
        arith_op_type = "multiplication";
        result = nums.reduce((curr_num, num) => curr_num * num, 1);
      }
      return res.status(200).json({
        slackUsername: "Omobolaji Sonde",
        operation_type: arith_op_type,
        result,
      });
    }
  } catch (error) {
    return next(error);
  }
};
