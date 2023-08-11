import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, ExpenseTest, StateProps } from '../types';
import { addExpense, currencieWallet, setId } from '../redux/actions';

function WalletForm() {
  const dispatch: Dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [currency, setCurrency] = useState<string>('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [count, setCount] = useState(0);

  const { wallet } = useSelector((state: StateProps) => state);

  useEffect(() => {
    dispatch(currencieWallet());
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expense: ExpenseTest = {
      id: count,
      value,
      description,
      currency,
      method,
      tag,
    };

    setCount(count + 1);
    dispatch(setId(count));
    dispatch(addExpense(expense));

    setValue('');
    setDescription('');
    setCurrency('USD');
    setMethod('Dinheiro');
    setTag('Alimentação');

    // }
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
        value={ description }
        onChange={ (event) => setDescription(event.target.value) }
      />
      {/* Campo para adicionar qual moeda será registrada a despesa */}
      <label htmlFor="coin">Moeda:</label>
      <select
        id="coin"
        data-testid="currency-input"
        value={ currency }
        onChange={ (event) => setCurrency(event.target.value) }
      >
        { wallet.currencies.map((gold:any) => (
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
        value={ tag }
        onChange={ (event) => setTag(event.target.value) }
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
