import React from 'react';
import styled from 'styled-components';
import Text from '../Text';
import NewLink from '../NewLink';
import { withRouter } from 'react-router-dom';



const TopWarpper = styled.nav`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  background-color: #EFEFEF;
  border-bottom: 2px solid #f1f1f1;
  
  @media (max-width: 500px;) {
    background-color: lightgreen;
    color: red;
  }
`;
const LogoWarpper = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;

const LogoLeftSection = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
  background-color: #AAAAAA;
`;
const LogoRightSection = styled.div`
  width :50%;
`;
const LinkWarpper = styled.div`
  width :50%;
  justify-content: center;
  display: flex;
`;
const LinkLeftSection = styled.div`
  width :50%;
`;
const LinkRightSection = styled.div`
  width :50%;
  justify-content: space-evenly;
  display: flex;
`;

class Navigaion extends React.Component {

  render () {
    return (<>
      <TopWarpper>
        <LogoWarpper>
          <LogoLeftSection>
            <Text md white>Logo</Text>
          </LogoLeftSection>
          <LogoRightSection/>
        </LogoWarpper>
        <LinkWarpper>
          <LinkLeftSection/>
          <LinkRightSection>  
            <NewLink to="regi"><Text sm>SignOut</Text></NewLink>
            <NewLink to="regi"><Text sm>Register</Text></NewLink>
            <NewLink to="creinvo"><Text sm>Invoice</Text></NewLink>
          </LinkRightSection>
        </LinkWarpper>
      </TopWarpper>
    </>);
  }

}

export default withRouter(Navigaion);
