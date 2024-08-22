# Real-Estate-App

This real estate app aims to provide a seamless and user-friendly experience for all parties involved in property transactions. The integration of advanced search, scheduling, messaging, and notification systems ensures that users can find and manage properties efficiently.

- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.7.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Project Links](#project-links)
- [My Processes](#my-processes)
  - [Built with](#built-with)
    - [Project Setup](#project-setup)
    - [Challenges Encountered](#challenges-encountered)
    - [What I learned](#what-i-learned)

## Overview

The challenge is to develop a realtor clone application using Angular. The backend uses RapidAPI for realtor public data for home listings and go-auth-v1 for user authentication flow, and the UI is inspired by realtor, zillow and personal imaginations.

### The Challenge

Users should be able to:

- register and log in using email and password.
- update their profile information.
- see home listings.
- see home listings details for a particular home.
- search for houses using various filters (e.g., street name, country, state and neighborhood).
- filter home listings by home type, status and price range.
- view the application on different screen sizes.
- switch themes to suit their preferences.
- view their home listings history.

### Screenshots

![](/home-page.png)
![](/listings-page.png)
![](/details-page.png)

### Project Links

- Solution URL: [Just Home App](https://github.com/asiedu-george/Real-Estate-App)
- Deployed Site URL: [Just Home App](https://real-estate-app-orpin-xi.vercel.app/)

## My Processes

### Built WIth

- Sass
- Sass custom properties
- Desktop first workflow
- Angular 18
- NgModules approach
- State Management with NgRx
- Rapid API
- Go-auth API
- Angular RxJS
- Angular Reactive and template driven forms
- Angular services, directives, custom validations, and pipes
- Jest for unit testing
- Interceptors and guards
- Composable using signals
- Ngx spinner and ng-popup libraries

#### Project Setup

- Run the command `npm install` to install the project dependencies
- Run the command `ng serve` to run the application server
- Open the application in the browser using [open application](http://localhost:4200/)

#### Challenges Encountered

- applying filters to the listings action dispatched in the listings component
- destructuring the response returned from the listings effects
- using NgRx to manage the state of the application
- persisting the state across the application
- validating the rapid api request before allowing users to make the desired api request

#### What I Learned

- using NgModules in an angular application
- using NgRx to manage the state of the application
- using rxjs operators
- persisting application state using the host listener
- implementing refresh token using interceptors
