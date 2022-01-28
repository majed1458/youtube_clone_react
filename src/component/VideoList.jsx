import React from 'react';
import { Grid } from '@material-ui/core';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  // const videosItems = () => { ) }
  return (
    <Grid container spacing={10}>
     { videos.map((video, id) =>( <VideoItem key={id} video={video} />))
     }
    </Grid>
  );
}
export default VideoList;
