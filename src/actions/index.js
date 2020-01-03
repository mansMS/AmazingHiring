const vacanciesRequested = () => {
  return {
    type: 'FETCH_VACANCIES_REQUEST'
  }
}

const vacanciesLoaded = vacanciesData => {
  return {
    type: 'FETCH_VACANCIES_SUCCESS',
    payload: vacanciesData
  }
}

const vacanciesError = error => {
  return {
    type: 'FETCH_VACANCIES_FAILURE',
    payload: error
  }
}

const newVacancy = newVacancyObject => {
  return {
    type: 'ADD_NEW_VACANCY',
    payload: newVacancyObject
  }
}

const editVacancy = editObject => {
  return {
    type: 'EDIT_VACANCY',
    payload: editObject
  }
}

export { vacanciesRequested, vacanciesLoaded, vacanciesError, newVacancy, editVacancy };