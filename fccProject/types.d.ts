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

interface Window {
    electron: {
        subscribeStatistics: (callback: (statistics:any)=> void) => void ,
        getStaticData: () => Promise<StaticData>
    }
}
