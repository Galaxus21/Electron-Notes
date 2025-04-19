import { app, BrowserWindow, Menu } from "electron";
import { isDev } from "./util.js";

export function createMenu(mainWindow: BrowserWindow) {
    Menu.setApplicationMenu(Menu.buildFromTemplate([
        // {
        //     label: '',
        //     visible: false,
        // },
        //On Mac, the name of the  first menu item is always set to the app name .
        {
            label: process.platform==='darwin' ? undefined : 'App',
            type: 'submenu',
            submenu: [
                {
                    label: 'Quit',
                    click: app.quit
                },
                {
                    label: 'DevTools',
                    click: () => mainWindow.webContents.openDevTools(),
                    visible: isDev()
                }
            ]
        },
        {
            label: 'View',
            type: 'submenu',
            submenu: [
                {
                    label: 'RAM'
                },
                {
                    label: 'Storage'
                },
                {
                    label: 'CPU'
                }
            ]

        }
    ]))
}