import { GoogleLogin } from '@react-oauth/google';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginButton = () => {
    return (
        <GoogleOAuthProvider clientId='724957229803-5ekuoed0qq1lmdhlkjbq61f4h5n9tm1c.apps.googleusercontent.com'>
            <GoogleLogin
                onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;