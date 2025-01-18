import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import auth from '../../firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { userContext } from '../../AuthContext/AuthContext';

const Login = () => {
    const { user, loading } = useContext(userContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();


    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(res => {
                toast.success("Successfully Login");
                setTimeout(() => {
                    location.state ? navigate(`${location.state}`) : navigate('/')
                }, 2000);
            })
            .catch(err => {
                console.log(err.massage);
            });
    }

    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                toast.success("Successfully Login");
                setTimeout(() => {
                    location.state ? navigate(`${location.state}`) : navigate('/')
                }, 2000);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    if (loading) {
        return (
            <div className='my-20 w-1/3 text-center flex items-center mx-auto border'>
                <h2 className='text-2xl font-bold'><span className='text-red-500'>Loading</span>....</h2>
            </div>
        )
    }
    if (user) {
        return <Navigate to='/'></Navigate>
    }
    return (
        <div>
            <ToastContainer />
            <div className="border glass w-1/3 mx-auto mb-32 mt-10 py-14 text-center space-y-4 rounded-xl">
                <h2 className="text-black text-4xl font-bold pb-8">Please <span className='text-red-500'>Login</span></h2>
                <button onClick={() => handleGoogleLogin()} className="btn btn-secondary"> <FaGoogle /> Signin with google</button><br />
                <button onClick={() => handleGithubLogin()} className="btn btn-secondary"> <IoLogoGithub /> Signin with github</button>

            </div>
        </div>
    );
};

export default Login;