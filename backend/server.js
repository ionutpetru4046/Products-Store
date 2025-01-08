// const express = require('express');
import express from 'express';

const app = express();

app.listen(5800, () => {
    console.log("Server started at http://localhost:5800");
})