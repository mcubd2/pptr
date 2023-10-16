// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition
// To invoke: 
import { serve }from "https://deno.land/std@0.204.0/http/server.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"
//import * as puppeteer from "https://deno.land/x/puppeteer_plus/mod.ts";
//import * as pptr from "https://deno.land/x/pptr@1.2.0/mod.ts";
 

serve(async (req) => { 
  try 
  { 
    // console.log('PUPPETEER_BROWSERLESS_IO_KEY') 
  // Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition
// To invoke: 

    // console.log('PUPPETEER_BROWSERLESS_IO_KEY') 
   //  const browser = await puppeteer.connect({ 
      // browserWSEndpoint: `wss://chrome.browserless.io?token=677cf9f1-7c6f-4a8e-876e-6e0762f556f5` 
     // })   

   
  
    //  const page = await browser.newPage()   
  // await page.setRequestInterception(true);
  // page.on('request', (request) => {
    // if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
     //   request.abort();
   // } else {
     //   request.continue();
  //  }
// });
    //   const url = new URL(req.url).searchParams.get('url') || 'https://www.google.com'  
        //await page.goto(url) 
 // await page.waitForSelector('input')
  // const n = await page.$("li[class='heading']")
  //await page.type('#id_url','https://youtu.be/dXjKh66BR2U?si=FvuTvalLS34CJhYq')
   
//    await page.click('[type=submit]')
//   await page.waitForTimeout(3000)
      //  import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://example.com");
// page.screenshot({ path: "example.png" });

await browser.close();




   
  
  
  // page.on('request', (request) => {
    // if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
     //   request.abort();
   // } else {
     //   request.continue();
  //  }
// });
     //  const url = new URL(req.url).searchParams.get('url') || 'https://www.google.com'  
 
 // await page.waitForSelector('input')
  // const n = await page.$("li[class='heading']")
  //await page.type('#id_url','https://youtu.be/dXjKh66BR2U?si=FvuTvalLS34CJhYq')
   
//    await page.click('[type=submit]')
//   await page.waitForTimeout(3000)
          //----- const screenshot = await page.screenshot()  
           //------ await browser.close();
   return new Response(JSON.stringify({ error: 'e.message' }), { headers: { 'Content-Type': 'image/png' } }) } 
               catch (e) { 
                console.error(e)  
                  return new Response(JSON.stringify({ error: e.message }), { headers: { 'Content-Type': 'application/json' }, status: 500, }) }
                 })

