import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { isMobile } from './helpers/platform';
import { store } from './store';
import './styles.less';

const container = document.getElementById('root');
container.classList.add(isMobile.any() ? 'touch' : 'pointer');
// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
