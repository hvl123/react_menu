import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import AnchorTemporaryDrawer from './pages/Menu';

function App() {
  return (
    <div className="App">
      <AnchorTemporaryDrawer/>
      <Header />
      <ListarTarefa />
    </div>
  );
}

export default App;
