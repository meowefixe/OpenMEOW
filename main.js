const { app, BrowserWindow, ipcMain, Menu, dialog } = require('electron');
const path = require('path');
const { jsonToYaml, yamlToJson } = require('./modules/converter');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    icon: path.join(__dirname, 'assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true
    }
  });

  win.loadFile('renderer/index.html');

  const menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        { role: 'reload' },
        { role: 'toggleDevTools' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'copy' },
        { role: 'paste' }
      ]
    },
    {
      label: 'About',
      click: () => {
        dialog.showMessageBox(win, {
          type: 'info',
          title: 'About OpenMEOW',
          message: 'OpenMEOW v1.0\nCreated by FedotovDev & Meowefixe',
          buttons: ['Meow!']
        });
      }
    },
    {
      label: 'Exit',
      click: () => {
        app.quit();
      }
    }
  ]);

  Menu.setApplicationMenu(menu);
}

app.whenReady().then(createWindow);

ipcMain.handle('convert:json2yaml', (_, jsonStr) => jsonToYaml(jsonStr));
ipcMain.handle('convert:yaml2json', (_, yamlStr) => yamlToJson(yamlStr));