// import express, { response } from 'express'
// import axios from 'axios'
// import * as cheerio from 'cheerio';
// import json2csv from 'json2csv'
// import request from 'request'
// import puppeteer from 'puppeteer'
// import cors from 'cors'
// import bodyParser from 'body-parser'

const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");











const app = express();
const PORT = 3000;



app.listen(process.env.PORT || PORT, () => {//    console.log(`Server is running on PORT: ${PORT}`);
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
// app.set('trust proxy', true)
// app.use(express.json())
// app.use(bodyParser.text({ type: "*/*" }));












app.post("/", async (req, res) => {


  res.send('kk');

});

app.get("/", async (req, res) => {

  // console.log(req.headers)
  res.send('Home sweat home!');
});




