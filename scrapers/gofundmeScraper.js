const {createGoFundMeLink} = require('../utils/gfUtils')
const cheerio = require('cheerio')
const fetch = require('node-fetch') 


//starting
const scrapeCause = async (link) =>{
    const data = await fetch(link)
    const pageBody = await data.text()
    const $ = cheerio.load(pageBody)
}

//returns default 3 causes (the top of gofundme)
const getDefaultCauses = (async (req, res)=>{

})



