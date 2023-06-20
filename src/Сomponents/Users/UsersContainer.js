import {connect} from 'react-redux';
import {
	followAC, setCurrentPageAC,
	setUsersAC, setUsersTotalCountAC,
	unfollowAC,
} from '../../BLL/reducers/usersReducer';
import axios from 'axios';
import React, {useState} from 'react';
import Users from './Users';

function UsersContainer(props) {
	let getUsers = () => {
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPage}&count=${props.pageSize}`)
		.then(response => {
			props.setUsers(response.data.items);
			props.setTotalUsersCount(response.data.totalCount);
		});
	}
	const [users, setUsers] = useState(getUsers);
	let onPageChanged = (pageNumber) => {
		props.setCurrentPage(pageNumber);
		axios
		.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
		.then(response => {
			props.setUsers(response.data.items);
		});
	}
	
	return <Users
		totalUsersCount={props.totalUsersCount}
		pageSize={props.pageSize}
		currentPage={props.currentPage}
		onPageChanged={onPageChanged}
		users={props.users}
		follow={props.follow}
		unfollow={props.unfollow}
	/>
}
let mapStateToProps = (state) => {
	return {
		users: state.dataUsers.users,
		pageSize: state.dataUsers.pageSize,
		totalUsersCount: state.dataUsers.totalUsersCount,
		currentPage: state.dataUsers.currentPage,
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		follow: (userId) => {
			dispatch(followAC(userId));
		},
		unfollow: (userId) => {
			dispatch(unfollowAC(userId));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		setCurrentPage: (pageNumber) => {
			dispatch(setCurrentPageAC(pageNumber))
		},
		setTotalUsersCount: (totalCount) => {
			dispatch(setUsersTotalCountAC(totalCount))
		},
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);