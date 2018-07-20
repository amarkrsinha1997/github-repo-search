import React from 'react'
import { Link } from 'react-router-dom';

const itemStyle={
	/* To correctly align image, regardless of content height: */
    verticalAlign: 'top',
    display: 'inline-block',
    /* To horizontally center images and caption */
    textAlign: 'center',
    /* The width of the container also implies margin around the images. */
    width: '120px',
    margin:'20px',

}
const Suggestions = (props) => {
  const options = props.results.map(result => (
    <div style={itemStyle} key={result.node_id}>
      <Link to={'/'+ result.login}>
        <img src={result.avatar_url} alt={'Profile-Pic'} height="100" />
      </Link>
    	<span style={{display:'block'}}>{result.login}</span>
    </div>
  ))
  return <div>{options}</div>
}

export default Suggestions