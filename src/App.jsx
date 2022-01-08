import ChangeTheme from "./components/ChangeTheme";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { changeColor } from "./features/theme";


function App() {
  return (
    <div className="App">
      <Login />
      <Profile />
      <ChangeTheme />
    </div>
  );
}

export default App;
