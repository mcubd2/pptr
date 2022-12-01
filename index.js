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
// const cors = require("cors");



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


// async function get(url){
//     try{
//         const res=await axios.get(url)
//         const $= cheerio.load(res.data)
//         const genre=$('body').text()
//         console.log(genre)
//         console.log(res)



//         return genre

//     }
//     catch(eror){
//         console.error(eror)
//     }
// }

// var options = {
//     url: 'https://www.facebook.com/itsnayan007',
//     headers: {
//       'content-type': 'application/json',
//       'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
//     },

//   };

// var u
// request(options,(eror,response,html)=>{

// if(!eror && response.statusCode==200){
//     const $=cheerio.load(html)
//     // const final=$('body').children('div').html()
//     const final=$('body').html()
//     console.log(final)
//      u =final
// }


// })


// get('https://facebook.com')

app.listen(process.env.PORT || PORT, () => {//    console.log(`Server is running on PORT: ${PORT}`);
});

// app.use(cors({
//   origin: '*',
//   methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
// }));
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








app.post("/", async (req, res) => {


  res.send(await bgfind(req.body));
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

