import { AlbumsRouterModule } from './albums-router.module';

describe('AlbumsRouterModule', () => {
  let albumsRouterModule: AlbumsRouterModule;

  beforeEach(() => {
    albumsRouterModule = new AlbumsRouterModule();
  });

  it('should create an instance', () => {
    expect(albumsRouterModule).toBeTruthy();
  });
});
