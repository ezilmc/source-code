import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';
import ArabicIcon from '../../assets/img/icon_arabic.png';

function Course({course}) {
    
    return (
        <React.Fragment>

            <Card className="shadow p-3 mb-5 course-item">
                <CardHeader>
                    <img src={require('../../assets/img/'+course.img)} alt="" title="" />
                    <div className="text-xs-right title">{course.title}</div>
                </CardHeader>
                <CardBody>

                    <CardText>
                        <span className="">{course.highlights.levels}</span> Levels
                    </CardText>
                    <CardText><span className="">{course.highlights.units}</span> Units</CardText>
                    <CardText><span className="">{course.highlights.exercises}</span> Excercises</CardText>
                </CardBody>

            </Card>

        </React.Fragment>
    );
}

export default Course;