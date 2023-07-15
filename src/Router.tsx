import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/HomePage";
import { About } from "./pages/About";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />}/>
        <Route path="/about" element={<About />}/>
      </Route>
    </Routes>
  )
}