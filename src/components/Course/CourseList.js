import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import './Course.scss';
import { connect } from 'react-redux';
import {
    GET_COURSES,
    COURSES_RECEIVED,
    COURSES_PAGE_UNLOADED,
    SHOW_COURSE_DETAILS,
    COURSE_NAV_TOGGLED
    
} from '../../constants/actionTypes';
import Loading from '../Commons/Loading';
import CourseItem from './CourseItem';
import CourseDetails from './CourseDetails';

const mapStateToProps = state => ({
    courses: state.courses
});

const mapDispatchToProps = dispatch => ({
    getCourses: payload =>
        dispatch({ type: GET_COURSES, payload }),
    onUnload: () => 
        dispatch({ type: COURSES_PAGE_UNLOADED}),
    showCourse: payload =>
        dispatch({ type: SHOW_COURSE_DETAILS, payload }),
    courseNavToggled: payload =>
        dispatch({ type: COURSE_NAV_TOGGLED, payload })
});

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.showCourse = this.showCourse.bind(this);
    }

    componentDidMount() {
        this.props.getCourses();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }
    showCourse(courseId) {
        
        this.props.showCourse(courseId);
    }
    toggle() {

    }
    render() {
        let isMenuExpanded = false;
        if(!this.props.courses.courses.courses || this.props.courses.loading) {
            return (
                <Loading loading={this.props.courses.loading} />
            )
        }
        
        const coursesObj = this.props.courses.courses;
        const isModalOpen = this.props.courses.isModalOpen;
        const selectedCourseId = this.props.courses.selectedCourseId;
        const isCourseNavExpanded = this.props.courses.isCourseNavExpanded;
        const totalCourses = coursesObj.totalCourses;
        const courses =this.props.courses.courses.courses;
        let rows = [];
        const columns = courses.map((course) => {
            return (
                <div className="col-md-4 wow fadeInUp"  key={course.id} onClick={this.showCourse.bind(this, course.id)} >
                    <CourseItem course={course}  />
                </div>
            )
        });
        
        for(let row = 0; row < Math.ceil(totalCourses / 3); row++){
            
            rows.push(<div key={ `row-${row}` } className="row">
                {columns.slice(row * 3, (row * 3)+3)}
            </div>); 

    };

        
        return (
            <section id="course-list">
                <div className="container">
                    {rows}
                </div>
                
                <Modal isOpen={isModalOpen} className={this.props.className} toggle={this.toggle}>
                
                <ModalBody>
                    
                    <CourseDetails selectedCourseId={selectedCourseId} />
                </ModalBody>
                {/*<ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>*/}
            </Modal>
            </section>
            
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);