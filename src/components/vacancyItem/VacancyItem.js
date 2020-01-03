import React from 'react';
import { Link } from 'react-router-dom';
import classes from './VacancyItem.module.scss';

const VacancyItem = ({ recruitersNames, vacancy, history }) => {

  return (
    <div className={classes.VacancyItem}>
      <button className={classes.BackButton} onClick={history.goBack}>
        <i className={classes.arrow}></i>
        <i className={classes.line}></i>
      </button>

      <div className={classes.AdditionalBlock}>
        <div className={classes.RecruitersBlock}>
          <p className={classes.RecruitersLabel}>Рекрутеры:</p>
          <div className={classes.RecruitersList}>
            {recruitersNames.map((name, index) =>
              <span className={classes.Recruiter} key={index}>{name}</span>)}
          </div>
        </div>
        <div className={classes.VacancyEdit}>
          <Link className={classes.VacancyEditButton} to={"edit"}>Редактировать</Link>
        </div>
      </div>

      <div className={classes.VacancyBlock}>
        <h1>{vacancy.title}</h1>
        <p className={classes.VacancyText}>{vacancy.description}</p>
      </div>
    </div>
  );
}

export default VacancyItem;