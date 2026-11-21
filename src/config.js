const fs = require('node:fs');
const path = process.env.DB_PASSWORD_FILE;
if (!path) throw new Error('DB_PASSWORD_FILE required');
const password = fs.readFileSync(path, 'utf8').trim();
if (!password) throw new Error('Credential file empty');
module.exports={port:Number(process.env.PORT||3000),db:{host:process.env.DB_HOST||'db',port:5432,user:'events',password,database:'events'}};
