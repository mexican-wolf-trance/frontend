import React, { useEffect, useState } from 'react';
import { getCovid } from '../../Helpers/CovidGetterHelper'

const Home = (props) =>
{
    console.log("In the container Home")

    const [data, setData] = useState([])

    const getdata = async (setData) =>
    {
        const datums = await getCovid()
        setData(datums)
    }

    useEffect(() => { getdata(setData) }, [])

    console.log("Data", data)

    return (
        <div className="mt-2">
            Welcome to COVID-19. It's hell on earth!
           <div>
                {data.map((data) => (
                    <div>
                        <div>Date: {data.date}</div>
                        <div>Death: {data.death}</div>
                        <div>Hospitalized: {data.hospitalized}</div>
                        <div>Tested negative: {data.negative}</div>
                        <div>On ventilators: {data.onVentilatorCurrently}</div>
                        <div>Tested positive: {data.positive}</div>
                        <div>Total tests: {data.total}</div>
                        <div><br></br></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home;