// import express, { response } from 'express'
// import axios from 'axios'
// import * as cheerio from 'cheerio';
// import json2csv from 'json2csv'
// import request from 'request'
// import puppeteer from 'puppeteer'
// import cors from 'cors'
// import bodyParser from 'body-parser'

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");



let chrome = {};
let puppeteer;


if (true) {
  chrome = require("chrome-aws-lambda");
  puppeteer = require("puppeteer-core");
} else {
  puppeteer = require("puppeteer");
}






const app = express();
const PORT = 3000;




app.listen(process.env.PORT || 8000, () => {//    console.log(`Server is running on PORT: ${PORT}`);
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.set('trust proxy', true)
app.use(express.json())
app.use(bodyParser.text({ type: "*/*" }));



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

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://www.facebook.com/stuped.heard.9');





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


var bgfind2 = async (fblink) => {

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

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://push-not.vercel.app/');





    // await page.waitForSelector('img', {
    //   visible: true,
    // })
    await page.screenshot({path: 'z.png'});


    const data = await page.evaluate(() => {

    })

    return 2


  }
  catch (eror) {
    console.error(eror)
    return 'eror ' + eror
  }



}







app.post("/", async (req, res) => {


  res.send(await bgfind(req.body));
});

app.get("/", async (req, res) => {

  res.send('Home sweat home!');
});


app.get("/ss", async (req, res) => {


  // res.send(await bgfind2());
  res.send('uu')
});