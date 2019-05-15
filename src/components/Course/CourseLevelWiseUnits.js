import React, { Component } from 'react';

class CourseLevelWiseUnits extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
       // this.props.getCourse();
    }

    componentWillUnmount() {
        //this.props.onUnload();
    }
    render() {
        let units = this.props.units;
        const totalUnits = units.length;
        let rows = [];
        let subUinitsEl = []
        const getSubUnits = function(subUnits) {
            
            
        };
        const columns = units.map((unit) => {
            return (
                <div className="col-md-6 unit"  key={unit.id}>
                    <p><span className="unitCode">{unit.unitCode}</span> - <span className="unitLevel">{unit.level}</span> - <span className="unitName">{unit.name}</span></p>
                    {
                        unit.subUnits.map((subUnit) => {
                            return <p key={subUnit.id} className="sub-unit"><span className="unitCode">{subUnit.subUnitCode}</span> <span className="unitName">{subUnit.name}</span></p>;
                        })
                        
                    }
                    
                </div>
            )
        });
        
        for(let row = 0; row < Math.ceil(totalUnits / 2); row++){
            
            rows.push(<div key={ `row-${row}` } className="row">
                {columns.slice(row * 2, (row * 2)+2)}
            </div>); 

    };
        return (
            <React.Fragment>
                {rows}
            </React.Fragment>
        );
    }
}

export default CourseLevelWiseUnits;