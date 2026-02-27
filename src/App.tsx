import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/footer/Footer"
import { Navbar } from "./components/navbar/Navbar"
import { AboutPage } from "./pages/AboutPage"
import { Home } from "./pages/Home"
import { ContactPage } from "./pages/ContactPage"
import { MemberPage } from "./pages/MemberPage"
import { ScrollToTop } from "./components/ScrollToTop"
import { TechPage } from "./pages/TechPages"

export function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/tech" element={<TechPage />} />
            <Route path="/member/:slug" element={<MemberPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}
