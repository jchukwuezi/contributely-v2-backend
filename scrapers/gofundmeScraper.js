const {createGoFundMeLink, getGoalValue, getImgURL} = require('../utils/gfUtils')
const cheerio = require('cheerio')
const fetch = require('node-fetch') 


//starting
const scrapeCause = async (link) =>{
    const data = await fetch(link)
    const pageBody = await data.text()
    const $ = cheerio.load(pageBody)
    const title = $('h1.a-campaign-title').text()
    const description = $('div.o-campaign-description').text()
    let summary = description.split('. ', 1)[0]
    summary = summary.replace(/(\r\n|\n|\r)/gm, "")
    const causeUrl = link
    const goalValue = $('span.text-stat.text-stat-title').text()
    const goalAmount = getGoalValue(goalValue)
    const imgDetails = $('div.a-image.a-image--background').attr('style')
    const imgUrl = getImgURL(imgDetails)
    const causeObj = {
        "title": title,
        "description": summary,
        "url": causeUrl,
        "goalAmount": goalAmount,
        "image": imgUrl,
        "dateCreated": dateCreated
    }
    return causeObj;
}

//returns default 3 causes (the top of gofundme)
const getDefaultCauses = (async (req, res)=>{

})



