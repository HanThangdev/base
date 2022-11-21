import { message } from 'antd';

export const success = (content: string) => {
	message.success({
		content,
		className: 'msg-success',
	});
};

export const error = (content: string) => {
	message.error({
		content,
		className: 'msg-error',
	});
};

export const warning = (content: string) => {
	message.warning({
		content,
		className: 'msg-warning',
	});
};
