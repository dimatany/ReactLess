import React from 'react';
import './Tabs.css';
import Headings from '../HeadingsF/Headings';

class Tabs extends React.Component {
	constructor (props) {
		super (props)
		this.state = {
			selectedTab: 0
		}
	}
	selectTab = (index) => {
		this.setState({ selectedTab : index })
	}
	render () {
		return (
			<div>
				<div className="tabs">
					<ul>
						{
							this.props.children.map((child,index) => {
								let style = index === this.state.selectedTab ? 'is-active': ''
								return (
									<li className={style} key={index} onClick={() => this.selectTab(index)}>
										<a>
											{child.props.label}
										</a>
									</li>
								)
							})
						}
					</ul>
				</div>
				<div className="tab-content">
					{ this.props.children[this.state.selectedTab] }
				</div>
			</div>
		)
	}
}
class Tab extends React.Component {
	render () {
		return (
			<div>{ this.props.children }</div>
		)
	}
}
class App extends React.Component {
	render () {
		return (
			<section className="section">
				<div className="tabs wrap">
					<Headings heading={'Приклади'}/>
					<Tabs>
						<Tab label="Показати все">
							<ul>
								<li><img src={require("./tabM1.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM2.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM3.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM4.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM5.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM6.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP1.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP2.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP3.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP4.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP5.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP6.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab1.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tab2.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tab3.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab4.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab5.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab6.jpg")}  alt='example of makeup'/></li>
								
							</ul>
						</Tab>
						<Tab label="Перукарські послуги">
							<ul>
								<li><img src={require("./tabP1.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP2.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP3.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP4.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP5.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tabP6.jpg")}  alt='example of makeup'/></li>
							</ul>
						</Tab>
						<Tab label="Макіяж">
							<ul>
								<li><img src={require("./tabM1.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM2.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM3.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM4.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM5.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tabM6.png")}  alt='example of makeup'/></li>
							</ul>
						</Tab>
						<Tab label="Манікюр">
							<ul>
								<li><img src={require("./tab1.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tab2.png")}  alt='example of makeup'/></li>
								<li><img src={require("./tab3.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab4.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab5.jpg")}  alt='example of makeup'/></li>
								<li><img src={require("./tab6.jpg")}  alt='example of makeup'/></li>
							</ul>
						</Tab>
					</Tabs>
				</div>
			</section>
		)
	}
}

export default App;
