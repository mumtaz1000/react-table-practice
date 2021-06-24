import React,{useEffect, useState} from 'react'
import Inovice from "./Inovice"
export default function Body() {
    const [reqData, setReqData] = useState(null)
    useEffect(()=>{
        fetch('http://localhost:8000/inovice')
        .then(res => {
            return res.json()
        })
        .then(data=> {
            setReqData(data)
        })
    },[])
    return (
        <div className="main-container">
        <div className="inovice-container">
            {reqData && <Inovice inovices={reqData} />}
        </div>
        <div className="inovice-details">Inovice details</div>
        </div>
    )
}
