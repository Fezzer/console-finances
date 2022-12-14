class State {
  netTotal = 0;
  deltaTotal = 0;
  monthCount = 0;
  maxProfitDelta;
  minProfitDelta;

  processMonth(date, profit) {
    this.monthCount++;
    this.netTotal += profit;

    if (this.monthCount > 1) {
      let profitDelta = profit - this.previousMonthProfit;
      this.deltaTotal += profitDelta;
  
      if (profitDelta > this.maxProfitDelta?.delta || this.maxProfitDelta === undefined) {
        this.maxProfitDelta = {month: date, delta: profitDelta};
      }
  
      if (profitDelta < this.minProfitDelta?.delta || this.minProfitDelta === undefined) {
        this.minProfitDelta = {month: date, delta: profitDelta};
      }
    }
  
    this.previousMonthProfit = profit;

    return this;
  }

  generateOutput() {
    let output = ["Financial Analysis", "----------------------------"];
    output.push(`Total Months: ${this.monthCount}`);
    output.push(`Total: £${this.netTotal}`);
    output.push(`Average  Change: £${(this.deltaTotal / (this.monthCount - 1)).toFixed(2)}`);
    output.push(`Greatest Increase in Profits: ${this.maxProfitDelta.month} (£${this.maxProfitDelta.delta})`);
    output.push(`Greatest Decrease in Profits: ${this.minProfitDelta.month} (£${this.minProfitDelta.delta})`);

    return output.join("\n");
  }
}

let output = finances.reduce((a, c) => a.processMonth(c[0], c[1]), new State()).generateOutput();
console.log(output);
document.getElementById("output").innerText = output;