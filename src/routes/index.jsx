import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../Containers/home"
import DefaultLayout from "../Layout/DefaultLayout"
import Projects from "../Containers/Projects"
import { Certificados } from "../Containers/certificados"
import { AnimatePresence } from 'framer-motion'

function Router() {
  const location = useLocation()

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/projetos" element={<Projects />} />
                <Route path="/certificados" element={<Certificados />} />
              </Route>
           </Routes>
        </AnimatePresence>
        
    )
}

export default Router 