export class App {
  constructor() {
    this.message = 'Hello World! under this is the router view';
    this.title = "Daniel Sabbagh!";
  }
  
  configureRouter(config, router) {
    config.title = 'Daniel Sabbagh';

    config.map([
      {
        route: ['', 'home'], 
        name: 'home',
        nav: true, 
        moduleId: 'resources/components/home', 
        title: 'Home'
      },
      {
        route: 'about',
        name: 'about',
        nav: true,
        moduleId: 'resources/components/about',
        title: 'About'
      },
      {
        route: 'post/:postId?',
        name: 'post',
        nav: true,
        moduleId: 'resources/components/post',
        title: 'Post', // how to get post name in here? might have to do in the post logic
        href: '/post'
      },
      {
        route: 'talks',
        name: 'talks',
        nav: true,
        moduleId: 'resources/components/talks',
        title: 'Talks'
      }
    ]);
    this.router = router;
  }

}
