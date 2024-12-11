import { ipcMain } from 'electron'
import axios from 'axios';

function getrequest() {
    ipcMain.handle('getrequest', async (event, url) => {
        console.log('url:', url)
        try {
            const response = await axios.get(url, {
                timeout: 10000,
            });
            return response.data;
        } catch (err) {
            console.log(err);
        }
    })
}

export default getrequest;