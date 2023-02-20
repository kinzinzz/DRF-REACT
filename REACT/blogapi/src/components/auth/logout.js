import React, { useEffect } from 'react';
import axiosInstance from '../../axios';

export default function Logout() {


    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        window.location.replace('/')
    });
    return <div>Logout</div>;
}