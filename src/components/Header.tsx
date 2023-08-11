import { useSelector } from 'react-redux';
import { StateProps } from '../types';

function Header() {
  const generalStore = useSelector((state: StateProps) => state);
  const { wallet } = generalStore;
  const { total } = wallet;

  return (
    <>
      <h2 data-testid="email-field">{`Email: ${generalStore.user.email}`}</h2>
      <h2 data-testid="total-field">
        {total.toFixed(2)}
      </h2>
      <h2 data-testid="header-currency-field">
        BRL
      </h2>
    </>
  );
}

export default Header;
