let totalMonths = finances.length;
let netTotal = 0;
let deltaTotal = 0;

finances.forEach(month => {
  let profit = month[1];

  netTotal += profit;

  if (previousMonthProfit !== undefined) {
    let profitDelta = profit - previousMonthProfit;
    deltaTotal += profitDelta;
  }

  previousMonthProfit = profit;
});

let output = ["Financial Analysis", "----------------------------"];
output.push(`Total Months: ${totalMonths}`);
output.push(`Total: £${netTotal}`);
output.push(`Average  Change: £${(deltaTotal / (totalMonths - 1)).toFixed(2)}`);

console.log(output.join("\n"));