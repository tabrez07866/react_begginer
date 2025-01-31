import { FC } from 'react';
import {Info} from '../types'

type UserInfoProps={
    user:Info;
}

const UserInfo:FC<UserInfoProps> = ({user}) => {
  return (
    <div>
        <h1>User Information</h1>
        <p> Id: {user.id}</p>
        <p> Name: {user.name}</p>
        <p> Email: {user.email}</p>

    </div>
  )
}

export default UserInfo