'use strict';

const router   = require('express')();
module.exports = router;

/**
 *  [논의사항]
 *
 */

/**
 *  @apiVersion 0.0.1
 *  @api {GET} /account/auth/session
 *  @apiName get-account-auth-session
 *  @apiGroup Account>auth
 *  @apiDescription 세션

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
router.get('/account/auth/session', function(req, res, next) {

});