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
        <Button className="px-4 py-2 md:px-6 md:py-3" to="/order/new">
          Order pizzas
        </Button>
        <button className="rounded-full border-2 px-3 py-1 text-sm font-semibold uppercase text-stone-500 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 md:px-5 md:py-3">
          Clear cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
