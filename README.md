# BCMA
## Ballarat Centre of Music and the Arts Website

This is our final assignment as Coder Academy Students. We have built a MERN stack application for the Ballarat Centre of Music and the Arts. Our aim was to create a full CRUD application that would act as a CMS for our client.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/ballarat-centre-of-music-and-the-arts-ballarat-dance-schools-e30a-938x704.jpg)

## Contributors
Tess | Jiey | Ivan
--- | --- | ---
https://github.com/tessgard | https://github.com/jieyiphua | https://github.com/donatoivan


## MERN Project Links

### Deployment

- Client: https://bcma.netlify.com/
- Server: https://deployment-mern-backend-tessivanjayz.gardtess.now.sh

### Github Repos

- Client: https://github.com/tessgard/MERN-app-frontend
- Server: https://github.com/donatoivan/mern-backend

## Summary

Our client was the Ballarat Centre of Music and the Arts. In our conversations with them we were asked to build a website that could be updated and changed on a constant basis. We wanted to create a Content Management System that was easy to use and wouldn't require the upskill of using something like Wordpress or Kentico. Using the full MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS) we set upon creating an application that was fully customisable through the main CRUD features(Create, Read, Update, Delete).

## Contents

- [MERN Project Links](#mern-project-links)
- [About The Project](#about-the-project)
  - [Background](#background)
  - [Functionality and Features](#functionality-and-features)
- [The Brief](#the-brief)
  - [The Client](#the-client)
  - [The Problem](#the-problem)
  - [The Solution](#the-solution)
- [Application Design](#application-design)
  - [Design Process](#design-process)
    - [Version 1.0 Wireframe](#version-10-wireframe)
    - [Version 2.0 Wireframe](#version-20-wireframe)
    - [Version 3.0 Wireframe](#version-30-wireframe)
  - [User Stories](#user-stories)

## About The Project

### Background

We were tasked with finding a real world client for our final assingment as Coder Academy students. The application that we were asked to build had to use the MERN stack as the basis for its foundation. The BCMA website that we ultimately built was shaped around the requirements of our client, Paula Heenan, Director at BCMA.

We initially has issues finding a client. In fact, we were in the initial stages with another client at the beginning of the first week, until we realised that the scope of that project didn't quite fit the assignment requirements. Luckily, one of our classmates had multiple client options and presented some to us. The choice came down to two considerations: build a website application for a Jim's Mowing franchise owner or build a website application for the Ballarat Centre of Music and the Arts. After a short deliberation, we decided to proceed with the latter.

Our reasoning was very simple. The BCMA facebook page demonstrated a vibrant ecosystem full of life and colour and we were able to draw inspiration from the artistic creativity of the productions and performances described in the feed. It was clear that the main source of business for BCMA was through their facebook feed. What was also clear was that BCMA lacked a portal/outlet whereby they could display their content in a more organised and streamlined way. We were excited by the possibilities presented to us by BCMA's dilemma.

We had an initial conversation with Paula whereby the skeleton of the application was outlined. As BCMA's content is ever changing and fluid, Paula was very clear that she didn't want something to supersede the Facebook page but compliment it. Points of focus for the app were to display a what's on page, a faculty page, a gallery page and an about page.

We determined pretty quickly that we wanted to create a fully functional CRUD application to make all the content on the website customisable and updateable. We decided that this would be our MVP and set about designing our app.

### Functionality and Features

The BCMA website is a portal whereby future or current BCMA clients and customers can access all the inforamtion reagrding BCMA's productions, classes, faculty and images. The website works in tandem with the BCMA facebook page in providing well rounded brad awareness and the dissemination of BCMA's creative content.

  - BCMA's clients and customers have access to the website where they can pore through all of BCMA's available content           including classes, faculty and future productions.
  - BCMA admin users can login via a route to have full admin access to the website. Being an admin gives the user                 access to create, read, update and delete all available content on the website including images on the home page carousel     and images associated with upcoming events.
  - The images on the website are stored on AWS
  - The website uses Json Web tokens for login/logout which are stored on local storage.

### Home Page

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/home-carousel.png)

### Admin login route

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/admin-login.png)

### Home Page with admin logged in

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/logout-on-navbar.png)

## The Brief

### The Client

#### Ballarat Centre of Music and the Arts


> Enter the exciting world of preforming arts!
> Become a ‘triple threat’ and dance, sing and act your way into an unbelievable world of expression,
> fun and friendships or simply come in and enjoy your own private sessions to just learn to sing songs that YOU want to sing.
>
> Discover your potential and build confidence through becoming great at something you love to do.
>
> At the BCMA you can try a variety of classes before committing to any. 
> The range is extraordinary; the teachers amazing, the results come from what you put in. 
> Our philosophy is to ‘Maximise YOUR potential’, whatever that may be
>
> The BCMA studios include 2 large Dance/Drama studios, 6 Music Studios and a Costume department.
>
> We have an exciting dance, drama and music centre, which in addition to offering up-to-date facilities 
> also makes families very welcome in our lounge area. 
> Comfortable couches, large screen for DVD viewing, tea and coffee facilities 
> and the convenience of being close to supermarkets, banks, kinders and schools
>
> On the main artery into Ballarat from Melbourne (Victoria Street), we are easy to find, easy to park at and easy to relax in.

BCMA is a Arts academy catering for all sorts of classes for the vibrant arts community in Ballarat. A quick look at their Facebook page reveals the important role this organisation plays in the wider Ballarat community.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/bcma-facebook.png)

### The Problem

There were two main considerations that we had to work through during our application build. These two considerations were the main driving force behind most of our design decisions and helped direct us on the way to generating our final outcome.

Whilst BCMA had a very successful method of communicating with their current clients and members, they were very aware that apart from their Facebook profile, they had no substantial digital footprint. In order to communicate with the general public about the content they produce and services they provide, it was clear to BCMA that they had to branch out and build a website. With 31 professional instructors and a multitude of classes and productions on offer across multiple venues, BCMA were after a way to centralize all this information for current and prospective clients. 

The second consideration that we had to assess was that BCMA's portfolio of content was ever changing and non-static. Many of the details for venues and dates for BCMA's offerings are not known until the very last minute and so it was important to them to have an application that was updateable at the click of a button.

### The Solution

We wanted to create a very simple to use Content Management System for BCMA in order to facilitate a seamless user experience during the creating and updating of content on their website. We set out to make the webiste completely updateable and all the content deletable barring a few exceptiops. These exceptions were purposeful design decisions that were made in order to maintain a comprehensive structure for the website (eg. the landing page image slider was only able to be updated but images could not be deleted).

We were provided with a basic outline of categories to focus on through a word document provided by the client. A small section of these documents are detailed as follows:

#### About us
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/about-us-paula.png)

#### Classes
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/classes-paula.png)

#### Faculty
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/faculty-paula.png)

#### Gallery
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/gallery-paula.png)

#### FAQ
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/faq-paula.png)

#### Whats On
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/whats-on-paula.png)

As you can tell, a lot of the content that BCMA were thinking about adding and implementing was still somewhat up in the air. This only furthered our resolve to provide them with an application that could have content added to it at any point in time. Likewise, if they felt that the content they had up on their website was stale or redundant, it would be easy for them to change it.

The main way to assure ourselves that the content could be solely managed by BCMA administrators was to provide an Admin portal that had access to protected routes. We used Json WEb tokens to verify the admin user's credentials in order to allow them to have access to full CRUD functionality. When the user logs in to the website, a request is sent to our server to authencticate the user. If the user credentials mathc ones in the databse, a JWT is created and sent back to the user and stored on local storage and is only removed untill the user logs out or the token expires. While the user is logged in, the application constantly checks if the JWT is valid.

Below is an image that explains the process quite clearly:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/jwt%20.png)

This way a website page that looked like this:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/about-us-normal.png)

Once logged in as admin, would look like this:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/about-us-admin.png)

## Application Design

### Design Process

The design process took three distinct steps that allowed us to arrive at our final application. Our initial conversation with the client was non-specific and loose. Knowing that we were going to have only three weeks to submit our assignment, we began to formalise a design blueprint for the application. We wanted to infuse a sense of youth and fun into the design, coupled with a sophistication and lightness that would speak to the demographic that is represented and targeted at BCMA. We scoured through the grups Facebook page, picking colour schemes that we thought were appropriate according to the BCMA branding that already existed. We had many aspirations for the application that we wanted to implement, but we came to the agreement that our MVP would be a full CRUD application. 

We were given some websites by our client as reference points for our design. Below are some of the websites that Paula suggested:

- http://www.curtaincallpas.com.au/
- http://www.anitacoutts.com.au/
- https://www.kerrymooreschoolofballet.com.au/

#### Version 1.0 Wireframe

The first iteration of the design was very colourful and fun, vibrant and effervescent. Each individual content category had it's own bubbly pastel colour scheme. The navbar was on the left hand side to simulate a dashboard feel in order to facilitate seamless browser experience. Essentially, we wanted to convey that same fruitful fun that is conveyed and expressed every time the children atr BCMA enter stage right and perform their productions.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/first-draft-design.png)

Whilst our client was supportive of our design choices, she made it very clear that she wanted the content to do the talking. She felt that the application was a little busy not a true reflection of her business. She believed the colour scheme was too distracting and asked for a redraft

#### Version 2.0 Wireframe

The second iteration had a much more muted colour palette that sought to still capture a youthful but professional look that the client was looking for. We changed the navbar to be more of a standard navbar but kept the layout pretty much the same a as the previous iteration.

In choosing our colour palette, we used the BCMA logo that was provided to us by Paula:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/bcma-logo.jpg)

We used the purple from the logo as the basis for our colour scheme in version 2.0. We still wanted to maintain that sense of fun from the previous version and bring a modern touch to the design. We thought this might strike a nice balance for our client and awaited her response.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/second-draft-design.png)

Our client again was very clear that she thought our design was still too busy. In retrospect and on further thought, it seems that we weren't capturing the true essence of BCMA and it's client base. We think we may have formulated our version of what BCMA was and hadn't cracked what was charming about BCMA and it's people. In working through the feedback we received from Paula, we came to the decision to simplify eveything as much as possible in order to meet pur client's requests. We stripped back most of the components and came to a much cleaner and simpler design aesthetic.

#### Version 3.0 Wireframe

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/third-draft-design.png)

Our final version of the design turned out to be much simpler and displayed a much more classical look than we had previously designed. We were very conscious of making BCMA's content be the shining light and refrain from adding any unnescessary bells and whistles that might detract from the content. Our layout was very similar as version 2.0 but we added the company logo in the navbar which added authenticity to the site. We had previously tried to clean up the logo in order to make it simpler and more modern but again, we were probably trying to reinvent the wheel and go against the true heart and character of BCMA. The absence of colour in our desing meant the main soiurce of colour would be the images and content displayed on the website - something that was seen as crucial to our client.


### User Stories




### Short Answer Questions

#### What are the most important aspects of quality software?

There are 6 important software quality characteristics - namely (yes)Maintainability, Correctness/Functionality, (yes)usability, (yes)Reliability, (yes)Portability and (yes)Efficiency.


**Maintainability** is "the ease with which changes can be made to satisfy new requirements or to correct deficiencies" [Balci 1997]. Well designed software should be flexible enough to accommodate future changes that will be needed as new requirements come to light. Since maintenance accounts for nearly 70% of the cost of the software life cycle [Schach 1999], the importance of this quality characteristic cannot be overemphasized. Quite often the programmer responsible for writing a section of code is not the one who must maintain it. For this reason, the quality of the software documentation significantly affects the maintainability of the software product.

**Correctness** is "the degree with which software adheres to its specified requirements" [Balci 1997]. At the start of the software life cycle, the requirements for the software are determined and formalized in the requirements specification document. Well designed software should meet all the stated requirements. While it might seem obvious that software should be correct, the reality is that this characteristic is one of the hardest to assess. Because of the tremendous complexity of software products, it is impossible to perform exhaustive execution-based testing to insure that no errors will occur when the software is run. Also, it is important to remember that some products of the software life cycle such as the design specification cannot be "executed" for testing. Instead, these products must be tested with various other techniques such as formal proofs, inspections, and walkthroughs.

**Reusability** is "the ease with which software can be reused in developing other software" [Balci 1997]. By reusing existing software, developers can create more complex software in a shorter amount of time. Reuse is already a common technique employed in other engineering disciplines. For example, when a house is constructed, the trusses which support the roof are typically purchased preassembled. Unless a special design is needed, the architect will not bother to design a new truss for the house. Instead, he or she will simply reuse an existing design that has proven itself to be reliable. In much the same way, software can be designed to accommodate reuse in many situations. A simple example of software reuse could be the development of an efficient sorting routine that can be incorporated in many future applications.


**Reliability** is "the frequency and criticality of software failure, where failure is an unacceptable effect or behavior occurring under permissible operating conditions" [Balci 1997]. The frequency of software failure is measured by the average time between failures. The criticality of software failure is measured by the average time required for repair. Ideally, software engineers want their products to fail as little as possible (i.e., demonstrate high correctness) and be as easy as possible to fix (i.e., demonstrate good maintainability). For some real-time systems such as air traffic control or heart monitors, reliability becomes the most important software quality characteristic. However, it would be difficult to imagine a highly reliable system that did not also demonstrate high correctness and good maintainability.


**Portability** is "the ease with which software can be used on computer configurations other than its current one" [Balci 1997]. Porting software to other computer configurations is important for several reasons. First, "good software products can have a life of 15 years or more, whereas hardware is frequently changed at least every 4 or 5 years. Thus good software can be implemented, over its lifetime, on three or more different hardware configurations" [Schach 1999]. Second, porting software to a new computer configuration may be less expensive than developing analogous software from scratch. Third, the sales of "shrink-wrapped software" can be increased because a greater market for the software is available.


**Efficiency** is "the degree with which software fulfills its purpose without waste of resources" [Balci 1997]. Efficiency is really a multifaceted quality characteristic and must be assessed with respect to a particular resource such as execution time or storage space. One measure of efficiency is the speed of a program's execution. Another measure is the amount of storage space the program requires for execution. Often these two measures are inversely related, that is, increasing the execution efficiency causes a decrease in the space efficiency. This relationship is known as the space-time tradeoff. When it is not possible to design a software product with efficiency in every aspect, the most important resources of the software are given priority.
