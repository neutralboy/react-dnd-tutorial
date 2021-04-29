import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Board from "./components/Board";
import Container from "./components/Dustbin";
import SetState from "./stateSave";
import {Store} from "./context";


const App = () => {
  // const {state} = useContext(AppContext);
  return (
    <DndProvider backend={HTML5Backend}>
      <Store>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Board />
            </Route>
            <Route exact path="/container">
              <Container />
            </Route>
            <Route path="/state">
              <SetState />
            </Route>
          </Switch>
        </BrowserRouter>
      </Store>
    </DndProvider>
  )
}

export default App;
