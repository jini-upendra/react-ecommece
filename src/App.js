import HeaderComponent from './components/header/HeaderComponent';
import FooterComponent from './components/footer/FooterComponent';
import PageRoutes from './Routes';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <PageRoutes />
      <FooterComponent />
    </div>
  );
}

export default App;
