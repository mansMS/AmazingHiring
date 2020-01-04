import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { vacancyChange } from '../reducers/vacanciesData';
import EditVacancy from '../components/editVacancy'

const EditVacancyContainer = ({ recruiters, vacancies, vacancyChange, history, match }) => {

  const vacancy = vacancies.filter(vacancy => vacancy.id === +match.params.id)[0];

  if (!vacancy) {
    return <h2 style={{ marginTop: "26px", color: "red", textAlign: "center" }}>Вакансия не найдена</h2>
  }

  const vacancyItemChange = vacancyObject => {
    const editableObjectIndex = vacancy.id - 1;
    vacancyChange(vacancyObject, editableObjectIndex)
  }

  return <EditVacancy recruiters={recruiters} vacancy={vacancy} vacancyItemChange={vacancyItemChange} history={history} />
}

const mapStateToProps = ({ vacanciesData: { recruiters, vacancies } }) => {
  return { recruiters, vacancies }
}

const mapDispatchToProps = { vacancyChange }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditVacancyContainer));