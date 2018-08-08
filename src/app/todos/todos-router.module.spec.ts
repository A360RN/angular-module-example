import { TodosRouterModule } from './todos-router.module';

describe('TodosRouterModule', () => {
  let todosRouterModule: TodosRouterModule;

  beforeEach(() => {
    todosRouterModule = new TodosRouterModule();
  });

  it('should create an instance', () => {
    expect(todosRouterModule).toBeTruthy();
  });
});
