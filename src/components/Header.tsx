import { useSelector } from 'react-redux';

type GeneralStoreType = {
  user: { email: string }
};

function Header() {
  const generalStore = useSelector((state: GeneralStoreType) => state);

  return (
    <nav>
      <span data-testid="email-field">{`Email: ${generalStore.user.email}`}</span>
      <span data-testid="total-field">Despesa Total R$ 0</span>
      <span data-testid="header-currency-field">BRL</span>
    </nav>
  );
}

export default Header;
