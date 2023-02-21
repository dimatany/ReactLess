import React from 'react';
import Tabs from '../TabsC/Tabs';
import Title from '../../components/TitleF/Title';
import WhatWeDo from '../WhatWeDoF/WhatWeDo';
import Brands from '../BrandsF/Brands';
import WhoWeAre from '../WhoWeAreF/WhoWeAre';
import Descriptions from '../DescriptionsF/Descriptions';
import FormTelegram from '../FormTelegramF/FormTelegram';

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
	text: 'Приходьте на «новим» обличчям, бездоганним манікюром і макіяжем, ефектним волоссям, цілющим масажем та гарним настроем!',
	
};

export default About;