import { ipcRenderer } from 'electron';

const getsysteminfo = {
    getallsysteminfo: () => {
        return ipcRenderer.invoke('getallsysteminfo');
    }
};

export default getsysteminfo;