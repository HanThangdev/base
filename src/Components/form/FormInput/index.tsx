/* eslint-disable react/prop-types */
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

	.input-group{
		flex-wrap: nowrap !important
	}

	.ant-input-affix-wrapper-focused, .ant-input-affix-wrapper:focus{
		border-color:	transparent !important;
	}

	.ant-input-affix-wrapper:hover{
		border-color:	#d9d9d9 !important;
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

function FormInput({
	label,
	name,
	rules,
	defaultValue = '',
	wrapperProps,
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
			<Input className='form-control' onChange={onChange} value={value} {...rest} />
		</WrapperFormItem>
	);
}

export default FormInput;
