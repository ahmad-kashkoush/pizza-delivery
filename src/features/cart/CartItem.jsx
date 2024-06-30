import { formatCurrency } from '@/utils/helpers';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="border-b-[1px]">
      <div className="flex justify-between py-3">
        <p>
          <span className="font-medium text-stone-700">{quantity}&times;</span>{' '}
          {name}
        </p>
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
