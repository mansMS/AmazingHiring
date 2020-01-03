import React, { useState } from 'react';
import classes from '../createVacancy/CreateVacancy.module.scss';

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
    <div className={classes.EditVacancy}>
      <div className={classes.HeaderBlock}>
        <h1>Редактирование вакансии</h1>
        {fieldFillingError && <h2>Нужно заполнить все поля!!!</h2>}
      </div>
      <div className={classes.RecruitersBlock}>
        <div className={classes.RecruiterList}>
          <div>
            {selectedRecruiters.map(recruiter =>
              <button
                className={classes.RecruiterItem}
                key={recruiter.id}
                onClick={() => removeRecruiter(recruiter.id)}
              >
                {recruiter.name}
              </button>
            )}
          </div>
        </div>
        <div className={classes.RecruiterSelect}>
          <select onChange={adRecruiter}>
            <option value="973956174" selected>Выберите рекрутера</option>
            {notSelectedRecruiters.map(recruiter =>
              <option key={recruiter.id} value={recruiter.id}>{recruiter.name}</option>)}
          </select>
        </div>
      </div>

      <div className={classes.TitlesBlock}>
        <h2 className={classes.TitlesLabel}>Название</h2>
        <input
          className={classes.TitlesInput}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
        />
      </div>

      <div className={classes.TextBlock}>
        <h2 className={classes.TitlesLabel}>Текст</h2>
        <textarea
          rows="17"
          className={classes.TextInput}
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>

      <div className={classes.ButtonsBlock}>
        <button className={classes.SubmitButton} type="submit" onClick={e => submitForm(e)}>Создать</button>
        <button className={classes.CancelButton} onClick={history.goBack}>Отменить</button>
      </div>
    </div>
  )
}

export default EditVacancy;