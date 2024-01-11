import { datasOfUser } from "./state/datasUser";
import { useRecoilValue } from "recoil";


const App = ()=> {
  const user = useRecoilValue(datasOfUser);
  console.log(user);

  return (
    <div className="App">
      {`welcome ${user.fname}`}
    </div>
  );
}

export default App;
