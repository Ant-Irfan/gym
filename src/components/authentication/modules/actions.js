import axios from 'axios';
import { notification } from 'antd';
import history from "../../../history"
export const Login = loginDetails => async (dispatch, getState) => {
    const response = await axios.post(
		'http://localhost:5000/api/users/login',
        loginDetails, 
        {
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
    )
    if(response){
        notification.success({
            message:"Uspjesno ste se logovali!"
        })
        history.push("/pocetna")
    }
    else
        notification.error({
            message:"Neuspjesno logovanje!"
        })
        console.log("error");
        /* dispatch(addMemberError()) */
}