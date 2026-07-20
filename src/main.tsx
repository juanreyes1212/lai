import { createRoot } from "react-dom/client";
import App from "./App.tsx";

// Self-hosted fonts — bundled woff2 with font-display: swap.
// Sora weights we actually use in the UI: 300–800.
import "@fontsource/sora/300.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/sora/800.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";

import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
