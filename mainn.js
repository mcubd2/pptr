// import express, { response } from 'express'
// import axios from 'axios'
// import * as cheerio from 'cheerio';
// import json2csv from 'json2csv'
// import request from 'request'
// import puppeteer from 'puppeteer'
// import cors from 'cors'
// import bodyParser from 'body-parser'


import got from 'got';
import tunnel from 'tunnel';
import https from 'https';





// -------------------------------------------------------------------

// -------------------------------------------------------------------



const apiurl = 'https://mcubd1.netlify.app/';
const urlA = [...new Array(2)].map((u) => apiurl);

const procreq = async ({ url }) => {
  try {
    const res = await got(url);
    return {
      status: 'success',
      statusCode: res.statusCode,
    };
  } catch (err) {
    return { status: 'error', message: err + '' };
  }
};

const run = async () => {
  try {
    const results = await Promise.all(urlA.map((url) => procreq({ url })));
    console.table(results);

  } catch (err) {
    console.error(err);
  }
};

// run(); 



 


 async function  a(){
 try{

  var tunnelingAgent = tunnel.httpsOverHttp({
    proxy: {
      host: 'localhost',
      port: 3128
    }
  });
   
  var req = https.request({
    host: 'example.com',
    port: 443,
    agent: tunnelingAgent
  });

console.log(req)


 }
 catch(e){
  console.log(e)
 }
 }

a()

