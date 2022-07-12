const express = require('express');

const app = express();


app.get("/", (req, res) => {
    res.status(200).send("Hello From Auth Server");
})

app.listen(process.env.PORT || 5001, () => console.log(`Auth Server Running on PORT:${process.env.PORT || 5001}`))