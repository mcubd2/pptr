// import express, { response } from 'express'
// import axios from 'axios'
// import * as cheerio from 'cheerio';
// import json2csv from 'json2csv'
// import request from 'request'
// import puppeteer from 'puppeteer'
// import cors from 'cors'
// import bodyParser from 'body-parser'

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const moment=require('moment-timezone');
const  fetch =require('node-fetch')
const bodyParser=require('body-parser') 
//const request = require('request');







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

app.listen(process.env.PORT || 8000, () => {//    console.log(`Server is running on PORT: ${PORT}`);
});

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
// app.set('trust proxy', true)
// app.use(express.json())
app.use(bodyParser.text({ type: "*/*" }));

var DB = 'mongodb+srv://zayn:1221@cluster0.fzxdoyt.mongodb.net/db1?retryWrites=true&w=majority'; mongoose.connect(DB)
  .then(() => { console.log('con suc') }).catch((err) => { console.log(err) })
var schema =new mongoose.Schema({ data: String, ram: String, device: String, platform: String, date: String, ip: String, num: String, media: String,fname:String,links:String,name:String,trash:String })
var collec = new mongoose.model('multis', schema)




/* var bgfind = async (fblink) => {

  try {

    const regex = /^.+facebook/;
    const fblinkregex = fblink.replace(regex, 'https://www.facebook');


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



    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto("https://www.facebook.com/login");





    // await page.waitForSelector('img', {
    //   visible: true,
    // })

    await page.type('[name=email]','flameriser782@gmail.com')
    await page.type('[name=pass]','Pcgamesop1221')
    await page.click('[type=submit]')
    await page.waitForNavigation()

        await page.goto(fblink);
        await page.waitForSelector('img', {
      visible: true,
    })



    // await page.screenshot({path:'z.jpg'})

    const data = await page.evaluate(() => {
      const images = document.querySelectorAll('img');
      const body = document.querySelector('body');


      const urls = Array.from(images).map(v => v.src);

      const objj = Object.assign({}, urls);

      // return body.innerHTML
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

  try {
    let options = {};
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      options = {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: false,
        ignoreHTTPSErrors: true,
      };
    }


    const browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto('https://nodebd.vercel.app/z');


    await page.waitForSelector('img', {
      visible: true,
    })

    const data = await page.evaluate(() => {
      const ar = []
      for (const i of document.getElementById('cont').children) {
        console.log(i.getElementsByClassName('link')[0].innerText)
        ar.push(i.getElementsByClassName('link')[0].innerText)
      }

      return ar
    })

    await page.close();
    return data



  }
  catch (eror) {
    console.error('eror ' + eror)
    return 'eror ' + eror
  }



}
*//*
var bgfind3 = async (fblink) => {

  try {
    let options = {};
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      options = {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: false,
        ignoreHTTPSErrors: true,
      };
    }
    var arr=[]


    const browser = puppeteer.launch(options);

    const createInstance = async (url) => {
      let real_instance = await browser;
      let page = await real_instance.newPage();
      await page.goto(url);
      await page.waitForSelector('img', { visible: true, })
      const data = await page.evaluate(() => {
        const ar = []
        for (const i of document.getElementById('cont').children) {
          console.log(i.getElementsByClassName('link')[0].innerText)
          ar.push(i.getElementsByClassName('link')[0].innerText)
        }

        return ar
      })


      await page.close();
      return data
    }
    

    // add tasks to queue
    var urls=['j','k','m']
    for (let i of urls) {
      if(i=='j'){
        arr.push(createInstance('https://mcubd.netlify.app/'))
      }else if(i=='k'){
        arr.push(createInstance('https://mcubd.netlify.app/marvel/'))
      }else{
        arr.push(createInstance('https://mcubd.netlify.app/others'))
      }
    }
   var v= await Promise.all(arr)
   

    return v

  }
  catch (eror) {
    console.error('eror ' + eror)
    return 'eror ' + eror
  }



}
*/

//---------------------
   var gdrive = async (gdlink) => {

  try {
    let options = {};
    if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
      options = {
        args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
        defaultViewport: chrome.defaultViewport,
        executablePath: await chrome.executablePath,
        headless: false,
        ignoreHTTPSErrors: true,
      };
    }
    var arr=[]
var url="https://youtu.be/dXjKh66BR2U?si=FvuTvalLS34CJhYq"


    const browser = puppeteer.launch(options);
      let real_instance = await browser;
      let page = await real_instance.newPage();
    await page.goto("https://en.savefrom.net/");
      
    await page.waitForSelector('input', { visible: true, })
     //await page.type('[name=sf_url]',JSON.stringify(a))
    await page.keyboard.type(JSON.stringify(url));
    await page.click('[type=submit]')
    await page.waitFor(8000)
    await page.waitForSelector('a', { visible: true, })
      const data = await page.evaluate(async () => {
        
        var divs = document.querySelectorAll('a')
        const urls =Array.from(divs).map(v => v.href)
        return urls
      })
    await page.close();
      return data

    const createInstance = async (url) => {
      
      let real_instance = await browser;
      let page = await real_instance.newPage();
      
      
      await page.goto("https://drive.google.com/u/4/uc?id=1PEkrNN4T2ZoqwDrpMU9Oeq8Go8AytqLw&export=download");
       await page.waitForSelector('form', { visible: true, })
      
      const data = await page.evaluate(() => {

        return "document.getElementsByTagName()"
        const ar = []
        for (const i of document.getElementById('cont').children) {
          console.log(i.getElementsByClassName('link')[0].innerText)
          ar.push(i.getElementsByClassName('link')[0].innerText)
        }

        return ar
      })


      await page.close();
      return data
    }

   return  createInstance();
    

    // add tasks to queue
    var urls=['j','k','m']
    for (let i of urls) {
      if(i=='j'){
        arr.push(createInstance('https://mcubd.netlify.app/'))
      }else if(i=='k'){
        arr.push(createInstance('https://mcubd.netlify.app/marvel/'))
      }else{
        arr.push(createInstance('https://mcubd.netlify.app/others'))
      }
    }
   var v= await Promise.all(arr)
   

    return v

  }
  catch (eror) {
    console.error('eror ' + eror)
    return 'eror ' + eror
  }



}




app.post("/", async (req, res) => {
  res.send(await bgfind(req.body));
});

app.get('/links',async (req,res)=>{
  res.send(await bgfind3())
})
app.get('/go',async (req,res)=>{
 // request('https://drive.google.com/uc?export=download&id=1PEkrNN4T2ZoqwDrpMU9Oeq8Go8AytqLw', function (error, response, body) {
 // console.log(response.statusCode); 
 // console.log('body:', body);
   // if( await response.statusCode==200){
      // res.send(await body)
   // }
    res.send("--90")
});
  

app.get('/yt',async (req,res)=>{
  res.send(await gdrive())
})

app.get("/uplinks", async (req, res) => {
  if(JSON.stringify(await bgfind3())[1] == '['){
  var b= await collec.updateMany({name:'mcubd_links'}, { $set: { links: JSON.stringify( await bgfind3()) ,date:moment().tz('Asia/dhaka').format('h:m a,D/M/YY') } });
  // console.log(typeof(JSON.stringify( await bgfind3())))
  res.send(JSON.stringify(b) +' '+  await bgfind3() );

  }else{
    var b= await collec.updateMany({name:'mcubd_links'}, { $set: { trash: JSON.stringify(moment().tz('Asia/dhaka').format('h:m a,D/M/YY')+'---' +await bgfind3()) ,date:moment().tz('Asia/dhaka').format('h:m a,D/M/YY') } });
  res.send('something wrong!!!');
  }
});


app.get('/z',(req,res) => {
 setTimeout(() => {
  res.send(process.version)
 }, 00);
})
// console.log(moment().tz('Asia/dhaka').format('h:m a,D/M/YY'))


app.get("/", async (req, res) => {
  res.send('Home gsweat hommop!');
});

app.get('/fb',async (req,res) => {
  var g= await fetch(req.query['link'],{
    method:"GET", 
    headers:{
      // ":authority":"www.facebook.com",
      // ":method":"GET",
      // ":path":"/",
      // ":scheme":"https",
      "accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding":"gzip, deflate, br",
      "accept-language":"en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7",
      "cache-control":"max-age=0",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
        "sec-ch-ua":'"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        "sec-ch-ua-platform":"Windows"

      }
  })

console.log()

  res.send(await g.text())
 
})

async function a(){
var g= await fetch('https://www.facebook.com/profile.php?id=100007193401802')

console.log(await g.text())

}


