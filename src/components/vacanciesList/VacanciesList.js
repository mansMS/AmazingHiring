import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import classes from './VacanciesList.module.scss';

const VacanciesList = ({ recruiters, vacancies, loading, error, recruitersFromURL, history }) => {

  if (loading) return <Spinner />
  if (error) return <h1 className={classes.Error}>Ошибка загрузки</h1>
  if (!vacancies.length) return <h1 className={classes.Error}>Нет вакансий</h1>

  const onRecruiterClick = id => {
    let newSearch = [];
    if (recruitersFromURL.includes(id)) {
      newSearch = [
        ...recruitersFromURL.slice(0, recruitersFromURL.indexOf(id)),
        ...recruitersFromURL.slice(recruitersFromURL.indexOf(id) + 1)];
    } else {
      newSearch = [...recruitersFromURL, id];
    }

    newSearch.length
      ? history.replace(`?assignee=${newSearch}`)
      : history.replace()
  }

  const selectedRecruitersId = recruitersFromURL.length
    ? recruitersFromURL
    : recruiters.map(recruiter => recruiter.id);

  const filteredVacancies = recruitersFromURL.length
    ? vacancies.filter(vacancy => vacancy.assignees.some(assignee => recruitersFromURL.includes(assignee)))
    : vacancies;

  return (
    <div className={classes.VacanciesList}>
      <h1>Список вакансий</h1>
      <div className={classes.RecruitersBlock}>
        {recruiters.map(recruiter =>
          <button
            className={
              selectedRecruitersId.includes(recruiter.id)
                ? classes.RecruiterItem
                : [classes.RecruiterItem, classes.NotChosenRecruiterItem].join(' ')
            }
            key={recruiter.id}
            onClick={() => onRecruiterClick(recruiter.id)}
          >
            {recruiter.name}
          </button>
        )}
      </div>

      <div className={classes.VacanciesBlock}>
        <div className={classes.VacancyAdd}>
          <Link className={classes.VacancyAddButton} to={"create/"}>Добавить вакансию</Link>
        </div>
        {filteredVacancies.length
          ? filteredVacancies.map(vacancy =>
            <div key={vacancy.id} className={classes.VacancyItem}>
              <h2><Link className={classes.VacancyTitle} to={vacancy.id + "/"}>{vacancy.title}</Link></h2>
            </div>
          ) : (
            <div className={classes.NoVacancies}>
              <h2>Нет вакансий</h2>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default VacanciesList;