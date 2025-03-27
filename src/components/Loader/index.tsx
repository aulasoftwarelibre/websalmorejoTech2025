import styled from 'styled-components';
import 'animate.css';

const Loader1 = () => {
  return (
    <StyledWrapper>
      <div className="tomato-loader">
        <div className="tomato"></div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .tomato-loader {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .tomato {
    width: 100px;
    height: 100px;
    background-image: url('loader.png');
    background-size: cover; /* Ensure the image covers the entire area */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevent repeating the image */
    animation: spin 2s linear infinite; /* Spinning animation */
    display: block; /* Ensures it's displayed as a block element */
  }
`;

export default function Loader() {
  return (
    <div className='appContainer'>
    <div className="loader">
      <Loader1 />
    </div>
    </div>
  );
}
