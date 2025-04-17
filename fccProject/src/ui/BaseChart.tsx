import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function BaseChart(props: any){
    return <ResponsiveContainer width={'100%'} height={'100%'}>
        <AreaChart data={props.data}>
            <CartesianGrid stroke="#333" strokeDasharray="5 5" fill="#1C1C1C"/>
            <Area 
                dataKey="value" 
                fillOpacity={0.3} 
                fill="#0A4D5C"
                stroke="#SDD4EE"
                strokeWidth={3}
                type="monotone"
                isAnimationActive
            />
            <XAxis stroke="transparent" height={0} />
            <YAxis domain={[0,100]} stroke="transparent" width={0} />

        </AreaChart>
    </ResponsiveContainer>
}