import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import './index.css'
import App from './App.jsx'



createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}> {/*permite q todos los componentes internos puedan acceder a redux*/}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </StrictMode>
)
