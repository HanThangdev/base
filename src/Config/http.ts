/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-param-reassign */
/* eslint-disable symbol-description */
import axios from 'axios';
import JSONBig from 'json-bigint';
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

import { isEmpty, assign } from 'lodash';
import { BASE_API_URL, LOCAL_WEB3AUTH_LOGINED, StatusLogin } from '@constants';
import { STORAGE, getLocalStorage, setLocalStorage } from '@utils';

const singletonEnforcer = Symbol();
const BASE_URL = `${BASE_API_URL}`;
interface Token {
	name: string;
	exp: number;
	expWeb3Auth: number;
	iat: number;
	email: string | null;
}

class AxiosClient {
	axiosClient: any;

	static axiosClientInstance: AxiosClient;

	constructor(enforcer: any) {
		if (enforcer !== singletonEnforcer) {
			throw new Error('Cannot initialize Axios client single instance');
		}

		this.axiosClient = axios.create({
			baseURL: BASE_URL,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		});

		this.getExistTokenOnLocalStorage();

		this.axiosClient.defaults.transformResponse = (data: any) =>
			JSONBig.parse(data);

		this.axiosClient.interceptors.request.use(
			async (configure: any) => {
				const token: any =
					JSON.parse(getLocalStorage(STORAGE.USER_TOKEN) || '{}') || null;
				if (!isEmpty(token)) {
					const user = jwt_decode<Token>(token.access_token);
					// Check time expire
					const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
					// If time not expired set access token to header and call api
					if (!isExpired) {
						configure.headers.Authorization = `Bearer ${token.access_token}`;
						return configure;
					}
					// Request get new access token
					const response = await axios.post(
						`${BASE_URL}/api/v1/private/auth/refresh`,
						{},
						{
							headers: {
								Authorization: `Bearer ${token.refresh_token}`,
							},
						}
					);
					// Set new access token in to localstorage
					setLocalStorage(STORAGE.USER_TOKEN, JSON.stringify(response.data));
					configure.headers.Authorization = `Bearer ${response.data.access_token}`;
				}
				return configure;
			},
			(error: any) => Promise.reject(error)
		);

		this.axiosClient.interceptors.response.use(
			(response: any) => {
				const { status, data } = response;
				return {
					status,
					data,
				};
			},
			(error: any) => {
				if (error.response) {
					const { data, status } = error.response;
					switch (status) {
						case 400:
							break;
						case 500:
							break;
						case 401:
							setLocalStorage(LOCAL_WEB3AUTH_LOGINED, StatusLogin.EXPIRED)
							break;
						case 404:
							break;
						case 403:
							break;
						default:
							break;
					}
					throw data;
				} else {
					throw error;
				}
			}
		);
	}

	static get instance() {
		if (!this.axiosClientInstance) {
			this.axiosClientInstance = new AxiosClient(singletonEnforcer);
		}

		return this.axiosClientInstance;
	}

	async getExistTokenOnLocalStorage() {
		const userToken: any = await getLocalStorage(STORAGE.USER_TOKEN);
		if (userToken) {
			this.setHeader(userToken);
		}
	}

	setHeader = async (userToken = null) => {
		this.axiosClient.defaults.headers.common.Authorization = `Bearer ${userToken}`;
	};

	get = async (resource: any, slug = '', config: any = {}) => {
		let { headers } = config;
		if (!headers) {
			headers = this.axiosClient.defaults.headers;
		}
		slug += '';
		const requestURL = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`;
		return this.axiosClient.get(requestURL, {
			data: null,
			...assign(config, { headers }),
		});
	};

	post = async (resource: any, data: any, config = {}) =>
		this.axiosClient.post(
			`${resource}`,
			data,
			assign(config, this.axiosClient.defaults.headers)
		);

	update = async (resource: any, data: any, config = {}) =>
		this.axiosClient.put(
			`${resource}`,
			data,
			assign(config, this.axiosClient.defaults.headers)
		);

	put = async (resource: any, data: any, config = {}) =>
		this.axiosClient.put(
			`${resource}`,
			data,
			assign(config, this.axiosClient.defaults.headers)
		);

	patch = async (resource: any, data: any, config = {}) =>
		this.axiosClient.patch(
			`${resource}`,
			data,
			assign(config, this.axiosClient.defaults.headers)
		);

	delete = async (resource: any, data?: any, config = {}) =>
		this.axiosClient.delete(`${resource}`, {
			data,
			...assign(config, { headers: this.axiosClient.defaults.headers }),
		});
}

export default AxiosClient.instance;
