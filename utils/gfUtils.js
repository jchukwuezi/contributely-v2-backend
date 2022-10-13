const createGoFundMeLink = (country, baseURL, category) => {
    let gfCountry = ""
    let gfCategory = ""
    if (country !== ""){
        gfCountry = country
    }
    if(category !== ""){
        gfCategory = category
    }
    return `${baseURL}/${country}/${category}`
}

const getImgURL = (url) =>{
    const foundUrl = url.match("background-image:url((.*))")[1]
    return foundUrl.replace(/[()]/g, '')
}

const getGoalValue = (goal) =>{
    return goal.match("of(.*)goal")[1]
}


module.exports = {
    createGoFundMeLink
}