# Transaction
A web application to render the provided transaction list

## Summary:

    This is a simple application to demostrate Spring Boot for REST API and Angular UI Front End
    The Spring Boot have security feature setup to require user to login with GitHub account
    in order to authenticated/authorized for this app.
    Here is the task of this app:
        - Oauth2 authentication/authorization (with GitHub)
        - Rest API includes:
            GET /api/transaction/list
                list the existing transactions in the database
            GET /api/transaction/get/{id}
                display the detail transaction for that transaction id
            DELETE /api/transaction/remove/{id}
                delete the transaction for the given id
            POST /api/transaction/save
                add a new transaction 
        - Angular Front End as UI for transaction view/maintenance
        
    please note this service has configured to port 8000, the localhost:8000 is registered with GitHub
    for Oauth2
    
## Build and Deploy

    this requires JDK 1.8 or above
    using Gradle build file build.gradle
    cd project folder
    build command: ./gradlew clean build
    the above command will generate an excutable jar, which allows to deploy into different platform
    like cloud, docker or run as standalone by the following run command
    
## Run:
    
    this requires JDK 1.8 or above    
    assume Transaction is your project folder
    after building the project with above build command
    cd Transaction/build/libs
    java -jar transaction-0.0.1-SNAPSHOT.jar
    
## IDE:

    Initially developed with IntelliJ IDEA, but Eclipse or Spring IDE will be fine.
    
    Note for IntelliJ Version 2018.1 :
    	in order to process annotation for Lombok, please ensure the following setting is configured:
    	IntelliJ IDEA -> Preferences -> Build,Excution,Deployment -> Compiler -> Annotation Processors
    		checked - Enable annotation processing
    		selected - Obtain processors from project classpath

