// import faker from 'faker';

import BaseFactory from './base.factory';

export default class IconFactory extends BaseFactory {
  generate(attrs) {
    return {
      name: faker.lorem.words(6),
      tags: faker.lorem.sentence(),
    };
  }
}
