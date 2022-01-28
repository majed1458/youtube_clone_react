import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import{SearchBar,VideoList, VideoPlay} from './component'
import youtube from './api/youtube';

export default class app extends Component {
    state={
        videos:[],
        searched:null
    }

    componentDidMount(){
        this.handelSubmit('react js')
    }

     onVideoSelect=(video)=>{
        this.setState({searched:video})
    }
    
    handelSubmit=async(searchTerm)=>{
        const result= await youtube.get('search',{params:{q:searchTerm}})
        console.log(result?.data.items)
        this.setState({videos:result.data.items,searched:result.data.items[0]})

    }

    render() {
        return <div>
            <Grid justifyContent='center' container spacing={6}>
                <Grid item xs={12}>
                    <Grid container spacing={6}>
                        <Grid item xs={12}>
                            {/* input component */}
                            <SearchBar onSubmit={this.handelSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            {/* video display */}
                            <VideoPlay video={this.state.searched}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/* video lis */}
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>;
    }
}
