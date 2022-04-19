import './App.css';
import LeftSection from './components/LeftSection';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div id="circle"></div>
      <div className="leftSection">
        <LeftSection />
      </div>
      <div id="sally"></div>
    </>
  );
}

export default App;
