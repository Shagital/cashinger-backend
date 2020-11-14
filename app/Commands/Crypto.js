'use strict'

const { Command } = require('@adonisjs/ace');
const crypto = require('crypto');
const request = require('request');
const publicKey = 'GHqXhxObD605uUSOyhrGF2VfrOSP6SVtgm8G2H6K';
const privateKey = '';
const baseUrl = 'https://quidax.com'

var Client = require('coinbase').Client;

var client = new Client({
  'apiKey': 'XVVHTNVUotyfFfON',
  'apiSecret': '1bARRala2kjewFeKTM4k9BEwXKW2FR7d',
  'version':'2020-11-01'
});

class Crypto extends Command {
  static get signature () {
    return `crypto
            {--type=@value: Set target}`
  }

  static get description () {
    return 'Change price of random crypto'
  }

  async handle (args, options) {

    switch (options.type) {
      case 'primary':
        client.getAccount('primary', function(err, account) {
          console.log('account', account);
        });
        break;
      case 'payment-methods':
        client.getPaymentMethods({}, function(err, paymentMethods) {
          console.log('payment-methods', paymentMethods);
        });
        break;
      case 'accounts':
        client.getAccounts({}, function(err, accounts) {
          console.log(accounts);
        });
        break;
      case 'price':
        client.getBuyPrice({'currencyPair': 'BTC-USD'}, function(err, obj) {
          console.log('total amount: ',  obj);
        });
        break;
      case 'sell':
        let args = {
          "amount": "12",
          "currency": "BTC"
        };
        client.getAccount('primary', function(err, account) {
          account.sell(args, function (err, xfer) {
            console.log('my xfer id is: ' + xfer.id);
          });
        });
        break;
      case 'send':
        let arg = {
          "to": "user1@example.com",
          "amount": "1.234",
          "currency": "BTC",
          "description": "Sample transaction for you"
        };
        client.getAccount('primary', function(err, account) {
          account.sendMoney(arg, function (err, txn) {
            console.log('my txn id is: ' + txn.id);
          });
        });
        break;
      default:
        let url = `/api/v2/orders?access_key=${publicKey}&market=btcngn&price=4000&side=buy&tonce=${Date.now()}&volume=1`
        let hmac = this.getHmac(publicKey, `GET|${url}`)
        url += `&signature=${hmac}`
        request({
          method:'GET',
          url:`${baseUrl}${url}`,
          headers: {
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip, deflate, br'
          }
    }, (err,httpResponse,body) => {
          console.log('http', httpResponse.toJSON().body);
        });
        break;
    }
  }

  getHmac(key, text) {
    return crypto.createHmac('sha256', key)
      .update(text)
      .digest('hex')
  }
}

module.exports = Crypto
