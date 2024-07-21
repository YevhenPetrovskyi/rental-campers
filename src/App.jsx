import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/Home/Home'));
const CatalogPage = lazy(() => import('./pages/Catalog/Catalog'));
const FavoritesPage = lazy(() => import('./pages/Favorites/Favorites'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
