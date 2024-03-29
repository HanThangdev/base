/* eslint-disable react/prop-types */
import React from 'react';
import { Form, Radio } from 'antd';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const WrapperFormItem = styled(Form.Item)`
	height: max-content;
	width: 100%;
	margin-bottom: 10px;

	.ant-input {
		min-height: 38px;
		border-radius: 4px;
	}

	.ant-form-item-label {
		font-size: 14px;
		overflow: unset;
		white-space: unset;
		.ant-form-item-no-colon {
			height: 100%;
		}
	}
`;

const WrapperLabel = styled.div`
	width: 100%;
	font-size: 13px;
`;

function FormRadio({
	t,
	label,
	name,
	rules,
	defaultValue = '',
	wrapperProps,
	options = [],
	children,
	...rest
}: any) {
	const { control } = useFormContext();
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	});
	return (
		<WrapperFormItem
			{...wrapperProps}
			label={label && <WrapperLabel>{label}</WrapperLabel>}
			validateStatus={error ? 'error' : ''}
			help={error?.message}
		>
			<Radio.Group {...rest} onChange={onChange} value={value}>
				{children ||
					options.map((opt: any) => (
						<Radio key={opt.value} value={opt.value}>
							{t(opt.label)}
						</Radio>
					))}
			</Radio.Group>
		</WrapperFormItem>
	);
}

export default FormRadio;
