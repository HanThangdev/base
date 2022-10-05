import { Fragment } from 'react';
import { Breadcrumb as BC } from 'antd';

function Breadcrumb({ data, onSelectItem }: any) {
	return (
		<BC separator="">
			<BC.Item href="" onClick={() => onSelectItem()}>
				/
			</BC.Item>
			{data?.map((item: any, index: number) => (
				<Fragment key={item.key}>
					{index > 0 && <BC.Separator />}
					{index < data.length - 1 ? (
						<BC.Item href="" onClick={() => onSelectItem(item)}>
							{item.text}
						</BC.Item>
					) : (
						<BC.Item>{item.text}</BC.Item>
					)}
				</Fragment>
			))}
		</BC>
	);
}

export default Breadcrumb;
