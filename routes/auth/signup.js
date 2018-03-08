'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 */

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/signup
 *  @apiName post-account-auth-signup
 *  @apiGroup Account>auth
 *  @apiDescription 회원가입

 *  @apiParam {integer}  countryCode   국가코드
 *  @apiParam {string}   phoneNumber   휴대폰번호
 *  @apiParam {string}   email         이메일
 *  @apiParam {string}   name          이름(닉네임)
 *  @apiParam {integer}  type          계정 타입
 *  @apiParam {object}   info          account_info 테이블에 들어갈 값

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
router.post('/account/auth/signup', function(req, res, next) {

});


/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/signup/existence
 *  @apiName post-account-auth-signup-existence
 *  @apiGroup Account>auth
 *  @apiDescription 휴대폰번호 혹은 이메일로 이미 가입된 계정이 있는지 체크한다

 *  @apiParam {integer}  countryCode   국가코드
 *  @apiParam {string}   phoneNumber   휴대폰번호
 *  @apiParam {string}   email         이메일

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      isExist: "Boolean"
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/auth/signup/existence', function(req, res, next) {

});
