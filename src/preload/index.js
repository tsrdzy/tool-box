import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

import setbutton from './modules/setbutton';
import getsysteminfo from './modules/getsysteminfo';
// Custom APIs for renderer
const api = {
  getsystemfont: () => {
    return ipcRenderer.invoke('getsystemfont');
  },
  getconfig: (key) => {
    return ipcRenderer.invoke('getconfig', key);
  },
  setconfig: (key, data) => {
    ipcRenderer.send('setconfig', key, data);
  },
  getrequest: (url) => {
    return ipcRenderer.invoke('getrequest', url);
  }
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('setbutton', setbutton)
    contextBridge.exposeInMainWorld('getsysteminfo', getsysteminfo)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI;
  window.api = api;
  window.setbutton = setbutton;
  window.getsysteminfo = getsysteminfo;
}
