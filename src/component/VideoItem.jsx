import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core'

const VideoItem = ({ video }) => {
    return (
    <Grid xs={10}>
        <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer',width:'70%' }}>
            <img style={{ marginRight: '20px' }} src={video.snippet.thumbnails.medium.url} alt='thumbnail' />
            <Typography variant='subtitle1'><b>{video.snippet.title}</b></Typography>
        </Paper>

     
    </Grid>)
};

export default VideoItem;