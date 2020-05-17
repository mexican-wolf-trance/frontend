import agent from '../Utils/Agent'
import date from '../components/ComponentHelper/DateComponent'

const url = 'https://covidtracking.com/api/v1/us/daily.json'

export const getCovid = async (setData) =>
{
    try
    {
        const covidData = await agent.get(url)

        console.log("You now have corona virus", covidData)
        const parsedData = JSON.parse(covidData.text)

        return parsedData
    }
    catch(error)
    {
        console.log(error)
    }
}
