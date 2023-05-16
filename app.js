const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/',(req, res)=>{

    const items = [
        {company:'Google',ceo:'Sundar Pichai'},
        {company:'Tesla',ceo:'Elon Musk'},
        {company:'Reliance',ceo:'Mukesh Ambani'},
        {company:'Meta',ceo:'Mark Zuckerberg'},
        {company:'Netflix',ceo:'Reed Hastings'},
    ]

    res.render('index', { items });
})