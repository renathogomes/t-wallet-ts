import { useSelector } from 'react-redux';
import { Expense, StateProps } from '../types';

const somaTotal = (expenses: Expense[]) => expenses.reduce((acumulador, item) => {
  return Number(item.value)
    * Number(item.exchangeRates[item.currency].ask) + acumulador;
}, 0).toFixed(2);

function Header() {
  const generalStore = useSelector((state: StateProps) => state);
  const { wallet } = generalStore;

  return (
    <>
      <h2 data-testid="email-field">{`Email: ${generalStore.user.email}`}</h2>
      <h2 data-testid="total-field">
        {somaTotal(wallet.expenses)}
      </h2>
      <h2 data-testid="header-currency-field">
        BRL
      </h2>
    </>
  );
}

export default Header;
