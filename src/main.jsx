import React from 'react'
import ReactDOM from 'react-dom'
import IbarberRoutes from './routes'
import SearchBoxProvider from './contexts/SearchBoxContext';
import AuthProvider from './contexts/AuthContext';

import './styles/global.css'


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <SearchBoxProvider>
        <div id="main">
            <IbarberRoutes/>
        </div>
      </SearchBoxProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
