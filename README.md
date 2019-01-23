# backend.ai-console

Backend.AI GUI console. Supports both app / web mode.

 * Administration mode
 * User mode

 Each mode is chosen with keypair.

## Features
 * Key management
    * Allocate resource limitation for keys
 * Session management
    * Set default resources for runs
 * Experiments
 * Proxy mode to support various app environments (with Electron)

## Develop and Test

### Running polymer-based web UI

```
$ npm install -g polymer-cli
$ npm install
$ polymer serve --npm
```

### Running websocket with node.js 

This is only needed with pure ES6 dev. environment / browser. With `Electron`, websocket proxy automatically starts.

```
$ cd wsproxy
$ npm install
$ node ./local_proxy.js
```

### Running stand-alone web service

Will be prepared soon.

## Build (Web)

Default setup will build `es6-unbundled` version.

```
$ polymer build
```

## Build (Electron App)

### Using makefile

Prerequistics : electron, electron-packager

```
$ make all (build win/mac app) 
$ make test (build only (for polymer serving test)) 
$ make linux (not yet working)
```

### Manual run (using local Electron)

```
$ polymer build
$ cd build/es6-unbundled
$ npm install --only=prod
$ cd ../..
$ npm start
```
