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
}

type UnsubscrbeFunction = () => void ;

interface Window {
    electron: {
        subscribeStatistics: (callback: (statistics:any)=> void) => UnsubscrbeFunction,
        getStaticData: () => Promise<StaticData>
    }
}
