const axios = require("axios");
/**
 * 
 * @param {string} urlParams 
 * @returns {Data Json}
 */
async function getFileUrl(urlParams) {
    try{
	    const request = await axios.get(urlParams)
        //return request.data
        //console.log("Código de Estado: " ,request)

        if (request.status === 200) {
            return request.status(200).json({
                success: true,
                status: 200,
                data: request.data,
                message: "Transação realizada com sucesso"
            });
        }
        //console.log("Falha Na Transação")
        return resquest.status(404).json({
            success: false,
            status: 404,
            data: request,
            message: "Falha na transação"
        });
    }catch(error){
        //console.log("Falha Na Transação - Error")
        return error.response
    }
}


getFileUrl()