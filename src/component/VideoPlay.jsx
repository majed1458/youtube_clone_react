import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoPlay = ({ video }) => {
    if(!video){
        return <div>loading ...</div>
    }
    const url=`https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <React.Fragment>
            <Paper elevation={3} style={{ height: '70%' }}>
                <iframe frameBorder={0} width='100%' height='100%' title='video player' src={url} />
            </Paper>
            <Paper elevation={3}>
            </Paper>
        </React.Fragment>
    )
};

export default VideoPlay;