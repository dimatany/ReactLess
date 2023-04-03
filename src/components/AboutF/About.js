import React from 'react';
import ErrorBoundary from '../ErrorBoundaryC/ErrorBoundary';
import Tabs from '../TabsC/Tabs';
import Title from '../../components/TitleF/Title';
import WhatWeDo from '../WhatWeDoF/WhatWeDo';
import Brands from '../BrandsF/Brands';
import WhoWeAre from '../WhoWeAreF/WhoWeAre';
import Descriptions from '../DescriptionsF/Descriptions';
import Comments from '../CommentF/Comments';
import Dialogs from '../DialogsF/Dialogs';

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
			<ErrorBoundary>
				<Comments
					dispatch={props.dispatch}
					dataCommentPage={props.dataCommentPage}
					store={props.store}
				/>
			</ErrorBoundary>
			<ErrorBoundary>
				<Dialogs
					dispatch={props.dispatch}
					dataDialogsPage={props.dataDialogsPage}
					store={props.store}
				/>
			</ErrorBoundary>
		</>
	);
}

About.defaultProps = {
	text: 'Приходьте на «новим» обличчям, бездоганним манікюром і макіяжем, ефектним волоссям, цілющим масажем та гарним настроем!',
	
};

export default About;