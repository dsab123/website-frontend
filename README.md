
[![CircleCI](https://circleci.com/gh/dsab123/website.svg?style=svg)](https://circleci.com/gh/dsab123/website)
![CodeBuild](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiVmNHRUNhSmJ4Z2RCNW5sWHBVQjFrNlVjU1J0RTNEZHNVZjJyTi9iZ1lxTktoK1d0SUxuMzRjUWRvVzAzYWFndkh0clJzMHVYRGF5TmFuVTFEWk9naS9nPSIsIml2UGFyYW1ldGVyU3BlYyI6InBaTy8rMGhPdGhGZVVtYUUiLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

-----------------------------

## I am rewriting my personal website.

_The first incarnation of [danielsabbagh.com](www.danielsabbagh.com) appeared when this developer was but a mere neophyte in the ways of the web, and was cobbled together rather inefficiently and with much head-banging. This first incarnation ran quite well despite the feeble ignorant efforts of our developer._

I've gained more experience in the last 3 years since I first created my website, so I figure its high time I rewrote it!

### What it is
The site is my personal blog.

I read and write a lot these days, and want to bring myself to think critically about what I take in. And, who knows? Maybe my thoughts will prove useful for some people out there.

I'm exercising my understanding of both **Domain-Driven Design** and **AWS services** by building this site.

I've been doing a lot of learning about [domain-driven design](https://en.wikipedia.org/wiki/Domain-driven_design) (DDD)  [this book](https://www.infoq.com/minibooks/domain-driven-design-quickly). I've started working on a project at work that is very DDD, and the deep level at which the models in the domain are well-known across the stakeholders.

This blog is designed around the BlogPost model. A BlogPost is, as you can imagine, a model for a blog post. The BlogPost properties are:

```
public int Id
public string Content
public bool Blurb
public Metadata Metadata
public List<BlogPost> RelatedPosts
```

There are other models involved as well, but the BlogPost model is the most prominent.

The backend of the site is serverless, being hosted by some cool sweet AWS services, which I'll write about in the backend project at a later date. That code lives [here](https://github.com/dsab123/website-backend-blogposthandler).
