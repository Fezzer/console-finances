let totalMonths = finances.length;
let netTotal = 0;

finances.forEach(month => {
  let profit = month[1];

  netTotal += profit;
});

let output = ["Financial Analysis", "----------------------------"];
output.push(`Total Months: ${totalMonths}`);
output.push(`Total: £${netTotal}`);

console.log(output.join("\n"));