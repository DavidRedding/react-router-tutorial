import { Link, Outlet } from 'react-router-dom';

const App = () => (
  <div className=" max-h-screen">
    <div className="flex flex-col items-center bg-slate-100">
      <h1 className="">Bookkeeper!</h1>
      <nav className="flex space-x-4 text-2xl">
        <Link to={'/invoices'}>Invoices</Link> <h1>|</h1> <Link to={'/expenses'}>Expenses</Link>
      </nav>
    </div>
    <Outlet />
  </div>
);

export default App;
