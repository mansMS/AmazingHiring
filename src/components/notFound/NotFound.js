import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './NotFound.module.scss';

const NotFound = ({ history }) => {
  return (
    <div>
      <p>Страница не найдена</p>
      <Link to="/">На главную</Link>
    </div>
  )
}

export default withRouter(NotFound);