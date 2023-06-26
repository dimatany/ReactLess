import React, {useState} from 'react';
import styles from './TabLoginForm.css'

function TabLoginForm({ data }) {
	const [selectedTabIndex, setSelectedTabIndex] = useState(0);
	
	return (
		<div className='wrapper'>
			<div className='tabPanel'>
				{data.map((el, index) => (
					<div
						key={index}
						onClick={() => setSelectedTabIndex(index)}
						className={index === selectedTabIndex ? 'activeTab tab' : 'tab'}
					>
						{el.title}
					</div>
				))}
			</div>
			<div className='tabContent'>{data[selectedTabIndex].content}</div>
		</div>
	);
}

export default TabLoginForm;

