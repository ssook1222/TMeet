import {Subway} from "../entity/subway";
import {getConnection} from "typeorm";

export class SubwayController{
    static subwayTest = async (req, res) => {
        let subway_name = req.body.subway;
        if(subway_name.substring(subway_name.length,subway_name.length-1)==="역"){
            subway_name=subway_name.substring(0,subway_name.length-1);
        }
        const result = await getConnection().getRepository(Subway).findOne({where: {subway_name}});
        res.status(200).send({"subway_name":result.subway_name, "lat":result.lat, "lng":result.lng})
    }

    static findSubway = async (req, res) => {
        const reqSubwayArr = req.body; //사용자 닉네임과 지하철역이 담긴 배열을 받아오면
        let resultList = []
        try{
            for(let i in reqSubwayArr){
                let subway_name
                subway_name = reqSubwayArr[i].subway_name
                //배열 내 데이터 중 지하철역만 따로 추출 후, 마지막 글자가 역인 케이스인 경우 해당 글자 제거
                if(subway_name.substring(subway_name.length,subway_name.length-1)==="역"){
                    subway_name=subway_name.substring(0,subway_name.length-1);
                }
                //데이터베이스에 저장된 정보들 하나하나 찾아서 결과 배열에 저장
                resultList[i] = await getConnection().getRepository(Subway).findOne({where: {subway_name}});
                console.log(resultList[i])
            }
        } catch (err) {
            console.log(err)
        }
        let lat_sum = 0
        let lng_sum = 0

        //결과 사이에서 중간지점 찾아야 함
        for(let i in resultList){
            lat_sum += resultList[i].lat
            lng_sum += resultList[i].lng
            console.log(lat_sum)
        }

        let result_lat = lat_sum/resultList.length
        let result_lng = lng_sum/resultList.length

        console.log(result_lat, result_lng)

        const allSubway = await getConnection().getRepository(Subway).find();

        let raw_distance_data = []

        for(let i=0; i<763; i++) {
            let raw_lng = allSubway[i].lng - result_lng
            let raw_lat = allSubway[i].lat - result_lat

            let raw_value = Math.pow(raw_lng, 2) + Math.pow(raw_lat, 2)
            raw_distance_data[i] = raw_value
        }

        let min_dist = raw_distance_data[0]
        let min_index = 0;

        for(let i=0; i<763; i++){
            if(raw_distance_data[i]<min_dist){
                min_dist=raw_distance_data[i]
                min_index=i
            }
        }

        res.status(200).send({"res_lat":allSubway[min_index].lng, "res_lng":allSubway[min_index].lat, "subway_name":allSubway[min_index].subway_name})
    }

    static subwaySearch = async (req, res) => {

        var clientID = "Aw2vsaErgruZlTMoalHp";
        var clientSecret = '0xbacAqeJP';
        var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.params.item) + encodeURI('카페');

        const request = require('request');
        const reg = /<[^>]*>?/g
        var options = {
            url: api_url,
            headers: {'X-Naver-Client-Id': clientID, 'X-Naver-Client-Secret': clientSecret}
        }
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                let data = JSON.parse(body.replace(reg,''))
                return res.status(200).send({"data":data.items})
            } else {
                res.status(response.statusCode).end();
                console.log('error = ' + response.statusCode);
            }
        })

    }

    static subwayTime = async (req, res) => {
        var start = req.params.start;
        var goal = req.params.goal;
        console.log(start)
        console.log(goal)
        var clientID = "pnq5016zbg";
        var clientSecret = '2hVxlTnBHoPSkNWw6WecSm7RTxeoKxoPFFo67h87';
        var api_url = 'https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving?start='+start+'&goal='+goal

        const request = require('request');
        var options = {
            url: api_url,
            headers: {'X-NCP-APIGW-API-KEY-ID': clientID, 'X-NCP-APIGW-API-KEY': clientSecret}
        }
        request.get(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var data = JSON.parse(body)
                if(data.route){
                    var time = data.route.traoptimal[0].summary.duration
                    time = time / 60000
                    return res.status(200).send({time:time})
                }
                console.log(data)
            } else {
                res.status(response.statusCode).end();
                console.log('error = ' + response.statusCode);
            }
        })
    }
}