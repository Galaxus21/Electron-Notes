import { useMemo } from "react";
import { BaseChart } from "./BaseChart";

export type ChartProps = {
    data: number[]
}

export function Chart(props: ChartProps) {
    const preparedData = useMemo(()=>{ 
        const points = props.data.map(point => ({value: point*100}))
        return [...points, ...Array.from({length: 10-points.length}).map(()=> ({value: undefined}))]
    },
    [props.data]
    )
    return <BaseChart data={preparedData}/>
}