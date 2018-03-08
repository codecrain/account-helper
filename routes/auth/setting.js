'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 *  180221: 프로젝트에 따라, account_info TABLE의 필드들이 다를 것이다. 이것을 극복할 방안이 필요.
 */

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/setting/update
 *  @apiName post-account-auth-setting-update
 *  @apiGroup Account>auth
 *  @apiDescription 회원정보 업데이트. countryCode, phoneNumber, email은 우선 업데이트가 가능하도록은 하였으나, 로그인ID이기 때문에 사용할 일은 거의 없음.

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
router.post('/account/auth/setting/update', function(req, res, next) {

});

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/setting/changepassword/byOldPassword
 *  @apiName post-account-auth-setting-change-password-by-old-password
 *  @apiGroup Account>auth
 *  @apiDescription 비밀번호 변경

 *  @apiParam {integer}  userId        사용자Id
 *  @apiParam {string}   oldPassword   기존 비밀번호
 *  @apiParam {string}   newPassword   신규 비밀번호

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      success: "boolean" // 만약 oldPassword가 틀리다면 false
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/auth/setting/changepassword/byOldPassword', function(req, res, next) {

});

/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/auth/setting/changepassword/byPhoneNumberVerification
 *  @apiName post-account-auth-setting-change-password-by-phone-number-verification
 *  @apiGroup Account>auth
 *  @apiDescription 비밀번호 변경

 *  @apiParam {integer}  userId        사용자Id
 *  @apiParam {integer}  countryCode   국가번호
 *  @apiParam {integer}  phoneNumber   핸드폰번호
 *  @apiParam {string}   newPassword   신규 비밀번호

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      success: "boolean" // false가 나올 일이 없음.
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/auth/setting/changepassword/byPhoneNumberVerification', function(req, res, next) {

});