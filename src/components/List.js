import React, { Component } from 'react';
import Word from './Word';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrWords:
            [
                {
                    id: 1,
                    en: 'action',
                    vn: 'hành động',
                },
                {
                    id: 2,
                    en: 'actor',
                    vn: 'diễn viên',
                },
                {
                    id: 3,
                    en: 'activity',
                    vn: 'hoạt động',
                }]
        };
    }

    render() {
        return (
            <div>
                {this.state.arrWords.map(e => <Word key={e.id} />)}
            </div>
        );
    }
}
//https://vanpho93.github.io/data.json
