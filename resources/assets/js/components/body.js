import React, { Component } from 'react';
import ReactDom from 'react-dom';
import heightify from 'heightify';
import axios from 'axios';

import ItemList from './body/ItemList';
import Loading from './Loading';
import Map from './body/Map';


export default class Body extends Component {

    state = {
        location: {lat: 7.103602, lng: 125.641840},
        url: window.location + 'api/homes'
    };

    componentDidMount = () => {
        axios.get(this.state.url)
            .then(res => {
                this.setState({houses : res.data.homes});

                heightify({
                    element: document.querySelectorAll('.item'),
                    hasImages: true,
                    destroyOnSize: 500
                })
            });
    }

    onHoverFunction = (position) => {
        this.setState((prevState) => ({location : position}));
    }

    render() {
        return (
            <div className="row">
              <div className="col-xs-8">

                  <Loading />
                <div className="houses-item-container">
                  <ItemList houses={this.state.houses} onHoverFunction={this.onHoverFunction} />
                </div>

                <div className="text-center paginator">

                </div>

              </div>
              <div className="col-xs-4">
                  <Map houses={this.state.houses} location={this.state.location} />
              </div>
            </div>
        );
    }

}
