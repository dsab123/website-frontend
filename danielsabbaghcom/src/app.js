export class App {
  constructor() {
    this.message = 'Hello World! under this is the router view';
  }
  
  configureRouter(config, router) {
    config.title = 'Totally a Title';
    
    config.map([
      {
        route: ['', 'home'], 
        name: 'home', 
        moduleId: 'resources/components/home', 
        title: 'totes a home page'
      },
      {
        route: 'about',
        name: 'about',
        moduleId: 'resources/components/about',
        title: 'totes an about page'
      }
    ]);
    this.router = router;
  }

}
