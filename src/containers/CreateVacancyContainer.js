import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateVacancy from '../components/createVacancy';
import { addNewVacancy } from '../reducers/vacanciesData';
import fixURLArray from '../helpers/fixURLArray';

const CreateVacancyContainer = ({ recruiters, vacancies, addNewVacancy, history, location }) => {
  let recruitersFromURL = [];

  if (!location.pathname.endsWith('/')) {
    history.replace(`${location.pathname}/${location.search}`)
  }

  if (/^\?assignee=\d+(?:,\d+)*$/.test(location.search)) {
    if (recruiters.length) {
      recruitersFromURL = fixURLArray(location.search, recruiters);
      if (recruitersFromURL.toString() !== location.search.slice(10)) {
        history.replace(`?assignee=${recruitersFromURL}`)
      }
    }
  } else {
    location.search.length && history.replace('')
  }

  const createNewVacancy = newVacancyObject => {
    addNewVacancy(newVacancyObject)
  }

  return (
    < CreateVacancy
      recruiters={recruiters}
      newId={vacancies.length ? vacancies[vacancies.length - 1].id + 1 : 1}
      recruitersFromURL={recruitersFromURL}
      createNewVacancy={createNewVacancy}
      history={history}
    />
  )
}

const mapStateToProps = ({ vacanciesData: { recruiters, vacancies } }) => {
  return { recruiters, vacancies }
}

const mapDispatchToProps = { addNewVacancy }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateVacancyContainer));