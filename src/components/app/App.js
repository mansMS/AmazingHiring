import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

import { setVacanciesData } from '../../reducers/vacanciesData';

import VacanciesListContainer from '../../containers/VacanciesListContainer';
import CreateVacancyContainer from '../../containers/CreateVacancyContainer';
import VacancyItemContainer from '../../containers/VacancyItemContainer';
import EditVacancyContainer from '../../containers/EditVacancyContainer';
import NotFound from '../notFound';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.setVacanciesData();
  }

  render() {
    return (
      <div className={"App"}>
        <Switch>
          <Redirect exact from="/" to="/vacancies/" />
          <Route exact path="/vacancies/" component={VacanciesListContainer} />
          <Route path="/vacancies/create/" component={CreateVacancyContainer} />
          <Route exact path="/vacancies/:id/" component={VacancyItemContainer} />
          <Route exact path="/vacancies/:id/edit" component={EditVacancyContainer} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = { setVacanciesData }

export default connect(null, mapDispatchToProps)(withRouter(App));