export class App {
  constructor() {
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
        route: 'blog/:postId?',
        name: 'blog',
        nav: true,
        moduleId: 'resources/components/blog',
        title: 'Blog', // how to get post name in here? might have to do in the post logic
        href: '/blog'
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
