import './App.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Welcome from './Page/Welcome';

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
       <div className="App">
         <Welcome />
       </div>
       </QueryClientProvider>
  );
}

export default App;
