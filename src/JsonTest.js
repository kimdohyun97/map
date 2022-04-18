// import { useState,useEffect } from "react"
import carData from "./esset/evcarData.json"

function JsonTest({param}) {
    // const [ data, setData ] = useState("")

    const makerFilter = carData.carList.filter(carList => (
        carList.maker === param
    ))
    
    // useEffect(()=>{
    //     setData(param)
    // },[param])


    return(
        <div>
            <ul>
                {makerFilter.length===0
                ? 
                <h2>No Data</h2>
                :
                makerFilter.map((carList, index) => (
                    <li key={index}>
                        {carList.maker}
                        <ul>
                            <div>
                                <img src={carList.img} alt="carimg" height="150px" width="250px" />
                            </div>
                            <div>
                                <li>{carList.name}</li>
                                <li>승차인원 : {carList.people}인승</li>
                                <li>최고속도출력 : {carList.distance}km/h</li>
                                <li>1회충전주행거리 : (상온){carList.mile_roomtmp}km (저온){carList.mile_coldtmp}km</li>
                                <li>배터리 : {carList.battery_type}({carList.capacity}kWh)</li>
                                <li>국고보조금 : {carList.money}만원</li>
                                <li>제조사번호 : {carList.tel}</li>
                            </div>
                        </ul>
                    </li>
                ))
                }
                
            </ul>
        </div>
    )
}

export default JsonTest