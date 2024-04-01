import App from "./components/App";
import { createRoot } from "react-dom/client";
import "./index.css"
import './Clock.scss'


const rootElement = document.getElementById('root')
const root = createRoot(rootElement);
root.render(
    <>
    <App/>
    </>
)