# TransactionUI

This is the front end part that designed to work with another project named Transaction, which is using Spring Boot
Please be aware this is written in Angular 5 and uses its libraries. you may encounter issue if your
local using CLI from Angular 6. 
Here's deployment step: 
1. npm install
2. ng build
3. go to the dist/ directory 
4. copy all the *.js and *.map files to the Spring Boot Project and replace all files under Transaction/src/main/resources/static/js 
5. copy all the image files to the Spring Boot Project replace all files under Transaction/src/main/resources/static/assets/images
6. build the Spring Boot project by running command: ./gradlew clean build  under the Spring project folder
7. under the Spring Boot project folder Transaction/build/libs, run the excutable jar with command:  java -jar transaction-0.0.1-SNAPSHOT.jar
    

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
