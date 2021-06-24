import React from 'react'

export default function Inovice({inovices}) {
    return (
               
<table >
  <thead>
  <tr>
    <th>Type</th>
    <th>Account Name</th>
    <th>Status</th>
    <th>Balance</th>
  </tr>
  </thead>

  {inovices.map(data=>(
    <tbody key={data.id}>
    <tr>
    <td >{data.type}</td>    
    <td>{data.accountname}</td>
    <td>{data.status}</td>
    <td>{data.balance}</td>
    </tr>
    </tbody>
))}
  
</table>
      
    )
}
