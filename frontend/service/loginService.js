import axios from 'axios';

const URL =  process.env.REACT_APP_URL;


export async function loginService(data){
    try{
        // TODO: {email: -- , password: --}
        const response = await axios.post(`${URL}/api/auth/login` , data);
        return response.data;
    }
    catch(err){
        console.log(err.message)
        return {code: -1, message: 'Failed to connect to our server.'}
    }
}