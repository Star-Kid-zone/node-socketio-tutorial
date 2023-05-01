import Cpu from "./Cpu"
import Mem from "./Mem"
import Info from "./Info"
import './Widget.css';

const Widget = ({data})=>{

    const {freeMem,
        totalMem,
        usedMem,
        memUseage,
        osType,
        upTime,
        cpuType,
        numCores,
        cpuSpeed,
        cpuLoad,
        macA } = data;

        const cpuData = { cpuLoad }
        const memData = { freeMem, totalMem, usedMem, memUseage}
        const infoData = { macA, osType, upTime, cpuType, cpuSpeed, numCores}

    return(
        <div className="widget row justify-content-evenly">
            <h1>Widget</h1>
            <Cpu data={cpuData} />
            <Mem data={memData} />
            <Info data={infoData} />
        </div>
    )

}

export default Widget