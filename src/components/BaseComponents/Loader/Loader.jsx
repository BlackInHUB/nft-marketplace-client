import { ThreeDots } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loder.styled';

export const Loader = () => {
  return (
    <LoaderBackdrop>
      <ThreeDots
        height="100"
        width="100"
        radius="20"
        color="#A259FF"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        // wrapperClass
      />
    </LoaderBackdrop>
  );
};
