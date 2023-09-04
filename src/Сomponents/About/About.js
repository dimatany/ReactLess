import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Tabs from '../TabForPhoto/TabForPhoto';
import Title from '../Title/Title';
import WhatWeDo from '../WhatWeDo/WhatWeDo';
import Brands from '../Brands/Brands';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import Descriptions from '../Descriptions/Descriptions';
import {useTranslation} from 'react-i18next';

function About(props) {
	const { t } = useTranslation();
	
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
			<Descriptions text={t('Technical.description')}/>
		</>
	);
}

export default About;