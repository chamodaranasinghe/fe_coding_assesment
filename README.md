## Mono Repo

There are 3 packages in the mono repo. Yarn workspaces is used to setup the monorepo.

1.  React Native App
2.  React Web App
3.  API SDK

## Pre-qualities

- node - v 20.12.1
- yarn - 1.22.19 or higher
- XCode - v 15.3 or higher
- Android Studio - Chipmunk (2021.2.1) or higher
- Java (JDK) > 17.0 or higher

## Debug and Run Instructions

Install the dependencies

    yarn install

**React Native IOS**

    cd packages/MovieAppMobile/ios && pod install

change directory back to the project home folder

    yarn mobile:ios

**React Native Android**

    yarn mobile:android

**Web App**

    yarn web:dev

**Additional commands**

Build the web app

    yarn web:build

Preview the web app

    yarn web:preview

## Troubleshooting

If IOS failed to install pods, install pods with repo-update

    cd packages/MovieAppMobile/ios && pod install --repo-update
