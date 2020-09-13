import React from 'react';

import styled from 'styled-components';

const BurgerWarpper = styled.div`
  background: linear-gradient(to bottom, #3a7bd5, #3a6073);
  position: fixed;
  width: 399px;
  height: 790px;
  // transform: translate3d(-100vw, 0, 0);
  transition: left 0.3s ease-in-out;
  margin-left: -399px;
  box-sizing: border-box;

  .flyoutMenu.hide {
    transform: translate3d(-100vw, 0, 0);
  }
   
  .flyoutMenu.show {
    transform: translate3d(0vw, 0, 0);
    overflow: hidden;
  }
`

class BurgerNavigation extends React.Component {
  
  render () {
    return (<>
      <BurgerWarpper>

      </BurgerWarpper>
    </>);
  }
}
export default BurgerNavigation;