import SearchOrder from '@features/order/SearchOrder';
import Username from '@features/user/Username';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-300 bg-yellow-500 px-4 py-3 font-serif uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
