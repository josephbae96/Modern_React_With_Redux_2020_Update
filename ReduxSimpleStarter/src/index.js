import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyB4e1Fa66ZQQffzJJ2ussby1JXAS2Vjel0';

//Create a new component that will produce HTML
class App extends Component{
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],
            selectedVideo: null
         };

        YTSearch({key: API_KEY, term: 'puppies'}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0] 
            });
        });
    }

    render() {
        const videoSearch = ._debounce((term) => {this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSleect={selectedVideo => this.setState({selectedVideo}) }
                    videos={this.state.videos} 
                />
            </div>
        );
    }
    
}

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));

