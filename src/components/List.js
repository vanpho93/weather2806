import React, { Component } from 'react';
import Word from './Word';
import getList from '../api/getList';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrWords: []
        };
    }

    componentDidMount() {
        getList()
        .then(list => this.setState({ arrWords: list }));
    }

    render() {
        return (
            <div>
                {this.state.arrWords.map(e => <Word key={e.id} en={e.en} vn={e.vn} />)}
            </div>
        );
    }
}
//https://vanpho93.github.io/data.json
