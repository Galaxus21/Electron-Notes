import { app, BrowserWindow, Menu, Tray } from "electron";
import { getAssetPath } from "./pathResolver.js";
import path from 'path';

export function createTray(mainWindow: BrowserWindow) {
    const tray = new Tray(
        path.join(
            getAssetPath(),
            'trayIcon.png'
        )
    );

    tray.setContextMenu(
        Menu.buildFromTemplate([
            {
                label: 'Quit',
                click: () => app.quit(),
            },
            {
                label: 'Show',
                click: () => {
                    mainWindow.show();
                    if (app.dock) {
                        app.dock.show();
                    }
                },
                // type: "" - For submenus
            }
        ])
    )
}