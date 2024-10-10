import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {


    const { email, logout, getProfile } = useContext(UserContext);
    const [profileData, setProfileData] = useState(null);
    // const {validar, user} = useContext(UserContext)

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await getProfile();
                setProfileData(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProfile();
    }, [getProfile]);

    // useEffect(() => {
    //     validar()
    // }, [validar] )

  return (
        <div>
            <h1>Profile</h1>
            <p>Email: {email}</p>
            <button onClick={logout}>Cerrar Sesion</button>
            {profileData && <pre>{JSON.stringify(profileData, null, 2)}</pre>}
        </div>
  )
}

export default Profile


////Codigo chat gpt

// import React, { useEffect, useState } from 'react';
// import { useUserContext } from './UserContext';

// const Profile = () => {
//     const { email, logout, getProfile } = useUserContext();
//     const [profileData, setProfileData] = useState(null);

    // useEffect(() => {
    //     const fetchProfile = async () => {
    //         try {
    //             const data = await getProfile();
    //             setProfileData(data);
    //         } catch (error) {
    //             console.error(error.message);
    //         }
    //     };
    //     fetchProfile();
    // }, [getProfile]);

//     return (
//         <div>
//             <h1>Profile</h1>
//             <p>Email: {email}</p>
//             <button onClick={logout}>Cerrar Sesion</button>
//             {profileData && <pre>{JSON.stringify(profileData, null, 2)}</pre>}
//         </div>
//     );
// };

// export default Profile;
