import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import { configureStore, configureHistory } from './store';
import App from './containers/App';
import 'normalize.css';
import './styles/index.sass';

const store = configureStore();
const history = configureHistory(store);

const Route1 = () => <h2>Route1</h2>;
const Route2 = () => <h2>Route2</h2>;
const Home = () => <h2>Home</h2>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="route1" component={Route1} />
                <Route path="route2" component={Route2} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
