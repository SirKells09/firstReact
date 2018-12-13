import React, { Component } from 'react';
import axios from 'axios';
import FaTrash0 from 'react-icons/lib/fa/trash-o'

const API_BASE = "http://rest.learncode.academy/api/efa/friends";

class FriendList extends Component {
    constructor(props) {
        super(props)
        this.state = { friends: [] };
    }
    componentWillReceiveProps(nextProps) {

    }

    renderFriends() {
        if(this.state.friends){
            const friendsFiltered = this.state.friends.filter(friends => friend.id)
            return friendsFiltered.map(friends =>
                <div key={friend.id}>
                <li className="list-group-item">
                <strong>Name:</strong> {friend.name}
                <br />
                <strong>Age:</strong> {friend.age}
                <button onClick={() => {this.removeFriend(this, friend) }}
                    className="btn btn-danger trash">
                    <span><FaTrash0 /></span>
                    </button>
                </li>
                </div>
            )
        } else {

        }


    }

    removeFriend(event, friend) {

    }

    render() {
        return (
            <div>
                Friend
            </div>
        )
    }
}

export default FriendList;
