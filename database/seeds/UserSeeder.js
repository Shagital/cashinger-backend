'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use('App/Models/User')
const Investment = use('App/Models/Investment')
const InvestmentPlan = use('App/Models/InvestmentPlan')
const Asset = use('App/Models/Asset')
const InvestmentOption = use('App/Models/InvestmentOption')

class UserSeeder {
  async run () {
    await InvestmentOption.createMany([
      {name:'cryptocurrency'},
      {name:'stock'},
      {name:'forex'},
      ]);

    let user = await User.create({
      username : 'testuser',
      email : 'testuser@gmail.com',
      password: 'testuser',
      wallet: 500
    });

    let investment = await Investment.create({
      amount:200,
      status:'running',
      use_crypto:true,
    });

    user.wallet = user.wallet - 200;

    let asset = await Asset.create({
      name:'bitcoin',
      code:'BTC',
      rate:0.000074, // amount per dollar
      prev_rate:0.000072,
    });

    let data = {
      investment_id:investment.id,
      asset_id:asset.id,
      status:'running',
      amount: 50, //in USD,
      balance: 50, //in USD,
      current_rate: 0,
      original_rate: asset.rate,
      percent: 0,
      start:-1.3,
      sell_when:2.56,
      buy_when: -3.78
    };

    //data.reversed_amount = data.current_rate/data.converted_amount;
    let investmentPlan = await InvestmentPlan.create(data);
    investment.amount = investment.amount - 50;
    await investment.save();
    await user.save();
  }
}

module.exports = UserSeeder
