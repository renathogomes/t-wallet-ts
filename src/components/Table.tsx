import { useSelector } from 'react-redux';
import { StateProps } from '../types';

function Table() {
  const { wallet } = useSelector((state: StateProps) => state);
  const { expenses } = wallet;

  return (
    <>
      <div>Table</div>
      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>
          {expenses.map(({
            currency,
            description,
            id,
            method,
            tag,
            value,
            name,
            ask,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{parseFloat(value).toFixed(2)}</td>
              <td>{currency}</td>
              <td>{name}</td>
              <td>{parseFloat(ask).toFixed(2)}</td>
              <td>Real</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
