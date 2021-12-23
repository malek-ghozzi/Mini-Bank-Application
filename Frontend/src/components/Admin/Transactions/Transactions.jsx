import React from "react";

function Transactions() {
  return (
    <div class="container mt-4">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Montant</th>
            <th scope="col">Compte</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">200$</th>
            <td>42567896542</td>
            <td>20/02/2002</td>
            <td>Entrante</td>
          </tr>
          <tr>
            <th scope="row">2000DT</th>
            <td>55638879412</td>
            <td>23/01/2021</td>
            <td>Sortante</td>
          </tr>
         
        </tbody>
      </table>

     
    </div>
  );
}

export default Transactions;
