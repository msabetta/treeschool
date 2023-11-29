/*
  In questa esercitazione, dovrai creare una mini app React utilizzando React Router. L'applicazione avrà due pagine principali e una pagina di errore per gestire gli URL non validi.
  Assicurati di avere React Router installato nel tuo progetto (npm install react-router-dom).
  Crea due componenti, Home e About, che rappresenteranno le due pagine principali della tua app.
  Aggiungi del contenuto significativo a ciascun componente per rendere interessanti le pagine.
  Importa BrowserRouter, Route, e Switch dal modulo react-router-dom nel tuo componente principale (solitamente App.js).
  Configura le route per i componenti Home e About. Assicurati di utilizzare il componente Switch per garantire che solo una route venga visualizzata alla volta.
  Aggiungi una nuova pagina chiamata ErrorPage che sarà visualizzata quando l'URL non corrisponde a nessuna delle route definite.
  Configura una route wildcard (*) per gestire tutte le route non corrispondenti.
  Aggiungi una barra di navigazione che contenga link per la pagina principale (Home) e la pagina About.
  Utilizza i componenti Link o NavLink di React Router per consentire all'utente di navigare tra le pagine senza dover ricaricare la pagina.
*/

import './App.css';
import Layout from './src/pages/Navigation';
import Home from './src/pages/Home'
import About from './src/pages/About'
import Contact from './src/pages/Contact'
import ErrorPage from './src/pages/ErrorPage';
import Blogs from './src/pages/Blogs';
import Navbar from './src/components/Navbar'


import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';


function App() {
   return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" component={<Layout />}>
          <Route index component={<Home />} />
          <Route path="blogs" component={<Blogs />} />
          <Route path="contact" component={<Contact />} />
          <Route path="about" component={<About />} />
          <Route path="*" component={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

}

export default App;


