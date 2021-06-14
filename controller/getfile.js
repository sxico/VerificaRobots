const axios = require("axios");

/**
 * 
 * @param {string} urlParams 
 */
async function getFileUrl(urlParams) {
    try{
	const request = await axios.get(urlParams)
    console.log("Código de Estado: " ,request.status)
    return request.data
    }catch(err){
        console.log("Código de Estado: " ,err.response.status)
        return err.response.status
    }
}

getFileUrl()