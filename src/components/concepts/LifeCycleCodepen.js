import React, { Component } from 'react';
import styled from 'styled-components';

const codeDiv = styled.div `

`

class LifeCycleDiagram extends Component {
  render () {

    return (
      <div className='main'>
        <div className='mainDiv'>
          <h1>Life Cycle Codepen</h1>
          <iframe className='col-md-12' title="Codepen Project" height="350vh" width="100%" src="https://codepen.io/ccharris/pen/wxdKYa">
          </iframe>
        </div>
      </div>
    );
  }
}
export default LifeCycleDiagram;