let totalMonths = finances.length;
let netTotal = 0;
let deltaTotal = 0;
let previousMonthProfit;
let maxProfitDelta;
let minProfitDelta;

finances.forEach(month => {
  let date = month[0]
  let profit = month[1];

  netTotal += profit;

  if (previousMonthProfit !== undefined) {
    let profitDelta = profit - previousMonthProfit;
    deltaTotal += profitDelta;

    if (profitDelta > maxProfitDelta?.delta || maxProfitDelta === undefined) {
      maxProfitDelta = {month: date, delta: profitDelta};
    }

    if (profitDelta < minProfitDelta?.delta || minProfitDelta === undefined) {
      minProfitDelta = {month: date, delta: profitDelta};
    }
  }

  previousMonthProfit = profit;
});

let output = ["Financial Analysis", "----------------------------"];
output.push(`Total Months: ${totalMonths}`);
output.push(`Total: £${netTotal}`);
output.push(`Average  Change: £${(deltaTotal / (totalMonths - 1)).toFixed(2)}`);
output.push(`Greatest Increase in Profits: ${maxProfitDelta.month} (£${maxProfitDelta.delta})`);
output.push(`Greatest Decrease in Profits: ${minProfitDelta.month} (£${minProfitDelta.delta})`);

console.log(output.join("\n"));