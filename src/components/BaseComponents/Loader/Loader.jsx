import { ThreeDots } from 'react-loader-spinner';
import { LoaderBackdrop, LoaderText } from './Loader.styled';
import { useNfts } from '../../../hooks';
import { useUsers } from '../../../hooks';
import { useState, useEffect } from 'react';

export const Loader = () => {
  const { nftsLoading } = useNfts();
  const { userLoading } = useUsers();
  const [serverIsWaking, setServerIsWaking] = useState(false);

  const isLoading = nftsLoading || userLoading;

  useEffect(() => {
    let timer;

    if (isLoading) {
      document.body.style.overflow = 'hidden';
      timer = setTimeout(() => {
        setServerIsWaking(true);
      }, 3000);
    } else {
      document.body.style.overflow = '';
      setServerIsWaking(false);
      clearTimeout(timer);
    }

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <LoaderBackdrop>
      {serverIsWaking ? (
        <LoaderText>One minute please, server wakes up..</LoaderText>
      ) : (
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
        />
      )}
    </LoaderBackdrop>
  );
};
