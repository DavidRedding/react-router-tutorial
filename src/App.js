import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <h1>Bookkeeper!</h1>
    <nav>
      <Link to={'/invoices'}>Invoices</Link> | <Link to={'/expenses'}>Expenses</Link>
    </nav>
  </div>
);

export default App;
