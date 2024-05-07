import axios from 'axios';

const URL =  process.env.REACT_APP_URL;


export async function registerService(data){
    try{
        console.log(data)
        // TODO: {name:-- , email: -- , password: --}
        const response = await axios.post(`${URL}/api/auth/register` , data);
        return response.data;
    }
    catch(err){
        console.log(err.message)
        return {code: -1, message: 'Failed to connect to our server.'}
    }
}