import HTTPStatus from 'http-status';

/**
 * Application Abstract Controller class.
 *
 * @api Abstract class, cannot be instantiated but extended only.
 *
 * @export
 * @class Abstract
 */
export default class Abstract {
  /**
   * Creates an instance of Abstract.
   *
   * @param {*} model - DI model required for CRUD methods.
   * @memberof Abstract
   */
  constructor(model) {
    // Detect whether this constructor was called using the new operator.
    // new.target returns a reference to the constructor or function.
    if (new.target === Abstract) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
    this._model = model;
    this.getByName = this.getByName.bind(this);
    this.getList = this.getList.bind(this);
    this.create = this.create.bind(this);
  }

  /**
   * @api {get} /endpoint/:name (http://example.com/api/icons/person-icon)
   * @apiDescription Get single item by name.
   * @apiName getByName
   * @apiGroup Abstract
   * @apiParam {string} name
   * @apiErrorExample {json} item not found HTTP/1.1 404 Not Found
   * @apiSuccessExample Success-Response:
   *
   * HTTP/1.1 200 OK
   *
   *  {
   *    "tags": ["solid", "wire"],
   *    "versions": [],
   *    "name": "user-icon",
   *    "version": "0",
   *  }
   *
   * @param {string} req
   * @param {string} res
   * @param {any} next
   */
  async getByName(req, res, next) {
    try {
      const data = await this._model.findOne({name: req.params.name});
      return res.status(HTTPStatus.OK).json(data);
    } catch (error) {
      error.status = HTTPStatus.BAD_REQUEST;
      return next(error);
    }
  }

  /**
   * @api {get} /endpoint Get list of items (http://example.com/api/icons)
   * @apiDescription Get a list of items
   * @apiName getList
   * @apiGroup Abstract
   * @apiErrorExample {json} items not found HTTP/1.1 404 Not Found
   * @apiSuccessExample Success-Response:
   *
   * HTTP/1.1 200 OK
   *
   * [
   *  {
   *    "tags": ["solid", "wire"],
   *    "versions": [],
   *    "name": "user-icon",
   *    "version": "0",
   *  },
   *  {
   *    "tags": ["solid", "wire"],
   *    "versions": [],
   *    "name": "lock-icon",
   *    "version": "0",
   *  }
   * ]
   *
   * @param {string} req
   * @param {string} res
   * @param {any} next
   */
  async getList(req, res, next) {
    try {
      const data = await this._model.find();
      return res.status(HTTPStatus.OK).json(data);
    } catch (error) {
      error.status = HTTPStatus.BAD_REQUEST;
      return next(error);
    }
  }

  /**
   * @api {post} /endpoint Create item (http://example.com/api/icons)
   * @apiDescription Create item requires body obj.
   * @apiName create
   * @apiGroup Abstract
   *
   * @apiErrorExample {json} item not found HTTP/1.1 404 Not Found
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   *
   *
   * @apiParam (Body) {Object} name Icon name.
   *
   * @apiParamExample {json} Post-Example:
   *
   *  {
   *    "tags": ["solid", "wire"],
   *    "versions": [],
   *    "name": "user-icon",
   *    "version": "0",
   *  }
   *
   * @param {string} req
   * @param {string} res
   * @param {any} next
   */
  async create(req, res, next) {
    try {
      const body = req.body;
      const data = await this._model.create(body);
      return res.status(HTTPStatus.CREATED).json(data);
    } catch (error) {
      error.status = HTTPStatus.BAD_REQUEST;
      return next(error);
    }
  }
}
