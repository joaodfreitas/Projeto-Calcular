import Header from './components/header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;