import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './TabForPhoto.css';
import {useTranslation} from 'react-i18next';

function TabForPhoto() {
	const [tabIndex, setTabIndex] = useState(0);
	const { t } = useTranslation();
	
	return (
		<Tabs className='wrapper'
		      selectedIndex={tabIndex}
		      onSelect={tabIndex => setTabIndex(tabIndex)}
		>
			<TabList className='tabPanel'>
				<Tab className='tab'>{t('TabForPhoto.showAll')}</Tab>
				<Tab className='tab'>{t('TabForPhoto.haircareServices')}</Tab>
				<Tab className='tab'>{t('TabForPhoto.makeup')}</Tab>
				<Tab className='tab'>{t('TabForPhoto.manicur')}</Tab>
			</TabList>
			<TabPanel>
				<div className='tabContent'>
					<ul className='allPhoto'>
						<li><img src={require("../../BLL/img/Tabs/tabM1.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM2.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM3.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM4.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM5.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM6.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP1.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP2.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP3.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP4.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP5.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP6.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab1.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab2.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab3.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab4.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab5.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab6.jpg")} alt='example of makeup'/></li>
					
					</ul>
				</div>
			</TabPanel>
			<TabPanel>
				<div className='tabContent'>
					<ul className='allPhoto'>
						<li><img src={require("../../BLL/img/Tabs/tabP1.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP2.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP3.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP4.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP5.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabP6.jpg")} alt='example of makeup'/></li>
					</ul>
				</div>
			</TabPanel>
			<TabPanel>
				<div className='tabContent'>
					<ul className='allPhoto'>
						<li><img src={require("../../BLL/img/Tabs/tabM1.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM2.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM3.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM4.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM5.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tabM6.png")} alt='example of makeup'/></li>
					</ul>
				</div>
			</TabPanel>
			<TabPanel>
				<div className='tabContent'>
					<ul className='allPhoto'>
						<li><img src={require("../../BLL/img/Tabs/tab1.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab2.png")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab3.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab4.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab5.jpg")} alt='example of makeup'/></li>
						<li><img src={require("../../BLL/img/Tabs/tab6.jpg")} alt='example of makeup'/></li>
					</ul>
				</div>
			</TabPanel>
		</Tabs>
	);
}
export default TabForPhoto