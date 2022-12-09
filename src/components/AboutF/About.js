import React from 'react';
import styles from './About.module.css'
import Tabs from '../TabsC/Tabs';
import Title from '../../components/TitleF/Title';
import WhatWeDo from '../WhatWeDoF/WhatWeDo';
import Brands from '../BrandsF/Brands';
import WhoWeAre from '../WhoWeAreF/WhoWeAre';

function About(props) {
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