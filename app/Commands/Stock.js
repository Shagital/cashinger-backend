'use strict'

const { Command } = require('@adonisjs/ace');
const Alpaca = require('@alpacahq/alpaca-trade-api')
const alpaca = new Alpaca({
  paper : true,
  keyId:'PK13CP8AL25YHHNE1UKX',
  secretKey:'5BpNEKNtBcML7fjBuSlyQaKoJqE59LHbW3tNdGxU'
})

class Stock extends Command {
  static get signature () {
    return `stock
            {--type=@value: Set target}`
  }

  static get description () {
    return 'Change price of random crypto'
  }

  getAssets() {
    // Get a list of all active assets.
    alpaca.getAssets({
      status: 'active'
    }).then((activeAssets) => {
      // Filter the assets down to just those on NASDAQ.
     // const nasdaqAssets = activeAssets.filter(asset => asset.exchange == 'NASDAQ')
      console.log('assets', activeAssets)
    })
  }

  getPrice(symbol = 'AAPL') {
    // Get daily price data for AAPL over the last 5 trading days.
   alpaca.getBars(
      'day',
      symbol,
      {
        limit: 1
      }
    ).then((barset) => {
      console.log('price', barset);
    })
  }

  placeOrder(symbol = 'AAPL') {
    //Submit a market order to buy 1 share of Apple at market price
    alpaca.createOrder({
      symbol: symbol,
      qty: 1,
      side: 'buy',
      type: 'market',
      time_in_force: 'day'
    }).then(res => {
      console.log('order', res)
    });
  }

  async handle (args, options) {
    switch (options.type) {
      case 'assets':
        this.getAssets();
        break;
      case 'price':
        this.getPrice('ABR-B');
        break;
      case 'order':
        this.placeOrder('ABR');
        break;
      default:
        this.error('Invalid option');
        break;
    }
  }
}

module.exports = Stock
