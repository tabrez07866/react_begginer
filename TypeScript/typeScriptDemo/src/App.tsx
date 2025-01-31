// import User from "./components/User";

import Button from "./components/Button";

const App = () => {
  return (
    <div>
      {/* <User name={'Tabrez'} age={20} isStudents={true} /> */}
      <Button label='Click' onClick={()=>console.log('clicked')} disabled={false}  />
    </div>
  );
};

export default App;