export class App {
  constructor() {
    this.message = 'Hello World! under this is the router view';
  }
  
  configureRouter(config, router) {
    config.title = 'Daniel Sabbagh';

    config.map([
      {
        route: ['', 'home'], 
        name: 'home', 
        moduleId: 'resources/components/home', 
        title: 'Home'
      },
      {
        route: 'about',
        name: 'about',
        moduleId: 'resources/components/about',
        title: 'About'
      },
      {
        route: 'post',
        name: 'post',
        moduleId: 'resources/components/post',
        title: 'Post' // how to get post name in here? might have to do in the post logic
      }
    ]);
    this.router = router;
  }

}
