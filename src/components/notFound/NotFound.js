import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NotFound.scss';

const NotFound = ({ history }) => {
  return (
    <div className={"NotFound"}>
      <p>Страница не найдена</p>
      <Link className={"CancelButton"} to="/">На главную</Link>
    </div>
  )
}

export default withRouter(NotFound);