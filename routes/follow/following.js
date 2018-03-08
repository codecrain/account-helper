'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 */

/**
 *  @apiVersion 0.0.1
 *  @api {GET} /account/follow/followings
 *  @apiName get-account-auth-follow-followings
 *  @apiGroup Account>follow
 *  @apiDescription 팔로잉하는 사용자 목록 불러오기

 *  @apiParam {integer}  userId   팔로잉 목록을 받아올 사용자Id

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
router.get('/account/follow/followings', function(req, res, next) {

});


/**
 *  @apiVersion 0.0.1
 *  @api {POST} /account/follow/following
 *  @apiName post-account-auth-following
 *  @apiGroup Account>follow
 *  @apiDescription 팔로우 하기

 *  @apiParam {integer}  userIdTo   팔로우할 사용자Id

 *  @apiSuccessExample  Success-Response:
 *  HTTP/1.1 200 OK
 *  {
 *      success: "boolean"
 *  }

 *  @apiErrorExample {text} Error-Response:
 *  HTTP/1.1 200 OK
 *  { code : 404, description : "invalid body data." }
 */
router.post('/account/follow/following', function(req, res, next) {
    var userIdFrom = ''; // 현재 로그인한 사용자의 Id
});
