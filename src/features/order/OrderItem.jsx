import { formatCurrency } from '@/utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  // console.log(ingredients);
  return (
    <li className="border-y-[1px]">
      <div className="flex justify-between py-3">
        <div>
          <span className="font-medium text-stone-700">{quantity}&times;</span>{' '}
          {name}
          <p className="text-sm capitalize italic text-stone-500 mt-2">
            {isLoadingIngredients || !ingredients
              ? 'Loading...'
              : ingredients.join(', ')}
          </p>
        </div>

        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
