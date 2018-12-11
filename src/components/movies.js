import React from 'react';
import '../style/App.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Movies = () => {
    return (
        <div>
            <Table striped bordered condensed hover className="movie-table rows">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Year</th>
                  <th>My Rating</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <Button bsStyle="default" className="table-buttons">Delete Movie</Button>
                  <Button bsStyle="default" className="table-buttons">Edit</Button>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <Button bsStyle="default" className="table-buttons">Delete Movie</Button>
                  <Button bsStyle="default" className="table-buttons">Edit</Button>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td></td>
                  <td>@twitter</td>
                  <Button bsStyle="default" className="table-buttons">Delete Movie</Button>
                  <Button bsStyle="default" className="table-buttons">Edit</Button>
                </tr>
              </tbody>
            </Table>
        </div>
    );
}

export default Movies;
