import React from 'react';
import ReactDOM from 'react-dom';
import EzLogViewerApp from './EzLogViewerApp';
import { Provider } from "mobx-react";
import EzRootStore from "./stores/EzRootStore";
import * as serviceWorker from './serviceWorker';

import './index.css';

const ezRootStore = new EzRootStore();

const RenderComponent = () => (
  <Provider {...ezRootStore}>
    <EzLogViewerApp />
  </Provider>
);

ReactDOM.render(<RenderComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
