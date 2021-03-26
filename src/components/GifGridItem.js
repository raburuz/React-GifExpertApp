import React from 'react';

export const GifGridItem = ({ title, url }) => {
      return (
            <div className="card animate__bounceIn animate__delay-2s">
                  <img src={url} alt={title} />
                  <hr />
                  <p>{title}</p>
            </div>
      );
};
