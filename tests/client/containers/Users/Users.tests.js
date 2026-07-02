import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { describe, it, before, after, beforeEach, afterEach } from 'mocha';
import { fromJS } from 'immutable';
import { Router, Route, createMemoryHistory } from 'react-router';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'

import fakeStore from '../../../utils/fakeStore';

import UsersContainer from '../../../../client/containers/Users/Users';
import TabsHeader from '../../../../client/components/TabsHeader';
import UserOverview from '../../../../client/components/Users/UserOverview';

const Users = UsersContainer.WrappedComponent;

// import { Pagination, TableTotals } from 'auth0-extension-ui';

const memoryHistory = createMemoryHistory({});
let wrapper = undefined;
const wrapperMount = (...args) => (wrapper = mount(...args));

describe('#Client-Containers-Users-Users', () => {
  let stub;

  before(() => {
    // mock api calls
    stub = new MockAdapter(axios);
    stub.onGet('/api/connections').reply(200, {});
  });

  after(() => {
      stub.restore();
  });


  const renderComponent = (languageDictionary, settings = {}, route = '/') => {
    memoryHistory.push(route);
    const initialState = {
      connections: fromJS({ records: [{name: 'connA'}]}),
      accessLevel: fromJS({ record: { role: 1 } }),
      users: fromJS({
        loading: false,
        error: null,
        total: 1,
        nextPage: 1,
        pages: 3,
        sortProperty: 'name',
        sortOrder: 1,
        records: [{
          identities: [{
            provider: 'auth0',
            connection: 'connA'
          }]
        }]
      }),
      userCreate: fromJS({
        error: null,
        loading: false,
        validationErrors: []
      }),
      languageDictionary: fromJS({
        record: languageDictionary || {}
      }),
      settings: fromJS({ record: { settings: settings || {} } })
    };
    return wrapperMount(
      <Provider store={fakeStore(initialState)}>
        <Router history={memoryHistory}>
          <Route path="/users" component={UsersContainer}/>
        </Router>
      </Provider>
    );
  };

  beforeEach(() => {
    wrapper = undefined;
    document.body.innerHTML = '';
  });

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount();
  });

  const checkForLanguageDictionary = (component, componentType, languageDictionary) => {
    const subComponent = component.find(componentType);
    expect(subComponent.length).to.equal(1);
    expect(subComponent.prop('languageDictionary')).to.deep.equal(languageDictionary);
  };

  const checkAllComponentsForLanguageDictionary = (component, languageDictionary) => {
    checkForLanguageDictionary(component, UserOverview, languageDictionary);
    checkForLanguageDictionary(component, TabsHeader, languageDictionary);
  };

  const checkTitle = (component, title) => {
    const titleObject = component.find('h1');
    expect(titleObject.length).to.equal(1);
    expect(titleObject.text()).to.equal(title);
  };

  const checkCreateButtonText = (component, createButtonText) => {
    const buttonObject = component.find('#create-user-button');
    expect(buttonObject.length).to.equal(1);
    expect(buttonObject.text()).to.equal(createButtonText);
  };

  const checkCreateUserButtonMissing = (component) => {
    const buttonObject = component.find('#create-user-button');
    expect(buttonObject.length).to.equal(0);
  };

  it('should render', () => {
    const component = renderComponent({}, {}, '/users');

    checkAllComponentsForLanguageDictionary(component, {});
    checkCreateButtonText(component, 'Create User');
    checkTitle(component, 'Users');
  });

  it('should render not applicable language dictionary', () => {
    const component = renderComponent({ someKey: 'someValue' }, {}, '/users');

    checkAllComponentsForLanguageDictionary(component, { someKey: 'someValue' });
    checkCreateButtonText(component, 'Create User');
    checkTitle(component, 'Users');
  });

  it('should render applicable language dictionary', () => {
    const languageDictionary = {
      createUserButtonText: 'Create User Text',
      usersTitle: 'Users Title'
    };
    const component = renderComponent(languageDictionary, {}, '/users');

    checkAllComponentsForLanguageDictionary(component, languageDictionary);
    checkCreateButtonText(component, 'Create User Text');
    checkTitle(component, 'Users Title');
  });

  it('should not show "Create User" button', () => {
    const languageDictionary = {
      createUserButtonText: 'Create User Text',
      usersTitle: 'Users Title'
    };
    const component = renderComponent(languageDictionary, {
      canCreateUser: false
    }, '/users');

    checkCreateUserButtonMissing(component);
  });

  it('should read a valid search query from the URL on initial load only', () => {
    const component = renderComponent({}, {}, '/users?search=email%3Ajohn');
    const users = component.find(Users).instance();

    expect(users.initialUrlSearchApplied).to.equal(true);
    users.initialUrlSearchApplied = false;
    expect(users.getInitialSearchQuery()).to.equal('email:john');
    expect(users.getInitialSearchQuery()).to.equal(null);
  });

  it('should ignore an invalid search query from the URL on initial load', () => {
    const replaceCalls = [];
    const component = renderComponent({}, {}, '/users?search=foo)%20OR%20(user_id%3Aevil');
    const users = component.find(Users).instance();

    users.props = {
      ...users.props,
      replace: (location) => replaceCalls.push(location)
    };
    users.initialUrlSearchApplied = false;

    expect(users.getInitialSearchQuery()).to.equal(null);
    expect(replaceCalls[0].query.search).to.equal(undefined);
  });

  it('should update the URL when the search query changes', () => {
    const replaceCalls = [];
    const component = renderComponent({}, {}, '/users');
    const users = component.find(Users).instance();

    users.props = {
      ...users.props,
      location: { pathname: '/users', query: {} },
      replace: (location) => replaceCalls.push(location)
    };

    users.updateSearchInUrl('email:jane');

    expect(replaceCalls.length).to.equal(1);
    expect(replaceCalls[0].pathname).to.equal('/users');
    expect(replaceCalls[0].query.search).to.equal('email:jane');
  });

  it('should remove the search query from the URL when reset', () => {
    const replaceCalls = [];
    const component = renderComponent({}, {}, '/users?search=email%3Ajohn');
    const users = component.find(Users).instance();

    users.props = {
      ...users.props,
      location: { pathname: '/users', query: { search: 'email:john' } },
      replace: (location) => replaceCalls.push(location)
    };

    users.updateSearchInUrl('');

    expect(replaceCalls.length).to.equal(1);
    expect(replaceCalls[0].query.search).to.equal(undefined);
  });
});
