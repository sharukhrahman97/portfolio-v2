---
title: "Electron for macOS: build to deploy"
description: "Hit the ground running."
date: "2024-02-10"
draft: true
---

## Introduction

If you are looking to build a macOS App in electron, where the development does not involve the use of Xcode or even building a production build from Xcode-command line tools fails, this blog is for you. Even though Apple has different forms of support and documentation, none of them is going to be this detailed or helpful because, most of the resources concentrated only on native apps. Now speaking of documentation, as of 2023 there is little to no documentation provided by apple, multiple dead-ends in Apple developer forums and trust me I have wasted many days to get a response from the Apple developer support (it won’t be helpful in any way) (why this long, well developer support page most of the time doesn’t have a call option and email will make you wait for 2 to 3 working days) and it drove me nuts. This blog is going to be a long and bumpy ride for some people and a lighthouse for your titanic, so don’t skip if you want to measure thrice, cut once.

---

## The Basics

There are three ways to export your electron app.
1.  The macOS App Store build (MAS).
2.  Distribute your app outside macOS App Store (External distribution).
3.  Development build to distribute for internal tesThis module is a Swiss army knife when it comes to building electron apps, basically this alone will handle signing, notarizing, stapling and building your desired targets for Windows, Mac and Linux desktop apps. I assume that you have a basic electron-builder config file, and if you already know there is a Mac configuration (App config) and the configuration for each installer (Installer config). If you look closely into the output folder of your build you can see a path like Mac/yourappname.app (App part) and your preferred installer like pkg, zip, dmg (Installer part). Just make sure to head to this link, to get started.ting.

### Electron-Builder
[...more](https://www.electron.build/)


This module is a Swiss army knife when it comes to building electron apps, basically this alone will handle signing, notarizing, stapling and building your desired targets for Windows, Mac and Linux desktop apps. I assume that you have a basic electron-builder config file, and if you already know there is a Mac configuration (App config) and the configuration for each installer (Installer config). If you look closely into the output folder of your build you can see a path like Mac/yourappname.app (App part) and your preferred installer like pkg, zip, dmg (Installer part). Just make sure to head to [this](https://www.electron.build/configuration/configuration) link, to get started.

> **Note:** If you are new to building desktop apps you need to understand how a typical macOS app is structured, if you download a Mac app setup from the browser you will get a setup file (Installer) and you will go through some steps to install the application (App).

### Signing
[...more](https://c-command.com/dropdmg/help/signing)

Refer to [this](https://help.apple.com/xcode/mac/current/#/dev80c6204ec) link as there are 5 types of certificates that are used for different scenarios explained here . You also need a valid Provisional Profile, if not you can sign only for your Mac computer and Gatekeeper will allow the app only for this computer alone!

There are two types of profiles,

1.  If you want to distribute your app for internal testing across your team’s Mac computer then, create using Apple Developer certificate and add the devices you want to distribute.
2.  If you want to distribute your app to production, then create using Apple Distribution certificate.

> **Note:**
> If you add all the certificates in your ‘login’ keychain access, then the electron-builder will handle signing based on your target. Sometimes electron-builder will get hiccups when finding the right certificate for your target, if so follow this link and electron-builder will take the exported certificates based on your environment variable, if this doesn’t work then create a custom keychain and transfer all related certificates from ‘login’ keychain to your keychain, then set your custom keychain path to CSC_KEYCHAIN environment variable or set identity parameter in your electron-builder.yml config file. If the problem persists, then do export CSC_IDENTITY_AUTO_DISCOVERY = false and repeat the same.

> "Check out a well written [medium article](https://medium.com/@bingkuo/a-beginners-guide-to-code-signing-in-ios-development-d3d5285f0960) by Bing Kuo".


### Notarizing and Stapling: (only for external distribution)
[...more](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution)

Notarizing is a process of uploading an app to Apple’s Notary Service, and it will check if your app has a valid certificate and provides a ticket if the app passes all the security checks. There are 5 ways to notarize an app. Out of which 3 are supported by the latest Xcode version and out of 3 only 1 method is reliable, safer and faster way to get your app notarized. Stapling is a final step before building, which staples the ticket and the app so that Apple’s Gatekeeper service will allow this app on foreign Mac computers even when they are offline.

>**Tip:** If Electron-Builder can’t able to pick your environment variables then you can use [@electron/notarize](https://github.com/electron/notarize) , write a JS script, place it into your build folder and add this file path using afterSign hook (refer here ) and remove the notarize parameter under MacConfiguration in your electron-builder.yml config file. Do not use external signing apps like [sd-notary](https://latenightsw.com/sd-notary-2-released/) , all these will fail eventually, and you can’t trust what they sneak in.

>**Info:** If you are building an app for Mac App Store then you need to sign but not to notarize and staple because the app store will take care of it instead. If you want to distribute the app outside the store then you need to sign, notarize and staple.

> **Note:** Note from Electron-builder: In order to activate the notarization step, You MUST specify one of the following via environment variables:

     APPLE_API_KEY, APPLE_API_KEY_ID and APPLE_API_ISSUER (Recommended).
     APPLE_ID and APPLE_APP_SPECIFIC_PASSWORD
     APPLE_KEYCHAIN and APPLE_KEYCHAIN_PROFILE. 
>For security reasons, it is recommended to use the first option (see issue [here](https://github.com/electron-userland/electron-builder/issues/7859))
 
---

## Prepping

### Gather all developer certificates

1. Go to Xcode → settings → accounts tab → Manage certificates → (+) button and click on all the listed certificates. This will automatically install in your Xcode, “login” keychain, and it will reflect in your certificate tab of the above link, all in one click.
alter-text

image

2. Go to keychain application → “login” keychain → certificates and check whether all the certificates you installed previously are present.

image

>**Note:** If you don’t have Apple Worldwide Developer Relations certificate and Mac OS X Provisioning Profile Signing certificate, then go to Apple Certificate Authority and download the latest Worldwide Developer Relations certificate and drag and drop to your “login” keychain. This will automatically install the Mac OS X Provisioning Profile Signing certificate.

3. Verify whether all your certificates which you have installed show up [here](https://developer.apple.com/account/resources/) .

### Stuff needed for notarizing: (Perform any one of the methods) (Only for external distribution)

   - (Recommended Method) Involves apple API Key (absolute path of .p8 file), Apple API Key ID and Apple API Issuer and all of this can be obtained by creating a key in “Keys” tab in [App Store Connect](https://appstoreconnect.apple.com/access/api) . This is pretty straight forward, just create a certificate with “Admin” access. Then download the certificate and also store the “Issuer ID” and “Key ID” somewhere safe.
    
    image
    
   -   Involves Apple ID, Apple ID Password generated by App Specific Password in [Apple ID](https://appleid.apple.com/account/manage) , go-to Sign-In and Security → App Specific password and the team ID which you can get this from Membership Details in your Apple Developer Account .
   
   - Involves keychain name/path to the keychain where you have stored credentials in and keychain Profile which is the name of the keychain (login as default).
  
### Identifiers, Devices and Profiles

1. Go to this link, in Identifiers tab and create a new identifier called “App IDs” then choose the “App” type and finally register your app by providing description, the “Bundle ID” should be in reverse-domain name style format, choose necessary “App Capabilities and Services” then click on continue and finally create your identifier.
   
2. Go to Devices tab and register your devices, to find the device’s UUID, go to System Information app → Hardware and copy the “Hardware UUID”.
   
3. Finally, go to Profiles tab and if you want to distribute apps for testing, use “macOS App Development” development provisioning profile or if you want to distribute apps for production, use “Mac App Store” distribution provisioning profile. Choose the “App ID” which was created in the Identity section and select preferred certificate based on your use case that you have created in the certificate section finally if asked to add devices for development use case then add them and create a provisioning profile and download the profile.

### Create an App Record: (Only for MAS build)
[...more](https://developer.apple.com/help/app-store-connect/create-an-app-record/add-platforms/)

Go to [this](https://appstoreconnect.apple.com/apps) link and create a “New App” and choose desired platform and give your app a name and then choose the “Bundle ID” which we have created in [Identifier section](https://dashdrop.app/blog/apple-macos-developer-guide-from-purchase-to-production/#identifiers-devices-and-profiles) then choose a “SKU” as a unique ID for your app and finally choose your desired “User Access” and click on create button.

> **Tip:** If your app has a login page, create a test credential for the apple review team and fill this form which is located in the main product page of your app. This will make the review process easy and faster for you.

image

---

## Building
### Entitlements
[...more](https://developer.apple.com/documentation/bundleresources/entitlements)

Create entitlements.inherit.plist file in your ‘buildResources’ folder and add the following. (for all builds)
entitlements.inherit.plist

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.security.app-sandbox</key>
	<true/>
	<key>com.apple.security.inherit</key>
    <true/>
</dict>
</plist>
```

Create entitlements.mas.plist and add the following. (only for MAS builds). Don’t forget to add your team ID and the Bundle ID that you’ve created before.

entitlements.mas.plist

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.security.cs.allow-jit</key>
	<true/>
	<key>com.apple.security.cs.allow-unsigned-executable-memory</key>
	<true/>
	<key>com.apple.security.cs.allow-dyld-environment-variables</key>
	<true/>
	<key>com.apple.security.app-sandbox</key>
	<true/>
	<key>com.apple.security.application-groups</key>
	<array>
		<string>ABCDE12345.com.your_company.your_app</string>
	</array>
	<key>com.apple.application-identifier</key>
	<string>ABCDE12345.com.your_company.your_app</string>
	<key>com.apple.developer.team-identifier</key>
	<string>ABCDE12345</string>
	<key>com.apple.security.files.bookmarks.app-scope</key>
	<true/>
	<key>com.apple.security.files.bookmarks.document-scope</key>
	<true/>
</dict>
</plist>
```

Create entitlements.mac.plist and add the following. (only for the external distribution and development)

entitlements.mac.plist

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>com.apple.security.cs.allow-jit</key>
	<true/>
	<key>com.apple.security.cs.allow-unsigned-executable-memory</key>
	<true/>
	<key>com.apple.security.cs.allow-dyld-environment-variables</key>
	<true/>
</dict>
</plist>
```

Add the below entitlements if you are using network calls. (not for the entitlements.inherit.plist)

```xml
<key>com.apple.security.network.client</key>
<true/>
<key>com.apple.security.network.server</key>
<true/>
```

Add the below entitlements if you are accessing storage. (not for the entitlements.inherit.plist)

```xml
<key>com.apple.security.files.downloads.read-write</key>
<true/>
<key>com.apple.security.files.user-selected.read-write</key>
<true/>
<key>com.apple.security.device.usb</key>
<true/>
```

Add the below entitlements if you are accessing microphone, camera and audio input. (not for the entitlements.inherit.plist)

```xml
<key>com.apple.security.device.microphone</key>
<true/>
<key>com.apple.security.device.camera</key>
<true/>
<key>com.apple.security.device.audio-input</key>
<true/>
```

### Generating ICNS
[...more](https://developer.apple.com/design/human-interface-guidelines/app-icons#app-icon-sizes)

For distribution in the Mac App Store, the transporter app needs a .icns file which includes at least 512 x 512 and a 512×512@2x image. For this you will need a 1024×1024.png logo and use the below command to generate the .icns file and iconset folder.

```bash
curl "https://gist.githubusercontent.com/Zedbyte-corp/bf62eccfe4e91a05bc7251deacbd9609/raw/2faf0f579afdb45a5c9f9e7e922826b6f43704c4/icnsGenerator.sh" | bash -s icon.png
```

| Filename            | Resolution (pixels) | Density (PPI) |
| ------------------- | ------------------- | ------------- |
| icon_16x16.png      | 16x16               | 72            |
| icon_16x16@2x.png   | 32x32               | 144           |
| icon_32x32.png      | 32x32               | 72            |
| icon_32x32@2x.png   | 64x64               | 144           |
| icon_128x128.png    | 128x128             | 72            |
| icon_128x128@2x.png | 256x256             | 144           |
| icon_256x256.png    | 256x256             | 72            |
| icon_256x256@2x.png | 512x512             | 144           |
| icon_512x512.png    | 512x512             | 72            |
| icon_512x512@2x.png | 1024x1024           | 144           |
 

> **Note:** If your app tries to sign with wrong certificate (usually this happens if you have certificates from multiple account), then as discussed, refer to [this](https://dashdrop.app/blog/apple-macos-developer-guide-from-purchase-to-production/#signing) . The ‘extendInfo’ parameter will insert values to the Info.plist file. If ‘notarize’ parameter cant get the environment variables, then refer to [this](https://dashdrop.app/blog/apple-macos-developer-guide-from-purchase-to-production/#notarizing-and-stapling-only-for-external-distribution) .


### Electron builder config

Add your scripts, icns file, provision profile and certificates into electron-builder config and your config now somewhat looks like this.

electron-builder.yml

```yaml
appId: com.your_company.your_app
productName: your_app
directories:
  buildResources: build
files:
  - "!**/.vscode/*"
  - "!src/*"
  - ! {
      .eslintignore,
      .eslintrc.cjs,
      .prettierignore,
      .prettierrc.yaml,
      dev-app-update.yml,
      CHANGELOG.md,
      README.md,
    }
  - "!{.env, .env.*, .npmrc, pnpm-lock.yaml}"
asarUnpack:
  - resources/**
mac:
  target:
    - mas
    - dmg
  type: distribution
  provisioningProfile: build/Dashdrop.provisionprofile
  # type: development
  # provisioningProfile: build/DashdropDev.provisionprofile
  hardenedRuntime: true
  gatekeeperAssess: true
  notarize:
    teamId: ABCDE12345
  icon: build/icon.icns
  category: public.app-category.your_category
  entitlements: build/entitlements.mac.plist
  entitlementsInherit: build/entitlements.inherit.plist
  extendInfo:
    # ITSAppUsesNonExemptEncryption: false
    LSMultipleInstancesProhibited: true
    NSApplicationDelegate:
      applicationSupportsSecureRestorableState: true
mas:
  entitlements: build/entitlements.mas.plist
  entitlementsInherit: build/entitlements.inherit.plist
dmg:
  sign: true
# afterSign: build/afterSign.js
npmRebuild: false
electronLanguages:
  - en-US
```

> **Note:** If your app tries to sign with wrong certificate (usually this happens if you have certificates from multiple account), then as discussed, refer to this. The ‘extendInfo’ parameter will insert values to the Info.plist file. If ‘notarize’ parameter cant get the environment variables, then refer to this.


### Folder Structure

Refer to the folder structure below, make sure that path referred inside the electron-builder config is same as your folder structure.

image

## Verify and Distribute

Finally, you can exhale, now I just assume that the build was successful, and you are on the verge of uploading the app to transporter or distributing the app outside the store. If you are about to upload your MAS build to transporter, I’d advise you to create a mas-dev build and test it thoroughly. To verify the signature, right-click the production installer, and you will see a ‘Signing Info’ menu from [WhatsYourSign app](https://objective-see.org/products/whatsyoursign.html). Refer to [signing](https://dashdrop.app/blog/apple-macos-developer-guide-from-purchase-to-production/#signing) to check whether your build is signed with respective certificates. That’s it folks, now you can distribute your external distribution build or upload your MAS build to transporter without any errors. If any error occurred, then check [FAQ’s](https://dashdrop.app/blog/apple-macos-developer-guide-from-purchase-to-production/#faqs) section.

## FAQ'S

> 1. How to watch verbose logs?
  > * Set `export DEBUG=true` in your environment variables.

> 2. How to watch verbose logs only for notarization?
  > * Set `export DEBUG=electron-notarize*` in your environment variables. Use this if and only if you use this [@electron/notarize](https://github.com/electron/notarize).

> 3. Agree to XCode licenses.
  > * Type the command `sudo xcodebuild -license` in your Terminal.app.

> 4. How to find all code signing certificates present in my mac?
  > * Type the command `security find-identity -p codesigning -v` in your Terminal.app. To find all certificates type `security find-identity -p`.

> 5. Resolve OOM error after signing.
  > * Add the following in both parent and child entitlements.
   ```xml
   <key>com.apple.security.cs.allow-unsigned-executable-memory</key>
   <true/>
   ```
   
> 6. Signing takes too long.
  > * Check your internet connection and maybe disable your Mac firewall in your Internet settings (there’s a chance that your system may block the signing server or IBM’s Aspera ports), or allow ports using [Little Snitch](https://www.obdev.at/products/littlesnitch/index.html) Tool for notary service, else it’s a problem with Apple Signing Servers, which you can check system status [here](https://developer.apple.com/system-status/).

## Conclusion

Submitting your app for review may take up to 2 to 4 working business days, just keep in mind that you provide enough information for the apple internal tester for a successful testing (especially for your entitlements). That’s it guys, I hope that everything has gone well, and I hope that this blog will shed some light to electron developers out there and best of luck for your future endeavours!.

