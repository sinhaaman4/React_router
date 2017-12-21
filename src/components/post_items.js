import React from 'react';

const PostItems = ({match}) =>{
    return <div>{match.params.id}</div>
}
export default PostItems;