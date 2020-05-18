
After if you get "Could not initialize class org.codehaus.groovy.runtime.InvokerHelper":

1. Install Java SDK 14

2. Open file ndroid\gradle\wrapper\gradle-wrapper.properties, update version of gradle

distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-6.0.1-all.zip

Find line 'distributionUrl=https\://services.gradle.org/distributions/gradle-6.x.x-all.zip'
=> change to:
distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip

3. cd android, run command:
    ./gradlew

4. It takes time. If shows "BUILD SUCCESSFUL", everything is OK


export RCT_METRO_PORT=8082
react-native start --port $RCT_METRO_PORT
react-native run-ios

export RCT_METRO_PORT=8081
react-native start --port $RCT_METRO_PORT
react-native run-android
