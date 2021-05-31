import Abstract from './AbstractController';

/**
 * @api UserController for user CRUD.
 *
 * @export
 * @class UserController
 * @extends {Abstract}
 */
export default class UserController extends Abstract {
  /**
   * Creates an instance of UserController.
   *
   * @param {*} model
   * @memberof UserController
   */
  constructor(model) {
    super(model);
  }

  /**
   * @api {get} /users/:name Get user by username (http://example.com/api/users/username)
   * @apiDescription Get single user by username.
   * @apiName getByName
   * @apiGroup UserController
   * @apiParam (Body) {String} username User username.
   * @apiErrorExample {json} Error
   *
   * HTTP/1.1 404 Not Found
   *
   * @apiSuccessExample Success-Response:
   *
   * HTTP/1.1 200 OK
   *
   *  {
   *   "_id": "5be4c3440cb85b07bdcab447",
   *  "firstname": "test",
   *  "lastname": "testing",
   *  "email": "test4@gmail.com",
   *  "username": "testing4",
   *  "password": "password1",
   *  "created_at": "2018-11-08T23:14:12.162Z",
   *  "updated_at": "2018-11-08T23:14:12.162Z",
   *  "__v": 0
   *  }
   */

  /**
   * @api {get} /users Get list of users (http://example.com/api/users)
   * @apiDescription Get a list of users
   * @apiName getList
   * @apiGroup UserController
   * @apiErrorExample {json} Error
   *
   * HTTP/1.1 404 Not Found
   *
   * @apiSuccessExample Success-Response:
   *
   * HTTP/1.1 200 OK
   *
   * [
   *  {
   *  "_id": "5be4c3440cb85b07bdcab447",
   *  "firstname": "test",
   *  "lastname": "testing",
   *  "email": "test1@gmail.com",
   *  "username": "testing1",
   *  "password": "password1",
   *  "created_at": "2018-11-08T23:14:12.162Z",
   *  "updated_at": "2018-11-08T23:14:12.162Z",
   *  "__v": 0
   *  },
   *  {
   *  "_id": "5be4c3440cb85b07bdcab447",
   *  "firstname": "test",
   *  "lastname": "testing",
   *  "email": "test2@gmail.com",
   *  "username": "testing2",
   *  "password": "password1",
   *  "created_at": "2018-11-08T23:14:12.162Z",
   *  "updated_at": "2018-11-08T23:14:12.162Z",
   *  "__v": 0
   *  }
   * ]
   */

  /**
   * @api {post} /endpoint Create user (http://example.com/api/users)
   * @apiDescription Create user requires body obj.
   * @apiName create
   * @apiGroup UserController
   *
   * @apiErrorExample {json} Error
   *
   * HTTP/1.1 404 Not Found
   *
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   *
   * @apiParam (Body) {String} email User email.
   * @apiParam (Body) {String} password User password.
   * @apiParam (Body) {String} username User username.
   * @apiParam (Body) {String} firstname User first name.
   * @apiParam (Body) {String} lastname User last name.
   *
   * @apiParamExample {json} Post-Example:
   *
   * {
   *  "firstname": "test",
   *  "lastname": "testing",
   *  "email": "test2@gmail.com",
   *  "username": "testing2",
   *  "password": "password1",
   * }
   */
}
