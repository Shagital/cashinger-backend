'use strict'

const { Command } = require('@adonisjs/ace');
var InvestmentPlan = use('App/Models/InvestmentPlan');
var AssetTransaction = use('App/Models/AssetTransaction');

class Investment extends Command {
  static get signature () {
    return 'investment'
  }

  static get description () {
    return 'Check user investment to see if any changes need to be made'
  }

  getRate(currentRate) {
    return currentRate + (currentRate * this.generateRandomInteger(-4,3)/100);
  }

  async handle (args, options) {
    this.info('Starting...');
    let plan = await InvestmentPlan.find(1);
    for(let i = 0; i < 100; i++) {
      await this.process(plan);
    }

    this.error(`Capital: ${plan.amount}`)
    this.error(`Final balance: ${plan.amount + (plan.amount * (plan.percent/100))}`)

    process.exit();
  }

  async process (plan) {
    //this.info(`Original Value: ${plan.current_rate}|${plan.current_rate * plan.amount}`);

    let currentRate = parseFloat(plan.current_rate); // rate as at last investment cycle. Will be 0 if no previous cycle
    let newRate = this.getRate(currentRate); // API get new rate of asset
   // this.warn(`New Value: ${newRate}|${newRate * plan.amount}`);

    let percentDiff = this.roundUp(((newRate - currentRate)/currentRate) * 100); //get percent diff between last rate and new rate
    let newOriginal = this.getRate(plan.original_rate); // API
    let originPercentDiff = this.roundUp(((newOriginal - plan.original_rate)/plan.original_rate) * 100); //get percent diff between original rate and new rate
    //this.error(`Percent Diff: ${percentDiff|newRate}`);
    // this.error(`Orig Diff: ${originPercentDiff}`);

    if(
      plan.current_rate > 0
      && plan.balance === 0
      && percentDiff >= plan.sell_when
    ) {

      let lastTran = await AssetTransaction.query()
        .where('type', 'buy')
        .where('investment_plan_id', plan.id,)
        .orderBy('id', 'desc')
        .first();

      let amount = parseFloat(lastTran.amount);

      // this is supposed to connect to API to sell asset
      let newAmount = this.roundUp(amount + (amount * (percentDiff/100)));
      this.success(`Time to sell ${this.roundUp(newRate, 8)}|${percentDiff}%|${newAmount}`);

      await AssetTransaction.create({
        type : 'sell',
        investment_plan_id : plan.id,
        amount: newAmount,
        description: `Asset sale when price increased by ${amount}|${percentDiff}%|${newAmount}`
      });

      // add percent gain
      plan.current_rate = this.roundUp(newRate); // set rate as new rate for next cycle
      plan.balance = newAmount; // get new balance after sale
      plan.percent = this.roundUp(((plan.balance - plan.amount)/plan.amount) * 100, 2);
      await plan.save();
    }
    else if(
      plan.current_rate > 0
      && plan.balance > 0
      && percentDiff <= plan.buy_when
    ) {

      let assetTran = await AssetTransaction.create({
        type : 'buy',
        investment_plan_id : plan.id,
        amount: plan.balance,
        description:`Asset purchase when price dropped to ${plan.buy_when}|${percentDiff}%`
      });

     // plan.percent = plan.percent + (((newRate - plan.current_rate)/plan.current_rate) * 100);
      plan.current_rate = this.roundUp(newRate);
      plan.balance = 0;
      await plan.save();
      this.warn(`Time to buy ${this.roundUp(newRate, 8)}|${assetTran.amount}|${percentDiff}%`);
    }
    else if(
      plan.balance > 0
      && plan.current_rate === 0
      && plan.start !== 0
      && originPercentDiff <= plan.start
    ) {

      await AssetTransaction.create({
        type : 'buy',
        investment_plan_id : plan.id,
        amount: plan.amount,
        description:`Initial Asset purchase at ${plan.start}|${originPercentDiff}%`
      });

      // we don't need to calculate gain on purchase
      // plan.percent = this.roundUp(((newOriginal - plan.original_rate)/plan.original_rate) * 100);
      // console.log(newOriginal, plan.original_rate)
      plan.current_rate = this.roundUp(newOriginal);
      plan.balance = 0;
      await plan.save();
      this.info(`Time to Buy Initial ${this.roundUp(newRate, 8)}|${plan.amount}|${plan.start}|${originPercentDiff}%`);
    } else if(
      plan.balance > 0
      && plan.current_rate === 0
      && plan.start === 0
    ) {

      await AssetTransaction.create({
        type : 'buy',
        investment_plan_id : plan.id,
        amount: plan.amount,
        description:`Immediate Asset purchase ${plan.amount}`
      });

      // we don't need to calculate gain on purchase
      // plan.percent = this.roundUp(((newOriginal - plan.original_rate)/plan.original_rate) * 100);
      // console.log(newOriginal, plan.original_rate)
      plan.current_rate = this.roundUp(newOriginal);
      plan.balance = 0;
      await plan.save();
      this.info(`Immediate Asset Purchase ${plan.amount}`);
    } else {
     // this.error('Nothing happened');
    }

  }

  roundUp(num, places = 5) {
    return +(Math.round(num + `e+${places}`)  + `e-${places}`);
  }

  generateRandomInteger(min, max) {
    return Math.floor(min + Math.random()*(max + 1 - min))
  }
}

module.exports = Investment
