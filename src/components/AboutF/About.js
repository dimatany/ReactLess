import React from 'react';
import Tabs from '../TabsC/Tabs';
import Title from '../../components/TitleF/Title';
import WhatWeDo from '../WhatWeDoF/WhatWeDo';
import Brands from '../BrandsF/Brands';
import WhoWeAre from '../WhoWeAreF/WhoWeAre';

function About() {
	return (
		<>
			<Title/>
			<WhoWeAre/>
			<WhatWeDo/>
			<Brands/>
			<Tabs/>
		</>
	);
}

export default About;