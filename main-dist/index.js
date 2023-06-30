"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const electron_is_dev_1 = __importDefault(require("electron-is-dev"));
const path_1 = require("path");
const createWindow = () => {
    const window = new electron_1.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            webSecurity: false,
            contextIsolation: false,
            nodeIntegration: true
        }
    });
    if (electron_is_dev_1.default) {
        try {
            require('electron-reloader')(module, {});
        }
        catch (_) { }
        window.webContents.openDevTools(); // 打开控制台
        window.loadURL('http:localhost:8081');
    }
    else {
        window.loadFile((0, path_1.resolve)(__dirname, '../render/dist-render/index.html'));
    }
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows.length !== 0)
            electron_1.app.quit();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        return electron_1.app.quit();
});
