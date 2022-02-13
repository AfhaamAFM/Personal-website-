
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

function Layout ({children}){
return (
  <>
<Header/>

{children}
<Footer/>
  </>
)

}



function App() {
  return (
    <div className="bg-secondary-1 h-100vh">

    </div>
  );
}

export default App;
