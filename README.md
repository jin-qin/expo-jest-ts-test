## expo-jest-ts-test

This repo is a minimal reproducible example for the below issues while using `jest-expo`:
1. `jest-expo` cannot let me do top-level await functions.
2. `jest-expo` cannot pick up my custom tsconfig file `tsconfg.test.json`
3. `jest-expo` will fail on `.web.ts`.

> [!IMPORTANT]
> Before running the minimal reproducible example, run `npx firebase emulators:start` first.

#### Case 1
In the minimal reproducible example, if you directly run `npx jest`, will give an error:
```
SyntaxError: await is only valid in async functions and the top level bodies of modules
```

#### Case 2
If you comment out `await testAsyncFunc();` in `lib/firebase/firebase.ts`, then run `npx jest`, will give another error:
```
SyntaxError: Cannot use import statement outside a module
```
It basically indicates the `jest` doesn't load `tsconfig.test.json`, it will work if you remove the below configuration from `tsconfig.json`:
```
"@firebase/auth": [
  "./node_modules/@firebase/auth/dist/index.rn.d.ts"
]
```

#### Case 3
If you change `example-test.node.ts` to `example-test.web.ts`, it will pass on `Node` but fail on `Web`.

Kindly ask if you can take a look? Man thanks!

### Environment

```
  expo-env-info 1.2.0 environment info:
    System:
      OS: macOS 14.5
      Shell: 5.9 - /bin/zsh
    Binaries:
      Node: 20.14.0 - ~/.nvm/versions/node/v20.14.0/bin/node
      Yarn: 1.22.15 - /usr/local/bin/yarn
      npm: 10.7.0 - ~/.nvm/versions/node/v20.14.0/bin/npm
      Watchman: 2024.05.06.00 - /usr/local/bin/watchman
    Managers:
      CocoaPods: 1.15.2 - /usr/local/bin/pod
    SDKs:
      iOS SDK:
        Platforms: DriverKit 23.5, iOS 17.5, macOS 14.5, tvOS 17.5, visionOS 1.2, watchOS 10.5
    IDEs:
      Xcode: 15.4/15F31d - /usr/bin/xcodebuild
    npmPackages:
      expo: ~51.0.23 => 51.0.23 
      expo-router: ~3.5.19 => 3.5.19 
      react: 18.2.0 => 18.2.0 
      react-dom: 18.2.0 => 18.2.0 
      react-native: 0.74.3 => 0.74.3 
      react-native-web: ~0.19.10 => 0.19.12 
    Expo Workflow: managed
```

### Expo Doctor Diagnostics

```
✔ Check Expo config for common issues
✔ Check package.json for common issues
✔ Check native tooling versions
✔ Check dependencies for packages that should not be installed directly
✔ Check for common project setup issues
✔ Check for issues with metro config
✔ Check Expo config (app.json/ app.config.js) schema
✔ Check npm/ yarn versions
✔ Check for legacy global CLI installed locally
✔ Check that native modules do not use incompatible support packages
✔ Check that native modules use compatible support package versions for installed Expo SDK
✔ Check that packages match versions required by installed Expo SDK

Didn't find any issues with the project!
```