import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function Root() {
  return (
    <div className="flex min-h-screen flex-col justify-between font-custom">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
