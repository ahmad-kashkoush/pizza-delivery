import { getCart, removeFromCart } from '@/features/cart/cartSlice';
import Button from '@/ui/Button';
import { useDispatch, useSelector } from 'react-redux';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  return (
    <Button onClick={() => dispatch(removeFromCart(pizzaId))} type="small">
      Delete
    </Button>
  );
}
export default DeleteItem;
