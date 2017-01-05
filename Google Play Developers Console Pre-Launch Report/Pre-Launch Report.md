#Google Play Developers Console Pre-Launch Results
## Devices
### HTC ONE (M8)
#### Specifications
* Test ID: 6
* Screen Size: 1080 x 1920
* Test Duration: 300 seconds
* Screen Density (dpi): 480
* Model Name: HTC One (M8)
* RAM: 2048 MB
* Manufacturer: HTC
* OpenGL ES Version: 3.0
* Android Version: Android 4.4
* Native Platform: armeabi-v7a
* Locale: de
* CPU Make: Qualcomm
* CPU Model: MSM8974AB

### Issue
> FATAL EXCEPTION: pool-2-thread-2
> Process: com.rgaineswebdevelopment.cordovacontactstest, PID: 25867
> android.content.ActivityNotFoundException: No Activity found to handle Intent { act=android.intent.action.PICK dat=content: }
> 	at android.app.Instrumentation.checkStartActivityResult(Instrumentation.java:1771)
> 	at android.app.Instrumentation.execStartActivity(Instrumentation.java:1563)
> 	at android.app.Activity.startActivityForResult(Activity.java:3505)
> 	at org.apache.cordova.CordovaActivity.startActivityForResult(CordovaActivity.java:342)
> 	at android.app.Activity.startActivityForResult(Activity.java:3466)
> 	at org.apache.cordova.CordovaInterfaceImpl.startActivityForResult(CordovaInterfaceImpl.java:66)
> 	at org.apache.cordova.contacts.ContactManager$4.run(ContactManager.java:224)
> 	at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1112)
> 	at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:587)
> 	at java.lang.Thread.run(Thread.java:864)