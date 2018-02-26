const { app, BrowserWindow, Tray, ipcMain, nativeImage } = require('electron');
// Module to control application life.
// Module to create native browser window.

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let tray;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 340,
        height: 400,
        show: false,
        frame: false,
        resizable: false,
        alwaysOnTop: true
    });

    // and load the index.html of the app.
    const startUrl = process.env.ELECTRON_START_URL || url.format({
            pathname: path.join(__dirname, '/../build/index.html'),
            protocol: 'file:',
            slashes: true
        });
    mainWindow.loadURL(startUrl);
    // Open the DevTools.
    // mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
    
    mainWindow.on('blur', () => {
        if (!mainWindow.webContents.isDevToolsOpened()) {
            mainWindow.hide()
        }
    })
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
    let icon = nativeImage.createFromDataURL(base64Icon)
    tray = new Tray(icon)
    tray.on('click', (event) => {
        toggleWindow()
    })
    createWindow()
});

const toggleWindow = () => {
    if (mainWindow.isVisible()) {
        mainWindow.hide()
    } else {
        showWindow()
    }
}

const showWindow = () => {
    const trayPos = tray.getBounds()
    const windowPos = mainWindow.getBounds()
    let x, y = 0
    if (process.platform == 'darwin') {
        x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2))
        y = Math.round(trayPos.y + trayPos.height)
    } else {
        x = Math.round(trayPos.x + (trayPos.width / 2) - (windowPos.width / 2))
        y = Math.round(trayPos.y + trayPos.height * 10)
    }
    mainWindow.setPosition(x, y, false)
    mainWindow.show()
    mainWindow.focus()
}

ipcMain.on('show-window', () => {
    showWindow()
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

let base64Icon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABJklEQVQ4T6WTa1EDQRCEv3YACrgogCggUQA4wAGRgIRICArAAaAAUJCgABwM1cdsarNscVSxf7bubqanH3Pin0e9/ohY+72k1RS+IuIIOG0KRwCgBXiT9FnXGmABPE5Nyu9LSU8HAL81RsQAbIGZpF2v9sCDiLhN7eMdERtgkGSW3dMCFDlzwN5Y2p52yt3VbH6kkAlc5Lg7SYXNJXAP+N11odMDOANesmAu6TXlPAD+dgIclzRaCS4w7fcEcPESsIEfwBVgX1aSfLMHiIi6uZjmyLwT9sNNQ0o8l2SfvgEyLtP25EWhl0vmEgOZjeUYzMPGaGsGNmvdbloyM/hzlaMBNl717r9QB56UzcpN44kIr/iNpNlfAOy+p/kuAJbh52kGU//IF0t7dz6lslmrAAAAAElFTkSuQmCC`