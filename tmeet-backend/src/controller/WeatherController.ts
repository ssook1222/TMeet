import axios from "axios";
import convert from "xml-js";

export class WeatherController {
    static weatherLookRequest = async (req, res) => {
        const convert = require('xml-js');
        var request = require('request');

        const ServiceKey = 'Xq5oy0Mz2YB%2BFTdgTXTkvqOdpa%2BVrjfvWO6ye34JKGucNegYdj1FTBSbCIvlm7tKb7Wggcxmw%2BLZ%2FbHVny333A%3D%3D';
        var snow = [];
        var rain = [];
        var weatherAm = [];
        var weatherPm = [];
        let length2 = 0;
        let count = 0;

        var now = new Date();
        var today = new Date(now.setDate(now.getDate()));

        var year = today.getFullYear();
        var month_ = ("0" + (1 + today.getMonth())).slice(-2);
        var day_ = ("0" + (today.getDate())).slice(-2);
        var stDay_ = ("0" + (today.getDate() + 3)).slice(-2);

        var todayDt = year + month_ + day_;
        var stDate = year + month_ + stDay_;

        var checkDtLst = [];
        for(let i = 0; i < 5 ; i++){
            var day1_ = ("0" + (today.getDate() + i)).slice(-2);
            var checkdt = year + month_ + day1_;
            checkDtLst.push(checkdt);
        }

        //모임 첫날짜~마지막날짜 배열로 바꾸는 함수(우선 DB에서 먼저 가져오기)
        //모임날짜, 날짜형으로 바꾸는 함수 만들기
        //기준일
        var checkDate = "20220813"; //모임 날짜(db에서 가져와야함)
        var isDate = Number(checkDate) - Number(todayDt); //수정!!(숫자형이 아닌 날짜형으로)

        //서울 전지역 기준
        var urlShort = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=' + ServiceKey + '&pageNo=1&numOfRows=1000&dataType=XML&base_date=' + todayDt + '&base_time=0500&nx=60&ny=127';
        var urlMedium = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=' + ServiceKey + '&pageNo=1&numOfRows=1000&dataType=XML&regId=11B00000&tmFc=' + todayDt + '0600';


        for (let j = 0; j < checkDtLst.length; j++) {
            const axios = require('axios');
            const get_test = await axios.get(urlShort);
            var xmlToJson = convert.xml2json(get_test.data, {compact: true, spaces: 4})        //xml to json 파싱
            xmlToJson = JSON.parse(xmlToJson);

            var isDate = Number(checkDtLst[j]) - Number(todayDt); //수정!!(숫자형이 아닌 날짜형으로)
            //오늘 ~ 모레까지 날씨 조회
            if (checkDtLst[j] <= stDate && isDate <= 3) {
                for (let j = 0; j < 5; j++) {
                    for (var i = 0; i < xmlToJson.response.body.items.item.length; i++) {
                        if (xmlToJson.response.body.items.item[i].fcstDate._text.toString() == checkDtLst[j]) {
                            if (xmlToJson.response.body.items.item[i].category._text.toString() == "SNO") {
                                if (xmlToJson.response.body.items.item[i].fcstTime._text.toString() == "0600") {
                                    snow[j] = xmlToJson.response.body.items.item[i].fcstValue._text.toString();
                                }
                            }
                            if (xmlToJson.response.body.items.item[i].category._text.toString() == "PCP") {
                                if (xmlToJson.response.body.items.item[i].fcstTime._text.toString() == "0600") {
                                    rain[j] = xmlToJson.response.body.items.item[i].fcstValue._text.toString();
                                }
                            }
                        }
                        ;
                    }
                }
            }
        }
        var weatherLst1 = {"date": "", "weather": "", "rain": "", "snow": ""};
        var weatherArr1 = [];
        for (let i = 0; i < snow.length; i++) {
            weatherLst1.date = checkDtLst[i];
            weatherLst1.snow = snow[i];
            weatherLst1.rain = rain[i];
            weatherArr1.push({...weatherLst1});
        }

        //3일 후 ~ 10일 후 날씨 조회
        for(let h=checkDtLst.length-1 ; checkDtLst[h]>=stDate ;h--){
            count++; //for문 돌리는 횟수
            length2 = checkDtLst.length-count;  //조회 시작 날짜의 인덱스 번호
        }
        for (let j = length2; j <= checkDtLst.length ; j++) {
            const axios = require('axios');
            const get_test = await axios.get(urlMedium);
            var xmlToJson = convert.xml2json(get_test.data, {compact: true, spaces: 4})        //xml to json 파싱
            xmlToJson = JSON.parse(xmlToJson);

            var isDate = Number(checkDtLst[j]) - Number(todayDt); //수정!!(숫자형이 아닌 날짜형으로)
            if (checkDtLst[j] >= todayDt && isDate <= 10) {
                for (var i = 0; i < Object.keys(xmlToJson.response.body.items.item).length; i++) {
                    var findNum = Object.keys(xmlToJson.response.body.items.item)[i].toString();
                    var regex = /[^0-9]/g;
                    var result = findNum.replace(regex, "");
                    if (Object.keys(xmlToJson.response.body.items.item)[i].toString() == "wf" + result + "Am") {
                        if (isDate == 3) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf3Am._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf3Pm._text.toString();
                        }
                        if (isDate == 4) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf4Am._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf4Pm._text.toString();
                        }
                        if (isDate == 5) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf5Am._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wfPAm._text.toString();
                        }
                        if (isDate == 6) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf6Am._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf6Pm._text.toString();
                        }
                        if (isDate == 7) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf7Am._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf7Pm._text.toString();
                        }
                        if (isDate == 8) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf8._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf8._text.toString();
                        }
                        if (isDate == 9) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf9._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf9._text.toString();
                        }
                        if (isDate == 10) {
                            weatherAm[j] = xmlToJson.response.body.items.item.wf10._text.toString();
                            weatherPm[j] = xmlToJson.response.body.items.item.wf10._text.toString();
                        }

                    }
                    ;
                }

            }
        }
        var weatherLst2 = {"date": "", "weather": "", "rain": "", "snow": ""};
        var weatherArr2 = []
        for (let i = length2 ; i < checkDtLst.length; i++) {
            weatherLst2.date = checkDtLst[i];
            weatherLst2.weather = weatherAm[i];
            weatherArr2.push({...weatherLst2});
        }
        //오늘로부터 10일 이후 날씨 확인 불가
        if (isDate > 10) {
            return null;
        }
        var weatherArr3 = [];
        var weatherArr4 = [];

        weatherArr3.push(weatherArr1,weatherArr2);
        weatherArr4 = weatherArr3.flat();

        console.log(weatherArr4);
        res.send(weatherArr4);
    }
}




