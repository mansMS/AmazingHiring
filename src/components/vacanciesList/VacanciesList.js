import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner';
import './VacanciesList.scss';

const VacanciesList = ({ recruiters, vacancies, loading, error, recruitersFromURL, history, location, match }) => {

  if (loading) return <Spinner />
  if (error) return <h1 className={"Error"}>Ошибка загрузки</h1>
  if (!vacancies || !vacancies.length) return <h1 className={"Error"}>Нет вакансий</h1>

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
    <div className={"VacanciesList"}>
      <h1>Список вакансий</h1>
      <div className={"RecruitersBlock"}>
        {recruiters.map(recruiter =>
          <button
            className={
              selectedRecruitersId.includes(recruiter.id)
                ? "RecruiterItem"
                : ["RecruiterItem", "NotChosenRecruiterItem"].join(' ')
            }
            key={recruiter.id}
            onClick={() => onRecruiterClick(recruiter.id)}
          >
            {recruiter.name}
          </button>
        )}
      </div>

      <div className={"VacanciesBlock"}>
        <div className={"VacancyAdd"}>
          <Link className={"VacancyAddButton"} to={"create/"}>Добавить вакансию</Link>
        </div>
        {filteredVacancies.length
          ? filteredVacancies.map(vacancy =>
            <div key={vacancy.id} className={"VacancyItem"}>
              <h2><Link className={"VacancyTitle"} to={vacancy.id + "/"}>{vacancy.title}</Link></h2>
            </div>
          ) : (
            <div className={"NoVacancies"}>
              <h2>Нет вакансий</h2>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default VacanciesList;