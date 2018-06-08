---
title: Fourth day of WWDC
date: "2018-06-07"
path: "/posts/fourth-day-of-wwdc/"
---
Fourth day was concluded with the WWDC18 Bash, which is a big party held on a field nearby the convention center. Panic! At The Disco held a 1 hour long concert after being introduced by Craig Federighi.

However, that is not the focus of this post. In this post I'll try to summarize the Siri Shortcuts.

![Panic! At The Disco](./panic.JPG)

### Siri Shortcuts
One of the major new features coming to iOS12 is the Siri Shortcuts. They are useful for actions that the user is likely to repeat, such as ordering a taxi back home after work. 

Siri Shortcuts can be implemented via either NSUserActivity or Intents. Intents are more modifiable and is what you probably should be using most of the time, unless you already have an app set up with NSUserActivity.

There are 3 steps in order to enable Siri Shortcuts in your apps.

##### 1. Declare

First of you need to declare the intent. You can create a new Intent object and this will generate code for the intent in your app's targets. Make sure to include this file for all relevant targets, and if you're importing it to a shared framework, make sure only the framework generates the files (to avoid duplicated files in the targets).

##### 2. Donate

Secondly you will have to "donate" your intent. What this mean is that you will have to carry out an action which corresponds to the intent. Lets say you declare a "order taxi home" intent. In your app you would "donate" by actually ordering a taxi home from within the app. Once it has been donated it is likely that Siri will suggest this same intent to the user later.

##### 3. Handle

Lastly you will have to handle the shortcut. There are handling protocols that are generated from the intent that you need to implement handlers for. You should also handle it properly from the continue user activity app delegate method.

If you do this your app will have support for Siri Shortcuts, but if you want to be able to carry out these shortcuts using only Siri you will have to create an intent extension and/or intent extension UI. 

Apart from this there are also methods for showing the settings page for the shortcut, which lets the user make an own phrase to invoke the shortcut. 

For the watch you are also able to provide extra relevance data, which can help Siri determine appropriate shortcuts in the Siri watchface. 

### Other things
Other small reflections from today: It's possible to [do many things with the Xcode debugger](https://developer.apple.com/videos/play/wwdc2018/412/) which I was not aware of. Swift Package Manager, SPM, is still very young and probably not ready to be mass-adopted. Xcode10 and iOS12 is shaping up to be something great.