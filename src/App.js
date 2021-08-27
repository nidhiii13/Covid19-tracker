
import { Switch } from "react-router-dom";
import Searchbar from "./components/SearchBar/Searchbar";
import Sidebar from "./components/sidebar/Sidebar";
import { Route } from "react-router";
import Statewise from "./components/Statewise/Statewise";
function App() {
  return (
   <>
   <div className="head">
   <h1>COVID-19 TRACKER</h1>
   </div>
   <Sidebar />
   <Switch>
     <Route path="/countrywise">
     <Searchbar />
     </Route>
     <Route path="/statewise">
     <Statewise />
     </Route>
   </Switch>
   </>
  );
}

export default App;
