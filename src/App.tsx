import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, useParams } from "react-router-dom";
import Welcome from './Page/Welcome';
import Books from './Page/Books';
import Characters from './Page/Characters';
import NavBar from './component/NavBar';
import MainLogo from './component/Logo/MainLogo';

const queryClient = new QueryClient()

export enum Page {
  Books = 'books',
  Characters = 'characters'
}

function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <div className="App">
         <MainLogo />
         <NavBar />
         <Routes>
           <Route path='/' element={<Welcome />} />
           <Route path='/books' element={<Books />} />
           <Route path='/characters' element={<Characters />} />
         </Routes>
        </div>
       </QueryClientProvider>
  );
}

export default App;
