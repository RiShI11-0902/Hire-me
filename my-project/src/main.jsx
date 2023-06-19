import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-nn7omqs7qfd5t2oa.us.auth0.com"
  clientId="k7Jc9ccD35RGlz6Odb0L8DVVYTDvbQDM"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  <App />
</Auth0Provider>,
  
)
