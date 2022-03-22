// import React, { createContext, useEffect, useState } from "react";

// export const UserContext = createContext();
// export const UserWrapper = ({children}) => {
//     const [user, setUser] = useState(null)
//     if (typeof window !== 'undefined' && localStorage.getItem('token') !== null) {
//         const token = JSON.parse(localStorage.getItem('token'))
//         useEffect(() => {
//             const response = await fetch("http://localhost:4000/v1/users/details", {
//                 method : 'GET',
//                 headers : {'Authorization': `Bearer ${token}`}
//             })
//             const data = await response.json()
//             setUser(data)
//             fetch("http://localhost:4000/v1/users/details", {
//                 method : 'GET',
//                 headers : {'Authorization': `Bearer ${token}`}
//             }).then((res) => {
//                 const result = res.data.json()
//                 setUser(result)
//             }).catch((err) => {
//                 console.log(err)
//             })
//         }, [])
//     }
//     return (
//         <UserContext.Provider value={user}>
//             {children}
//         </UserContext.Provider>
//     );
// }

// export function useUserContext() {
//     return useContext(UserContext);
//   }