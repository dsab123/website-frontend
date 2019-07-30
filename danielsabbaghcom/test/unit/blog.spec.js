

import {PostApi} from '../../src/resources/api/postApi';

jest.mock('../../src/resources/api/postApi', () => ({
    PostApi: {
      publish: jest.fn()
    }
  }));


import {Blog} from '../../src/resources/components/blog';

describe('Blog Component', () => {
    let blog;

    beforeEach(() => {
        blog = new Blog(PostApi);
    });

    test('sanity test', () => {
      const defaultPostId = 1;
      expect(blog.getDefaultPostId()).toBe(defaultPostId);
    });
});
