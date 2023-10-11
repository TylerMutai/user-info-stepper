import React, {useContext} from 'react';
import {AppContext} from "../../utils/contexts/appContext";

function UserDataView() {
  const {user} = useContext(AppContext);
  return (
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.age}</td>
      </tr>
    </table>
  );
}

export default UserDataView;