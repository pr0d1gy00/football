import { time } from "console";
import { chromium } from "playwright";
import fs from 'fs';

async function scraping(){
    const browser = await chromium.launch(
        { headless: true }
    );

    const page = await browser.newPage();

    await page.goto("https://pronosticosfutbol365.com/pronosticos-de-goles-de-la-primera-mitad-para-hoy/");

    const data = await page.evaluate(() => {
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

    const dataString = JSON.stringify(data);
    const folder = './public';

    fs.writeFileSync(`${folder}/dataPredictionsGoalsPT.json`, dataString,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('Data saved');
        }
    });

}

setInterval((scraping), 3600000 );
