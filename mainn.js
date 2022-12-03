// import express, { response } from 'express'
// import axios from 'axios'
// import * as cheerio from 'cheerio';
// import json2csv from 'json2csv'
// import request from 'request'
// import puppeteer from 'puppeteer'
// import cors from 'cors'
// import bodyParser from 'body-parser'

var RegexParser = require("regex-parser");


const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");



let chrome = {};
let puppeteer;


if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}






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



var bgfind = async (fblink) => {

  let options = {};

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
  }





  try {

    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto(fblink);





    await page.waitForSelector('img', {
      visible: true,
    })


    const data = await page.evaluate(() => {
      const images = document.querySelectorAll('img');

      const urls = Array.from(images).map(v => v.src);

      const objj = Object.assign({}, urls);


      return objj
    })

    return data


  }
  catch (eror) {
    console.error(eror)
    return 'eror ' + eror
  }



}




var i='httpsas:///m.facebook.com/itsnayan007'


const regex = /^.+facebook/; 
const result = i.replace(regex, 'https://www.facebook');

console.log(result);






app.post("/", async (req, res) => {


  res.send(await bgfind(req.headers.data));

});

app.get("/", async (req, res) => {

  res.send('Home sweat home!');
});


app.get("/api", async (req, res) => {
  let options = {};

  if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
    options = {
      args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
      defaultViewport: chrome.defaultViewport,
      executablePath: await chrome.executablePath,
      headless: true,
      ignoreHTTPSErrors: true,
    };
  }

  try {

    let browser = await puppeteer.launch(options);

    let page = await browser.newPage();
    await page.goto("https://www.google.com");
    res.send(await page.title());
  } catch (err) {
    console.error(err);
    return 'eror '+ err
  }
});

