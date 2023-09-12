const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./routes/valide')
app.set('port', process.env.PORT || 9000)
/*const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'abc123',
    database: 'library'
}

// middlewares -------------------------------------
app.use(myconn(mysql, dbOptions, 'single'))*/
app.use(express.json())
app.use(cors)
// routes -------------------------------------------
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
//app.use('/api', routes)


app.use('/token', function(req, res) {
    res.locals.title = "Dashboard";
    res.render("dashboard");
});
// server running -----------------------------------
app.listen(app.get('port'), ()=>{
    console.log('server running on port', app.get('port'))
})