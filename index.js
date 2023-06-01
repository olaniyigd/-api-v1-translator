const express = require('express');
const app = express();
const router = require('./routes/router');
const port = 5000;
// const cors = require("cors")

// app.use(cors())

app.use("/", router);

app.listen(port, ()=>{
    console.log(`server started on ${port} successfully`);
})
