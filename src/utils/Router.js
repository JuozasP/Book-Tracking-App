import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserHistory } from 'react-history';
import LibraryComponent from '../Components/LibraryComponent';
import SearchComponent from '../Components/SearchComponent';


const Router = () => (
    <BrowserRouter history={BrowserHistory}>
            <Switch>
                <Route exact path="/" component={LibraryComponent} />
                <Route exact path="/search" component={SearchComponent}/>
            </Switch>
    </BrowserRouter>

);

export default Router;