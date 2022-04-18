import { useEffect } from "react"

const { kakao } = window

const MapContainer = () => {

    useEffect(() => {
        const container = document.getElementById('Map')
        const options = {
            center: new kakao.maps.LatLng(37.4036304411, 126.93015112),
            level: 3
        }
        const map = new kakao.maps.Map(container, options)
        console.log(Math.random())
    }, [])

    return (
        <div id="Map" style={{width: '500px', height: '500px'}}></div>
    )
}

export default MapContainer