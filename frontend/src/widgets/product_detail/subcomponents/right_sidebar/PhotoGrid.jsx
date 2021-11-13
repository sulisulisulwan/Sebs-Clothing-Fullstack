import React from 'react';
import { useState, useEffect } from 'react';
import ThumbnailPhoto from '../../../../shared_components/ThumbnailPhoto.jsx';

const PhotoGrid = ({ parentClassName, currentProductStyles, currentStyle, setCurrentStyle,  }) => {

  const [stylesIdAndThumbnails, setStylesIdAndThumbnails] = useState(null);

  useEffect(() => {
    if (currentProductStyles === null) {
      return null;
    }


    let styleIdAndThumbnails = currentProductStyles.map(style => {
      return [style.style_id, style.photos[0].thumbnail_url];
    })

    setStylesIdAndThumbnails(styleIdAndThumbnails);
  }, [currentProductStyles])

  if (stylesIdAndThumbnails === null) {
    return null;
  }

  return (
    <div className={`${parentClassName} photo-grid`}>
      {stylesIdAndThumbnails.map((idAndThumbnail, i) => <ThumbnailPhoto
        key={`${parentClassName}-photo-grid-${i}`}
        parentClassName={`${parentClassName} photo-grid`}
        idAndThumbnail={idAndThumbnail}
        setCurrentStyle={setCurrentStyle}
        currentProductStyles={currentProductStyles}
      />)}
    </div>
  )

}

export default PhotoGrid;