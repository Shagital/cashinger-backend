'use strict'
const Env = use('Env');
const Alpaca = require('@alpacahq/alpaca-trade-api')

class Stock {
  constructor(paper, keyId, secretKey) {
    this.alpaca = new Alpaca({
      paper : !!paper || !!Env.get('ALPHACA_LIVE'),
      keyId: keyId || Env.get('ALPHACA_KEY_ID'),
      secretKey: secretKey || Env.get('ALPHACA_SECRET_KEY')
    });

    return this;
  }

  getAssets() {
    // Get a list of all active assets.
    this.alpaca.getAssets({
      status: 'active'
    }).then((activeAssets) => {
      // Filter the assets down to just those on NASDAQ.
      // const nasdaqAssets = activeAssets.filter(asset => asset.exchange == 'NASDAQ')
      console.log('assets', activeAssets)
    })
  }

  getPrice(symbol = 'AAPL') {
    // Get daily price data for AAPL over the last 5 trading days.
    this.alpaca.getBars(
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
    this.alpaca.createOrder({
      symbol: symbol,
      qty: 1,
      side: 'buy',
      type: 'market',
      time_in_force: 'day'
    }).then(res => {
      console.log('order', res)
    });
  }
}

module.exports = Stock
