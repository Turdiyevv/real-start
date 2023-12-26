import React, {useState} from "react";
import {icon} from "../constants";
import {Input} from "../ui";
import {useDispatch, useSelector} from "react-redux";
import {
    signUserFailure,
    signUserStart,
    signUserSuccess
} from "../slice/auth";
import AuthService from "../service/auth";
import {ValidationError} from "./index";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const {isLoading} = useSelector(state => state.auth);

    // console.log(isLoading)
    const loginHandler = async e => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = {email, password}
        try {
            const response = await AuthService.userLogin(user)
            console.log(response)
            dispatch(signUserSuccess())
        } catch (error){
            dispatch(signUserFailure(error.response.data.errors))
        }
    }

    return(
        <div className={'text-center mt-5'}>
            <form className="form-signin w-25 m-auto">
              <img className="mb-4" src={icon} alt="" width="82" height="42"/>
              <h1 className="h3 mb-3 font-weight-normal">Please login</h1>

                <ValidationError/>
                <Input state={email} setState={setEmail} type={'email'} label={'Email address'}/>
                <Input state={password} setState={setPassword} type={'password'} label={'Password'}/>

              <button
                  className="btn btn-lg btn-primary btn-block mt-3 w-100"
                  type="submit"
                  onClick={loginHandler}
                  disabled={isLoading}
              >
                  {isLoading ? 'Loading...' : 'Login'}
              </button>
            </form>
        </div>
    )
}
export default Login