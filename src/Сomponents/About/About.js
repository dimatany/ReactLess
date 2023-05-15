import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Tabs from '../Tabs/Tabs';
import Title from '../Title/Title';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Brands from '../Brands/Brands';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Descriptions from '../Descriptions/Descriptions';

function About(props) {
	return (
		<>
			<Title/>
			<WhoWeAre/>
			<ErrorBoundary>
				<WhatWeDo dataWWD={props.dataWWD}/>
			</ErrorBoundary>
			<Brands/>
			<ErrorBoundary>
				<Tabs/>
			</ErrorBoundary>
			<Descriptions text={props.text}/>
		</>
	);
}

About.defaultProps = {
	text: 'Приходьте на «новим» обличчям, бездоганним манікюром і макіяжем, ефектним волоссям, цілющим масажем та гарним настроем!',
};

export default About;