const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('meowAPI', {
  convertJSONtoYAML: (json) => ipcRenderer.invoke('convert:json2yaml', json),
  convertYAMLtoJSON: (yaml) => ipcRenderer.invoke('convert:yaml2json', yaml)
});