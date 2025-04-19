import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { useStatistics } from './useStatistics'
import { Chart } from './Chart'

function App() {
  
  const statistics = useStatistics(10);
  const [activeView, setActiveView] = useState<View>("CPU");

  const cpuUsages = useMemo(
    ()=> statistics.map(stat => stat.cpuUsage),
    [statistics]
  );
  const ramUsages = useMemo(
    ()=> statistics.map(stat => stat.ramUsage),
    [statistics]
  );
  const storageUsages = useMemo(
    ()=> statistics.map(stat => stat.storageUsage),
    [statistics]
  );
  const activeUsages = useMemo(() => {
    switch(activeView) {
      case "CPU":
        return cpuUsages;
      case "RAM":
        return ramUsages;
      case "Storage":
        return storageUsages;
    }},
    [activeView, cpuUsages, ramUsages, storageUsages]
  )

  useEffect(() => {
    return window.electron.subscribeChangeView((view) => setActiveView(view))
  }, [])

  return (
    <>
      <Header />
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr', alignItems: 'center'}}>
        <div style={{display: 'inline'}}>
          <div style={{height:75, width:300, margin:'2rem'}} onClick={() => setActiveView("CPU")}>
            CPU
            <Chart data={cpuUsages}/>
          </div>
          <div style={{height:75, width:300, margin:'2rem'}} onClick={() => setActiveView("RAM")}>
            RAM
            <Chart data={ramUsages}/>
          </div>
          <div style={{height:75, width:300, margin:'2rem'}} onClick={() => setActiveView("Storage")}>
            STORAGE
            <Chart data={storageUsages}/>
          </div>
        </div>
        <div style={{height: 120,display: 'inline'}}>
          <Chart data={activeUsages}/>
        </div>  

      </div>
      
      
          
    </>
  )
}

function Header() {
  return (<header>
    <button id='minimize' onClick={() => window.electron.sendFrameAction("MINIMIZE")}/>
    <button id='maximize' onClick={() => window.electron.sendFrameAction("MAXIMIZE")}/>
    <button id='close' onClick={() => window.electron.sendFrameAction("CLOSE")}/>
  </header>)
}

export default App
