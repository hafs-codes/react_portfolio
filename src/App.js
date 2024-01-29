import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects/>
      <Skills/>
      <Footer/>
    </>
  );
}

export default App;
