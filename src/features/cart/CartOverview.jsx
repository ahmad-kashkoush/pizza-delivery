import { Link } from 'react-router-dom';

function CartOverview() {
  return (
    <div className="flex justify-between bg-stone-800 px-4 py-3 uppercase text-stone-200">
      <p className="font-semibold uppercase text-stone-300 flex gap-4">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link  to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
