import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoPlay = ({ video }) => {
    if(!video){
        return <div>loading ...</div>
    }
    const url=`https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={3} style={{ height: '20%' }}>
                <iframe frameBorder={0} width='100%' height='100%' title='video player' src={url} />
            </Paper>
            <Paper elevation={3}>
            <Typography variant='h3'>{video.snippet.title}</Typography>

            <Typography variant='subtitle1'>{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
};

export default VideoPlay;