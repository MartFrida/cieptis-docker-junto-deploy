import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Nutrition } from './pages/Nutrition';
import { Therapy } from './pages/Therapy';
import Tarifas from './pages/Tarifas';
import { PersonalizedTraining } from './pages/PersonalizedTraining'
import { ArtesMarciales } from './pages/ArtesMarciales';
import { ClacesInfantiles } from './pages/ClacesInfantiles';
import { FisicoCulturismo } from './pages/FisicoCulturismo';
import ScrollToTop from './helpers/ScrollToTop';
import Article from './components/Blog/Article';
import BlogCategory from './components/Blog/BlogCategory';
import { NotFound } from './pages/NotFound';
import { Blog } from './pages/Blog';
import ScrollToTopButton from './components/ScrollToTopButton'
import ChatWidget from './components/ChatWidget'
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-[100vw] overflow-hidden box-border">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/personal-training' element={<PersonalizedTraining />} />
          <Route path='/entrenador-personal' element={<PersonalizedTraining />} />
          <Route path='/artes-marciales' element={<ArtesMarciales />} />
          <Route path="/fisico-culturismo" element={<FisicoCulturismo />} />
          <Route path="/clases-infantiles" element={<ClacesInfantiles />} />
          <Route path="/claces-infantiles" element={<ClacesInfantiles />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/tarifas" element={<Tarifas />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:category" element={<BlogCategory />} />
          <Route path="/blog/:category/:id" element={<Article />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
      <ChatWidget />
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;