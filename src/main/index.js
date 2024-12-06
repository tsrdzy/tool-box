import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
// import icon from '../../resources/icon.png?asset'
import ipcs from './ipc.js'
function createWindow() {
  const mainWindow = new BrowserWindow({
    minWidth: 1160,
    minHeight: 720,
    show: false,
    frame: false,
    autoHideMenuBar: true,
    // ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  // 最大化,最小化,关闭控制
  mainWindow.on("maximize", () => { mainWindow.webContents.send("ismax", true); });
  mainWindow.on("unmaximize", () => { mainWindow.webContents.send("ismax", false); });
  ipcMain.on('minimize', () => mainWindow.minimize())
  ipcMain.on('maximize', () => { mainWindow.maximize() })
  ipcMain.on('unmaximize', () => { mainWindow.unmaximize() })
  ipcMain.on('close', () => mainWindow.close())
  //调用ipcs方法
  ipcs()
  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })
  ipcMain.on('ping', () => console.log('pong'))
  createWindow()
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()

  })

})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})