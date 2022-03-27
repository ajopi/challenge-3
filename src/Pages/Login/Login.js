import React, { useState } from 'react'
import './Login.css'
import gambar1 from '../../Assets/img/Rectangle 62.png'
import { useNavigate } from 'react-router-dom';



export const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [alertStatus, setAlertStatus] = useState(false);


    const changeEmail = (e) => {
        setEmail(e.target.value);

    }

    const changePass = (e) => {
        setPass(e.target.value);

    }

    let Navigate = useNavigate();


    const login = () => {
        let validateEmail = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
        let validatePass = /([A-Z]{1}[a-z]{1,}[0-9]{1,})/


        if (validateEmail.test(email) && validatePass.test(pass)) {
            return Navigate('home');
        }else{
            return setAlertStatus(true);
        }
    }


    return (
        <div className='container-login'>
            <div className='gambar-1'>
                {/* <img src={gambar1} alt='' className='gbr-1'/> */}
            </div>

            <div className='field-login'>
                <img src={gambar1} alt='' className='property-login' />
                <h2 className='property-login Title'>Welcome, Admin BCR</h2>
                
                {alertStatus ? <div className='alert'>
                    Masukkan username dan password yang benar. Perhatikan penggunaan huruf kapital.
                </div>: null} 

                <label className='property-login email-pass'>Email</label>
                <input type='email' placeholder='Contoh: johndee@gmail.com' className='input-field property-login' onChange={changeEmail} ></input>

                <label className='property-login email-pass'>Password</label>
                <input type='password' placeholder='6+ karakter' className='input-field property-login' onChange={changePass}></input>

                <button className='btn-login' onClick={login}>Sign in</button>
            </div>
        </div>
    )
}
