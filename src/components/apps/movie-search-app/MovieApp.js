import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from "./Form";

const MovieWrapper = styled.div`
list-style-type: none;
`
export default class MovieApp extends Component {
    render() {
        return (
                <div classNAme="mainDiv">
            <MovieWrapper className="main">
                <Form />
            </MovieWrapper>
                </div>
        );
    }
}