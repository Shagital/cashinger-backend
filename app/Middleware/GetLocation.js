'use strict'
const fetch = require('node-fetch');
const Env = use('Env')
const {bugsnagLogger:logger} = use('App/Common/helpers')

class GetLocation {
  async handle ({ request, params, response }, next) {
    const ip = request.ip();
    let url =`http://api.ipstack.com/${ip}?access_key=${Env.get('IPSTACK_KEY')}`;
    await fetch(url)
      .then(res => res.json())
      .then(json => request.location = {
        country : json.country_code,
        region : json.region_code,
        city : json.city,
      }).catch((e) => {
        // in case IP request fails, set fallback so actual request can proceed
        request.location = {};
        logger(e, request);
      });
      await next();
  }
}

module.exports = GetLocation
