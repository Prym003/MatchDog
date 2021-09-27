import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import DogDetails from "./components/DogDetails/DogDetails";
import CreateDog from "./components/CreateDog/CreateDog";
const { getTemperaments, getAllDogs } = require("./actions/index");

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
    dispatch(getAllDogs({}, {}, "A-Z"));
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        {/* Routes... */}
        <Route path='/:n' component={Nav} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/DogDetails/:id" component={DogDetails} />
        <Route exact path="/CreateDog" component={CreateDog} />
      </Routes>
    </div>
  );
}

export default App;
