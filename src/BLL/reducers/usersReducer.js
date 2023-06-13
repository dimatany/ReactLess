const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE ';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
	users: [
 {
 "name": "Tetiana",
 "id": 29204,
 "uniqueUrlName": null,
 "photos": {
 "small": 'https://randomuser.me/api/portraits/women/62.jpg',
 "large": 'https://randomuser.me/api/portraits/med/women/62.jpg'
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Zauzza",
 "id": 29203,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Artem_Burlaew",
 "id": 29202,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Physichko",
 "id": 29201,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Anna Kare",
 "id": 29200,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Kadi",
 "id": 29199,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Tuna",
 "id": 29198,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "cheize20",
 "id": 29197,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Profi",
 "id": 29196,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": null,
 "followed": false
 },
 {
 "name": "Konstan",
 "id": 29195,
 "uniqueUrlName": null,
 "photos": {
 "small": null,
 "large": null
 },
 "location": {'country': 'UK', 'city': 'Kiev'},
 "status": "Я лучший на свете!",
 "followed": false
 }
 ],
	"totalCount": 24212,
	"error": null,
	/*users: [],*/
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
};
const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(el => {
					if(el.id === action.userId) {
						return {...el, followed: true}
					}
					return el;
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(el => {
					if(el.id === action.userId) {
						return {...el, followed: false}
					}
					return el;
				})
			}
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		default:
			return state;
	}
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage:currentPage});
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;