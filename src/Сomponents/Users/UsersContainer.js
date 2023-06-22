import {connect} from 'react-redux';
import {
	follow, setCurrentPage,
	setUsers, setTotalUsersCount, toggleIsFetching,
	unfollow,
} from '../../BLL/reducers/usersReducer';
import axios from 'axios';
import React from 'react';
import Users from './Users';
import Loading from '../Loading/Loading';

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true);
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
			this.props.setTotalUsersCount(response.data.totalCount);
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
		this.props.toggleIsFetching(true);
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
		.then(response => {
			this.props.toggleIsFetching(false);
			this.props.setUsers(response.data.items);
		});
	}
	render() {
		return (
			<>
				{this.props.isFetching ? <Loading/> : null}
				<Users
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					onPageChanged={this.onPageChanged}
					users={this.props.users}
					follow={this.props.follow}
					unfollow={this.props.unfollow}
				/>
			</>
		)
	}
}

let mapStateToProps = (state) => {
	return {
		users: state.dataUsers.users,
		pageSize: state.dataUsers.pageSize,
		totalUsersCount: state.dataUsers.totalUsersCount,
		currentPage: state.dataUsers.currentPage,
		isFetching: state.dataUsers.isFetching,
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
}) (UsersContainer);
