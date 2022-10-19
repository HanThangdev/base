/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import { Form, Input } from 'antd';
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

	p {
		margin-top: 5px;
	}

	.ant-form-item-children-icon {
		display: none;
	}
`;

const WrapperLabel = styled.div`
	width: 100%;
	font-size: 13px;
`;

function FormTextContact({
	label,
	name,
	rules,
	defaultValue = '',
	wrapperProps,
	total,
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

	const handleChange = useCallback(
		(e: any) => {
			const val = e.target.value;
			onChange(val);
		},
		[onChange]
	);

	return (
		<WrapperFormItem
			{...wrapperProps}
			label={label && <WrapperLabel>{label}</WrapperLabel>}
			help={error?.message}
			validateStatus={error ? 'error' : ''}
		>
			<Input.TextArea onChange={handleChange} value={value} {...rest} rows={6}/>
		</WrapperFormItem>
	);
}

export default FormTextContact;
