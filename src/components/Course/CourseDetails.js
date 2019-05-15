import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {
    GET_COURSE,
    COURSE_RECEIVED,
    COURSE_PAGE_UNLOADED,
    COURSE_NAV_TOGGLED,
    GET_COURSE_UNITS

} from '../../constants/actionTypes';
import Loading from '../Commons/Loading';
import CourseLevelWiseUnits from './CourseLevelWiseUnits';

const mapStateToProps = state => ({
    courseDetails: state.courseDetails
});

const mapDispatchToProps = dispatch => ({
    getCourse: payload =>
        dispatch({ type: GET_COURSE, payload }),
    onUnload: () => 
        dispatch({ type: COURSE_PAGE_UNLOADED}),
    courseNavToggled: payload =>
        dispatch({ type: COURSE_NAV_TOGGLED, payload }),
    getCourseUnitsByLevel: payload =>
        dispatch({ type: GET_COURSE_UNITS, payload })
    
});

class CourseDetails extends Component {
    constructor(props) {
        super(props);
        

    }
    componentDidMount() {
        this.props.getCourse();
        this.props.getCourseUnitsByLevel();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }
    showUnits(level) {
        this.props.getCourseUnitsByLevel(level);
    }
    render() {
        
        if(!this.props.courseDetails.course.courses || this.props.courseDetails.loading) {
            return (
                <Loading loading={this.props.courseDetails.loading} />
            )
        }
        const selectedCourse = this.props.courseDetails.course.courses.filter(course => course.id === this.props.selectedCourseId)[0];
         
        
        const isCourseNavExpanded = this.props.courseDetails.isCourseNavExpanded;

        let selectedLevel = '';

        const levels = selectedCourse.levels.map((level) => {
            return (
                <NavItem key={level.id} eventKey={level.levelCode}>
                    <NavIcon>
                        <button type="button" className={`btn btn-default btn-circle ${this.props.courseDetails.selectedLevel.levelCode == level.levelCode ? 'active' : ''}`} onClick={this.showUnits.bind(this, level)}>{level.levelCode}</button>
                    </NavIcon>
                    <NavText>
                        {level.name}
                    </NavText>
                </NavItem>
            )
        });
        
        return (

            <React.Fragment>
                <SideNav
                    onSelect={(selected) => {
                        console.log('Selected here '+selected);
                        
                    }}
                    onToggle={(isToggled) => {
                        this.props.courseNavToggled(isToggled);
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav >
                        {levels}
                    </SideNav.Nav>
                </SideNav>

                <div className={`course-content ${isCourseNavExpanded ? 'expanded' : ''}`}>
                    <div className="course-content-header">
                        <div className="course-img">
                            <img src={require('../../assets/img/'+selectedCourse.img)} alt="" title="" />
                        </div>
                        <div className="course-title">
                            <p>{selectedCourse.title}</p>
                            <p>{selectedCourse.highlights.levels} Levels, {selectedCourse.highlights.units} Units and {selectedCourse.highlights.excercises} Excercises</p>
                        </div>
                        <div className="flex-grow"></div>
                        <div className="course-actions">
                            <span className="btn btn-default btn-circle"><i className="fa fa-question" aria-hidden="true"></i></span>
                            <span className="btn btn-default btn-circle"><i className="fa fa-cog" aria-hidden="true"></i></span>
                            <span onClick={this.props.onCloseModal}><i className="fa fa-times" aria-hidden="true"></i></span>
                        </div>
                    </div>
                    <p><b>{this.props.courseDetails.selectedLevel?this.props.courseDetails.selectedLevel.name:''}</b></p>
                    <div className="course-units">
                        {
                            this.props.courseDetails.units.length <= 0 || this.props.courseDetails.loading ?   
                                
                                    <Loading loading={this.props.courseDetails.loading} /> : <CourseLevelWiseUnits units={this.props.courseDetails.units} />
                        }
                    
                   </div>
                    
                </div>
            </React.Fragment>

        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CourseDetails);
