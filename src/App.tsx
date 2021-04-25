import Board from "./components/Board";
import {Store} from "./context";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const App = () => {
  // const {state} = useContext(AppContext);
  return (
    <DndProvider backend={HTML5Backend}>
      <Store>
          <Board />      
      </Store>
    </DndProvider>
  )
}

export default App;
