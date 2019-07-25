# BCMA
## Ballarat Centre of Music and the Arts Website

This is our final assignment as Coder Academy Students. We have built a MERN stack application for the Ballarat Centre of Music and the Arts. Our aim was to create a full CRUD application that would act as a CMS for our client.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/ballarat-centre-of-music-and-the-arts-ballarat-dance-schools-e30a-938x704.jpg)

## Contributors
Tess | Jieyi | Ivan
--- | --- | ---
https://github.com/tessgard | https://github.com/jieyiphua | https://github.com/donatoivan


## MERN Project Links

### Deployment

- Client:  http://bcma-site.herokuapp.com/
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
  - [Tech stack](#tech-stack)
  - [Setup, configure, deploy](#setup-configure-deploy)
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
  - [Workflow Diagram - User Journeys](#workflow-diagram---user-stories)
    - [User Journey for Normal User](#user-journey-for-normal-user)
    - [User Journey for Admin User](#user-journey-for-admin-user)
  - [Database Schemas](#database-schemas)
  - [Data Flow Diagram](#data-flow-diagram)
  - [OO Design Documentation](#oo-design-documentation)
  - [Project Management and Planning](#project-management-and-planning)
    - [Project plan and timeline](#project-plan-and-timeline)
    - [Communication with Client](#communication-with-client)
    - [Team Communication](#team-communication)
    - [Code Review](#code-review)
    - [Agile Methodology](#agile-methodology)
    - [Questionnaire](#questionnaire)
    - [Manual](#manual)
- [Short Answer Questions](#short-answer-questions)
  - [What are the most important aspects of quality software?](#what-are-the-most-important-aspects-of-quality-software)
  - [What libraries are being used in the app and why?](#what-libraries-are-being-used-in-the-app-and-why)
  - [A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?](#a-team-is-about-to-engage-in-a-project-developing-a-website-for-a-small-business-what-knowledge-and-skills-would-they-need-in-order-to-develop-the-project)
  - [Within your own project what knowledge or skills were required to complete your project, and overcome challenges?](#within-your-own-project-what-knowledge-or-skills-were-required-to-complete-your-project-and-overcome-challenges)
  -[Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?](#evaluate-how-effective-your-knowledge-and-skills-were-this-project-using-examples-and-suggest-changes-or-improvements-for-future-projects-of-a-similar-nature)

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

### Tech Stack

Our MERN tech stack includes:

  - MongoDB
  - Express
  - React
  - Node.js
  - Html
  - CSS
  - SCSS
  - Bootsrap
  - Heroku
  - Now.sh
  
  
### Setup, configure, deploy

The app is broken down into 2 repositories;

The front end: https://github.com/tessgard/MERN-app-frontend
The back end: https://github.com/donatoivan/mern-backend

to run the app: clone both repositories and run npm install, and npm start. App will now be running locally and accessible through localhost.

The backend is deployed through ZEIT now which is a cloud platform that deploys instantly and requires no configuration. To deploy we followed the steps in the documentation. 

The frontend is deployed through Heroku.


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

The main way to assure ourselves that the content could be solely managed by BCMA administrators was to provide an Admin portal that had access to protected routes. We used Json WEb tokens to verify the admin user's credentials in order to allow them to have access to full CRUD functionality. When the user logs in to the website, a request is sent to our server to authencticate the user. If the user credentials mathc ones in the databse, a JWT is created and sent back to the user and stored on local storage and is only removed when the user logs out or the token expires. While the user is logged in, the application constantly checks if the JWT is valid.

Below is an image that explains the process quite clearly:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/jwt%20.png)

Once we were able to differentiate between a normal and an admin user, we would be able to populate the content fields with CRUD functionality. That way, a page that would normally look like this:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/about-us-normal.png)

Once logged in as admin, would look like this:

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/about-us-admin.png)

## Application Design

### Design Process

The design process took three distinct steps that allowed us to arrive at our final application. Our initial conversation with the client was non-specific and loose. Knowing that we were going to have only three weeks to submit our assignment, we began to formalise a design blueprint for the application. We wanted to infuse a sense of youth and fun into the design, coupled with a sophistication and lightness that would speak to the demographic that is represented and targeted at BCMA. We scoured through the BCMAs Facebook page and Facebook group, picking colour schemes that we thought were appropriate according to the BCMA branding that already existed. We had many aspirations for the application that we wanted to implement, but we came to the agreement that our MVP would be a simple full CRUD application. 
After our initial Figma planning and design concept 1 and 2, our client got back in touch with some feedback and some more concrete information about what they were after.

We were given some websites by our client as reference points for our design. Below are some of the websites that Paula suggested:

- http://www.curtaincallpas.com.au/
- http://www.anitacoutts.com.au/
- https://www.kerrymooreschoolofballet.com.au/

#### Version 1.0 Wireframe

The first iteration of the design was very colourful and fun, vibrant and effervescent. Each individual content category had it's own bubbly pastel colour scheme. The navbar was on the left hand side to simulate a dashboard feel in order to facilitate seamless browser experience. Essentially, we wanted to convey that same fruitful fun that is conveyed and expressed every time the children at BCMA enter stage right and perform their productions.

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

Our User stories were written up using Cardboard, a user-story mapping tool, which provided us with a clear outline of what our MVP would be. We agreed on focusing on two user-story flows: that of the normal user and user as admin.

- As a normal user, we would want them to be able to read all content available on the website including classes, gallery,       about, faculty, whats-on, faqs nad contact

- As an admin user, we would want them to be able to login via a admin page, which would redirect them to the home page. Once   logged in, the admin user would have free rein to create, read, update and delete all contant available on the website. Once   logged out, the website would revert back to the normal webiste with any changes saved on the database and thus the website   updated

#### First Version of User Stories
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/user%20story1.png)

#### Second Version of User Stories
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/user%20story%202.png)

Our second version of the user stories was much more pared back in terms of content than the first. This was as per the client's request. She suggested that there was no need for as many different kinds of content to be viewed or altered on the website.

### Workflow Diagram - User Stories

We created our user story workflow diagrams in Figma to provide clarity on the options available to the user and views required to be built.

#### User Journey for Normal User

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/user-workflow-normal.png)

#### User Journey for Admin User

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/user-workflow-admin.png)

## Database Schemas

In order to facilitate the ability for the Admin user to update and delete all the content available on the website, we proceeded to make schemas for all the content. The use of MongoDb as the database was very helpful as there was no need to establish any relationships between documents or schemas. 

We had two types of Schemas. The first was the User schema. This was used to reperesent Admin. We decided to not call it Admin because we only had one type of user schema and there was no need to differentiate it from any other schemas.

```javascript
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
```

The other schemas represented all the updateable content on the website. These ranged from the faqs, contact and about, even up to images in the gallery

```javascript
const AboutSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  }
});
const CarouselImageSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});
const ClassSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const ContactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});
const FaqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});
const GallerySchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  }
});
const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  faculty: {
    type: String,
    required: true
  }
});
```

## Data Flow Diagram

Below is a graphical representation of the Data Flow of our application

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/My%20First%20Document.png)

## OO Design Documentation

We wanted to manage our main state from App.js and pass it down as properties to all the opther components. We extracted all the routes out of App and made a Routes Component. This was to declutter App and to adhere to a classical version of a separation of concerns.

We had two user experiences that we had to cater for in our application. Authentication was passed down to all components that had content that was updateable. Our Form components were also passed down authentication as only Admin users have access to add and update content.



![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/OO-diagram-mern.png)

## Project Management and Planning

### Project plan and timeline

Our team utilized Slack, Trello and email to communicate with each other and the client and to delegate and keep track of tasks.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/Project%20Timeline.PNG)

### Communication with Client

We first got into contact with our client (Paula) via a phone call. Subsequently, we stayed in touch with feedback and questions via email.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/Email%201.png)
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/Email%202.png)

### Team Communication

After confirming our client and obtained initial sign-off during the first week of the project, our team's planning methodology involved:

- Allocation of responsibilities to team members via Trello.
- Utilising both Trello and GitHub to monitor team member's work based on project requirements.
- Reassessing project scopes based on risks, blockers and changes.

![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/Trello%201.PNG)
![](https://github.com/tessgard/MERN-app-frontend/blob/master/docs/Slack%201.PNG)

### Code Review

On Github, team members raised and merged pull request in the presence of and under approval from another team member. This approach worked well for us and helped to reduce merge conflicts and merged to master branch correctly. We were able to resolve merge conflicts relatively quickly and correctly.

The conflict solving process was as follows:

1. Create a pull request.
2. If merge conflicts exists, resolve conflicts on Github with another team member.
3. Merge pull request.
4. All team members git pull from master branch.


### Agile Methodology

We used Trello to split tasks and responsibilities to team members and to track our progress. We performed daily standups where we had to discuss on the current status of our progress on the project. During the project timeline, we set realistic goals and appropriately assigned tasks to team members.

Customer Satisfaction was a priority for our team and we aimed to adapt to our client's requirements. We maintained a good communication channel and collaboration with our client.

We created User stories early in the project as part of our planning and used these during sprints to complete features we hadn't done while maintaining a fast, efficient development pace.

### Questionnaire 

https://docs.google.com/forms/d/e/1FAIpQLSd3e_8YQ-wM9vBVT3XXZYxUlhao6ZfSnVMLW74PCe0naJq7pw/viewform?usp=sf_link

### Manual 

https://github.com/tessgard/MERN-app-frontend/blob/master/docs/BCMA%20WEBSITE%20MANUAL.docx

## Short Answer Questions

### What are the most important aspects of quality software?

There are 6 important software quality characteristics - namely Maintainability, Correctness/Functionality, Usability, Reliability, Portability and Efficiency.


**Maintainability** is "the ease with which changes can be made to satisfy new requirements or to correct deficiencies" [Balci 1997]. Well designed software should be flexible enough to accommodate future changes that will be needed as new requirements come to light. Since maintenance accounts for nearly 70% of the cost of the software life cycle [Schach 1999], the importance of this quality characteristic cannot be overemphasized. Quite often the programmer responsible for writing a section of code is not the one who must maintain it. For this reason, the quality of the software documentation significantly affects the maintainability of the software product.

**Correctness** is "the degree with which software adheres to its specified requirements" [Balci 1997]. At the start of the software life cycle, the requirements for the software are determined and formalized in the requirements specification document. Well designed software should meet all the stated requirements. While it might seem obvious that software should be correct, the reality is that this characteristic is one of the hardest to assess. Because of the tremendous complexity of software products, it is impossible to perform exhaustive execution-based testing to insure that no errors will occur when the software is run. Also, it is important to remember that some products of the software life cycle such as the design specification cannot be "executed" for testing. Instead, these products must be tested with various other techniques such as formal proofs, inspections, and walkthroughs.

**Reusability** is "the ease with which software can be reused in developing other software" [Balci 1997]. By reusing existing software, developers can create more complex software in a shorter amount of time. Reuse is already a common technique employed in other engineering disciplines. For example, when a house is constructed, the trusses which support the roof are typically purchased preassembled. Unless a special design is needed, the architect will not bother to design a new truss for the house. Instead, he or she will simply reuse an existing design that has proven itself to be reliable. In much the same way, software can be designed to accommodate reuse in many situations. A simple example of software reuse could be the development of an efficient sorting routine that can be incorporated in many future applications.


**Reliability** is "the frequency and criticality of software failure, where failure is an unacceptable effect or behavior occurring under permissible operating conditions" [Balci 1997]. The frequency of software failure is measured by the average time between failures. The criticality of software failure is measured by the average time required for repair. Ideally, software engineers want their products to fail as little as possible (i.e., demonstrate high correctness) and be as easy as possible to fix (i.e., demonstrate good maintainability). For some real-time systems such as air traffic control or heart monitors, reliability becomes the most important software quality characteristic. However, it would be difficult to imagine a highly reliable system that did not also demonstrate high correctness and good maintainability.


**Portability** is "the ease with which software can be used on computer configurations other than its current one" [Balci 1997]. Porting software to other computer configurations is important for several reasons. First, "good software products can have a life of 15 years or more, whereas hardware is frequently changed at least every 4 or 5 years. Thus good software can be implemented, over its lifetime, on three or more different hardware configurations" [Schach 1999]. Second, porting software to a new computer configuration may be less expensive than developing analogous software from scratch. Third, the sales of "shrink-wrapped software" can be increased because a greater market for the software is available.


**Efficiency** is "the degree with which software fulfills its purpose without waste of resources" [Balci 1997]. Efficiency is really a multifaceted quality characteristic and must be assessed with respect to a particular resource such as execution time or storage space. One measure of efficiency is the speed of a program's execution. Another measure is the amount of storage space the program requires for execution. Often these two measures are inversely related, that is, increasing the execution efficiency causes a decrease in the space efficiency. This relationship is known as the space-time tradeoff. When it is not possible to design a software product with efficiency in every aspect, the most important resources of the software are given priority.

### What libraries are being used in the app and why?

#### Backend Libraries

  -  "aws-sdk": "^2.493.0" : software dev kit to assist in implementing image uploads with S3 bucket
  -  "bcryptjs": "^2.4.3" : hashing password with salt
  -  "chai": "^4.2.0" :  BDD / TDD assertion library for node 
  -  "chai-http": "^4.3.0" : provides an interface for live integration testing via superagent
  -  "cors": "^2.8.5" : enables Cross Origin Resource Sharing
  -  "dotenv": "^8.0.0" : loads environment variables from a .env file into process.env
  -  "express": "^4.17.1" : To configure and develop the app API
  -  "express-validator": "^6.1.1" : a set of middlewares to provide basic validation
  -  "jsonwebtoken": "^8.5.1" : enables us to use JSON Web Tokens
  -  "mocha": "^6.1.4" : JavaScript test framework for Node.js & The Browser
  -  "mongoose": "^5.6.4" : schema-based solution to model our application data
  -  "nodemon": "^1.19.1" : automatically restarts the node application when file changes in the directory are detected.
  -  "nyc": "^14.1.1" : A collection of reporters, providing both terminal and HTML output for tests in Mocha
  -  "sinon": "^7.3.2" : JavaScript test spies, stubs and mocks for our backend testing
  -  "supertest": "^4.0.2" : high-level abstraction for testing HTTP
  -  "lodash": ">=4.17.13" : installed to avoid security risk due to lodash vulnerability
  
  #### Frontend Libraries

   -  "@babel/runtime-corejs2": "^7.5.5"
  -  "@fortawesome/fontawesome-svg-core": "^1.2.19"
  -  "@fortawesome/free-brands-svg-icons": "^5.9.0"
  -  "@fortawesome/free-regular-svg-icons": "^5.9.0"
  -  "@fortawesome/free-solid-svg-icons": "^5.9.0"
  -  "@fortawesome/react-fontawesome": "^0.1.4"
  -  "axios": "^0.19.0" : HTTP client for the browser and node.js
  -  "bootstrap": "^4.3.1" : front-end development framework
  -  "leaflet": "^1.5.1" : JavaScript library for mobile-friendly interactive maps. 
  -  "mdbootstrap": "^4.8.5" : material desgin for bootstrap 4
  -  "node-sass": "^4.12.0" : 
  -  "react": "^16.8.6" : JavaScript library for building user interfaces.
  -  "react-bootstrap": "^1.0.0-beta.9"	  -  "react-bootstrap": "^1.0.0-beta.9" : Bootstrap 4 components built with React.
  -  "react-bootstrap-carousel": "^3.4.2"	  -  "react-bootstrap-carousel": "^3.4.2" : React port of bootstrap carousel
  -  "react-dom": "^16.8.6"	  -  "react-dom": "^16.8.6" :
  -  "react-leaflet": "^2.4.0"
  -  "react-leaflet-markercluster": "^1.1.8"
  -  "react-router": "^5.0.1"
  -  "react-router-dom": "^5.0.1"
  -  "react-scripts": "3.0.1"

### A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

In order to be successful when taking on a project with a small business the most important aspect is good communication. It’s important to establish a communication channel and to keep checking in with the client. It’s imperative to discuss expectations, the scope of the project, and the timeline.

Teamwork, resilience, and a positive attitude will go a long way.

Attention to detail is key when building a web application, as small errors can create large issues.

The ability to troubleshoot bugs and to get to the root of the problem. The ability to adapt the application if there is a need to reconfigure to suit the client’s needs.

Understanding the business needs is vital, as this will direct the purpose of the application. Every feature implemented should be questioned in terms of how it will be adding value to the target user.


### Within your own project what knowledge or skills were required to complete your project, and overcome challenges?
Technical knowledge required included:
- React
- Javascript
- MongoDB
- Html CSS
- Bootstrap
- Netlify / Herolku
- ZEIT now

The ability to troubleshoot issues and trace them back to the root cause to debug.
We experienced some issues with our final deploy with Netlify, after 3 hours of troubleshooting with no luck in finding a fix, we decided to test other deploy options to see if we could bypass this bug. We then deployed through Heroku with no issues. Whilst we still don’t know what caused this issue, the important take away is that unless a certain method of doing something is absolutely necessary, then it’s ok to forget about a bug and try again with something else. 

### Evaluate how effective your knowledge and skills were this project, using examples, and suggest changes or improvements for future projects of a similar nature?

In the end we were happy with our ability to produce a clean and simple application that delivered on what it claims to. 
We encountered minimal issues until the last day when we dealt with some deployment setbacks.
We worked well within our team and communicated well, always working side by side and talking through issues, asking questions, double checking things as needed.
One way our app could be more effective is to take a more component based approach to building the front end in react.
We could have pushed our client more for feedback by employing different communication channels, rather than just over email. We had very slow response rates from our client and not much constructive input to work with.
