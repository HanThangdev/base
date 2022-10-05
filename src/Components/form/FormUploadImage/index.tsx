/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState, useMemo, useEffect } from 'react';
import { Form, Upload, Modal, ConfigProvider } from 'antd';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { LOCALES } from '@constants';

import { getBase64 } from '@utils/image';
import { getS3PresinedUrl } from '@apis';

const FILE_SIZE = 10; // 10mb
const FILE_FORMATS = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif'];

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
	}

	.ant-form-item-children-icon {
		display: none;
	}

	.ant-upload-list-item-info {
		font-size: 0.5rem;
	}
`;

const WrapperLabel = styled.div`
	width: 100%;
	font-size: 13px;
`;

function FormUploadImage({
	t,
	label,
	name,
	rules,
	defaultValue = '',
	size = FILE_SIZE,
	sizeRequired = '10240 KB',
	...rest
}: any) {
	const {
		control,
		setError,
		setValue,
		clearErrors,
		formState: { errors },
	} = useFormContext();
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		name,
		control,
		rules,
		defaultValue,
	});
	const {
		t: trans,
		i18n: { language },
	} = useTranslation(['common', 'error_message']);

	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState('');
	const [previewTitle, setPreviewTitle] = useState('');
	const [files, setFiles] = useState<any>([]);
	const [fileValue, setFileValue] = useState<any>(null);

	const handleChange = useCallback(({ fileList }: any) => {
		setFiles(fileList);
	}, []);

	const handleCancel = useCallback(() => setPreviewVisible(false), []);

	const handlePreview = useCallback(
		async (f: any) => {
			const file = f;
			if (!file.url && !file.preview) {
				file.preview = await getBase64(file.originFileObj);
			}

			setPreviewImage(file.url || file.preview);
			setPreviewVisible(true);

			const previewFile = file.url || file.preview;

			let fileName = previewFile.substr(0, previewFile.lastIndexOf('_'));
			fileName = fileName.substring(fileName.lastIndexOf('/') + 1);
			fileName = decodeURIComponent(fileName);
			setPreviewTitle(file.name || fileName);
		},
		[files]
	);

	const uploadImage = useCallback(
		async (options: any) => {
			const { onSuccess, onError, file } = options;
			setFileValue(file);
			setValue('file', file);
			const fileList = [{ fileName: file.name, fileType: file.type }];
			const config = {
				headers: { 'content-type': file.type },
			};
			try {
				if (!FILE_FORMATS.includes(file.type)) {
					onError('Error');
					setError(name, {
						type: 'manual',
						message: trans('error_message:validation.incorrect_file_type', {
							fileName: file.name,
						}),
					});
				} else if (file.size / 1024 > size * 1024) {
					onError('Error');
					setError(name, {
						type: 'manual',
						message: trans('error_message:validation.max_file_size', {
							fileName: file.name,
							size: file.size / 1024,
							sizeRequired,
						}),
					});
				} else {
					const { data } = await getS3PresinedUrl({ fileList });
					await axios.put(data[0].preSignedURL, file, config);
					onChange(data[0].url);
					onSuccess('Ok');
				}
			} catch (err) {
				onError({ err });
			}
		},
		[files]
	);

	useEffect(() => {
		if (value) {
			setFiles([
				{
					url: value,
				},
			]);
		} else {
			setFiles([]);
		}
	}, [value]);

	useEffect(() => {
		if (error) {
			setError(name, {
				type: 'manual',
				message: trans('error_message:validation.max_file_size', {
					fileName: fileValue.name,
					size: fileValue.size / 1024,
				}),
			});
		}
	}, [trans]);

	const uploadButton = useMemo(
		() => (
			<div>
				<PlusOutlined />
				<div style={{ marginTop: 8, fontSize: '.7rem' }}>
					{trans('upload_text')}
				</div>
			</div>
		),
		[t]
	);

	return (
		<WrapperFormItem
			label={label && <WrapperLabel>{label}</WrapperLabel>}
			help={(error?.message || errors.file?.message) as String}
			validateStatus={error || errors.file ? 'error' : ''}
		>
			<ConfigProvider locale={LOCALES[language]}>
				<Upload
					accept="image/png,image/jpg,image/jpeg,image/gif"
					onPreview={handlePreview}
					onChange={handleChange}
					customRequest={uploadImage}
					onRemove={() => {
						onChange('');
						clearErrors([name, 'file']);
					}}
					listType="picture-card"
					fileList={files}
					{...rest}
				>
					{files.length > 0 ? null : uploadButton}
				</Upload>
			</ConfigProvider>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</WrapperFormItem>
	);
}

export default FormUploadImage;
