import AppRoutes from "./routes";
import ContainerFluid from "./components/container-fluid/fluid.container";
import "./index.css";

function App() {
  return (
    <ContainerFluid>
      <AppRoutes />
    </ContainerFluid>
  );
}

export default App;
