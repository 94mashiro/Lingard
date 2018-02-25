import React from 'react'
import { Switch, Route } from 'react-router-dom'
import TranslatePage from './containers/TranslatePage'
import SettingPage from './containers/SettingPage'
import { TransitionGroup, CSSTransition } from "react-transition-group"

export default () => (
  <Route render={({ location }) => (
    <TransitionGroup component="main" className="route-main">
      <CSSTransition key={location.key} timeout={250} classNames="fade" appear>
        <section className="route-main-inner">
          <Switch key={location.key} location={location}>
            <Route path="/setting" component={SettingPage} />
            <Route path="/" exact component={TranslatePage} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  )} />
)