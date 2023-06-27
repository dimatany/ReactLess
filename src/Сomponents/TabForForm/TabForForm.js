import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './TabForForm.css';
import SVGAvatar from '../SVG/SVGAvatar';
import SVGHand from '../SVG/SVGHand';


function TabForForm() {
	const [tabIndex, setTabIndex] = useState(0);
	
	return (
		<Tabs className='wrapper'
		      selectedIndex={tabIndex}
		      onSelect={tabIndex => setTabIndex(tabIndex)}
		>
			<TabList className='tabPanel'>
				<Tab className='tab'>Увійти</Tab>
				<Tab className='tab'>Зареєструватися</Tab>
			</TabList>
			<TabPanel><div className='tabContent'><SVGAvatar/></div></TabPanel>
			<TabPanel><div className='tabContent'><SVGHand/></div></TabPanel>
		</Tabs>
	);
}

export default TabForForm;

