const { app, BrowserWindow, session } = require('electron');
const path = require('path');
const http = require('http');

if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname, {
        electron: require(`${__dirname}/node_modules/electron`)
    });
}

function waitForFrontend(url, retries = 10, delay = 2000) {
    return new Promise((resolve, reject) => {
        const check = (attempt) => {
            http.get(url, (res) => {
                if (res.statusCode === 200) {
                    resolve();
                } else {
                    retryOrFail(attempt);
                }
            }).on('error', () => retryOrFail(attempt));
        };

        const retryOrFail = (attempt) => {
            if (attempt > 0) {
                console.log(`Waiting for frontend... Retrying in ${delay}ms`);
                setTimeout(() => check(attempt - 1), delay);
            } else {
                reject(new Error('Frontend did not start in time.'));
            }
        };

        check(retries);
    });
}

async function createWindow() {
    const win = new BrowserWindow({
        width: 1100,
        height: 910,
        minWidth: 1100,
        minHeight: 910,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
            allowRunningInsecureContent: true,
        }
    });

    const startURL = 'http://localhost:3000';

    try {
        await waitForFrontend(startURL);
        win.loadURL(startURL);
    } catch (error) {
        console.error(error);
        app.quit();
    }

    if (process.env.NODE_ENV === 'development') {
        win.webContents.openDevTools();
    }
}

app.whenReady().then(() => {
    session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
        if (permission === 'media' || permission === 'mediaVideoCapture') {
            callback(true);
        } else {
            callback(false);
        }
    });

    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
