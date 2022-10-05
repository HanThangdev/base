import { Switch } from 'react-router-dom';

import { PrivateRoute } from '@components';

import { USER_ROLE } from '@modules/auth/constant';
import RegistrationCourseScreen from './registration_course';
import CreateCourseScreen from './registration_course/create_course';
import EditCourseScreen from './registration_course/edit_course';

export const navigator = {
	REGISTRATION_COURSE: '/course-management/lesson',
	CREATE_COURSE: '/course-management/lesson/create',
	EDIT_COURSE: '/course-management/lesson/edit',
};

export const ROUTES = [
	{
		path: navigator.REGISTRATION_COURSE,
		component: RegistrationCourseScreen,
		rules: [
			USER_ROLE.ADMIN,
			USER_ROLE.NISSHOKEN_ADMIN,
			USER_ROLE.COMPANY_ADMIN,
		],
	},
	{
		path: navigator.CREATE_COURSE,
		component: CreateCourseScreen,
		rules: [
			USER_ROLE.ADMIN,
			USER_ROLE.NISSHOKEN_ADMIN,
			USER_ROLE.COMPANY_ADMIN,
		],
	},
	{
		path: `${navigator.EDIT_COURSE}/:id`,
		component: EditCourseScreen,
		rules: [
			USER_ROLE.ADMIN,
			USER_ROLE.NISSHOKEN_ADMIN,
			USER_ROLE.COMPANY_ADMIN,
		],
	},
];

export default function CourseRoutes() {
	return (
		<Switch>
			{ROUTES.map((routeConfig) => (
				<PrivateRoute key={routeConfig.path} {...routeConfig} />
			))}
		</Switch>
	);
}
