import React from 'react';
import { Spinner } from 'reactstrap';

const Loading = ({loading}) => (
    loading?
        <div style={{ textAlign: 'center' }}>
            <Spinner color="dark" />
            <h1>LOADING</h1>
        </div> : null
);

export default Loading;