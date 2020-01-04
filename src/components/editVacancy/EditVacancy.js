import React, { useState } from 'react';
import '../createVacancy/CreateVacancy.scss';

const EditVacancy = ({ recruiters, vacancy, vacancyItemChange, history }) => {

  const [title, setTitle] = useState(vacancy.title);
  const [assignees, setAssignees] = useState(vacancy.assignees);
  const [description, setDescription] = useState(vacancy.description);
  const [fieldFillingError, setFieldFillingError] = useState(false);

  const selectedRecruiters = recruiters.filter(recruiter => assignees.includes(recruiter.id));
  const notSelectedRecruiters = recruiters.filter(recruiter => !assignees.includes(recruiter.id));

  const adRecruiter = recruiter => {
    setAssignees([...assignees, +recruiter.currentTarget.value])
  }

  const removeRecruiter = id => {
    setAssignees(
      [...assignees.slice(0, assignees.indexOf(id)),
      ...assignees.slice(assignees.indexOf(id) + 1)])
  }

  const submitForm = e => {
    e.preventDefault();
    if (title.trim() && assignees.length && description.trim()) {
      const modifiedObject = {
        id: vacancy.id,
        title: title,
        assignees: assignees,
        description: description
      }
      vacancyItemChange(modifiedObject);
      history.push('/');
    } else {
      setFieldFillingError(true);
    }
  }

  return (
    <div className={"EditVacancy"}>
      <div className={"HeaderBlock"}>
        <h1>Редактирование вакансии</h1>
        {fieldFillingError && <h2>Нужно заполнить все поля!!!</h2>}
      </div>
      <div className={"RecruitersBlock"}>
        <div className={"RecruiterList"}>
          <div>
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
        <button className={"SubmitButton"} type="submit" onClick={e => submitForm(e)}>Сохранить</button>
        <button className={"CancelButton"} onClick={history.goBack}>Отменитьььь</button>
      </div>
    </div>
  )
}

export default EditVacancy;