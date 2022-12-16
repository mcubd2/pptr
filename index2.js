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
const PORT = 80; 



app.listen( PORT, () => {//    console.log(`Server is running on PORT: ${PORT}`);
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

app.post("/", async (req, res) => {


  res.send('kk');

});


app.get("/", async (req, res) => {

  console.log(req.ip)
  res.sendFile(__dirname+'/1.html');
});  




