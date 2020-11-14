'use strict'
const {random} = use("App/Common/helpers")
/*
|--------------------------------------------------------------------------
| AuthSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');
const Investment = use('App/Models/Investment');
const InvestmentPlan = use('App/Models/InvestmentPlan');
const InvestmentOption = use('App/Models/InvestmentOption');
const Asset = use('App/Models/Asset');
const {randomNumber} = use('App/Common/helpers');

class UserSeeder {
  async run () {
    console.info('running auth seeder');
    let user = await Factory
      .model('App/Models/User')
      .create({
        email : 'djunehor@gmail.com',
        password : 'password'
      });

    await Factory
      .model('App/Models/User')
      .create({
        email : 'kofacts@gmail.com',
        password : 'password',
      });

    let invAmount = randomNumber(50,100);
    let asset = await Asset.find(randomNumber(1,3));
    let invOp = await InvestmentOption.find(randomNumber(1,3));
    let investment = await Investment.create({
      amount:invAmount,
      status:'running',
      investment_option_id:invOp.id,
      asset_id:asset.id,
    });

    let customer = await Factory
      .model('App/Models/Customer')
      .create({
        user_id : user.id,
        wallet : randomNumber(10000, 100000)
      });

    customer.wallet = customer.wallet - invAmount;


    let a = randomNumber(50, 100)
    let data = {
      investment_id:investment.id,
      asset_id:asset.id,
      status:'running',
      amount: a, //in USD,
      balance: a, //in USD,
      current_rate: 0,
      original_rate: asset.rate,
      percent: 0,
      start:-1.3,
      sell_when:2.56,
      buy_when: -3.78
    };

    //data.reversed_amount = data.current_rate/data.converted_amount;
    let investmentPlan = await InvestmentPlan.create(data);
    investment.amount = investment.amount - a;
    await investment.save();
    await user.save();
  }
}

module.exports = UserSeeder
