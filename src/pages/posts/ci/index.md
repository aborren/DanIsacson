---
title: Continuous Integration on Gitlab
date: "2017-11-08" 
path: "/posts/terminal-xcode/" 
---

1, create new gitlab project
add one test : make it fail
upload new xcode project

go to setting adn get token youll need later
install gitruner https://docs.gitlab.com/runner/install/index.html
register https://docs.gitlab.com/runner/register/index.html make sure you scroll to your os. chose shell and add some tag. I add xcode_9.0 and fastlane

2 install fastlane

https://docs.fastlane.tools/getting-started/ios/setup/

then go to project folder
manage scheme image
edit scheme to shared



3
.gitlab-ci.yml
stages:
  - test

build_project:
  stage: test
  script:
    - fastlane test
  tags:
    - xcode_9-0
    - fastlane

push

get error? 
might have to add export PATH="$HOME/.fastlane/bin:$PATH"
to .bash_profile
cd ~/
touch .bash_profile

and edit the profie

then push new test

voila!

can do more with fastlane later, like publish shit.