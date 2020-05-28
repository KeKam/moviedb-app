import styled from 'styled-components';

export const SpinnerStyles = () => {};

SpinnerStyles.Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

SpinnerStyles.Spinner = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 50%;
  border-top-color: rgba(255, 255, 255, 0.6);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 2s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
