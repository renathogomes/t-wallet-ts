import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, GeneralProps } from '../types';
import { currencieWallet, setExpense } from '../redux/actions';

type StateProp = string | number;

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const [value, setValue] = useState<StateProp>(0);
  const [describe, setDescribe] = useState('');
  const [coins, setCoins] = useState<string>('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [category, setCategory] = useState('Alimentação');

  const { currencies } = useSelector((state: GeneralProps) => state.wallet);

  useEffect(() => {
    dispatch(currencieWallet());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value && describe) { // Verificação de campos obrigatórios
      const INITIAL_EXPENSE = {
        expenses: {
          value,
          describe,
          coins,
          method,
          category,
        },
      };
      dispatch(setExpense(INITIAL_EXPENSE));
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      {/* Campo para adicionar o valor da despesa */}
      <label htmlFor="value">Valor:</label>
      <input
        type="number"
        data-testid="value-input"
        id="value"
        value={ value }
        onChange={ (event) => setValue(event.target.value) }
      />
      {/* Campo para adcionar a descrição da despesa */}
      <label htmlFor="description">Descrição:</label>
      <input
        type="text"
        data-testid="description-input"
        id="description"
        value={ describe }
        onChange={ (event) => setDescribe(event.target.value) }
      />
      {/* Campo para adicionar qual moeda será registrada a despesa */}
      <label htmlFor="coin">Moeda:</label>
      <select
        id="coin"
        data-testid="currency-input"
        value={ coins }
        onChange={ (event) => setCoins(event.target.value) }
      >
        { currencies.map((gold) => (
          <option
            key={ gold }
          >
            {gold}

          </option>
        ))}

      </select>
      {/* Campo de metodo de pagamento */}
      <label htmlFor="method">Método de pagamento:</label>
      <select
        id="method"
        data-testid="method-input"
        value={ method }
        onChange={ (event) => setMethod(event.target.value) }
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      {/* Campo para selecionar a categoria */}
      <label htmlFor="tag">Categoria:</label>
      <select
        id="tag"
        data-testid="tag-input"
        value={ category }
        onChange={ (event) => setCategory(event.target.value) }
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
      {/* Botão para adiconar despesa */}
      <button type="submit">
        Adicionar despesa
      </button>
    </form>
  );
}

export default WalletForm;
