import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currencieWallet } from '../redux/actions';
import { Dispatch } from '../types';

// type GeneralStoreType = {
//   currency: []
// };

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  // const state = useSelector((state) => state);

  // useEffect(() => {
  //   dispatch(currencieWallet());
  // }, []);

  return (
    <form>
      <label htmlFor="value">Valor:</label>
      <input
        type="number"
        data-testid="header-currency-field"
        id="value"
      />
      <label htmlFor="coin">Forma de pagamento:</label>
      <select
        id="coin"
        data-testid="currency-input"
      >
        <option value="valor do currency">Dinheiro</option>
        <option value="valor do currency da API">Cartão de Crédito</option>
        <option value="valor do currency da API">Cartão de Débito</option>
      </select>
      <label htmlFor="description">Descrição:</label>
      <input
        type="text"
        data-testid="description-input"
        id="description"
      />
    </form>
  );
}

export default WalletForm;
