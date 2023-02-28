import React, {Component} from 'react';
import styles from './ErrorBoundary.module.css'
class ErrorBoundary extends Component {
	state = {
		error: null,
	};
	static getDerivedStateFromError(error) {
		return { error };
	}
	render() {
		const { error } = this.state;
		
		if (error) {
			return (
				<div className={styles.wrap}>
					<p className={styles.message}>Виявляється, сталася помилка!</p>
					<p className={styles.error}>{error.message}</p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;