import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Loading from './components/Commons/Loading';
import CourseList from './components/Course/CourseList';
import Learning from './components/Learning/Learning';
import Contactus from './components/Contactus/Contactus';


function App() {
  return (
    <React.Fragment>
      <Header />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={CourseList} />
            <Route path="/learning" component={Learning} />
            <Route path="/contact-us" component={Contactus} />
          </Switch>
        </Suspense>
      
      
      <Footer />
    </React.Fragment>

  );
}

export default App;
