import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
    return (
    <Grid xs={12}>
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',width:'90%',marginBottom:"1rem" }} onClick={()=> onVideoSelect(video)}>
            <img style={{ marginRight: '20px', width:"50%" }} src={video.snippet.thumbnails.medium.url} alt='thumbnail' />
            <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
        </Paper>

     
    </Grid>)
};

export default VideoItem;