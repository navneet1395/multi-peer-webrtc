import { createContext, useState } from 'react';

import Room from '@app/index';

import { Lobby } from '@components/index';
import { useMediaStream } from '@hooks/index';
import { NextPage, GetServerSidePropsContext, PreviewData } from 'next';

import { LoaderError } from '@common/components';
import { FAILURE_MSG, LOADER_STREAM_MSG } from '@common/constants';

export const QoraContext = createContext<any>({});

const Qora: NextPage = () => {
  const [isLobby, setIsLobby] = useState(true);
  const { stream, isLoading } = useMediaStream();

  if (isLoading) return <LoaderError msg={LOADER_STREAM_MSG} />;
  if (!stream) return <LoaderError msg={FAILURE_MSG} />;

  if (isLobby)
    return <Lobby stream={stream} onJoinRoom={() => setIsLobby(false)} />;

  return <Room stream={stream} />;
};

export default Qora;


