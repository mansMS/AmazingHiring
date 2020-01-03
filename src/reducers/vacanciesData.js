import { getVacanciesData } from '../services/vacancyService';
import { vacanciesRequested, vacanciesLoaded, vacanciesError, newVacancy, editVacancy } from '../actions';

const initialState = {
  recruiters: [],
  vacancies: [],
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VACANCIES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      }
    case 'FETCH_VACANCIES_SUCCESS':
      return {
        ...state,
        recruiters: action.payload.recruiters,
        vacancies: action.payload.vacancies,
        loading: false,
        error: null
      }
    case 'FETCH_VACANCIES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case 'ADD_NEW_VACANCY':
      return {
        ...state,
        vacancies: [...state.vacancies, action.payload]
      }
    case 'EDIT_VACANCY':
      return {
        ...state,
        vacancies: [
          ...state.vacancies.slice(0, action.payload.index),
          action.payload.item,
          ...state.vacancies.slice(action.payload.index + 1)]
      }
    default:
      return state;
  }
}

export const setVacanciesData = () => dispatch => {
  dispatch(vacanciesRequested());
  getVacanciesData()
    .then(response => dispatch(vacanciesLoaded(response)))
    .catch(error => dispatch(vacanciesError(error.message)))
}

export const addNewVacancy = newVacancyObject => dispatch => {
  dispatch(newVacancy(newVacancyObject))
}

export const vacancyChange = (vacancyObject, editableObjectIndex) => dispatch => {
  dispatch(editVacancy({ item: vacancyObject, index: editableObjectIndex }))
}