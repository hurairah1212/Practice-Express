const express = require('express');
const app = express();
const port= 8000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req,res,next)=>{
    console.log("middle ware 1");
    next(); 

})
app.use((req,res,next)=>{
    console.log("middle ware 2");
    next();

})
app.get('/', (req, res, next)=>{
    console.log("get request");
    next();
})
app.get('/final', (req, res, next)=>{
    console.log("final middleware");
    res.status(200).send(" Hello from Abbottabad");9
    
})



app.listen( port, ()=>{
    console.log(`Server is running on http://localhost:${port}`)
});

