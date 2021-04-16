import React, {useState, useEffect} from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import InputOption from './InputOption';
import Post from './Post';
//import { db } from './firebase';
//import firebase from 'firebase';

function Feed() {

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);
    /*
    useEffect(() => {
        db.collection("posts")
            .orderBy('timestamp', 'descending')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data
                    }
                )))
            ))
    }, []);
    */

    /*
    const sendPost = e => {
        e.preventDefault();
        db.collection("posts").add(
            {
                name: 'Mirco Cardinale',
                description: 'this is a test',
                message: input,
                photoUrl: '',
                timestamp: firebase.firestore.FieldValue.serverTimeStamp()
            }
        );
        setInput("");
    };
    */

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                        <button onClick={console.log("clicked")} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9"/>
                    <InputOption title="Video" Icon={SubscriptionIcon} color="#70B5F9"/>
                    <InputOption title="Event" Icon={EventNoteIcon} color="#70B5F9"/>
                </div>
            </div>
            {posts.map(({ id, data: {name, description, message, photoUrl} }) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
            ))}
            <Post 
                name="Mirco Cardinale" 
                description="this is a test" 
                message="this is a message"
            />
        </div>
    )
}

export default Feed
