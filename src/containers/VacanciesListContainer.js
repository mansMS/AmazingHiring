import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import VacanciesList from '../components/vacanciesList';
import fixURLArray from '../helpers/fixURLArray';

const VacanciesListContainer = ({ recruiters, vacancies, loading, error, history, location }) => {

  let recruitersFromURL = [];

  if (!location.pathname.endsWith('/')) {
    history.replace(`${location.pathname}/${location.search}`)
  }

  if (/^\?assignee=\d+(?:,\d+)*$/.test(location.search)) {
    if (recruiters.length) {
      recruitersFromURL = fixURLArray(location.search, recruiters);
      if (recruitersFromURL.toString() !== location.search.slice(10)) {
        console.log('qwe')
        history.replace(`?assignee=${recruitersFromURL}`)
      }
    }
  } else {
    location.search.length && history.replace()
  }

  return (
    <VacanciesList
      recruiters={recruiters}
      vacancies={vacancies}
      loading={loading}
      error={error}
      recruitersFromURL={recruitersFromURL}
      history={history}
    />
  )
}

const mapStateToProps = ({ vacanciesData: { recruiters, vacancies, loading, error } }) => {
  return { recruiters, vacancies, loading, error }
}

export default connect(mapStateToProps)(withRouter(VacanciesListContainer));