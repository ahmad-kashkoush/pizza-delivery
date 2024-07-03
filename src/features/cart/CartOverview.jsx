import { getTotalPrice, getTotalQuantity } from '@/features/cart/cartSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CartOverview() {
  const totalQuantity = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  if (!totalQuantity) return null;
  return (
    <div className="flex justify-between bg-stone-800 px-4 py-3 uppercase text-stone-200">
      <p className="flex gap-4 font-semibold uppercase text-stone-300">
        <span>{totalQuantity} pizzas</span>
        <span>${totalPrice}</span>
      </p>

      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
