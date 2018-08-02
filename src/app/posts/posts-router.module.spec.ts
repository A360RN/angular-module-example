import { PostsRouterModule } from './posts-router.module';

describe('PostsRouterModule', () => {
  let postsRouterModule: PostsRouterModule;

  beforeEach(() => {
    postsRouterModule = new PostsRouterModule();
  });

  it('should create an instance', () => {
    expect(postsRouterModule).toBeTruthy();
  });
});
