'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 *
 */

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/verification/phoneNumber
 *  @apiName post-account-auth-verification-phoneNumber
 *  @apiGroup Account>auth
 *  @apiDescription 휴대폰 인증번호 받기

 *  @apiParam {integer}  countryCode   국가코드(id)
 *  @apiParam {string}   phoneNumber   휴대폰번호(id)
 *  @apiParam {boolean}  isForced      해당 휴대폰으로 회원가입이 되어있더라도, 무조건 인증번호를 보낸다. (휴대폰 인증을 통한 비밀번호 변경 등에서 사용)

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      verificationCode: "integer"
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/auth/verification/phoneNumber', function(req, res, next) {

});

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/verification/email
 *  @apiName post-account-auth-verification-email
 *  @apiGroup Account>auth
 *  @apiDescription 이메일 인증 받기

 *  @apiParam {string}   email   이메일 주소

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      success: "boolean"
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/auth/verification/email', function(req, res, next) {

});