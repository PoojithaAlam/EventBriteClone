import React from 'react'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <Header/> 
          <main>
            <Container>
              <Routes>
                  <Route path="/" exact element={<HomeScreen />} />
            
              </Routes>
            </Container>
          
          </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
