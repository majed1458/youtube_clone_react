import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  // const videosItems = () => { ) }
  return (
    <Grid container spacing={1} >
     { videos.map((video, id) =>( <VideoItem key={id} video={video} onVideoSelect={onVideoSelect} />))
     }
    </Grid>
  );
}
export default VideoList;
