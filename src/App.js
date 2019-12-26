import React, {Suspense} from 'react'
import './App.css'
import ThemeContext from './components/ThemeContext'
import Navigation from './components/Navigation'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Forms from './components/Forms'
// import About from './components/About'
const UserList = React.lazy(() => import('./components/UserList'));
const About = React.lazy(() => import('./components/About'));
const Avatar = React.lazy(() => import('./components/Avatar'));

function App() {
  return (
    <ThemeContext.Provider value="light-yagami">
      <div className="App">
        <header className="App-header">
          <h1>Reactors</h1>                    
          <Router>
            <Navigation/>
            <Switch> 
              <Suspense fallback={<div>Loading...</div>}>
                <Route exact path="/" component={About} />
                <Route path="/user-list" component={UserList} />
                <Route path="/user/:id" component={Avatar} />                
              </Suspense>
            </Switch>
          </Router>            
        </header>
      </div>
    </ThemeContext.Provider>    
  )
}

export default App;

