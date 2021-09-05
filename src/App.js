import { Container } from '@material-ui/core';
import Search from './Pages/Search/Search';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/MainNav';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Trending from './Pages/Trending/Trending';
import Login from './Pages/Login/Login';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <Helmet>
          <meta charSet="utf-8" />
          <title>Movie App</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Movie App" />
       </Helmet>
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
          </Switch>
        </Container>
      </div>
      
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
