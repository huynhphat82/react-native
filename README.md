
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

# https://docs.oracle.com/javase/7/docs/technotes/tools/solaris/keytool.html
echo y | keytool -genkeypair -dname "cn=Mark Jones, ou=JavaSoft, o=Sun, c=US" -alias business -keypass kpi135 -keystore /working/android.keystore -storepass ab987c -validity 20000

dname is a unique identifier for the application in the .keystore

cn the full name of the person or organization that generates the .keystore
ou Organizational Unit that creates the project, its a subdivision of the Organization that creates it. Ex. android.google.com
o Organization owner of the whole project. Its a higher scope than ou. Ex.: google.com
c The country short code. Ex: For United States is "US"
alias Identifier of the app as an single entity inside the .keystore (it can have many)

keypass Password for protecting that specific alias.
keystore Path where the .keystore file shall be created (the standard extension is actually .ks)
storepass Password for protecting the whole .keystore content.
validity Amout of days the app will be valid with this .keystore
