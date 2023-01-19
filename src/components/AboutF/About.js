import React from 'react';
import Tabs from '../TabsC/Tabs';
import Title from '../../components/TitleF/Title';
import WhatWeDo from '../WhatWeDoF/WhatWeDo';
import Brands from '../BrandsF/Brands';
import WhoWeAre from '../WhoWeAreF/WhoWeAre';
import Descriptions from '../DescriptionsF/Descriptions';


function About(props) {
	return (
		<>
			<Title/>
			<WhoWeAre/>
			<WhatWeDo/>
			<Brands/>
			<Tabs/>
			<Descriptions text={props.text}/>
		</>
	);
}

About.defaultProps = {
	text: 'Приходите за «новым» лицом, безукоризненным маникюром и макияжем, эффектной прической, оздоравливающим массажем и хорошим настроением!',
	
};

export default About;