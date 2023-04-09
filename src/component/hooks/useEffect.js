import React,{useEffect, useState} from 'react'
import "./style.css"

const UseEffect = () => {
    const initialData=12;
    const [myNum,setmyNum]=useState(initialData);

  return (
    <>
    <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={()=>
        setmyNum(myNum+1)
        }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCREMENT
        </div>
    </div>
    </>
  )
}

export default UseEffect
