import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/AxiosWithAuth';
import NewApiList from './NewApiList';
import { Link } from 'react-router-dom';
import { qualifiedTypeIdentifier } from '@babel/types';

const EditPost = (props) => {

    const [aq, setAQ] = useState({});

    useEffect(() => {
        getAQ();
    }, []);

    const id = Number(props.match.params.id);

    const getAQ = () => {
    axiosWithAuth()
    .get('https://lambda-practice-db.herokuapp.com/api/post')
    .then(res => {
      const posts = res.data.posts;
      const post = posts.filter(post => {
          return post.id === id;
      })

      setAQ(post[0]);
  })
  .catch(err => console.log(err.response));
}

const editAQ = (data) => {
    // console.log(id);
    axiosWithAuth()
    .put(`https://lambda-practice-db.herokuapp.com/api/post/${id}`, data)
    .then(res => {
        console.log('updated', res);
        props.history.push('/addemployee')
        })
      .catch(err => console.log(err.response));
}

const handleOnChange = event => {
    setAQ({
        ...aq,
        [event.target.name]: event.target.value
    })
}

const submit = event => {
    event.preventDefault();
    editAQ(aq);
}

console.log('aq', aq);

    return (
        <form onSubmit={submit}>
            <input 
            name='author'
            value={aq.author}
            onChange={handleOnChange}/>
            <textarea 
            name='text'
            value={aq.text}
            onChange={handleOnChange} />
            <button>Update</button>
        </form>
    )
}

export default EditPost;