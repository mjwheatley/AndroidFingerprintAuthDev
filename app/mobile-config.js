App.info({
    id: 'com.te.meteor.cordova.plugin.android.fingerprintauth',
    name: 'AndroidFingerprintAuthDemo',
    description: 'Meteor demo application for cordova-plugin-android-fingerprint-auth',
    author: 'Matthew Wheatley',
    email: 'mjwheatley@tanoshiientertainment.com',
    website: 'http://www.tanoshiientertainment.com',
    version: '0.0.1'
});

//App.icons({
//    // iOS
//    'iphone': 'resources/ios/icons/Icon-40.png',
//    'iphone_2x': 'resources/ios/icons/Icon-60@2x.png',
//    'iphone_3x': 'resources/ios/icons/Icon-60@3x.png',
//    'ipad': 'resources/ios/icons/Icon-76.png',
//    'ipad_2x': 'resources/ios/icons/Icon-76@2x.png',
//
//    // Android
//    'android_mdpi': 'resources/android/icons/ic_launcher_mdpi.png',
//    'android_hdpi': 'resources/android/icons/ic_launcher_hdpi.png',
//    'android_xhdpi': 'resources/android/icons/ic_launcher_xhdpi.png'
//});
//
//App.launchScreens({
//    // iOS
//    'iphone': 'resources/ios/splash/splash-320x480.png',
//    'iphone_2x': 'resources/ios/splash/splash-320x480@2x.png',
//    'iphone5': 'resources/ios/splash/splash-320x568@2x.png',
//    'iphone6': 'resources/ios/splash/splash-375x667@2x.png',
//    'iphone6p_portrait': 'resources/ios/splash/splash-414x736@3x.png',
//    'iphone6p_landscape': 'resources/ios/splash/splash-736x414@3x.png',
//
//    'ipad_portrait': 'resources/ios/splash/splash-768x1024.png',
//    'ipad_portrait_2x': 'resources/ios/splash/splash-768x1024@2x.png',
//    'ipad_landscape': 'resources/ios/splash/splash-1024x768.png',
//    'ipad_landscape_2x': 'resources/ios/splash/splash-1024x768@2x.png',
//
//    // Android
//    'android_ldpi_portrait': 'resources/android/splash/splash-200x320.png',
//    'android_ldpi_landscape': 'resources/android/splash/splash-320x200.png',
//    'android_mdpi_portrait': 'resources/android/splash/splash-320x480.png',
//    'android_mdpi_landscape': 'resources/android/splash/splash-480x320.png',
//    'android_hdpi_portrait': 'resources/android/splash/splash-480x800.png',
//    'android_hdpi_landscape': 'resources/android/splash/splash-800x480.png',
//    'android_xhdpi_portrait': 'resources/android/splash/splash-720x1280.png',
//    'android_xhdpi_landscape': 'resources/android/splash/splash-1280x720.png'
//});

App.setPreference('BackupWebStorage', 'local');
App.setPreference('StatusBarOverlaysWebView', 'false');
//App.setPreference('StatusBarBackgroundColor', '#000000');

App.setPreference('android-minSdkVersion', '23');
App.setPreference('android-targetSdkVersion', '23');

// Dev
App.accessRule('http://localhost:3000/*');
App.accessRule('https://localhost:3000/*');
App.accessRule('http://meteor.local');
App.accessRule('http://10.0.2.2:3000/*');
App.accessRule('http://10.35.3.197:3000/*');
App.accessRule('http://10.35.2.163:3000/*');
App.accessRule('http://192.168.2.4:3000/*');

App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');