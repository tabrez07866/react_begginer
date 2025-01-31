// import User from "./components/User";
// import Button from "./components/Button";

// import AdminInfo from "./components/AdminInfo";
import Counter from "./components/Counter.tsx";
// import UserInfo from "./components/UserInfo";
// import {Info,AdminInfoList} from './types.ts'

const App = () => {

  // const user:Info={
  //   id:1,
  //   name:"Tabrez",
  //   email:"tabrez@gmail.com"
  // }

  // const admin:AdminInfoList={
  //   id:2,
  //   name:"jemmy",
  //   email:"jemmy@gmail.com",
  //   role:"admin",
  //   lastLogin:new Date(),
  // }

  return (
    <div>
      {/* <User name={'Tabrez'} age={20} isStudents={true} /> */}
      {/* <Button label='Click' onClick={()=>console.log('clicked')} disabled={false}  /> */}
      {/* <UserInfo user={user} />
      <AdminInfo admin={admin} /> */}
      <Counter/>
    </div>
  );
};

export default App;