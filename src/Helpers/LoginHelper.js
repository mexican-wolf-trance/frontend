import agent from '../Utils/Agent'
import Cookies from 'universal-cookie'


const url = 'http://localhost:5000/tokens'

export const login = async (payload) =>
{
    const { username, password } = payload
    const response = await agent.post(url, { username, password })

    const cookies = new Cookies()
    //const token = JSON.parse(response.text)
    const token = response
    console.log("Token ", token)

    cookies.set("token", token)

    return true
}