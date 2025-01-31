import { FC } from "react";

type UserShape=
    {name:string;age:number;isStudents:boolean}

// import {  ReactNode } from "react"

// interface UserShape {children:ReactNode} 

const User:FC<UserShape> = ({name,age,isStudents}) => {
  return (
    <div>
       <h1>{name}</h1>
       <h1>{age}</h1>
       <h1>{isStudents}</h1>
    </div>
  )
}

export default User