// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition
// To invoke:
import { serve }from "https://deno.land/std@0.204.0/http/server.ts";
import puppeteer from "https://deno.land/x/puppeteer@16.2.0/mod.ts"

 

serve(async (req) => { 
  try 
  { 
    console.log('PUPPETEER_BROWSERLESS_IO_KEY') 
       const browser = await puppeteer.connect({ 
        browserWSEndpoint: `wss://chrome.browserless.io?token=677cf9f1-7c6f-4a8e-876e-6e0762f556f5` 
      })   
       const page = await browser.newPage()   
        const url = new URL(req.url).searchParams.get('url') || 'https://x.com'  
          await page.goto(url) 
             const screenshot = await page.screenshot()  
               return new Response(screenshot, { headers: { 'Content-Type': 'image/png' } }) } 
               catch (e) { 
                console.error(e)  
                  return new Response(JSON.stringify({ error: e.message }), { headers: { 'Content-Type': 'application/json' }, status: 500, }) }
                 })

