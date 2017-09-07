import { app, BrowserWindow } from 'electron';
import * as path from 'path';

let applicationRef: Electron.BrowserWindow = null;

const debugMode = false;

const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
    width: 800,
    height: 480,
    frame: true,
    resizable: true
};

function createWindow() {
    applicationRef = new BrowserWindow(mainWindowSettings);
    applicationRef.loadURL(`file:///${__dirname}/index.html`);
    if (debugMode) {
        // Open the DevTools.
        applicationRef.webContents.openDevTools();
    }
    applicationRef.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        applicationRef = null;
    });
}

app.on('ready', createWindow);

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (applicationRef === null) {
        createWindow();
    }
});
