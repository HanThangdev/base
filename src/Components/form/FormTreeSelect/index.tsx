/* eslint-disable react/prop-types */
import React from 'react';
import { Form, TreeSelect, ConfigProvider } from 'antd';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { SmileOutlined } from '@ant-design/icons';

const WrapperFormItem = styled(Form.Item)`
	height: max-content;
	width: 100%;
	margin-bottom: 10px;

	.ant-select-selection-overflow-item {
		align-self: flex-start;
	}

	.ant-select-selection-overflow {
		position: relative;
		display: flex;
		flex: auto;
		flex-wrap: wrap;
		max-width: 100%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}

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

	.ant-form-item-children-icon {
		display: none;
	}
`;

const WrapperLabel = styled.div`
	width: 100%;
	font-size: 13px;
`;

function FormTreeSelect({
	t,
	label,
	name,
	rules,
	defaultValue = '',
	valueKey,
	labelKey,
	parentKey,
	wrapperProps,
	options = [],
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
	const [trans] = useTranslation(['common']);

	const renderTreeOptions = (opts: any) =>
		opts.map((item: any) =>
			item.childList ? (
				<TreeSelect.TreeNode
					key={item[valueKey]}
					value={item[valueKey]}
					title={item[labelKey]}
					disabled={parentKey && item[parentKey]}
				>
					{renderTreeOptions(item.childList)}
				</TreeSelect.TreeNode>
			) : (
				<TreeSelect.TreeNode
					key={item[valueKey]}
					value={item[valueKey]}
					title={item[labelKey]}
					disabled={parentKey && item[parentKey]}
				/>
			)
		);

	const customizeRenderEmpty = () => (
		<div style={{ textAlign: 'center', width: '100%' }}>
			<SmileOutlined style={{ fontSize: 20 }} />
			<p style={{ textAlign: 'center', width: '100%' }}>
				{trans('empty_data')}
			</p>
		</div>
	);

	return (
		<WrapperFormItem
			{...wrapperProps}
			label={label && <WrapperLabel>{label}</WrapperLabel>}
			validateStatus={error ? 'error' : ''}
			help={error?.message}
		>
			<div id={`popup-container-${name}`}>
				<ConfigProvider
					renderEmpty={customizeRenderEmpty}
					getPopupContainer={(): any =>
						document.getElementById(`popup-container-${name}`)
					}
				>
					<TreeSelect
						showSearch
						treeNodeFilterProp="title"
						style={{ width: '100%' }}
						value={value || null}
						dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
						placeholder={trans('select')}
						labelInValue
						allowClear
						treeDefaultExpandAll
						onChange={onChange}
						{...rest}
					>
						{renderTreeOptions(options)}
					</TreeSelect>
				</ConfigProvider>
			</div>
		</WrapperFormItem>
	);
}

export default FormTreeSelect;
