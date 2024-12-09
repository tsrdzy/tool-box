import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  getsystemfont: () => {
    return ipcRenderer.invoke('getsystemfont');
  },
  getconfig: () => {
    return ipcRenderer.invoke('getconfig');
  },
  setconfig: (data) => {
    ipcRenderer.send('setconfig', data);
  },
}
//控制按钮
const setbutton = {
  minimize: () => {
    ipcRenderer.send('minimize');
  },
  maximize: () => {
    ipcRenderer.send('maximize');
  },
  unmaximize: () => {
    ipcRenderer.send('unmaximize');
  },
  close: () => {
    ipcRenderer.send('close');
  },
  getmax: (ismax) => {
    return ipcRenderer.on('ismax', ismax);
  }
}
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('setbutton', setbutton)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
