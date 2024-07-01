import CartItem from '@/features/cart/CartItem';
import Button from '@/ui/Button';
import LinkButton from '@/ui/LinkButton';

const fakeCart = [
  {
    pizzaId: 12,
    name: 'Mediterranean',
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: 'Vegetale',
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: 'Spinach and Mushroom',
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="h-common-style mt-8 text-left text-xl md:text-2xl">
        Your cart, %NAME%
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
        <Button type='secondary'>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
