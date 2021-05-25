import MyList from './components/MyList';
import Recommendations from './components/Recommendations';
import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <img className="logo" alt="" src={logo} />
      <MyList />
      <Recommendations />
    </div>
  );
}

export default App;
