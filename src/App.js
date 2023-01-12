import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap";
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header className='min-vh-100'> <Header /> </header>
      <footer className='mt-auto'> <Footer /> </footer>
    </div>
  );
}

export default App;
