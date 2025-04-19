type Statistics = {
    cpuUsage: number,
    ramUsage: number,
    storageUsage: number
};

type StaticData = {
    totalMemoryGB: number,
    cpuModel: string,
    totalStorage: number,
}

type EventPayloadMapping = {
    statistics: Statistics,
    getStaticData: StaticData,
    changeView: View,
}

type View = 'CPU' | 'RAM' | 'Storage';

type UnsubscrbeFunction = () => void ;

interface Window {
    electron: {
        subscribeStatistics: (callback: (statistics: Statistics)=> void) => UnsubscrbeFunction,
        getStaticData: () => Promise<StaticData>,
        subscribeChangeView: (callback: (view: View)=> void) => UnsubscrbeFunction,
    }
}
