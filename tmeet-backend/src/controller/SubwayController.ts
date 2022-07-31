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
}