import { useSelector } from 'react-redux';
import { StateProps } from '../types';

function Header() {
  const generalStore = useSelector((state: StateProps) => state);
  const { wallet } = generalStore;
  console.log(wallet.expenses);
  console.log(wallet);

  return (
    <>
      <h2 data-testid="email-field">{`Email: ${generalStore.user.email}`}</h2>
      <span data-testid="total-field">
        total
      </span>
      <span data-testid="header-currency-field">
        BRL
      </span>
    </>
  );
}

export default Header;
