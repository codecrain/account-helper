'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 */

/**
 *  @apiVersion 0.0.1
 *  @api {GET} /account/follow/followers
 *  @apiName get-account-auth-follow-followers
 *  @apiGroup Account>follow
 *  @apiDescription 팔로워 목록 불러오기

 *  @apiParam {integer}  userId   팔로워 목록을 받아올 사용자Id

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      users : [{
 *          userId      : "integer",
 *          countryCode : "integer",
 *          phoneNumber : "string",
 *          email : "string",
 *          name : "string",
 *          type : "integer",
 *          ..., // 서비스마다 account_info의 필드가 다르다.
 *          createdAt   : "Date"
 *          updatedAt   : "Date"
 *      }, ...]
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.get('/account/follow/followers', function(req, res, next) {

});

