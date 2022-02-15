import styled from "styled-components";

const MainWrapper = styled.div`
  z-index: -1;
  .bac {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    .img-1 {
      object-fit: cover;
      width: 100%;
      min-height: 40vh;
      z-index: -999;
      img {
        width: 100%;
        height: 35vh;
        object-fit: cover;
        z-index: -999;
      }
    }
    .img-2 {
      background-color: white;
      width: 100%;
      flex: 1;
    }
  }
`;

export default MainWrapper;
