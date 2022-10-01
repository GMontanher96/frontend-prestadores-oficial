import { Table } from "react-bootstrap";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const GridContato = () => {
    return (
        <Table striped bordered hover  responsive="sm">
        <thead>
          <tr>
            <th>Telefone</th>
            <th>Celular</th>              
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>teste</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>teste</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>teste</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>teste</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
            <tr>
            <td>teste</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
       
         <tr>
             <td>
            <button className="btn btn-success"><RemoveRedEyeIcon /></button>
          </td>
         </tr>
        </tbody>
      </Table>
    )
}

export default GridContato;