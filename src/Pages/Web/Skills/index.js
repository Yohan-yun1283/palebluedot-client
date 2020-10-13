import React from 'react';
import styled from 'styled-components';
import BackGround from '../../../Component/BackGround';
import Navigation from '../../../Component/Navigation/Bar';

const StyledComponent = styled.div``;

class Skills extends React.Component {

  render () {
    return (
      <StyledComponent>
        <BackGround>
          <Navigation />
          <div>Skills Page</div>
        </BackGround>
      </StyledComponent>
    );
  }

}

export default Skills;
