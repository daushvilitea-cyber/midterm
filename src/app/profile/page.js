'use client'
import { useEffect, useState } from "react"
import styles from "./profile.module.css"



function profile() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('https://fakestoreapi.com/users/3')
      const data = await response.json()
      setUser(data)
    }

    fetchUser()
  }, [])
  if (!user) {
    return <div>Loading...</div>
  }

  return (
   <div className={styles.profile}>
    <img src="https://cdn.vectorstock.com/i/1000v/00/74/young-man-profile-vector-14770074.jpg" alt="Profile" width={100} />
    <h1>{user.name.firstname} {user.name.lastname}</h1>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Address: {user.address.number} {user.address.street}, {user.address.city}</p>
    <button className={styles.editBtn}>Edit Profile</button>
   </div>
  )
}


export default profile