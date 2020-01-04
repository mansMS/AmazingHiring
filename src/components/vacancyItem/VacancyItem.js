import React from 'react';
import { Link } from 'react-router-dom';
import './VacancyItem.scss';

const VacancyItem = ({ recruitersNames, vacancy, history }) => {

  return (
    <div className={"VacancyItem"}>
      <button className={"BackButton"} onClick={history.goBack}>
        <i className={"arrow"}></i>
        <i className={"line"}></i>
      </button>

      <div className={"AdditionalBlock"}>
        <div className={"RecruitersBlock"}>
          <p className={"RecruitersLabel"}>Рекрутеры:</p>
          <div className={"RecruitersList"}>
            {recruitersNames.map((name, index) =>
              <span className={"Recruiter"} key={index}>{name}</span>)}
          </div>
        </div>
        <div className={"VacancyEdit"}>
          <Link className={"VacancyEditButton"} to={"edit"}>Редактировать</Link>
        </div>
      </div>

      <div className={"VacancyBlock"}>
        <h1>{vacancy.title}</h1>
        <p className={"VacancyText"}>{vacancy.description}</p>
      </div>
    </div>
  );
}

export default VacancyItem;