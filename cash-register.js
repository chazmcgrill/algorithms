// checks change availability and return cash receipt
function checkCashRegister(price, cash, cid) {
  let till = [
    { name: "ONE HUNDRED", unit: 100, count: 0 },
    { name: "TWENTY", unit: 20, count: 0 },
    { name: "TEN", unit: 10, count: 0 },
    { name: "FIVE", unit: 5, count: 0 },
    { name: "ONE", unit: 1, count: 0 },
    { name: "QUARTER", unit: 0.25, count: 0 },
    { name: "DIME", unit: 0.1, count: 0 },
    { name: "NICKEL", unit: 0.05, count: 0 },
    { name: "PENNY", unit: 0.01, count: 0 }
  ];
  // get total change using reduce and update quantity
  const totalChange = cid.reduce((acc, cur) => {
    const idx = till.indexOf(till.find(el => el.name === cur[0]));
    till[idx].quantity = Math.round(cur[1] / till[idx].unit);
    return cur[1] + acc;
  }, 0).toFixed(2);

  let changeDue = cash - price;

  if (changeDue.toFixed(2) === totalChange) {
    return { status: "CLOSED", change: cid };
  }

  // loop through till items create change count
  for (let el of till) {
    while (el.quantity && el.unit <= changeDue) {
      el.count++;
      el.quantity--;
      changeDue = (changeDue - el.unit).toFixed(2);
    }
  }

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  } 

  // format the change array
  const change = till
    .filter(el => el.count)
    .map(el => ([el.name, el.count * el.unit]));
  
  // return object with status and change
  return { status: "OPEN", change };
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00],["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
// should return an array.

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// should return a string.

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// should return a string.

// checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
// should return [["QUARTER", 0.50]].

// checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]])
// should return [["TWENTY", 60.00], ["TEN", 20.00], ["FIVE", 15.00], ["ONE", 1.00], ["QUARTER", 0.50], ["DIME", 0.20], ["PENNY", 0.04]].

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// should return "Insufficient Funds".

// checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// should return "Insufficient Funds".

// checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// // should return "Closed".