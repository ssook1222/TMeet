//CORS 발생으로 인해 백에서 불러오고자 한 코드
export class MapController{

    static mapTest = async (req, res) => {
        const ncpClientID = "pnq5016zbg";
        const before_url = "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId="
        const url = before_url+ncpClientID;

        const axios = require('axios');
        const get_test = await axios.get(url);
        res.status(200).send(get_test.data);
    }
}