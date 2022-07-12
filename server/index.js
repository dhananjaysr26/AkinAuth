const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("Hello From Server");
})

app.listen(process.env.PORT || 5002, () => console.log(`Server Running on PORT:${process.env.PORT || 5002}`))