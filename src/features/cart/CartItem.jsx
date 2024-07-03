import DeleteItem from '@/features/cart/DeleteItem';
import UpdateQuantityItem from '@/features/cart/UpdateQuantityItem';
import { formatCurrency } from '@/utils/helpers';
import { useDispatch } from 'react-redux';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const dispatch = useDispatch();
  return (
    <li className="border-b-[1px]">
      <div className="flex items-center justify-between gap-4 py-3">
        <p className="flex-1">
          <span className="font-medium text-stone-700">{quantity}&times;</span>{' '}
          {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <UpdateQuantityItem pizzaId={pizzaId} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
