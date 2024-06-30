import SearchOrders from '@/features/order/SearchOrders';
import Username from '@/features/user/Username';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-4 py-3 uppercase">
      <Link className="tracking-widest" to={'/'}>
        AK Pizaa Co.
      </Link>
      <SearchOrders />
      <Username />
    </header>
  );
}
export default Header;
