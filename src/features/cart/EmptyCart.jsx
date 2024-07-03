import LinkButton from '@/ui/LinkButton';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='px-4 py-3'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className=' text-xl font-semibold mt-6'>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
