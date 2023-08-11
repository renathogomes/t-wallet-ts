import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { StateProps } from '../types';
import { removeExpense } from '../redux/actions';

function Table() {
  const { wallet } = useSelector((state: StateProps) => state);
  const { expenses } = wallet;
  const dispatch = useDispatch();

  const handleDelete = useCallback((id: number) => {
    dispatch(removeExpense(id));
  }, [dispatch]);

  return (
    <>
      <div>Table</div>
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={ item.id }>
              <td>{item.description}</td>
              <td>{item.tag}</td>
              <td>{item.method}</td>
              <td>{Number(item.value).toFixed(2)}</td>
              <td>{item.exchangeRates[item.currency].name}</td>
              <td>{Number(item.exchangeRates[item.currency].ask).toFixed(2)}</td>
              <td>
                {(Number(item.exchangeRates[item.currency].ask)
                * Number(item.value)).toFixed(2)}

              </td>
              <td>Real</td>
              <td>
                <button>Editar</button>
                <button
                  data-testid="delete-btn"
                  onClick={ () => handleDelete(item.id) }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
