import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import DetailPage from './pages/DetailPage'
import GalleryPage from './pages/GalleryPage'
import ListPage from './pages/ListPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ListPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/meal/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
