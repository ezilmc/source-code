import React, { Component } from 'react';
import './Course.scss';
import { connect } from 'react-redux';
import {
    GET_COURSES,
    COURSES_RECEIVED,
    COURSES_PAGE_UNLOADED
    
} from '../../constants/actionTypes';
import Loading from '../Commons/Loading';
import CourseItem from './CourseItem';

const mapStateToProps = state => ({
    courses: state.courses
});

const mapDispatchToProps = dispatch => ({
    getCourses: payload =>
        dispatch({ type: GET_COURSES, payload }),
    onUnload: () => 
        dispatch({ type: COURSES_PAGE_UNLOADED})
});

class CourseList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCourses();
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        if(!this.props.courses.courses.courses || this.props.courses.loading) {
            return (
                <Loading loading={this.props.courses.loading} />
            )
        }
        
        const coursesObj = this.props.courses.courses;
        const totalCourses = coursesObj.totalCourses;
        const courses =this.props.courses.courses.courses;
        let rows = [];
        const columns = courses.map((course) => {
            return (
                <div className="col-md-4 wow fadeInUp" key={course.id}>
                    <CourseItem course={course} />
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
            </section>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);