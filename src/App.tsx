import './App.css';
import List from './component/List';
import MainLogo from './component/Logo/MainLogo';
import SearchBar from './component/Search';


function App() {
  return (
    <div className="App">
     <MainLogo />
     <SearchBar onSearch={()=> console.log('log')}/>
     <List items={['toto', 'toto', 'toto', 'toto']}/>
    </div>
  );
}

export default App;
