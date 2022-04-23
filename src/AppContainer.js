import React from 'react'
import { Switch, withRouter } from 'react-router-dom';
import Login from './components/authentication';
import AddMemberType  from './components/member-types/add-member-type';
import MemberTypes from './components/member-types';
import Home from './components/home/View';
import AddMember from './components/members/add-member';
import EditMember from './components/members/edit-member'
import Members from './components/members/list';
import { NavRoute, RouteWithoutNavbar } from './routes/NavRoute';
import EditMemberType from './components/member-types/edit-member-type';

const AppContainer = ({ location }) => {
  return (
    <Switch location={location}>
        <RouteWithoutNavbar path="/login" exact component={Login} />
        <NavRoute path="/pocetna" exact component={Home} />
        <NavRoute path="/clanovi" exact component={Members} />
        <NavRoute path="/dodaj-clana" exact component={AddMember} />
        <NavRoute path="/kategorije" exact component={MemberTypes} />
        <NavRoute path="/dodaj-kategoriju" exact component={AddMemberType} />
        <NavRoute path="/clanovi/:id" exact component={EditMember} />
        <NavRoute path="/kategorije/:id" exact component={EditMemberType} />
    </Switch>
  )
}

export default AppContainer