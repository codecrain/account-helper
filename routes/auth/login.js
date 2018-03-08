'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 *
 */

// 소셜 로그인도 여기에서 처리해야하는데, 이 부분은 아직 API 주소를 안만들었습니다. 
// 소셜 로그인 API는 이재문 파트너님에게 요청드립니다.

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/login
 *  @apiName post-account-auth-login
 *  @apiGroup Account>auth
 *  @apiDescription 로그인

 *  @apiParam {integer}  countryCode   국가코드(id)
 *  @apiParam {string}   phoneNumber   휴대폰번호(id)
 *  @apiParam {string}   email         이메일

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      users : {
 *          userId      : "integer",
 *          countryCode : "integer",
 *          phoneNumber : "string",
 *          email : "string",
 *          name : "string",
 *          type : "integer",
 *          ..., // 서비스마다 account_info의 필드가 다르다.
 *          createdAt   : "Date"
 *          updatedAt   : "Date"
 *      }
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/auth/login', function(req, res, next) {
    // 로그인할 때, account_loginHistory에 저장할 정보들은 다음 API를 활용하면 됩니다. https://github.com/bluesmoon/node-geoip
    // ip주소와 국가번호("KR"의 형태. countryCode인 82와는 다른 형태임), longitude, latitude를 저장합니다
    // 아래는 ip주소와 지역을 뽑아내는 샘플 코드입니다.
    /*var geoip = require('geoip-lite');
    try{
        var geo = {}; // 원래 {}
        var ip = query.request.headers['x-forwarded-for'] ||
            query.request.connection.remoteAddress ||
            query.request.socket.remoteAddress ||
            query.request.connection.socket.remoteAddress;
        return geoip.lookup(ip);
    }catch(e){
        return {
            "geo.country": "KR",
            "geo.region": "11",
            "geo.city": "Error",
            "geo.latitude": 37.5111,
            "geo.longitude": 126.9743
        };
    }*/
});
