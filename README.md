# What is gatlingjs?
An npm library to run gatling from node.js project by placing the simulation files in your project repository.

## Does it have any pre-requisities?
* In order to run Gatling, you need to have a JDK installed. Gatling requires JDK8, still recommend that you use an up-to-date version.    
* Make sure that JAVA_HOME is set properly

## How should i install this library?
This is meant to be installed as a dev dependency in your project folder    
``` npm i gatlingjs -D ```

## How do I configure my project to add simulation files
At present, gatlingjs needs the following folders in your project root

* test/performance/results => html representation of results
* test/performance/user-files/simulations => .scala files used for simulation
* test/performance/user-files/data => data feed
* test/performance/user-files/bodies => request body related stuff

## How do i run it?
``` ./node_modules/gatlingjs/dist/index.js ```     
Behind the scenes, gatlingjs will scan test/performance/user-files/simulations for the simulation files and prompt you to choose the simulation you wanna run.

## By the way, is there any documentation for gatling?
* http://gatling.io/docs/current/quickstart/
* http://gatling.io/docs/current/advanced_tutorial/#advanced-tutorial

Note: 
* You do not need to explicitly download the binaries from gatling.io since gatling is embedded in this library.
* At the moment, this works only on nix platform. Please feel free to contribute to support it on windows too.

## TODOs
* Unit tests
* Support command line arguments available in gatling
* Compatibility with Windows Platform
