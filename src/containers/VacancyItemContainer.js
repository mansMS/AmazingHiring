import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VacancyItem from '../components/vacancyItem';

const VacancyItemContainer = ({ recruiters, vacancies, history, location, match }) => {

  if (!location.pathname.endsWith('/')) {
    history.replace(`${location.pathname}/${location.search}`)
  }

  const vacancy = vacancies.filter(vacancy => vacancy.id === +match.params.id)[0];
  if (!vacancy) return <p>Такой ваканси нет</p>

  const recruitersNamesForVacancy =
    recruiters.filter(recruiter => vacancy.assignees.includes(recruiter.id)).map(recruiter => recruiter.name);

  return <VacancyItem recruitersNames={recruitersNamesForVacancy} vacancy={vacancy} history={history} />
}

const mapStateToProps = ({ vacanciesData: { recruiters, vacancies } }) => {
  return { recruiters, vacancies }
}

export default connect(mapStateToProps)(withRouter(VacancyItemContainer));