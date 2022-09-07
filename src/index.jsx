import { createRoot } from 'react-dom/client'
import App from "./App";

const root = createRoot(document.querySelector("#root")); // informações do index.html

root.render(<App />);