const END_POINT: any = {
	TEST_API: 'api/0.4/',

	// auth
	LOGIN: '/api/v1/public/user/verify/web3auth',
	LOGOUT: '/api/v1/private/user/logout',
	PROFILE_USER: '/profile-user',

	// course
	COURSE_LIST: '/v1/users',
	CREATE_COURSE: '/v1/users',
	COURSE: '/v1/users',
	UPDATE_COURSE: '/v1/users',
	DELETE_COURSES: '/v1/users',

	// common
	PRESIGNED: '/api/v1/file/pre-signed',

	// faq
	SEND_CONTACT: '/api/v1/public/contact',
};

export default END_POINT;
