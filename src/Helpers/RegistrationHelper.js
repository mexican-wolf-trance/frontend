import agent from '../Utils/Agent'
import Cookies from 'universal-cookie'


const url = 'http://localhost:5000/newUser'

export const register = async (payload) =>
{
    const { username, password } = payload
    const response = await agent.put(url, { username, password })

    if (response === 200 )
        return true
}