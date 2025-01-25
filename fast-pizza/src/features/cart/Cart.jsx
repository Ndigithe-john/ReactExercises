import Button from '@components/Button';
import LinkButton from '@components/LinkButton';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from './CartItem';
import { clearCart, getCart, getUserName } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const username = useSelector(getUserName);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart,<span className="uppercase">{username}</span>{' '}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>

      <div className="mt-6 space-x-4">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
