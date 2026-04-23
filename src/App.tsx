import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'
import { HomePage } from './pages/HomePage'
import { ProgramsPage } from './pages/ProgramsPage'
import { ServicesPage } from './pages/ServicesPage'
import { CommunityPage } from './pages/CommunityPage'
import { EventsPage } from './pages/EventsPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/programas" element={<ProgramsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/comunidad" element={<CommunityPage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
