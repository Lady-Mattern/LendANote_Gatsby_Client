import React from 'react';
import { getUser } from "../services/auth";

const Profile = () => (
    <div>
        <h2>Welcome back {getUser().name}!</h2>
        <h3>Your Profile</h3>
        <ul>
            <li>Name: {getUser().name}</li>
            <li>School: {getUser().school}</li>
            <li>Region: {getUser().region}</li>
            <li>School Phone: {getUser().school_phone}</li>
            <li>Email: {getUser().email}</li>
        </ul>
    </div>
)

export default Profile;