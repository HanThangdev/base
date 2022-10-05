import { parseFilter } from '@utils';
import { http } from '@config';
import { END_POINT } from '@constants';

function getCourses({ params: p }: any) {
	const params = parseFilter(p);
	return http
		.get(END_POINT.COURSE_LIST, '', { params })
		.then((res) => res.data);
}

function getCourse({ courseId }: any) {
	return http.get(`${END_POINT.COURSE}/${courseId}`).then((res) => res.data);
}

function createCourse({ data }: any) {
	return http.post(END_POINT.CREATE_COURSE, data).then((res) => res.data);
}

function editCourse({ courseId, data }: any) {
	return http
		.patch(`${END_POINT.UPDATE_COURSE}/${courseId}`, data)
		.then((res) => res.data);
}

function deleteCourse({ courseId }: any) {
	return http
		.delete(`${END_POINT.UPDATE_COURSE}/${courseId}`)
		.then((res) => res.data);
}

export { getCourses, getCourse, createCourse, editCourse, deleteCourse };
