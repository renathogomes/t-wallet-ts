import { useSelector } from 'react-redux';

type GeneralStoreType = {
  user: { email: string },
  wallet: {
    totalValue: number
    currencies: string[],
    expenses: {
      value: number,
      describe: string,
      coins: string,
      method: string,
      category: string,
    }
  }
};

function Header() {
  const generalStore = useSelector((state: GeneralStoreType) => state);
  const { wallet } = generalStore;
  const { expenses } = wallet;

  return (
    <>
      <h2 data-testid="email-field">{`Email: ${generalStore.user.email}`}</h2>
      <span data-testid="total-field">
        {'Despesa Total: '}
        {' '}
        {expenses.value !== 0 ? generalStore.wallet.totalValue : 0}
      </span>
      <span data-testid="header-currency-field">
        {generalStore.wallet.totalValue ? expenses.coins : 'BRL'}
      </span>
    </>
  );
}

export default Header;
