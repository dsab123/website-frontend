export class App {
  constructor() {
  }
   
  configureRouter(config, router) {
    config.title = 'Daniel Sabbagh';

    config.map([
      {
        route: ['', 'home', 'summaries'], 
        name: 'home',
        nav: true, 
        moduleId: 'resources/components/summaries', 
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
        route: 'blogs',
        name: 'blog',
        nav: true,
        moduleId: 'resources/components/blogs',
        title: 'Blogs'
      },
      {
        route: 'blog/:postId?/:slug?',
        name: 'blog',
        nav: false,
        moduleId: 'resources/components/blog',
        title: 'Blog',
        href: '/blog'
      },
      {
        route: 'talks',
        name: 'talks',
        nav: true,
        moduleId: 'resources/components/talks',
        title: 'Talks'      
      },
      {
        route: 'summaries',
        name: 'summaries',
        nav: true,
        moduleId: 'resources/components/summaries',
        title: 'Books'
      }
    ]);
    this.router = router;
  }
}
