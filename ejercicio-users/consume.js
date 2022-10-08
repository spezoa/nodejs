const {users, find} = require('./userArray');

find('marcus', users)
.then((value)=> console.log(value))
.catch((err) => console.error(err))