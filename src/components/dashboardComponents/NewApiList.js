import React, { useState } from 'react';

const NewApiList = ({ submitAQ }) => {
const [touched, setTouched] = useState({author:"" , text:""});
const handleChange = event => {
    setTouched({...touched, [event.target.name]: event.target.value});
};

const handleSubmit = event => {
    event.preventDefault();
    submitAQ(touched);
    };
    
return (
        <form onSubmit={handleSubmit}>
            <input name='author'
                    placeholder="author"
                    value={touched.author}
                    onChange={handleChange} />
            <input name='text'
                    placeholder="quote"
                    value={touched.text}
                    onChange={handleChange} />
            <button type='submit'>Add</button>
        </form>
    );
};

export default NewApiList;