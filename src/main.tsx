import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Gallary from './Gallary'
import Contacts from './Contacts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/Gallary' element={<Gallary/>}/>
        <Route path='/Contacts' element={<Contacts/>}/>
      </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
