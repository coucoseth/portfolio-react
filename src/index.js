import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreenContainer from './components/screenContainer';

library.add(fab, faAlignRight)

ReactDOM.render(
  <ScreenContainer />,
  document.getElementById('root')
);
reportWebVitals();
