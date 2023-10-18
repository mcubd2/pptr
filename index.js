// import express, { response } from 'express'
// import axios from 'axios'
// import * as cheerio from 'cheerio';
// import json2csv from 'json2csv'
// import request from 'request'
// import puppeteer from 'puppeteer'
// import cors from 'cors' 
// import bodyParser from 'body-parser'

const express = require("express");
//const mongoose = require("mongoose");
const cors = require("cors");
const moment = require('moment-timezone');
//const  fetch =require('node-fetch')
//const bodyParser=require('body-parser') 
const path = require('path');
//const { chromium } = require('playwright');
//const request = require('request');
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium-min");
//const chromium = require('chromium');
//import { initializeApp } from "firebase/app";
const firebase = require('firebase/app');
const db =require("firebase/database");
const axios = require('axios');



const config = {
  apiKey: "AIzaSyBzaFL1XOU-_152duOo0baL1DfgVVuSwMI",
  authDomain: "test2-5bbd8.firebaseapp.com",
  databaseURL: "https://test2-5bbd8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test2-5bbd8",
  storageBucket: "test2-5bbd8.appspot.com",
  messagingSenderId: "683307239625",
  appId: "1:683307239625:web:d28ed1c2fb6b31dd4e6518"
};
const fapp = firebase.initializeApp(config);
const database = db.getDatabase(fapp);

var getjson=async function (){
  const dbRef = db.ref(db.getDatabase());
var stringg = (await db.get(db.child(dbRef, `Name`))).val()
return string
}
var updt_webapp=async function (ndata){
  db.update(db.ref(database,"multi/webapp"), { data  : ndata,last_updated:moment().tz('Asia/dhaka').format('h:m a,D/M/YY') });
}
updt_webapp("-uu৳+")
//const dbref = db.ref(D.getDatabase());


//db.update(db.ref(database,"multi/webapp"), { data  :" com " });
let chrome = {};
//let puppeteer;
 

if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
  console.log("----------------running-on-lamda------------")
  //chrome = require("chrome-aws-lambda");
  //  puppeteer = require("puppeteer-core");
} else {
  // puppeteer = require("puppeteer");
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
//app.use(bodyParser.text({ type: "*/*" }));

//var DB = 'mongodb+srv://zayn:1221@cluster0.fzxdoyt.mongodb.net/db1?retryWrites=true&w=majority'; mongoose.connect(DB)
// .then(() => { console.log('con suc') }).catch((err) => { console.log(err) })
//var schema =new mongoose.Schema({ data: String, ram: String, device: String, platform: String, date: String, ip: String, num: String, media: String,fname:String,links:String,name:String,trash:String })
//var collec = new mongoose.model('multis', schema)

//var DB = 'mongodb+srv://zayn:1221@cluster0.fzxdoyt.mongodb.net/db1?retryWrites=true&w=majority'; mongoose.connect(DB)
 // .then(() => { console.log('connected to the db') }).catch((err) => { console.log(err) })
//var multis_schema = new mongoose.Schema({ name: String, data: String, last_updated: String })
//var collec = new mongoose.model('multis', multis_schema)


var web1 = async (url) => {

  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://en.savefrom.net/"
  var aa = url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
  await page.screenshot({ path: 'step--11.png' })
  await page.type('input[id=sf_url]', aa)
  await page.click('button[type=submit]')
  await page.waitForTimeout(10000)
  const data = await page.evaluate(async () => {
    var urlss = document.querySelectorAll('a')
    const urls = Array.from(urlss).map(v => v.href)
    return urls
  })
  console.log(data)

  const scr = await page.screenshot({ path: 'final.png' })

  await browser.close();
  return data
}

var web2 =async function (url){
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://save.tube/"
  var aa = url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
  //await page.screenshot({ path: 'step--11.png' })
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.click('input[type=submit]')
  await page.waitForTimeout(6000)  
  //await page.screenshot({ path: 'step--21.png' })
  const data  = await page.evaluate(async () => {
    var urlss = document.querySelectorAll('.downloadBtn')
    const urls = Array.from(urlss).map(v => v.href)
    return urls 
  })
  //var data =dat 
  const regv = /mime=video%2Fmp4&cnr/i;

  var fdata = data.filter(function(item,index){
    return regv.test(data[index])
     });
//console.log(results.length )
  console.log(fdata)
   //const scr = await page.screenshot({ path: 'final.png' })
  //await browser.close();
  axios({
  method: 'post',
  url: 'https://gifted-pear-loincloth.cyclic.cloud/chatnot',
  data:fdata
});

return fdata[0]
}

//console.log(Math.random())
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
    chromium.setHeadlessMode = true;
    chromium.setGraphicsMode = false;
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
      headless: chromium.headless,
    })

    const page = await browser.newPage();
    await page.goto("https://x2mate.com/");
    await page.waitForTimeout(3000)
    await page.type('#getlinks', 'url')
    //const screenshot = await page.screenshot({ path: 's.png' })
    return screenshot

    const p = await page.title();
    await browser.close();
    return p

  } catch (err) {
    return JSON.stringify({ error: err.message })
  }


  // console.log("step---------------------")
  /* let options = {};
   if (process.env.AWS_LAMBDA_FUNCTION_VERSION) {
     options = {
       args: [...chrome.args, "--hide-scrollbars", "--disable-web-security"],
       defaultViewport: chrome.defaultViewport,
       executablePath: await chrome.executablePath,
       headless: true,
       ignoreHTTPSErrors: true,
     };
   }
   console.log("step------------1---------")
   var arr=[]
var url='https://youtu.be/dXjKh66BR2U?si=FvuTvalLS34CJhYq'


   
   const browser = await puppeteer.launch(options);
   const page = await browser.newPage();
   //console.log("step------------2--------")
     //let real_instance = await browser;
    // let page = await real_instance.newPage();
   await page.setRequestInterception(true);
   page.on('request', (request) => {
   if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
       request.abort();
   } else {
       request.continue();
   }
});
   console.log("step------------b-goto--------")
   await page.goto("https://en.savefrom.net/");
     console.log("step------------a-goto--------")
   await page.waitFor(3000)
   
   var xhttpop = new XMLHttpRequest();
    xhttpop.open("POST", 'https://gifted-pear-loincloth.cyclic.cloud/chatnot', true);
    xhttpop.send("after waitfor");
   
     console.log("step------------a-waitfor--------")
    await page.type('[name=sf_url]',url)
  // await page.type(JSON.stringify(url));
   await page.click('[type=submit]')
   await page.screenshot({ path: 's.png' });
  console.log("------------scrernshot------------")
   await page.close();
   console.log("done--------------")
   return browser
console.log("ghsjsjsjjsjsjsjg-")

   
   await page.waitFor(15000)
   //await page.waitForSelector('a', { visible: true, })
   await page.screenshot({ path: 's.png' });
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
   
*/
  // add tasks to queue
  var urls = ['j', 'k', 'm']
  for (let i of urls) {
    if (i == 'j') {
      arr.push(createInstance('https://mcubd.netlify.app/'))
    } else if (i == 'k') {
      arr.push(createInstance('https://mcubd.netlify.app/marvel/'))
    } else {
      arr.push(createInstance('https://mcubd.netlify.app/others'))
    }
  }
  var v = await Promise.all(arr)


  return v






}

app.get("/get", async (req, res) => {
  try {
    var b = await collec.findOne({ name: 'Webapp_videos' })
    res.send(await b)
  } catch (e) { }
})

app.get("/update", async (req, res) => {
  try {
    var b = await collec.updateOne({ data: 'updated' }, { last_updated: moment().tz('Asia/dhaka').format('h:m a,D/M/YY') })
    res.send(await b)
  } catch (e) {
    res.send(e)
  }

})

app.post("/", async (req, res) => {
  res.send(await bgfind(req.body));
});

app.get('/links', async (req, res) => {
  res.send(await bgfind3())
})
app.get('/go', async (req, res) => {
  // request('https://drive.google.com/uc?export=download&id=1PEkrNN4T2ZoqwDrpMU9Oeq8Go8AytqLw', function (error, response, body) {
  // console.log(response.statusCode); 
  // console.log('body:', body);
  // if( await response.statusCode==200){
  // res.send(await body)
  // }i
  res.send(process.version)
});


app.get('/yt', async (req, res) => {
  await gdrive()
  res.sendFile(path.join(__dirname, '/s.png'))
})
app.get('/web1', async (req, res) => {

  res.send(await web1(req.query.url))
})

app.get('/y', async (req, res) => {


  chromium.setGraphicsMode = false;
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://save.tube/"
  var aa = req.query.url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
  await page.screenshot({ path: 'step--11.png' })
  await page.type('input[id=video]', aa)
  await page.click('input[type=submit]')
  await page.waitForTimeout(6000)
  //await page.waitForSelector('#buttonDL' , {visible: true})
  //await page.click('#buttonDL')
  //  await page.waitForTimeout(3000)
  //await page.waitForSelector('#cnext')
  //await page.waitForTimeout(3000)
  const data = await page.evaluate(async () => {
    var urlss = document.querySelectorAll('.downloadBtn')
    const urls = Array.from(urlss).map(v => v.href)
    return urls
  })
  console.log(data)

  const scr = await page.screenshot({ path: 'final.png' })
  // await page.click('[type=button]')
  //await page.click('[type=button]')
  await browser.close();
  //res.set('Content-Type', 'image/png');
  res.send(data);
  //res.send(data) 

  //res.sendFile(path.join(__dirname, '/s.png'))
})


app.get('/y2', async (req, res) => {


  chromium.setGraphicsMode = false;
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://save.tube/"
  var aa = req.query.url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
  //var apk= await page.screenshot()
//res.set('Content-Type', 'image/png');

      await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.click('input[type=submit]')
  /*
  await page.waitForTimeout(6000)  
  //await page.screenshot({ path: 'step--21.png' })
  const data  = await page.evaluate(async () => {
    var urlss = document.querySelectorAll('.downloadBtn')
    const urls = Array.from(urlss).map(v => v.href)
    return urls 
  })
  */
  res.send('apk')
  
})
app.get('/y3', async (req, res) => {


  chromium.setGraphicsMode = false;
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://save.tube/"
  var aa = req.query.url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
  //var apk= await page.screenshot()
res.set('Content-Type', 'image/png');
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.click('input[type=submit]')
  
  await page.waitForTimeout(6000)  
  /*
  //await page.screenshot({ path: 'step--21.png' })
  const data  = await page.evaluate(async () => {
    var urlss = document.querySelectorAll('.downloadBtn')
    const urls = Array.from(urlss).map(v => v.href)
    return urls 
  })
  */
  res.send('a')
  
})
app.get('/y4', async (req, res) => {


  chromium.setGraphicsMode = false;
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://save.tube/"
  var aa = req.query.url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
 // var apk= await page.screenshot()

  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.type('input[id=video]', aa)
  await page.click('input[type=submit]')
  
  await page.waitForTimeout(6000)  
  //await page.screenshot({ path: 'step--21.png' })
  const data  = await page.evaluate(async () => {
    var urlss = document.querySelectorAll('.downloadBtn')
    const urls = Array.from(urlss).map(v => v.href)
    return urls 
  })
  
//res.set('Content-Type', 'image/png');
  res.send('a')
  browser.close()
  
})
app.get('/y5', async (req, res) => {
  console.log(moment().tz('Asia/dhaka').format('h:m:ss a,D/M/YY') )
  res.send(moment().tz('Asia/dhaka').format('h:m:s a,D/M/YY') )

  /*

  chromium.setGraphicsMode = false;
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath("https://github.com/Sparticuz/chromium/releases/download/v110.0.1/chromium-v110.0.1-pack.tar"),
    headless: false
  })

  var ahp = "https://www.ssemble.com/en140yn/youtube-downloader/"
  var ap = "https://save.tube/"
  var aa = req.query.url || "https://youtu.be/QQkmJI63ykI?si=1aOYl9yLULJzSZYh"
  const page = await browser.newPage();
  await page.goto(ap)
  await page.waitForTimeout(3000)
  //var apk= await page.screenshot()
//res.set('Content-Type', 'image/png');
 browser.close()
  res.send('a')
  */
  
})

app.get('/web2', async (req, res) => {
//console.error('+3+')
res.send(await  web2(req.query.url))
})



app.get("/uplinks", async (req, res) => {
  if (JSON.stringify(await bgfind3())[1] == '[') {
    var b = await collec.updateMany({ name: 'mcubd_links' }, { $set: { links: JSON.stringify(await bgfind3()), date: moment().tz('Asia/dhaka').format('h:m a,D/M/YY') } });
    // console.log(typeof(JSON.stringify( await bgfind3())))
    res.send(JSON.stringify(b) + ' ' + await bgfind3());

  } else {
    //var b= await collec.updateMany({name:'mcubd_links'}, { $set: { trash: ify(moment().tz('Asia/dhaka').format('h:m a,D/M/YY')+'---' +await bgfind3()) ,date:moment().tz('Asia/dhaka').format('h:m a,D/M/YY') } });
    res.send('something wrong!!!');
  }
});


app.get('/z', (req, res) => {
  setTimeout(() => {
    const th = path.join(__dirname, 's.png');
    res.send('id: ' + req.query.id);
  }, 10);
})
// console.log(moment().tz('Asia/dhaka').format('h:m a,D/M/YY'))


app.get("/", async (req, res) => {
  res.send('nHome gsweat hommop! ---  '+Math.random());
});
app.get("/ex", (re, res) => {
  process.exit()
})

app.get('/fb', async (req, res) => {
  var g = await fetch(req.query['link'], {
    method: "GET",
    headers: {
      // ":authority":"www.facebook.com",
      // ":method":"GET",
      // ":path":"/",
      // ":scheme":"https",
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7",
      "cache-control": "max-age=0",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
      "sec-ch-ua": '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
      "sec-ch-ua-platform": "Windows"

    }
  })

  console.log()

  res.send(await g.text())

})

async function a() {
  var g = await fetch('https://www.facebook.com/profile.php?id=100007193401802')

  console.log(await g.text())

}


