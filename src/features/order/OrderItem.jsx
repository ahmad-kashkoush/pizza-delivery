import { formatCurrency } from '@/utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="border-y-[1px]">
      <div className="flex justify-between py-3">
        <p>
          <span className="font-medium text-stone-700">{quantity}&times;</span>{' '}
          {name}
        </p>
        <p className='font-semibold text-sm'>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
