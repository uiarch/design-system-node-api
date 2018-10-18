import Icon from '../models/icon.model';

/**
 * Get single icon by name.
 *
 * @param {string} req
 * @param {string} res
 * @param {any} next
 */
export async function get(req, res, next) {
  try {
    const icon = await Icon.findOne(req.params.name);
    return res.json(icon);
  } catch (error) {
    error.status = res.status(422);
    return next(error);
  }
}

/**
 * Get list of all icons.
 *
 * @param {string} req
 * @param {string} res
 * @param {any} next
 */
export async function getList(req, res, next) {
  Icon.find({})
    .then(icons => {
      const iconMap = {};

      icons.forEach(icon => {
        iconMap[icon._id] = icon;
      });

      res.json(iconMap);
    })
    .catch(err => {
      res.status(422).send(err.errors);
    });
}

/**
 * Create icon requires name, tags array, and versions.
 *
 * @param {string} req
 * @param {string} res
 * @param {any} next
 */
export async function create(req, res, next) {
  const icon = new Icon({
    name: req.body.name,
    tags: req.body.tags,
    versions: req.body.versions,
  });

  icon.save(err => {
    if (err) {
      res.status(422).send(err.errors);
    }
    res.json('Icon Created successfully');
  });
}
