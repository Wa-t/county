import React from 'react';
import './index.less';

const Polygon = (props) => {
  const { title, desc } = props;
  return (
    <div className='polygon-container'>
      <span className="content">
        {title ? <p className='title'>{title}</p> : null}
        {desc ? <p className='desc'>{desc}</p> : null}
      </span>
    </div>
  )
}

export default Polygon;
