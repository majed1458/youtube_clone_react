import React from 'react';
import { Paper, Typography } from '@material-ui/core';

const VideoPlay = ({ video }) => {
    if(!video){
        return <div>loading ...</div>
    }
    const url=`https://www.youtube.com/embed/${video.id.videoId}`
    const d = new Date(video.snippet.publishTime);

    return (
        <React.Fragment>
            <Paper elevation={3} style={{ height: '20%' }}>
                <iframe frameBorder={0} width='100%' height='100%' title='video player' src={url} />
            </Paper>
            <Paper elevation={3} style={{padding:"1rem 2rem"}}>
            <Typography variant='h5'><b>{video.snippet.title}</b></Typography>
            <Typography variant='subtitle2'> publié en : <b>{d.getDate()}-{d.getMonth()+1}-{d.getFullYear()}</b></Typography>

            <Typography variant='subtitle1' style={{width:"80%"}}>{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
    )
};

export default VideoPlay;