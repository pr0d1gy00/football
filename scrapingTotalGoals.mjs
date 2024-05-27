import { time } from "console";
import { chromium } from "playwright";
import fs from 'fs';


async function scrapingTotalGoals(){
    const browser = await chromium.launch(
        { headless: true }
    );

    const page = await browser.newPage();

    await page.goto("https://pronosticosfutbol365.com/predicciones-de-goles-para-mas-de-15-y-menos-de-35-goles/");

    const dataGoals = await page.evaluate(() => {
        const results = document.querySelectorAll('.ullist .fullgame .diveachgame');
        // const resultsOthers = document.querySelectorAll('')
        return Array.from(results).map((result) => {
                // const title = result.querySelector('.leagueslinks').innerText;
                // const imgcountry = result.querySelector('.imgcountry').getAttribute('src');
                const time = result.querySelector('.insidetime').innerText;
                const home = result.querySelector('.dividehome').innerText;
                const away = result.querySelector('.divideaway').innerText;
                const prediction = result.querySelector('.icontip').innerText;
                return { time, home, away, prediction}
            })
        
    })
    await browser.close();

    const dataString = JSON.stringify(dataGoals);
    const folder = './public';

    fs.writeFileSync(`${folder}/dataPredictionsTotalGoals.json`, dataString,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Data saved');
        }
    });
}

setInterval((scrapingTotalGoals), 3600000 );