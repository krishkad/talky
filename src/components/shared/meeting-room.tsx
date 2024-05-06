import React, { useState } from 'react';
import { CallControls, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';


const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />

      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition={"left"} />

      default:
        return <SpeakerLayout participantsBarPosition={'right'} />

    }
  }

  return (
    <div className='w-full overflow-hidden'>
      <div className="max-w-wrapper h-svh">
        <div className="relative size-full">
          <div className="size-full h-[calc(100%-64px)] flex flex-col items-center justify-center">
            <div className="flex size-full max-w-[1000px] items-center">
              <CallLayout />
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-max flex justify-center justify-self-stretch">
            <CallControls />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingRoom