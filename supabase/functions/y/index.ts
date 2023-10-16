
// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition
// To invoke: 
import { serve }from "https://deno.land/std@0.204.0/http/server.ts";
import puppeteer from "https://deno.land/x/puppeteer@9.0.0/mod.ts"
//import * as puppeteer from "https://deno.land/x/puppeteer_plus/mod.ts";
//import * as pptr from "https://deno.land/x/pptr@1.2.0/mod.ts";
 

serve(async (req) => { 
  try 
  { 

   (async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.search-box__link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();


   
  
  
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

