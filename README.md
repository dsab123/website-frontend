## I am rewriting my personal website.

_The first incarnation of [danielsabbagh.com] appeared when this developer was but a mere neophyte in the ways of the web, and was cobbled together rather inefficiently and with much head-banging. This first incarnation ran quite well despite the feeble ignorant efforts of our developer._

I've gained more experience in the last 2.5 years since I first created my website, so I figure its high time I rewrote it!

I'll be using [Aurelia](aurelia.io), a pretty snazzy MVVM framework.

The front end will be rather simple and minimalist. As I'm simultaneously learning about good design, this will be subject to change a lot.

The back end will be for serving post contents. After initially desiring to write an Express back end to serve the posts, I'm thinking that an AWS Lambda-powered event-based back end would be cooler and at least %40 more hip. 

I'm planning to host the site on my digital ocean droplet, which has been very good to me over the past few years. 

## Changelog

2/23/2018:
- made postApi a bit more robust
- added /talks route
- added recent posts functionality to postApi

3/1/2018:
- added basic support for clicking on links and such
- fixed up /post with postId parameter

3/2/2018:
- made related post tags clickable

3/8/2018:
- moved nav items to top right of page, added beginnings of logo to site

3/9/2018:
- prettied up CSS and finished logo
- prettied up related post functionality
- became font of using 'prettied'

3/10/2018:
- renamed /post route to /blog
- fixed weird sliding behavior wrt related posts functionality
- added cool dimming effect when bringing up new post
- estimated that %70 of front end is complete at this point
