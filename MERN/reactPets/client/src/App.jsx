import React from 'react';
import AllPets from './components/AllPets';
import OnePet from './components/OnePet';
import NewPetForm from './components/NewPetForm';
import EditPetForm from './components/EditPetForm';
import {
  BrowserRouter, //tells the application we can enable routing
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1 className = "ms-4 mt-4">Pet Shelter</h1>
        <Switch>

          <Route exact path="/">
            <AllPets></AllPets>
          </Route>

          <Route exact path="/pets/new">
            <NewPetForm></NewPetForm>
          </Route>

          <Route exact path="/pets/:id">
            <OnePet></OnePet>
          </Route>

          <Route exact path="/pets/:id/edit">
            <EditPetForm></EditPetForm>
          </Route>


        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
