import axios from "axios";
import convert from "xml-js";
import {getConnection} from "typeorm";
import {Meeting} from "../entity/meeting";

export class WeatherController {
    static weatherShortLookRequest = async (req, res) => {
        const convert = require('xml-js');
        const ServiceKey = 'Xq5oy0Mz2YB%2BFTdgTXTkvqOdpa%2BVrjfvWO6ye34JKGucNegYdj1FTBSbCIvlm7tKb7Wggcxmw%2BLZ%2FbHVny333A%3D%3D';
        var snow = [];
        var rain = [];

        var now = new Date();
        var today = new Date(now.setDate(now.getDate()));

        var year = today.getFullYear();
        var month_ = ("0" + (1 + today.getMonth())).slice(-2);
        var day_ = ("0" + (today.getDate())).slice(-2);
        var stDay_ = ("0" + (today.getDate() + 3)).slice(-2);

        var todayDt = year + month_ + day_;
        var stDate = year + month_ + stDay_;

        //-------------------------------------------------------------------------------------------------------------------------

        const meeting_id = req.params.meeting_id;
        const meeting = await getConnection().getRepository(Meeting).findOneBy({meeting_id: meeting_id});

        for (let i = 0; i < meeting.thead.length; i++) {
            meeting.thead[i] = meeting.thead[i].replace(/[\[\]']+/g, '')
            meeting.thead[i] = meeting.thead[i].replace(/\"/gi, "");
        }

        var meetingDB = []
        meetingDB.push(...meeting.thead)

        //-------------------------------------------------------------------------------------------------------------------------

        var meetingList = [];
        var meetingListF = [];
        var meetingListDate = [];

        var yearF = year;

        if (meeting.is_regular == false) {
            //날짜형(00/00)
            for (let i = 0; i < meetingDB.length; i++) {
                if (meetingDB[i].length == 3) {
                    meetingList[i] = yearF + "0" + meetingDB[i].slice(0, 1) + "0" + meetingDB[i].slice(-1)
                    meetingListF[i] = yearF + "-0" + meetingDB[i].slice(0, 1) + "-0" + meetingDB[i].slice(-1)
                    meetingListDate[i] = "0" + meetingDB[i].slice(0, 1) + "/0" + meetingDB[i].slice(-1)
                }
                if (meetingDB[i].length == 4 && meetingDB[i].slice(-3, 2) == "/") {
                    meetingList[i] = yearF + "0" + meetingDB[i].slice(0, 1) + meetingDB[i].slice(-2)
                    meetingListF[i] = yearF + "-0" + meetingDB[i].slice(0, 1) + "-" + meetingDB[i].slice(-2)
                    meetingListDate[i] = "0" + meetingDB[i].slice(0, 1) + "/" + meetingDB[i].slice(-2)
                }
                if (meetingDB[i].length == 4 && meetingDB[i].slice(-2, 3) == "/") {
                    meetingList[i] = yearF + meetingDB[i].slice(0, 2) + "0" + meetingDB[i].slice(-1)
                    meetingListF[i] = yearF + "-" + meetingDB[i].slice(0, 2) + "-0" + meetingDB[i].slice(-1)
                    meetingListDate[i] = meetingDB[i].slice(0, 2) + "/0" + meetingDB[i].slice(-1)
                }
                if (meetingDB[i].length == 5) {
                    meetingList[i] = yearF + meetingDB[i].slice(0, 2) + meetingDB[i].slice(-2)
                    meetingListF[i] = yearF + "-" + meetingDB[i].slice(0, 2) + "-" + meetingDB[i].slice(-2)
                    meetingListDate[i] = meetingDB[i].slice(0, 2) + "/" + meetingDB[i].slice(-2)
                }
            }
        } else if (meeting.is_regular == true) {
            //요일형
            var meetingDate = [];
            let meetingDate_, meetingList_1, meetingList_2;
            var meetingList1 = [];
            var meetingList2 = [];
            var meetingListDate1 = [];
            var meetingListF1 = [];
            var meetingListF2 = [];
            var meetingListDate2 = [];

            for (let i = 0; i < meetingDB.length; i++) {
                switch (meetingDB[i]) {
                    case "일":
                        meetingDate[i] = 0
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "월":
                        meetingDate[i] = 1
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "화":
                        meetingDate[i] = 2
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "수":
                        meetingDate[i] = 3
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "목":
                        meetingDate[i] = 4
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "금":
                        meetingDate[i] = 5
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "토":
                        meetingDate[i] = 6
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                }
                meetingList_1 = new Date(new Date().setDate(new Date().getDate() + meetingDate_))
                meetingList1[i] = yearF + ("0" + (1 + meetingList_1.getMonth())).slice(-2) + ("0" + (meetingList_1.getDate())).slice(-2);
                meetingListF1[i] = yearF + "-" + ("0" + (1 + meetingList_1.getMonth())).slice(-2) + "-" + ("0" + (meetingList_1.getDate())).slice(-2);
                meetingListDate1[i] = ("0" + (1 + meetingList_1.getMonth())).slice(-2) + "/" + ("0" + (meetingList_1.getDate())).slice(-2);
                meetingList_2 = new Date(new Date().setDate(new Date().getDate() + meetingDate_ + 7))
                meetingList2[i] = yearF + ("0" + (1 + meetingList_2.getMonth())).slice(-2) + ("0" + (meetingList_2.getDate())).slice(-2);
                meetingListF2[i] = yearF + "-" + ("0" + (1 + meetingList_2.getMonth())).slice(-2) + "-" + ("0" + (meetingList_2.getDate())).slice(-2);
                meetingListDate2[i] = ("0" + (1 + meetingList_2.getMonth())).slice(-2) + "/" + ("0" + (meetingList_2.getDate())).slice(-2);
            }
            meetingList.push(...meetingList1, ...meetingList2)
            meetingList.sort()
            meetingListF.push(...meetingListF1, ...meetingListF2)
            meetingListF.sort()
            meetingListDate.push(...meetingListDate1, ...meetingListDate2)
            meetingListDate.sort()
        }

        //-------------------------------------------------------------------------------------------------------------------------

        var checkDtLst = [];
        checkDtLst.push(...meetingList);

        try {
            //서울 전지역 기준
            var urlShort = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=' + ServiceKey + '&pageNo=1&numOfRows=1000&dataType=XML&base_date=' + todayDt + '&base_time=0500&nx=60&ny=127';


            const axios = require('axios');
            const get_test = await axios.get(urlShort);
            var xmlToJson = convert.xml2json(get_test.data, {compact: true, spaces: 4})        //xml to json 파싱
            xmlToJson = JSON.parse(xmlToJson);

            var isDate = [];

            for (let j = 0; j < checkDtLst.length; j++) {
                isDate[j] = ((new Date(meetingListF[j])).getTime() - now.getTime()) / (1000 * 60 * 60 * 24); //수정!!(숫자형이 아닌 날짜형으로)
                isDate[j] < 0 ? isDate[j] = 0 : isDate[j]
                //오늘 ~ 모레까지 날씨 조회
                if (checkDtLst[j] <= stDate && isDate[j] <= 3) {
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
                weatherLst1.date = meetingListDate[i];
                weatherLst1.snow = snow[i];
                weatherLst1.rain = rain[i];
                weatherArr1.push({...weatherLst1});
            }
            console.log(weatherArr1);
            res.header("Access-Control-Allow-Origin", "*").send(weatherArr1);

        } catch (e) {
            var weatherLst1 = {"date": "", "weather": "", "rain": "", "snow": ""};
            var weatherArr1 = [];
            for (let j = 0; j < meetingListDate.length; j++) {
                isDate[j] = ((new Date(meetingListF[j])).getTime() - now.getTime()) / (1000 * 60 * 60 * 24); //수정!!(숫자형이 아닌 날짜형으로)
                isDate[j] < 0 ? isDate[j] = 0 : isDate[j]
            }
            for (let i = 0; i < meetingListDate.length && checkDtLst[i] <= stDate && isDate[i] <= 3; i++) {
                weatherLst1.date = meetingListDate[i];
                weatherLst1.weather = "조회불가";
                weatherArr1.push({...weatherLst1});
            }
            console.log(weatherArr1)
            res.header("Access-Control-Allow-Origin", "*").send(weatherArr1);
        }
    }

    //-------------------------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------------------------

    static weatherMediumLookRequest = async (req, res) => {
        const convert = require('xml-js');
        const ServiceKey = 'Xq5oy0Mz2YB%2BFTdgTXTkvqOdpa%2BVrjfvWO6ye34JKGucNegYdj1FTBSbCIvlm7tKb7Wggcxmw%2BLZ%2FbHVny333A%3D%3D';
        var weatherAm = [];
        let count = 0;
        let length2 = 0;

        var now = new Date();
        var today = new Date(now.setDate(now.getDate()));

        var year = today.getFullYear();
        var month_ = ("0" + (1 + today.getMonth())).slice(-2);
        var day_ = ("0" + (today.getDate())).slice(-2);
        var stDay_ = ("0" + (today.getDate() + 3)).slice(-2);

        var todayDt = year + month_ + day_;
        var stDate = year + month_ + stDay_;

        //-------------------------------------------------------------------------------------------------------------------------

        const meeting_id = req.params.meeting_id;
        const meeting = await getConnection().getRepository(Meeting).findOneBy({meeting_id: meeting_id});

        for (let i = 0; i < meeting.thead.length; i++) {
            meeting.thead[i] = meeting.thead[i].replace(/[\[\]']+/g, '')
            meeting.thead[i] = meeting.thead[i].replace(/\"/gi, "");
        }

        var meetingDB = []
        meetingDB.push(...meeting.thead)

        //-------------------------------------------------------------------------------------------------------------------------
        var meetingList = [];
        var meetingListF = [];
        var meetingListDate = [];

        var yearF = year;

        if (meeting.is_regular == false) {
            //날짜형(00/00)
            for (let i = 0; i < meetingDB.length; i++) {
                if (meetingDB[i].length == 3) {
                    meetingList[i] = yearF + "0" + meetingDB[i].slice(0, 1) + "0" + meetingDB[i].slice(-1)
                    meetingListF[i] = yearF + "-0" + meetingDB[i].slice(0, 1) + "-0" + meetingDB[i].slice(-1)
                    meetingListDate[i] = "0" + meetingDB[i].slice(0, 1) + "/0" + meetingDB[i].slice(-1)
                }
                if (meetingDB[i].length == 4 && meetingDB[i].slice(-3, 2) == "/") {
                    meetingList[i] = yearF + "0" + meetingDB[i].slice(0, 1) + meetingDB[i].slice(-2)
                    meetingListF[i] = yearF + "-0" + meetingDB[i].slice(0, 1) + "-" + meetingDB[i].slice(-2)
                    meetingListDate[i] = "0" + meetingDB[i].slice(0, 1) + "/" + meetingDB[i].slice(-2)
                }
                if (meetingDB[i].length == 4 && meetingDB[i].slice(-2, 3) == "/") {
                    meetingList[i] = yearF + meetingDB[i].slice(0, 2) + "0" + meetingDB[i].slice(-1)
                    meetingListF[i] = yearF + "-" + meetingDB[i].slice(0, 2) + "-0" + meetingDB[i].slice(-1)
                    meetingListDate[i] = meetingDB[i].slice(0, 2) + "/0" + meetingDB[i].slice(-1)
                }
                if (meetingDB[i].length == 5) {
                    meetingList[i] = yearF + meetingDB[i].slice(0, 2) + meetingDB[i].slice(-2)
                    meetingListF[i] = yearF + "-" + meetingDB[i].slice(0, 2) + "-" + meetingDB[i].slice(-2)
                    meetingListDate[i] = meetingDB[i].slice(0, 2) + "/" + meetingDB[i].slice(-2)
                }
            }
        } else if (meeting.is_regular == true) {
            //요일형
            var meetingDate = [];
            let meetingDate_, meetingList_1, meetingList_2;
            var meetingList1 = [];
            var meetingList2 = [];
            var meetingListDate1 = [];
            var meetingListF1 = [];
            var meetingListF2 = [];
            var meetingListDate2 = [];

            for (let i = 0; i < meetingDB.length; i++) {
                switch (meetingDB[i]) {
                    case "일":
                        meetingDate[i] = 0
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "월":
                        meetingDate[i] = 1
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "화":
                        meetingDate[i] = 2
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "수":
                        meetingDate[i] = 3
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "목":
                        meetingDate[i] = 4
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "금":
                        meetingDate[i] = 5
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                    case "토":
                        meetingDate[i] = 6
                        meetingDate[i] - today.getDay() >= 0 ? meetingDate_ = meetingDate[i] - today.getDay() : meetingDate_ = meetingDate[i] - today.getDay() + 7;
                        break;
                }
                meetingList_1 = new Date(new Date().setDate(new Date().getDate() + meetingDate_))
                meetingList1[i] = yearF + ("0" + (1 + meetingList_1.getMonth())).slice(-2) + ("0" + (meetingList_1.getDate())).slice(-2);
                meetingListF1[i] = yearF + "-" + ("0" + (1 + meetingList_1.getMonth())).slice(-2) + "-" + ("0" + (meetingList_1.getDate())).slice(-2);
                meetingListDate1[i] = ("0" + (1 + meetingList_1.getMonth())).slice(-2) + "/" + ("0" + (meetingList_1.getDate())).slice(-2);
                meetingList_2 = new Date(new Date().setDate(new Date().getDate() + meetingDate_ + 7))
                meetingList2[i] = yearF + ("0" + (1 + meetingList_2.getMonth())).slice(-2) + ("0" + (meetingList_2.getDate())).slice(-2);
                meetingListF2[i] = yearF + "-" + ("0" + (1 + meetingList_2.getMonth())).slice(-2) + "-" + ("0" + (meetingList_2.getDate())).slice(-2);
                meetingListDate2[i] = ("0" + (1 + meetingList_2.getMonth())).slice(-2) + "/" + ("0" + (meetingList_2.getDate())).slice(-2);
            }
            meetingList.push(...meetingList1, ...meetingList2)
            meetingList.sort()
            meetingListF.push(...meetingListF1, ...meetingListF2)
            meetingListF.sort()
            meetingListDate.push(...meetingListDate1, ...meetingListDate2)
            meetingListDate.sort()
        }

        //-------------------------------------------------------------------------------------------------------------------------


        var checkDtLst = [];
        checkDtLst.push(...meetingList);

        try {
            var urlMedium = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=' + ServiceKey + '&pageNo=1&numOfRows=1000&dataType=XML&regId=11B00000&tmFc=' + todayDt + '0600';

            //3일 후 ~ 10일 후 날씨 조회 !! 수정!!!
            for (let h = checkDtLst.length - 1; checkDtLst[h] >= stDate; h--) {
                count++; //for문 돌리는 횟수
                length2 = checkDtLst.length - count;  //조회 시작 날짜의 인덱스 번호
            }
            const axios = require('axios');
            const get_test = await axios.get(urlMedium);
            var xmlToJson = convert.xml2json(get_test.data, {compact: true, spaces: 4})        //xml to json 파싱
            xmlToJson = JSON.parse(xmlToJson);

            var isDate;
            for (let j = length2; j <= checkDtLst.length; j++) {
                isDate = ((new Date(meetingListF[j])).getTime() - now.getTime()) / (1000 * 60 * 60 * 24) + 1;
                if (checkDtLst[j] >= todayDt && isDate > 3 && isDate <= 10) {
                    for (var i = 0; i < Object.keys(xmlToJson.response.body.items.item).length; i++) {
                        var findNum = Object.keys(xmlToJson.response.body.items.item)[i].toString();
                        var regex = /[^0-9]/g;
                        var result = findNum.replace(regex, "");
                        if ((Object.keys(xmlToJson.response.body.items.item)[i].toString() == "wf" + result + "Am")) {
                            if (isDate >= 3 && isDate < 4) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf3Am._text.toString();
                            } else if (isDate >= 4 && isDate < 5) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf4Am._text.toString();
                            } else if (isDate >= 5 && isDate < 6) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf5Am._text.toString();
                            } else if (isDate >= 6 && isDate < 7) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf6Am._text.toString();
                            } else if (isDate >= 7 && isDate < 8) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf7Am._text.toString();
                            } else if (isDate >= 8 && isDate < 9) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf8._text.toString();
                            } else if (isDate >= 9 && isDate < 10) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf9._text.toString();
                            } else if (isDate >= 10) {
                                weatherAm[j] = xmlToJson.response.body.items.item.wf10._text.toString();
                            }
                        }
                        ;
                    }
                }
            }
            var weatherLst2 = {"date": "", "weather": "", "rain": "", "snow": ""};
            var weatherArr2 = []
            for (let i = length2; i < checkDtLst.length; i++) {
                weatherLst2.date = meetingListDate[i];
                if (weatherAm[i] == undefined) {
                    weatherAm[i] = "조회 불가"
                }
                weatherLst2.weather = weatherAm[i];
                weatherArr2.push({...weatherLst2});
            }
            console.log(weatherArr2);
            res.header("Access-Control-Allow-Origin", "*").send(weatherArr2);
        } catch (e) {
            var weatherLst2 = {"date": "", "weather": "", "rain": "", "snow": ""};
            var weatherArr2 = []
            for (let i = length2; i < checkDtLst.length && checkDtLst[i] >= todayDt && isDate > 3 && isDate <= 10; i++) {
                weatherLst2.date = meetingListDate[i];
                if (weatherAm[i] == undefined) {
                    weatherAm[i] = "조회 불가"
                }
                weatherLst2.weather = "조회 불가";
                weatherArr2.push({...weatherLst2});
            }
            console.log(weatherArr2);
            res.header("Access-Control-Allow-Origin", "*").send(weatherArr2);
        }
    }
}




