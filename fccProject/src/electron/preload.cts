import electron = require('electron');

electron.contextBridge.exposeInMainWorld("electron", {
    subscribeStatistics: (callback: (statistics:any)=> void) =>
        ipcOn("statistics", (stats)=>{
            callback(stats);
        })
    ,
    getStaticData: () => ipcInvoke('getStaticData')
} satisfies Window['electron']);

/* 
    preload can't import functions from util because of the way electron-builder handles things,
    so we have to define some typesafe wrapper functions here.
*/

function ipcInvoke<Key extends keyof EventPayloadMapping>(
    key: Key
): Promise<EventPayloadMapping[Key]>{
    return electron.ipcRenderer.invoke(key);
}

function ipcOn<Key extends keyof EventPayloadMapping>(
    key: Key,
    callback: (payload: EventPayloadMapping[Key]) => void
) {
    const cd = (_: Electron.IpcRendererEvent, payload:any)=> callback(payload) ;
    electron.ipcRenderer.on(key, cd)   
    return () => electron.ipcRenderer.off(key, cd);
}