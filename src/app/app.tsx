// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PageNotFound from '../layout/404';
import DashboardLayout from '../layout/DashboardLayout';
import Home from '../pages/home';
import '../styles.scss';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/movies/:id" element={<DashboardLayout />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
