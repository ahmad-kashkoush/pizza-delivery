import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrders() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate('/order/' + query);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search order #"
        onChange={(e) => setQuery(e.target.value)}
        className="w-32 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-[width] duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72 md:w-64"
      />
    </form>
  );
}
export default SearchOrders;
