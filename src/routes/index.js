import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Register from '../pages/Register'
import LeadsPanel from '../pages/LeadsPanel'
import CreateLead from '../pages/CreateLead'


function Routes(){
  return (
    <Switch>
      <Route path={"/"} exact component={Register}  />
      <Route path={"/panel"} component={LeadsPanel}  />
      <Route path={"/new"} exact component={CreateLead}  />
    </Switch>
  )
}

export default Routes;