import React, {useEffect, useMemo, useState} from 'react'
import { COLUMNS } from './columns'
import Table from "./Table"

export const BasicTable = () => {
    const [reqData, setReqData] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8000/inovice')
        .then(res => {
            return res.json()
        })
        .then(data=> {
            setReqData(data)
        })
    },[])

    const columns = useMemo(()=> COLUMNS, [])
    return (
        <div className="App">
        <Table columns={columns} data={reqData} />
      </div>
    )
}
