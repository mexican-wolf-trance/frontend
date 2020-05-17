import React, { useEffect, useState } from 'react';
import { getCovid } from '../../Helpers/CovidGetterHelper'
import Cookies from 'universal-cookie'

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


    const arr = [];
    Object.keys(data).forEach(function (key) {
        arr.push(data[key])
    })

    console.log("Data", arr)

    return (
        <div className="mt-2">
            Welcome to COVID-19. It's hell on earth!
           <div>
                { Object.keys(data).map( key => <div> {data[key]} </div> )}
            </div>
        </div>
    )
}

export default Home;