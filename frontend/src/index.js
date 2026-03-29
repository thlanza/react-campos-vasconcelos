import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './pages/HomePage';
import ContatoPage from './pages/ContatoPage';
import AreasPage from './pages/AreasPage';
import QuemSomosPage from './pages/QuemSomosPage';
import NotFoundPage from './pages/404';
import Layout from './pages/Layout';
import PoliticaPrivacidadePage from './pages/PoliticaPrivacidade';
import TermosDeUsoPage from './pages/TermosDeUsoPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
  {
    index: true,
    element: <HomePage />
  },
  {
    path: '/contato',
    element: <ContatoPage />,
  },
  {
    path: '/areas',
    element: <AreasPage />,
  },
  {
    path: '/quem-somos',
    element: <QuemSomosPage />
  },
  {
    path: '/politica-privacidade',
    element: <PoliticaPrivacidadePage />
  },
  {
    path: '/termos-de-uso',
    element: <TermosDeUsoPage />
  },
  ]
  },
  {
    path: '/*',
    element: <NotFoundPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

);


