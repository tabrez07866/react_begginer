import { FC } from "react";
import { AdminInfoList } from "../types"

type AdminProps={
    admin:AdminInfoList;
}

const AdminInfo:FC<AdminProps> = ({admin}) => {
  return (
    <div>
        <h1>Admin Information</h1>
        <p>ID : {admin.id}</p>
        <p>NAME : {admin.name}</p>
        <p>EMAIL : {admin.email}</p>
        <p>ROLE : {admin.role}</p>
        <p> LOGIN DATE : {admin.lastLogin.toLocaleString()}</p>
    </div>
    
  )
}

export default AdminInfo