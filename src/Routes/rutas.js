import { Route, Routes } from "react-router-dom"
import Layout from "../Components/Layout"
import BadGetaway from "../Pages/BadGetaway"
import Contacto from "../Pages/Contacto"
import Inicio from "../Pages/Inicio"
import Nosotros from "../Pages/Nosotros"

const Rutas = () => {
    return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Inicio />} />
                    <Route path="Contacto" element={<Contacto />} />
                    <Route path="Nosotros" element={<Nosotros />} />

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<BadGetaway />} />
                </Route>
            </Routes>
    )
}

export default Rutas
