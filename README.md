# callFlood

### A nodejs bot to create programmable voice calls.

### Support

- [x] Twilio
- [ ] Nexmo

### Up and running 

> #### Clone the repo using:
```
git clone git@github.com:robiXxu/callFlood.git
```

> #### Install dependencies
```
yarn install
```
or ( if you are using npm )
```
npm install
```

> #### Run
```
yarn app
```
or ( if you are using npm )
```
npm app
```
or 
```
node -r dotenv/config app.js
```


### Before you run you need to rename .env-sample in .env and fill with your details.

#### Twilio

- Create a trial account. 
- Navigate to dashboard ( https://www.twilio.com/console ) and on the right panel you have ACCOUNT SID & AUTH TOKEN.
- Fill inside .env file CF_ACCOUNT_SID and CF_AUTH_TOKEN
- Click on Programmable Voice from menu ( https://www.twilio.com/console/voice/dashboard ) and Create a number by clicking on the Numbers submenu ( https://www.twilio.com/console/voice/numbers ) and follow the steps described there.
- Fill inside .env file CF_ACCOUNT_NUMBER
- Click on Runtime from Menu ( https://www.twilio.com/console/runtime/overview ) and navigate to TwiML Bins from the submenu ( https://www.twilio.com/console/runtime/twiml-bins )
- Create a new TwiML Bin by clicking + sign 
- Set a name 
- Set TwiML content as 
```
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say>Hello World!</Say>
</Response>
```
or if you want you can use mine ( which will play a mp3 until the call is over. )
```
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Play loop="0">
		  https://raw.githubusercontent.com/robiXxu/callFlood/master/files/muepsd.mp3
  	</Play>
</Response>
```
- Get the URL of that TwiML Bin and paste it into CF_VOICE_URL env var inside .env file.
- Set the target number inside .env file : CF_TARGET_NUMBER

(+40 is Country CODE for Romania - if you live in another country use yours: https://www.nationsonline.org/oneworld/country_code_list.htm )


## TODO
- [ ] actual flood ( now only one call is made - for testing purposes )
- [ ] support multiple targets
- [ ] support Nexmo
- [ ] update README
- [ ] drink a beer 
- [ ] do the same thing in python for fun 😅