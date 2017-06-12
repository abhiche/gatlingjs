# What is gatlingjs?
An npm library to run gatling from node.js project by placing the simulation files in your project repository.

# Does it have any pre-requisities?
In order to run Gatling, you need to have a JDK installed. Gatling requires JDK8, yet we recommend that you use an up-to-date version.

Warning

Gatling launch scripts and Gatling maven plugin honor JAVA_HOME env var if it’s set. OS, like OSX, have their own tricky way of discovering which version of Java to run, so you might end up running a different version than the one java -version tells you. If you get strange errors such as Unsupported major.minor version 51.0 and you were expecting to run a JDK8, you might want to explicitly set JAVA_HOME.

# How should i install this library?
This is meant to be installed as a dev dependency in your project folder
``` npm i gatlingjs -D ```

# How do I configure my project to add simulation files
At present, gatlingjs needs the following folders in your project root

* test/performance/results => html representation of results
* test/performance/user-files/simulations => .scala files used for simulation
* test/performance/user-files/data => data feed
* test/performance/user-files/bodies => request body related stuff

# How do i run it?
``` ./node_modules/gatlingjs/dist/index.js ```

# By the way, is there any documentation for gatling?
* http://gatling.io/docs/current/quickstart/
* http://gatling.io/docs/current/advanced_tutorial/#advanced-tutorial

Note: You do not need to explicitly download the binaries from gatling.io if you install this npm package since it has gatling embedded in it.

