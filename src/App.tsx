import Main from "./pages/Main";
import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <div className='container py-4'>
      <ThemeSwitch />
      <Main />
    </div>
  );
}

export default App;
