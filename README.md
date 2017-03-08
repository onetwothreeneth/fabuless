# Fabuless
##### Cordova app sharing Filipino Food recipes

   
<img src="https://lh3.googleusercontent.com/spM3KkdU2Ppncd2e9hl_c4yzxHUwVu-XdrMjR_7yOaV59r2c9cQ9HQDqj7MxKS8Ha1Q=h900-r" width="19%">
<img src="https://lh3.googleusercontent.com/RoyVmWj59pCtR2V21C3cRSrqfCKe5R95bbnKI0JkkyBDAuuS_yOkbLzULItDsqxLj7k=h900-rw" width="19%">
<img src="https://lh3.googleusercontent.com/K_9nr2LQpBd-dIYmZLZqDIpGj0SnGSnebBL8tNdvv_r34iYt7RvnSGROoonUmXrT7g=h900-rw" width="19%">
<img src="https://lh3.googleusercontent.com/Y63JFNTM18HEmOtkuBWvGojORbNPEBNrr2poqutiLlX_2CMQCaAVzpCdWBF7MYZkjbM=h900-rw" width="19%">
<img src="https://lh3.googleusercontent.com/mV230nnCGaZh0MOjEoZ4JT0zVJf8uK9PgGCRWpUVoLt2pR3adBIzoqYOdIQs1MflHQ=h900-rw" width="19%" height="275px">

## Demo
  - You can try the demo app download demo.apk then install it to your android phone or just go to play store then search for  _"FABULESS"_ You can directly download it on [Google Play](https://play.google.com/store/apps/details?id=com.abenojar.FabUless) .
 
## Technology used
  1. [Font Awesome](http://fontawesome.io/)
  2. [Framework7](https://framework7.io/)
  3. [Cordova](https://cordova.apache.org/)
  4. [Angular](https://angularjs.org/)
  5. HTML
  6. CSS
  7. JAVASCRIPT
  8. JQUERY
  9. PHP / MYSQL -> for server side recipe to email forwarding 

# How to Setup 
  1. First Download [NodeJs](nodejs.org).
    - after installing Nodejs on your CLI enter to download cordova then you can check [Cordova](https://cordova.apache.org/)'s documentation for other details.
    ``` 
      npm install -g cordova
    ``` 
  2. Download [Sublime Text](https://www.sublimetext.com/3).
    - This is environment for text editing. 
    
  3. Download [Android Studio](https://developer.android.com/studio/index.html).
    - We need this inorder to build our android application into .apk file. after installing Android studio make sure you'll update all the possible updates in the SDK MANAGER 
    
  4. Download [Genymotion Emulator](https://www.genymotion.com/).
    - Android Studio's emulator is a bit slow. for faster development you can user genymotion. (Note) you also need virtualbox running on your machine please check the site for more information on how to run Genymotion.
    
  5. Download [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
    - Android Studio need this so its a must.
    
  6. Set ANDROID_HOME and JAVA_HOME 
    - Here is a step by step guide on how to [SET ANDROID_HOME AND JAVA_HOME](http://stackoverflow.com/questions/2619584/how-to-set-java-home-on-windows-7). stackoverflow is our friend.
    
  7. I know its alot of downloading stuff you have gone through but cheer up youll find it usefull on other programming languages.
  
  8. Next inline on How to run the app 
    - Put the app codes in the Desktop (for the meantime).
    - On your CLI write 
        ``` 
        cd desktop
        ``` 
      then 
        ``` 
        cd [folder_name]
        ``` 
      example 
          ``` 
          cd fabuless 
          ``` 
     - Now Open Sublime Text then drag the folder of the codes inside Sublime text. now you can see the app codes.
     - Open Genymotion Signup then login on it.
     - After Logging in create a new virtual device.
     - then run the virtual device
     - You can read [Genymotions](https://docs.genymotion.com/) documentation here.
     - Now lets open our CLI again then follow the commands below
          ``` 
          cd desktop
          ``` 
        then 
          ``` 
          cd [folder_name]
          ``` 
        example 
            ``` 
            cd fabuless 
            ``` 
        then 
          ``` 
          cordova platform add android
          ```
        then 
          ``` 
          cordova prepare android
          ```
         then 
          ``` 
          cordova run android
          // you should see your app running on Genymotion Emulator now.
          ```
        - Hooray welcome to your first Cordova App
    
  9. Steps on uploading your app on google play
     1. [Create A keystore](http://stackoverflow.com/questions/26449512/how-to-create-a-signed-apk-file-using-cordova-command-line-interface)
     
     2. Build your app as release : [Source](https://cordova.apache.org/docs/en/latest/guide/platforms/android/)
          ``` 
          cd desktop
          cd fabuless
          cordova platform add android
          cordova prepare android
          cordova run android --release -- --keystore=../my-release-key.keystore --storePassword=password --alias=alias_name --password=password.
          ```
     
     3. Buy $25 developer account on  [Google play](https://www.linkedin.com/pulse/10-steps-publish-your-first-android-app-google-play-store-karan)
    

 
