import CartItem from '@/features/cart/CartItem';
import EmptyCart from '@/features/cart/EmptyCart';
import { clearCart, getCart } from '@/features/cart/cartSlice';
import { getUsername } from '@/features/user/userSlice';
import Button from '@/ui/Button';
import LinkButton from '@/ui/LinkButton';
import { useDispatch, useSelector } from 'react-redux';


function Cart() {
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="h-common-style mt-8 text-left text-xl md:text-2xl">
        Your cart, {username}
      </h2>
      <ul className="mt-8">
        {cart.map((item) => (
          <CartItem key={item.pizzaId} item={item} />
        ))}
      </ul>
      <div className="mt-8 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        {cart.length > 0 && (
          <Button onClick={() => dispatch(clearCart())} type="secondary">
            Clear cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default Cart;
