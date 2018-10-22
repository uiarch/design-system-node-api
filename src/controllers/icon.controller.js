import HTTPStatus from 'http-status';
import Icon from '../models/icon.model';

/**
 * @api {get} /icons/:name (http://example.com/api/icons/person-icon)
 * @apiDescription Get single icon by name.
 * @apiName getByName
 * @apiGroup Icon
 * @apiParam {string} name
 * @apiErrorExample {json} icon not found HTTP/1.1 404 Not Found
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 *  {
 *    "tags": ["solid", "outline"],
 *    "versions": [],
 *    "sizes": [16,  24, 32],
 *    "colors": ["warning", "success", "danger", "black"],
 *    "name": "person-icon",
 *    "version": "0",
 *  }
 *
 * @param {string} req
 * @param {string} res
 * @param {any} next
 */
export async function getByName(req, res, next) {
  try {
    const icon = await Icon.findOne({name: req.params.name});
    return res.status(HTTPStatus.OK).json(icon);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
}

/**
 * @api {get} /icons Get icons (http://example.com/api/icons)
 * @apiDescription Get a list of icons
 * @apiName getList
 * @apiGroup Icon
 * @apiErrorExample {json} icon not found HTTP/1.1 404 Not Found
 * @apiSuccessExample Success-Response:
 *
 * HTTP/1.1 200 OK
 *
 * [
 *  {
 *    "tags": ["solid", "outline"],
 *    "versions": [],
 *    "sizes": [16,  24, 32],
 *    "colors": ["warning", "success", "danger", "black"],
 *    "name": "person-icon",
 *    "version": "0",
 *  },
 *  {
 *    "tags": ["solid", "outline"],
 *    "versions": [],
 *    "sizes": [16,  24, 32],
 *    "colors": ["warning", "success", "danger", "black"],
 *    "name": "lock-icon",
 *    "version": "0",
 *  }
 * ]
 *
 * @param {string} req
 * @param {string} res
 * @param {any} next
 */
export async function getList(req, res, next) {
  try {
    const icons = await Icon.find();
    return res.status(HTTPStatus.OK).json(icons);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
}

/**
 * @api {post} /icons Create icon (http://example.com/api/icons)
 * @apiDescription Create icon requires name, tags array, and versions.
 * @apiName create
 * @apiGroup Icon
 *
 * @apiErrorExample {json} icon not found HTTP/1.1 404 Not Found
 * @apiSuccessExample Success-Response:
 * HTTP/1.1 200 OK
 *
 *
 * @apiParam (Body) {String} name Icon name.
 * @apiParam (Body) {Array} sizes Icon sizes.
 * @apiParam (Body) {Array} colors Icon colors.
 * @apiParam (Body) {Array} Tags Icon tags.
 * @apiParam (Body) {Array} versions Icon versions.
 *
 * @apiHeaderExample {json} Post-Example:
 *
 *  {
 *    "tags": ["solid", "outline"],
 *    "versions": [],
 *    "sizes": [16,  24, 32],
 *    "colors": ["warning", "success", "danger", "black"],
 *    "name": "person-icon",
 *    "version": "0",
 *  }
 *
 * @param {string} req
 * @param {string} res
 * @param {any} next
 */
export async function create(req, res, next) {
  const body = new Icon({
    name: req.body.name,
    tags: req.body.tags,
    versions: req.body.versions,
  });

  try {
    const icon = await Icon.create(body);
    return res.status(HTTPStatus.CREATED).json(icon);
  } catch (error) {
    error.status = HTTPStatus.BAD_REQUEST;
    return next(error);
  }
}
