// const express = require('express');
// server.js

import express from 'express';

const app = express();

app.get("/products", (req, res) => {
    res.send(data.products);
});

app.listen(5800, () => {
    console.log("Server started at http://localhost:5800");
})
