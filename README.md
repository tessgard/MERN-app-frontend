# BCMA
## Ballarat Centre of Music and the Arts 

This is our final assignment as Coder Academy Students. We have built a MERN stack application for the Ballarat Centre of Music and the Arts. Our aim was to create a full CRUD application that would act as a CMS for our client.


Image about BCMA...Maybe logo

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

Our client was the Ballarat Centre of Music and the Arts. In our conversations wth them we were asked to build a website that could be updated and changed on a contant basis. We wanted to create a Content Management System that was easy to use and wouldn't require the upskill of using something like Wordpress or Kentico. Using the full MERN Stack (MongoDB, ExpressJS, ReactJS, NodeJS) we set upon creating an application that was fully customizable through the main CRUD features(Create, Read, Update, Delete).

## Contents

- [MERN Project Links](#mern-project-links)
- [About Project](#about-project)
  - [Background](#background)
  - [Functionality and Features](#functionality-and-features)

## About Project

### Background

We were tasked with finding a real world client for our final assingment as Coder Academy students. The application that we were asked to build had to use the MERN stack as the basis for its foundation. The BCMA website that we ultimately built was shaped around the requirements of our client, Paula Heenan, Director at BCMA.

We initially has issues finding a client. In fact, we were at the initial stages with another client at the beginning of the first week, until we realised that the scope of that project didn't quite fit the assignment requirements. Luckily, one of our classmates had multiple client options presented to us. The choice came down to two considerations: build a website application for a Jim's Mowing franchise owner or build a website application for the Ballarat Centre of Music and the Arts. After a short deliberation, we decided to proceed with the latter.

Our reasoning was very simple. The BCMA facebook page demonstrated a vibrant ecosystem full of life and colour and we were able to draw inspiration from the artistic creativity of the productions and performances described in the feed. It was clear that the main source of business for BCMA was through their facebook feed. What was also clear was that BCMA lacked a portal/outlet whereby they could display their content in a more organised and streamlined way. We were excited by the possibilities presented to us by BCMA's dilemma.

We had an initial conversation with Paula whereby the skeleton of the application was outlined. As BCMA's content is ever changing and fluid, Paula was very clear that she didn't want something to supersede the Facebook page but compliment it. Points of focus for the app were to display a what's on page, a faculty page, a gallery page and an about page.

We determined pretty quickly that we wanted to create a fully functional CRUD application to make all the content on the website customisable and updateable. We decided that this would be our MVP and set about designing our app.

### Functionality and Features

The BCMA website is a portal whereby future or current BCMA clients and customers can access all the inforamtion reagrding BCMA's productions, classes, faculty and images. The website works in tandem with the BCMA facebook page in providing well rounded brad awareness and the dissemination of BCMA's creative content.

  - BCMA's clients and customers have access to the website where they can pore through all of BCMA's available content           including classes, faculty and future productions.
  - BCMA admin users can login via a route to have full admin access to the website. Being an admin gives the user                 access to create, read, update and delete all available content on the website including images on the home page carousel     and images associated with upcoming events.
  - The images on the website are stored on AWS
  - The website uses Json Web tokens for login/logout which are stored on local storage.


Photo of admin login route.

Photo of carousel

## The Brief

### The Client

#### Ballarat Centre of Music and the Arts

### Short Answer Questions

#### What are the most important aspects of quality software?

There are 6 important software quality characteristics - namely (yes)Maintainability, Correctness/Functionality, (yes)usability, (yes)Reliability, (yes)Portability and (yes)Efficiency.


**Maintainability** is "the ease with which changes can be made to satisfy new requirements or to correct deficiencies" [Balci 1997]. Well designed software should be flexible enough to accommodate future changes that will be needed as new requirements come to light. Since maintenance accounts for nearly 70% of the cost of the software life cycle [Schach 1999], the importance of this quality characteristic cannot be overemphasized. Quite often the programmer responsible for writing a section of code is not the one who must maintain it. For this reason, the quality of the software documentation significantly affects the maintainability of the software product.

**Correctness** is "the degree with which software adheres to its specified requirements" [Balci 1997]. At the start of the software life cycle, the requirements for the software are determined and formalized in the requirements specification document. Well designed software should meet all the stated requirements. While it might seem obvious that software should be correct, the reality is that this characteristic is one of the hardest to assess. Because of the tremendous complexity of software products, it is impossible to perform exhaustive execution-based testing to insure that no errors will occur when the software is run. Also, it is important to remember that some products of the software life cycle such as the design specification cannot be "executed" for testing. Instead, these products must be tested with various other techniques such as formal proofs, inspections, and walkthroughs.

**Reusability** is "the ease with which software can be reused in developing other software" [Balci 1997]. By reusing existing software, developers can create more complex software in a shorter amount of time. Reuse is already a common technique employed in other engineering disciplines. For example, when a house is constructed, the trusses which support the roof are typically purchased preassembled. Unless a special design is needed, the architect will not bother to design a new truss for the house. Instead, he or she will simply reuse an existing design that has proven itself to be reliable. In much the same way, software can be designed to accommodate reuse in many situations. A simple example of software reuse could be the development of an efficient sorting routine that can be incorporated in many future applications.


**Reliability** is "the frequency and criticality of software failure, where failure is an unacceptable effect or behavior occurring under permissible operating conditions" [Balci 1997]. The frequency of software failure is measured by the average time between failures. The criticality of software failure is measured by the average time required for repair. Ideally, software engineers want their products to fail as little as possible (i.e., demonstrate high correctness) and be as easy as possible to fix (i.e., demonstrate good maintainability). For some real-time systems such as air traffic control or heart monitors, reliability becomes the most important software quality characteristic. However, it would be difficult to imagine a highly reliable system that did not also demonstrate high correctness and good maintainability.


**Portability** is "the ease with which software can be used on computer configurations other than its current one" [Balci 1997]. Porting software to other computer configurations is important for several reasons. First, "good software products can have a life of 15 years or more, whereas hardware is frequently changed at least every 4 or 5 years. Thus good software can be implemented, over its lifetime, on three or more different hardware configurations" [Schach 1999]. Second, porting software to a new computer configuration may be less expensive than developing analogous software from scratch. Third, the sales of "shrink-wrapped software" can be increased because a greater market for the software is available.


**Efficiency** is "the degree with which software fulfills its purpose without waste of resources" [Balci 1997]. Efficiency is really a multifaceted quality characteristic and must be assessed with respect to a particular resource such as execution time or storage space. One measure of efficiency is the speed of a program's execution. Another measure is the amount of storage space the program requires for execution. Often these two measures are inversely related, that is, increasing the execution efficiency causes a decrease in the space efficiency. This relationship is known as the space-time tradeoff. When it is not possible to design a software product with efficiency in every aspect, the most important resources of the software are given priority.
