const express = require('express');
const data = require('./data/data.json')
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors())

app.get('/',(reg, res)=>{
    res.send('chef server is running')
})



app.get('/categories/:id',(reg,res)=>{
    const id = reg.params.id;
    const chefItem = data.filter((item)=>item.category_id == id)
    res.send(chefItem);
})

app.listen(port, ()=>{
    console.log('chef server is running');
})