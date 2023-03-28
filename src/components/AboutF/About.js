import React from 'react';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import Tabs from '../TabsC/Tabs';
import Title from '../../components/TitleF/Title';
import WhatWeDo from '../WhatWeDoF/WhatWeDo';
import Brands from '../BrandsF/Brands';
import WhoWeAre from '../WhoWeAreF/WhoWeAre';
import Descriptions from '../DescriptionsF/Descriptions';
import Comments from '../AddCommentF/Comments';

function About(props) {
	return (
		<>
			<Title/>
			<WhoWeAre/>
			<ErrorBoundary>
				<WhatWeDo
					dataWWD={props.dataWWD}
				/>
			</ErrorBoundary>
			<Brands/>
			<ErrorBoundary>
				<Tabs/>
			</ErrorBoundary>
			<Descriptions
				text={props.text}
			/>
			<Comments
				dataComment={props.dataComment}
				newCommentText={props.newCommentText}
				dispatch={props.dispatch}
			/>
		</>
	);
}

About.defaultProps = {
	text: 'Приходьте на «новим» обличчям, бездоганним манікюром і макіяжем, ефектним волоссям, цілющим масажем та гарним настроем!',
	
};

export default About;