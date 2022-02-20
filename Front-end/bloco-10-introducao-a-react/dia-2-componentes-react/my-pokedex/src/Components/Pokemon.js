import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component{
  render(){
    const {itemInfo : {image, name, type, averageWeight: {value, measurementUnit}}} = this.props;
    return(
      <article>
        <div>
          <img src={image} alt={name}/>
        </div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{value} {measurementUnit}</p>
      </article>
    )    
  }
}

Pokemon.propTypes = {
  itemInfo: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    })
  })
}

export default Pokemon;