import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Login = () => {
const [qrCode, setQRCode] = useState('');

    useEffect(() => {
    getQRCode();
    }, []);

const getQRCode = async () => {
    try {
    const response = await axios.get('https://api.whatsapp.com/rest/qrcode');
    setQRCode(response.data.qrCode);
    } catch (error) {
    console.error(error);
    }
};

return (
    <div>
        <h2>Scan QR Code to Login</h2>
        {qrCode ? (
        <img src={qrCode} alt="QR Code" />
        ) : (
        <p>Loading QR Code...</p>
        )}
    </div>
    );
};

export default Login;
