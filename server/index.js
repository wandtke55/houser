require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller');
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(dbInstance=>{
    app.set('db', dbInstance)
    console.log('CONNECTED TO THE DB')
}).catch(err=>console.log(err))

app.get('/api/houses', ctrl.getAll)

app.post('/api/house', ctrl.create)

app.delete(`/api/house/:id`, ctrl.delete)


app.listen(port, ()=>{
    console.log(`IM LISTENING ON PORT: ${port}`)
})