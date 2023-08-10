import { useSelector } from 'react-redux';
import { StateProps } from '../types';

function Header() {
  const generalStore = useSelector((state: StateProps) => state);
  const { wallet } = generalStore;
  const { expenses } = wallet;
  console.log(wallet);
  console.log(expenses.map((asked) => asked.currency));

  return (
    <>
      <h2 data-testid="email-field">{`Email: ${generalStore.user.email}`}</h2>
      <h2 data-testid="total-field">
        {/* { wallet.expenses.map((count) => <span key={}> { count } </span>) } */}
      </h2>
      <span data-testid="header-currency-field">
        BRL
      </span>
    </>
  );
}

export default Header;
