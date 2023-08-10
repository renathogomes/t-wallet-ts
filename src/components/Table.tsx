import { useSelector } from 'react-redux';
import { StateProps } from '../types';

function Table() {
  const { wallet } = useSelector((state: StateProps) => state);
  const { expenses } = wallet;
  console.log(expenses);

  return (
    <>
      <div>Table</div>
      <table>
        <thead>
          <td>Descrição</td>
          <td>Tag</td>
          <td>Método de pagamento</td>
          <td>Valor</td>
          <td>Moeda</td>
          <td>Câmbio utilizado</td>
          <td>Valor convertido</td>
          <td>Moeda de conversão</td>
          <td>Editar/Excluir</td>
        </thead>
        <tbody>
          {expenses.map(({
            currency,
            description,
            id,
            method,
            tag,
            value,
          }) => (
            <tr key={ id }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{value}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
