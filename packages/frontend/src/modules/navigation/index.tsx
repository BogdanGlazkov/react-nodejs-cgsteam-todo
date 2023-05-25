import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { APP_KEYS } from '../common/consts';
import { TodosPage } from '../Pages/TodosPage';
import { HomePage } from '../Pages/HomePage';
import { DetailsPageComponent } from '../Pages/DetailsPage';

export const MainRouter = () => (
  <Router>
    <Routes>
      <Route path={APP_KEYS.ROUTER_KEYS.ROOT} element={<HomePage />} />
      <Route path={APP_KEYS.ROUTER_KEYS.TODOS} element={<TodosPage />} />
      <Route path={APP_KEYS.ROUTER_KEYS.DETAILS} element={<DetailsPageComponent />} />
    </Routes>
  </Router>
);
