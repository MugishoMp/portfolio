import { Global } from '@emotion/react';
import fontConfig from '../config/fontConfig'; // Import the fontConfig

function Fonts() {
  return (
    <Global
      styles={`
            @import url('${fontConfig.importLink}');
        `}
    />
  );
}

export default Fonts;
