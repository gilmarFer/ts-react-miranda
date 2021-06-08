import React from 'react';
import spinner from '../../img/spinner.gif';
import { SpinnerContainer } from './style';

type LoadSpinnerProps = {
  isLoad: boolean;
};

export default function LoadSpinner({ isLoad }: LoadSpinnerProps): JSX.Element {
  // const [isLoad, setIsLoad] = useState(false);
  return (
    <>
      {isLoad ? (
        <SpinnerContainer>
          <img src={spinner} alt="spinner" />
        </SpinnerContainer>
      ) : (
        <div />
      )}
    </>
  );
}
