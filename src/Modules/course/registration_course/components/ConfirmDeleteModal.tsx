import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { Modal } from '@components';

type PropsType = {
	t: (key: string, args?: any) => {};
	isVisible: boolean;
	setIsVisble: Dispatch<SetStateAction<boolean>>;
	onSubmit: () => void;
	numberOfSelectedRecord: number;
	disabledSubmit: boolean;
};

function ConfirmDeleteModal({
	t,
	isVisible,
	setIsVisble,
	onSubmit,
	numberOfSelectedRecord,
	disabledSubmit,
}: PropsType) {
	const { handleSubmit } = useForm();

	return (
		<Modal
			visible={isVisible}
			onCancel={() => setIsVisble(false)}
			onSubmit={handleSubmit(onSubmit)}
			disabledSubmit={disabledSubmit}
			title={t('registration_course.management.delete_dialog_title')}
			onCancelText={t('common:cancel')}
			onSubmitText={t('common:delete')}
			type="error"
		>
			{t('registration_course.management.message_confirm_delete', {
				amount: numberOfSelectedRecord,
			})}
		</Modal>
	);
}

export default ConfirmDeleteModal;
