import axios from "axios";
import convert from "xml-js";
//https://www.npmjs.com/package/xml-js

export class WeatherController {
    static weatherLookRequest = async (req, res) => {
        const convert = require('xml-js');
        var request = require('request');

        const ServiceKey = 'Xq5oy0Mz2YB%2BFTdgTXTkvqOdpa%2BVrjfvWO6ye34JKGucNegYdj1FTBSbCIvlm7tKb7Wggcxmw%2BLZ%2FbHVny333A%3D%3D';
        const dataCd = "ASOS"
        const dateCd = "DAY"
        let tmp = "";
        let snow = "";
        let rain = "";
        let weatherAm = "";
        let weatherPm = "";

        var now = new Date();
        var today = new Date(now.setDate(now.getDate()));

        var year = today.getFullYear();
        var month_ = ("0" + (1 + today.getMonth())).slice(-2);
        var day_ = ("0" + (today.getDate())).slice(-2);
        var stDay_ = ("0" + (today.getDate() + 2)).slice(-2);
        var endDay_ = ("0" + (today.getDate() + 10)).slice(-2);

        var todayDt = year + month_ + day_;
        var stDate = year + month_ + stDay_;
        var endDate = year + month_ + endDay_;

        //기준일
        var checkDate = "20220813";
        var isDate = Number(checkDate) - Number(todayDt);

        //서울 전지역 기준
        var urlShort = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=' + ServiceKey + '&pageNo=1&numOfRows=1000&dataType=XML&base_date=' + todayDt + '&base_time=0500&nx=60&ny=127';
        var urlMedium = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=' + ServiceKey + '&pageNo=1&numOfRows=1000&dataType=XML&regId=11B00000&tmFc=' + todayDt + '0600';

        //오늘 ~ 모레까지 날씨 조회
        if (checkDate <= stDate && isDate<=2) {
            const axios = require('axios');
            const get_test = await axios.get(urlShort);
            var xmlToJson = convert.xml2json(get_test.data, {compact: true, spaces: 4})        //xml to json 파싱
            xmlToJson = JSON.parse(xmlToJson);
            for (var i = 0; i < xmlToJson.response.body.items.item.length; i++) {
                if (xmlToJson.response.body.items.item[i].fcstDate._text.toString() == checkDate) {
                    if (xmlToJson.response.body.items.item[i].category._text.toString() == "TMP") {
                        if (xmlToJson.response.body.items.item[i].fcstTime._text.toString() == "1200") {
                            tmp = xmlToJson.response.body.items.item[i].fcstValue._text.toString();
                        }
                    }
                    if (xmlToJson.response.body.items.item[i].category._text.toString() == "SNO") {
                        if (xmlToJson.response.body.items.item[i].fcstTime._text.toString() == "0600") {
                            snow = xmlToJson.response.body.items.item[i].fcstValue._text.toString();
                        }
                    }
                    if (xmlToJson.response.body.items.item[i].category._text.toString() == "PCP") {
                        if (xmlToJson.response.body.items.item[i].fcstTime._text.toString() == "0600") {
                            rain = xmlToJson.response.body.items.item[i].fcstValue._text.toString();
                        }
                    }
                }
                ;
            }
            res.send({"tmp": tmp, "snow": snow, "rain": rain});
        }
        //3일 후 ~ 10일 후 날씨 조회
        if (checkDate >= todayDt && isDate <= 10) {
            const get_test_Medium = await axios.get(urlMedium);
            var xmlToJson = convert.xml2json(get_test_Medium.data, {compact: true, spaces: 4})
            xmlToJson = JSON.parse(xmlToJson);


            for (var i = 0; i < Object.keys(xmlToJson.response.body.items.item).length; i++) {
                var findNum = Object.keys(xmlToJson.response.body.items.item)[i].toString();
                var regex = /[^0-9]/g;
                var result = findNum.replace(regex, "");
                if (Object.keys(xmlToJson.response.body.items.item)[i].toString() == "wf" + result + "Am") {
                    if (isDate == 3) {
                        weatherAm = xmlToJson.response.body.items.item.wf3Am._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf3Pm._text.toString();
                    }
                    if (isDate == 4) {
                        weatherAm = xmlToJson.response.body.items.item.wf4Am._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf4Pm._text.toString();
                    }
                    if (isDate == 5) {
                        weatherAm = xmlToJson.response.body.items.item.wf5Am._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wfPAm._text.toString();
                    }
                    if (isDate == 6) {
                        weatherAm = xmlToJson.response.body.items.item.wf6Am._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf6Pm._text.toString();
                    }
                    if (isDate == 7) {
                        weatherAm = xmlToJson.response.body.items.item.wf7Am._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf7Pm._text.toString();
                    }
                    if (isDate == 8) {
                        weatherAm = xmlToJson.response.body.items.item.wf8._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf8._text.toString();
                    }
                    if (isDate == 9) {
                        weatherAm = xmlToJson.response.body.items.item.wf9._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf9._text.toString();
                    }
                    if (isDate == 10) {
                        weatherAm = xmlToJson.response.body.items.item.wf10._text.toString();
                        weatherPm = xmlToJson.response.body.items.item.wf10._text.toString();
                    }

                }
                ;
            }
            res.send({"weatherAm": weatherAm, "weatherPm": weatherPm});
        }
        //checkDate 조회 불가능(오늘로부터 10일 이후)
        if (isDate > 10) {
            res.send("조회불가");
        }
    }
}