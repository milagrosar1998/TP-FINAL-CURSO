import "./App.css";
import { Catalog } from "./components/page";
import { LoginForm, RegisterForm } from "./components/templates";

function App() {
  return (
    <>
      <LoginForm />
      <RegisterForm />
      <Catalog />
    </>
  );
}

export default App;
