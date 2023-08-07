import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencieWallet } from '../redux/actions';
import { Dispatch, GeneralProps } from '../types';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(currencieWallet());
  }, [dispatch]);

  const { currencies } = useSelector((state: GeneralProps) => state.wallet);

  console.log(currencies);

  return (
    <form>
      <label htmlFor="value">Valor:</label>
      <input
        type="number"
        data-testid="header-currency-field"
        id="value"
      />
      <label htmlFor="description">Descrição:</label>
      <input
        type="number"
        data-testid="description-input"
        id="description"
      />
      <label htmlFor="coin">Moeda:</label>
      <select
        id="coin"
        data-testid="currency-input"
      >
        { currencies.map((coin) => (
          <option
            key={ coin }
          >
            {coin}

          </option>
        ))}

      </select>
      <label htmlFor="method">Método de pagamento:</label>
      <select
        id="method"
        data-testid="method-input"
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <label htmlFor="tag">Categoria:</label>
      <select
        id="tag"
        data-testid="tag-input"
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Saúde</option>
      </select>
    </form>
  );
}

export default WalletForm;
