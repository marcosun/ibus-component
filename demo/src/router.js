/**
 * This module specifies routes of this app
 * @module Demo/Router
 * @requires react
 * @requires react-router-dom
 * @requires {@link module:Progress}
 */
import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

// Require Pages
import Progress from './Progress';

/**
 * @return {Router}
 */
export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/progress" component={Progress} />
      </div>
    </BrowserRouter>
  );
}
