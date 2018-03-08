  'use strict';

  const router   = require('express')();
  module.exports = router;

  /**
   *  [논의사항]
   *
   */

  /**
   *  @apiVersion 0.0.1
   *  @api {GET} /account/loader/users/
   *  @apiName get-account-loader-users
   *  @apiGroup Account>loader>users
   *  @apiDescription 사용자목록 불러오기:
   *  @apiPermission

   *  @apiParam {integer}   from=0        특정 순서부터 불러온다
   *  @apiParam {integer}   count=20      특정 개수만큼 불러온다
   *  @apiParam {string}    [searchQuery] 검색 쿼리 (userId, name, email, phoneNumber 으로 검색)

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
 *      }, ... ]
 *  }

   *  @apiErrorExample {text} Error-Response:
   *  HTTP/1.1 200 OK
   *  { code : 404, description : "invalid body data." }
   */
  router.get('/account/loader/users', function(req, res, next) {

  });