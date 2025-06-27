import React from 'react'
import PropTypes from 'prop-types';

const PageHeading = ({ title = "", description = "" }) => {
  return (
    <div className='flex flex-col items-start justify-center space-y-2 mb-6'>
      <h2 className="text-2xl font-bold tracking-tight">
        {title}
      </h2>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}

PageHeading.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default PageHeading