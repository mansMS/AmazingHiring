// const onRecruiterClick = id => {
//   const newSelectedRecruiters = selectedRecruiters;
//   if (newSelectedRecruiters.includes(id)) {
//     newSelectedRecruiters.splice(newSelectedRecruiters.indexOf(id), 1);
//   } else {
//     newSelectedRecruiters.push(id)
//   }
//   setSelectedRecruiters(newSelectedRecruiters);
//   console.log(selectedRecruiters)
//   if (!newSelectedRecruiters.length) {
//     history.push('')
//   } else {
//     history.push(`?assignee=${newSelectedRecruiters}`)
//   }
// }

// const changeState = id => {
//   if (selectedRecruiters.includes(id)) {
//     setSelectedRecruiters(
//       [
//         ...selectedRecruiters.slice(0, selectedRecruiters.indexOf(id)),
//         ...selectedRecruiters.slice(selectedRecruiters.indexOf(id) + 1)
//       ])
//   } else {
//     setSelectedRecruiters([...selectedRecruiters, id])
//   }
  // const newSelectedRecruiters = this.state.selectedRecruiters;
  //   if (newSelectedRecruiters.includes(id)) {
  //     newSelectedRecruiters.splice(newSelectedRecruiters.indexOf(id), 1);
  //   } else {
  //     newSelectedRecruiters.push(id)
  //   }
  //   this.setState({ selectedRecruiters: newSelectedRecruiters });


  // if (this.state.selectedRecruiters.includes(id)) {
  //   this.setState({
  //     selectedRecruiters: [
  //       ...this.state.selectedRecruiters.slice(0, this.state.selectedRecruiters.indexOf(id)),
  //       ...this.state.selectedRecruiters.slice(this.state.selectedRecruiters.indexOf(id) + 1)
  //     ]
  //   })
  // } else {
  //   this.setState({ selectedRecruiters: [...this.state.selectedRecruiters, id] })
  // }
}

// const recruiters = [
//   {
//     "id": 1,
//     "name": "John Doe"
//   },
//   {
//     "id": 2,
//     "name": "Min Nguen"
//   },
//   {
//     "id": 3,
//     "name": "Liza Black"
//   },
//   {
//     "id": 4,
//     "name": "Emily Cooper"
//   },
//   {
//     "id": 5,
//     "name": "Kim Li"
//   }
// ];
// const vacancies = [
//   {
//     "id": 1,
//     "title": "Java Developer @ Robot Studio",
//     "assignees": [
//       1,
//       2
//     ],
//     "description": "5+ expirience"
//   },
//   {
//     "id": 2,
//     "title": "JavaScript Developer @ Acme",
//     "assignees": [
//       2,
//       4
//     ],
//     "description": "Knows everything, but does not remember"
//   },
//   {
//     "id": 3,
//     "title": "Scala Developer @ Acme",
//     "assignees": [
//       2,
//       5
//     ],
//     "description": "Knows everything"
//   },
//   {
//     "id": 4,
//     "title": "Android Developer @ Green",
//     "assignees": [
//       1,
//       2,
//       5
//     ],
//     "description": "Sometimes knows something"
//   },
//   {
//     "id": 5,
//     "title": "Phyton Developer @ Acme",
//     "assignees": [
//       5
//     ],
//     "description": "Knows half of everything"
//   },
//   {
//     "id": 6,
//     "title": "Android Developer @ Green Robot Studio",
//     "assignees": [
//       1,
//       2,
//       4
//     ],
//     "description": "Knows how to code on Java"
//   }
// ];











// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import Vacancies from '../components/vacancies';
// import { setVacancies } from '../reducers/vacancies';
// import { getVacanciesDataURL } from '../services/sourceURLs';
// // import getEngagedRecruiters from '../helpers/getEngagedRecruiters';

// const VacanciesContainer = ({ location, history, setVacancies, recruiters, vacancies, loading, error }) => {

//   const [selectedRecruiters, setSelectedRecruiters] = useState([]);


//   setVacancies(getVacanciesDataURL);



//   // const engagedRecruiters = getEngagedRecruiters(recruiters, vacancies);
//   const engagedRecruiters = recruiters;

//   const allRecruitersId = engagedRecruiters.map(i => i.id);

//   const onRecruiterClick = id => {
//     const newSelectedRecruiters = selectedRecruiters;
//     if (newSelectedRecruiters.includes(id)) {
//       newSelectedRecruiters.splice(newSelectedRecruiters.indexOf(id), 1);
//     } else {
//       newSelectedRecruiters.push(id)
//     }
//     setSelectedRecruiters(newSelectedRecruiters);
//     if (!newSelectedRecruiters.length) {
//       history.push('')
//     } else {
//       history.push(`?assignee=${newSelectedRecruiters}`)
//     }
//   }

//   const isNymber = n => !isNaN(parseFloat(+n)) && isFinite(+n);

//   if (!selectedRecruiters.length && location.search.startsWith("?assignee=") && location.search.slice(10).length) {
//     const paramsFromURL = location.search.slice(10);
//     let identifiedNumbers;
//     if (isNymber(paramsFromURL)) {
//       identifiedNumbers = [+paramsFromURL];
//     } else {
//       const arrayFromURL = paramsFromURL.split(',').map(n => +n);
//       if (Array.isArray(arrayFromURL) &&
//         arrayFromURL.filter(n => isNymber(n) & allRecruitersId.includes(n)).length) {
//         identifiedNumbers = arrayFromURL.filter(n => isNymber(n) & allRecruitersId.includes(n));
//       }
//     }
//     if (identifiedNumbers) {
//       setSelectedRecruiters(identifiedNumbers)
//       history.push(`?assignee=${identifiedNumbers}`)
//     } else {
//       history.push('')
//     }
//   }

//   return (
//     <Vacancies
//       recruiters={engagedRecruiters}
//       vacancies={vacancies}
//       selectedRecruiters={selectedRecruiters.length ? selectedRecruiters : allRecruitersId}
//       onRecruiterClick={onRecruiterClick}
//     />
//   )
// }

// const mapStateToProps = ({ recruiters, vacancies, loading, error }) => {
//   return { recruiters, vacancies, loading, error }
// }

// const mapDispatchToProps = { setVacancies }


// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(VacanciesContainer));









// const newSelectedRecruiters = this.state.selectedRecruiters;
// if (newSelectedRecruiters.includes(id)) {
//   newSelectedRecruiters.splice(newSelectedRecruiters.indexOf(id), 1);
// } else {
//   newSelectedRecruiters.push(id)
// }
// this.setState({ selectedRecruiters: newSelectedRecruiters });
// if (!newSelectedRecruiters.length) {
//   this.props.history.push('')
// } else {
//   this.props.history.push(`?assignee=${newSelectedRecruiters}`)
// }







//CreateVacancyContainer

// const CreateVacancyContainer = ({ recruiters, createNewVacancy, history, location }) => {
//   let recruitersFromURL;

//   if (!location.pathname.endsWith('/')) {
//     history.push(`${location.pathname}/${location.search}`)
//   }

//   if (/^\?assignee=\d+(?:,\d+)*$/.test(location.search)) {
//     const arrayFromURL = location.search.slice(10).split(',').map(n => +n);
//     if (recruiters.length) {
//       const recruitersId = recruiters.map(recruiter => recruiter.id);
//       recruitersFromURL = arrayFromURL.filter(item => recruitersId.includes(item));
//       if (recruitersFromURL.toString() !== arrayFromURL.toString()) {
//         console.log(recruitersFromURL.toString(), arrayFromURL.toString())
//         history.push(`?assignee=${recruitersFromURL}`)
//       }
//     }
//   } else {
//     if (location.search.length) {
//       history.push('')
//     }
//   }

//   return (
//     < CreateVacancy recruiters={recruiters} recruitersFromURL={recruitersFromURL} addNewVacancy={addNewVacancy} />
//   )
// }


















//CreateVacancyContainer
// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import CreateVacancy from '../components/createVacancy';
// import { addNewVacancy } from '../reducers/vacanciesData';
// import fixURLArray from '../helpers/fixURLArray';

// const CreateVacancyContainer = ({ recruiters, vacancies, addNewVacancy, history, location }) => {
//   let recruitersFromURL = [];

//   if (!location.pathname.endsWith('/')) {
//     history.replace(`${location.pathname}/${location.search}`)
//   }

//   if (/^\?assignee=\d+(?:,\d+)*$/.test(location.search)) {
//     if (recruiters.length) {
//       recruitersFromURL = fixURLArray(location.search, recruiters);
//       if (recruitersFromURL.toString() !== location.search.slice(10)) {
//         history.replace(`?assignee=${recruitersFromURL}`)
//       }
//     }
//   } else {
//     if (location.search.length) {
//       history.replace('')
//     }
//   }

//   const createNewVacancy = newVacancyObject => {
//     addNewVacancy(newVacancyObject)
//   }

//   return (
//     < CreateVacancy
//       recruiters={recruiters}
//       newId={vacancies.length ? vacancies[vacancies.length - 1].id + 1 : 1}
//       recruitersFromURL={recruitersFromURL}
//       createNewVacancy={createNewVacancy}
//       history={history}
//     />
//   )
// }

// const mapStateToProps = ({ vacanciesData: { recruiters, vacancies } }) => {
//   return { recruiters, vacancies }
// }

// const mapDispatchToProps = { addNewVacancy }

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreateVacancyContainer));












//VacanciesListContainer
// import React from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import VacanciesList from '../components/vacanciesList';
// import fixURLArray from '../helpers/fixURLArray';
// // import getengagedRecruiters from '../helpers/getEngagedRecruiters';

// const VacanciesListContainer = ({ recruiters, vacancies, history, location }) => {

//   let recruitersFromURL = [];

//   if (!location.pathname.endsWith('/')) {
//     history.replace(`${location.pathname}/${location.search}`)
//   }

//   if (/^\?assignee=\d+(?:,\d+)*$/.test(location.search)) {
//     if (recruiters.length) {
//       recruitersFromURL = fixURLArray(location.search, recruiters);
//       if (recruitersFromURL.toString() !== location.search.slice(10)) {
//         console.log('qwe')
//         history.replace(`?assignee=${recruitersFromURL}`)
//       }
//     }
//   } else {
//     location.search.length && history.replace()
//   }

//   return (
//     <VacanciesList
//       recruiters={recruiters}
//       vacancies={vacancies}
//       recruitersFromURL={recruitersFromURL}
//       history={history}
//     />
//   )
// }


// const mapStateToProps = ({ vacanciesData: { recruiters, vacancies } }) => {
//   return { recruiters, vacancies }
// }

// export default connect(mapStateToProps)(withRouter(VacanciesListContainer));













// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 150" x="0px" y="0px">
//   <polygon points="200,70    59.14,70    104.14,25    90,25    40,75    90,125    104.14,125    59.14,80    200,80 "/>
// </svg>















// {this.props.location.pathname !== '/vacancies/'
//           && <button className={classes.BackButton} onClick={this.props.history.goBack}>
//             <i className={classes.arrow}></i>
//             <i className={classes.line}></i>
//           </button>
//         }