# helbiz

This is small API written in Node.js v16.6.1.
There are two routes:
 * for adding new Witness to the api
 * for returning all witnesses
 
 All data is saved in json file on the server, which acts as database.
 The other details about task can be seen in **Back-end Task.pdf** file.



# Node.js 
As stated already this was tested on Node  v16.6.1 (so we can install nvm to use it for this version)

Open terminal inside server folder and type
```javascript
npm install
```
Rename .env.example  to .env
Inside .env files update value for GEO_API_KEY which you get when you register on https://geo.ipify.org/ .

Type command to start the server
```javascript
npm run start
```

The comand to start server in dev mode
```javascript
npm run dev
```

The url of swagger documentation: http://localhost:3000/api-docs/
