---
title: Clear Xcode
date: "2018-01-31"
path: "/posts/clear-xcode/"
---
Xcode has a tendency to hog precious harddrive space. This post lists some things you can do to clear some of that. I managed to remove 100 GB, which is almost half of my current computer's storage... 

### 1. Manage your runtimes
If you have had Xcode installed for a while you have probably accumulated a few iOS runtime versions you no longer support. Go to `~/Library/Developer/CoreSimulator/Profiles/Runtimes` and delete the ones you no longer use.

### 2. Manage your simulators
Using the terminal you are able to list all the installed simulators. In here you might find some devices that aren't available anymore (due to removed runtimes). You list the devices with the following command.
```bash
// List all the device simulators
xcrun simctl list
```
To remove the unavailable devices run the following command. You are also able to delete explicit devices.
```bash
// Remove all unavailable devices
xcrun simctl delete unavailable 
```
Lastly you clear all the caches and contents and settings for all devices.
```bash
// Clear contents and settings of all devices
xcrun simctl erase all
```

### 3. Delete derived data
The classic memory hog. You are able to delete this from within Xcode, but if you prefer to do it manually you can go to `~/Library/Developer/Xcode/DerivedData` and purge it.

### 4. Archives
You can clear up the folders in `~/Library/Developer/Xcode/Archives` for apps which you no longer need the dSYM data for debugging. 

### 5. Delete iOS/tvOS/watchOS device support
This was a big one for me. The `~/Library/Developer/Xcode/iOS DeviceSupport` folder contains information about all devices you've used during development. This can be removed and will be regenerated once you use the device again.

### 6. Clear logs, snapshot and cache
In `~/Library/Developer/Xcode/` you'll find device log folders. These can be cleared for the ones you don't care about. Same applies for the snapshots folder. Lastly you can clear the Xcode cache which is located at `~/Library/Caches/com.apple.dt.Xcode`.

Happy purging!