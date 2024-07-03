import DeleteItem from '@/features/cart/DeleteItem';
import UpdateQuantityItem from '@/features/cart/UpdateQuantityItem';
import { addTocart, getQuantityById } from '@/features/cart/cartSlice';
import Button from '@/ui/Button';
import { formatCurrency } from '@/utils/helpers';
import { useDispatch, useSelector } from 'react-redux';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getQuantityById(id));
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(
      addTocart({
        pizzaId: id,
        name: name,
        quantity: 1,
        unitPrice: unitPrice,
        totalPrice: 1 * unitPrice,
      }),
    );
  }

  return (
    <li className="mb-4 flex items-end gap-4 border-b-2 pb-2">
      <img
        className={`h-24 w-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex-1 items-center">
        <p className="text-semibold font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-6">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
      {currentQuantity > 0 ? (
        <>
          <UpdateQuantityItem pizzaId={id} />
          <DeleteItem pizzaId={id} />
        </>
      ) : (
        !soldOut && (
          <Button
            onClick={handleClick}
            disabled={soldOut}
            type="small"
            className="justify-self-end"
          >
            Add to cart
          </Button>
        )
      )}
    </li>
  );
}

export default MenuItem;
