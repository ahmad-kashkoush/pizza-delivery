import { decreaseItemQuantity, getQuantityById, increaseItemQuantity } from '@/features/cart/cartSlice';
import Button from '@/ui/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UpdateQuantityItem({pizzaId}) {
    const currentQuantity = useSelector(getQuantityById(pizzaId));
  const [quantity, setQuantity] = useState(currentQuantity);
  const dispatch=useDispatch();
  return (
    <div className='flex gap-2 items-center'>
      <Button type="smaller" onClick={()=>dispatch(increaseItemQuantity(pizzaId))}>
        +
      </Button>
      <p className="text-semibold py-2 font-medium md:py-2">{currentQuantity}</p>
      <Button
        type="smaller"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}
export default UpdateQuantityItem;
