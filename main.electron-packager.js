// Modules to control application life and create native browser window
const {app, Menu, Shell, BrowserWindow } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

app.once('ready', function() {
  var template;
  if (process.platform == 'darwin') {
    template = [
      {
        label: app.getName(),
        submenu: [
          {
            label: 'About Backend.AI Admin Console',
            selector: 'orderFrontStandardAboutPanel:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Services',
            submenu: []
          },
          {
            type: 'separator'
          },
          {
            label: 'Hide Backend.AI Admin Console',
            accelerator: 'Command+H',
            selector: 'hide:'
          },
          {
            label: 'Hide Others',
            accelerator: 'Command+Shift+H',
            selector: 'hideOtherApplications:'
          },
          {
            label: 'Show All',
            selector: 'unhideAllApplications:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Quit',
            accelerator: 'Command+Q',
            click: function() {
              app.quit();
            }
          },
        ]
      },
      {
        label: 'Edit',
        submenu: [
          {
            label: 'Undo',
            accelerator: 'Command+Z',
            selector: 'undo:'
          },
          {
            label: 'Redo',
            accelerator: 'Shift+Command+Z',
            selector: 'redo:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Cut',
            accelerator: 'Command+X',
            selector: 'cut:'
          },
          {
            label: 'Copy',
            accelerator: 'Command+C',
            selector: 'copy:'
          },
          {
            label: 'Paste',
            accelerator: 'Command+V',
            selector: 'paste:'
          },
          {
            label: 'Select All',
            accelerator: 'Command+A',
            selector: 'selectAll:'
          },
        ]
      },
      {
        label: 'View',
        submenu: [
          {
            label: 'Reload',
            accelerator: 'Command+R',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.reload();
              }
            }
          },
          {
            label: 'Zoom In',
            accelerator: 'Command+=',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow && focusedWindow.webContents) {
                focusedWindow.webContents.executeJavaScript('_zoomIn()');
              }
            }
          },
          {
            label: 'Zoom Out',
            accelerator: 'Command+-',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow && focusedWindow.webContents) {
                focusedWindow.webContents.executeJavaScript('_zoomOut()');
              }
            }
          },
          {
            label: 'Actual Size',
            accelerator: 'Command+0',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow && focusedWindow.webContents) {
                focusedWindow.webContents.executeJavaScript(
                  '_zoomActualSize()');
              }
            }
          },
          {
            label: 'Toggle Full Screen',
            accelerator: 'Ctrl+Command+F',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
              }
            }
          },
          {
            label: 'Toggle Developer Tools',
            accelerator: 'Alt+Command+I',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.toggleDevTools();
              }
            }
          },
        ]
      },
      {
        label: 'Window',
        submenu: [
          {
            label: 'Minimize',
            accelerator: 'Command+M',
            selector: 'performMiniaturize:'
          },
          {
            label: 'Close',
            accelerator: 'Command+W',
            selector: 'performClose:'
          },
          {
            type: 'separator'
          },
          {
            label: 'Bring All to Front',
            selector: 'arrangeInFront:'
          },
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click: function() {
              Shell.openExternal('https://www.backend.ai/');
            }
          }
        ]
      }
    ];
  } else {
    template = [
      {
        label: '&File',
        submenu: [
          {
            label: '&Open',
            accelerator: 'Ctrl+O',
          },
          {
            label: '&Close',
            accelerator: 'Ctrl+W',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.close();
              }
            }
          },
        ]
      },
      {
        label: '&View',
        submenu: [
          {
            label: '&Reload',
            accelerator: 'Ctrl+R',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.reload();
              }
            }
          },
          {
            label: 'Zoom In',
            accelerator: 'Ctrl+=',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow && focusedWindow.webContents) {
                focusedWindow.webContents.executeJavaScript('_zoomIn()');
              }
            }
          },
          {
            label: 'Zoom Out',
            accelerator: 'Ctrl+-',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow && focusedWindow.webContents) {
                focusedWindow.webContents.executeJavaScript('_zoomOut()');
              }
            }
          },
          {
            label: 'Actual Size',
            accelerator: 'Ctrl+0',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow && focusedWindow.webContents) {
                focusedWindow.webContents.executeJavaScript(
                  '_zoomActualSize()');
              }
            }
          },
          {
            label: 'Toggle &Full Screen',
            accelerator: 'F11',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
              }
            }
          },
          {
            label: 'Toggle &Developer Tools',
            accelerator: 'Alt+Ctrl+I',
            click: function() {
              var focusedWindow = BrowserWindow.getFocusedWindow();
              if (focusedWindow) {
                focusedWindow.toggleDevTools();
              }
            }
          },
        ]
      },
      {
        label: 'Help',
        submenu: [
          {
            label: 'Learn More',
            click: function() {
              Shell.openExternal('https://github.com/lablup/backend.ai');
            }
          }
        ]
      }
    ];
  }

  var appmenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(appmenu);
});


function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1280, height: 950})
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  //mainWindow.webContents.openDevTools();
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
