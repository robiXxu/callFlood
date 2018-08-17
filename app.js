const _ = require('lodash');

if( !_.every(["CF_ACCOUNT_SID", "CF_AUTH_TOKEN", "CF_VOICE_URL", "CF_TARGET_NUMBER", "CF_ACCOUNT_NUMBER"], key => !_.isUndefined(process.env[key]) && process.env[key].length) ) {
  console.error(" Please check your .env file and make sure you have completed as described in README.md");
  process.exit(-1);
}

const twilio = require('twilio');

const client = twilio(process.env.CF_ACCOUNT_SID, process.env.CF_AUTH_TOKEN);

client.calls
  .create({
    "url" : process.env.CF_VOICE_URL,
    "to": process.env.CF_TARGET_NUMBER,
    "from": process.env.CF_ACCOUNT_NUMBER
  })
  .then(call => console.log(`Called ${process.env.CF_TARGET_NUMBER}. SID ${call.sid}`))
  .catch(err => console.error(`[ERROR]: ${JSON.stringify(err)}`))
  .done();