// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition
// To invoke: 
import { serve }from "https://deno.land/std@0.204.0/http/server.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"

 

serve(async (req) => { 
  try 
  { 
    // console.log('PUPPETEER_BROWSERLESS_IO_KEY') 
       const browser = await puppeteer.connect({ 
        browserWSEndpoint: `wss://chrome.browserless.io?token=677cf9f1-7c6f-4a8e-876e-6e0762f556f5` 
      })   
       const page = await browser.newPage()   
   // await page.setRequestInterception(true);
  //  page.on('request', (request) => {
    // if (['image', 'stylesheet', 'font'].indexOf(request.resourceType()) !== -1) {
     //   request.abort();
   // } else {
     //   request.continue();
  //  }
// });
        const url = new URL(req.url).searchParams.get('url') || 'https://en.savefrom.net/'  
          await page.goto(url) 
   await page.waitForTimeout(3000)
   //const n = await page.$("li[class='heading']")
   await page.type('#sf_url','https://youtu.be/dXjKh66BR2U?si=FvuTvalLS34CJhYq')
   
    await page.click('[type=submit]')
             const screenshot = await page.screenshot()  
               return new Response(screenshot, { headers: { 'Content-Type': 'image/png' } }) } 
               catch (e) { 
                console.error(e)  
                  return new Response(JSON.stringify({ error: e.message }), { headers: { 'Content-Type': 'application/json' }, status: 500, }) }
                 })

