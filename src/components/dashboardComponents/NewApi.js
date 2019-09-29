import React, {useState, useEffect } from 'react';
import axiosWithAuth from '../utilities/AxiosWithAuth';
import NewApiList from './NewApiList';


const AuthorQuote = () => {
const [aqList, setAQList] = useState([]);

useEffect(() => {
    axiosWithAuth().get('https://lambda-practice-db.herokuapp.com/api/post')
    .then(res => {setAQList(res.data.posts);
})
.catch(err => console.log(err.response));

},[]);

const addAQ = event => {
    axiosWithAuth().post('https://lambda-practice-db.herokuapp.com/api/post', event)
    .then(res => setAQList(res.data))
    .catch(err => console.log(err.response));
}

const deleteAQ = id => {
    // console.log(id);
    axiosWithAuth().delete(`https://lambda-practice-db.herokuapp.com/api/post/${id}`)
        .then(res => {
        

        axiosWithAuth().get('https://lambda-practice-db.herokuapp.com/api/post')
        .then(res => {
            setAQList(res.data.posts);
            console.log('updating data');
          })
          .catch(err => console.log(err.response))
      
              })
      .catch(err => console.log(err.response));
}

return(
<div>

<h2>AQ</h2>
<NewApiList submitAQ={addAQ} />
{aqList.map(quote=>{
    return (<div>
        <h3>{quote.author}</h3>
        <p>{quote.text}</p>
        <button onClick= {()=>deleteAQ(quote.id)}>Delete</button>
        </div>
    );
})}

</div>

)};

export default AuthorQuote;


