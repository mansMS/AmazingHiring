import React, { useState } from 'react';
import './CreateVacancy.scss';

const CreateVacancy = ({ recruiters, newId, recruitersFromURL, createNewVacancy, history }) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fieldFillingError, setFieldFillingError] = useState(false);

  let selectedRecruiters = [];
  let notSelectedRecruiters = recruiters;

  if (recruitersFromURL.length) {
    selectedRecruiters = recruiters.filter(recruiter => recruitersFromURL.includes(recruiter.id));
    notSelectedRecruiters = notSelectedRecruiters.filter(recruiter => !selectedRecruiters.includes(recruiter));
  }

  const adRecruiter = recruiter => {
    history.replace(`?assignee=${[...recruitersFromURL, recruiter.currentTarget.value]}`)
  }

  const removeRecruiter = id => {
    const newSearch =
      [...recruitersFromURL.slice(0, recruitersFromURL.indexOf(id)),
      ...recruitersFromURL.slice(recruitersFromURL.indexOf(id) + 1)];
    if (newSearch.length) {
      history.replace(`?assignee=${newSearch}`)
    } else {
      history.replace()
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    if (title.trim() && recruitersFromURL.length && description.trim()) {
      const newVacancyObject = {
        id: newId,
        title: title,
        assignees: recruitersFromURL,
        description: description
      }
      createNewVacancy(newVacancyObject)
      history.push('/')
    } else {
      setFieldFillingError(true);
    }
  }

  return (
    <div className={"CreateVacancy"}>
      <div className={"HeaderBlock"}>
        <h1>Создание вакансии</h1>
        {fieldFillingError && <h2>Заполните все поля!!!</h2>}
      </div>
      <div className={"RecruitersBlock"}>
        <div className={"RecruiterList"}>
          {selectedRecruiters.map(recruiter =>
            <button
              className={"RecruiterItem"}
              key={recruiter.id}
              onClick={() => removeRecruiter(recruiter.id)}
            >
              {recruiter.name}
            </button>
          )}
        </div>
        <div className={"RecruiterSelect"}>
          <select onChange={adRecruiter}>
            <option value={"Выберите рекрутера"}>Выберите рекрутера</option>
            {notSelectedRecruiters.map(recruiter =>
              <option key={recruiter.id} value={recruiter.id}>{recruiter.name}</option>)}
          </select>
        </div>
      </div>

      <div className={"TitlesBlock"}>
        <h2 className={"TitlesLabel"}>Название</h2>
        <input
          className={"TitlesInput"}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      <div className={"TextBlock"}>
        <h2 className={"TitlesLabel"}>Текст</h2>
        <textarea
          rows="17"
          className={"TextInput"}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className={"ButtonsBlock"}>
        <button className={"SubmitButton"} type="submit" onClick={e => submitForm(e)}>Создать</button>
        <button className={"CancelButton"} onClick={history.goBack}>Отменить</button>
      </div>

    </div>
  );
}

export default CreateVacancy;