import { Global } from '@emotion/react'
import fontConfig from '../config/fontConfig'; // Import the fontConfig

const Fonts = ( ) => (
	<Global
        styles={`
            @import url('${fontConfig.importLink}');
        `}
	/>
)

export default Fonts