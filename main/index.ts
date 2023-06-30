import { app, BrowserWindow } from 'electron'
import isDev from 'electron-is-dev'
import { resolve } from 'path'

const createWindow = () => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
      contextIsolation: false,
      nodeIntegration: true
    }
  })
  if (isDev) {
    try {
      require('electron-reloader')(module, {})
    } catch (_) {}
    window.webContents.openDevTools() // 打开控制台
    window.loadURL('http:localhost:8081')
  } else {
    window.loadFile(resolve(__dirname, '../render/dist-render/index.html'))
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows.length !== 0) app.quit()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') return app.quit()
})