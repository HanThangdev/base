import { Button } from 'reactstrap';
import classNames from 'classnames';
import styled from 'styled-components';

const ButtonStyle = styled(Button)``;

function ButtonComponent({
	children,
	className,
	iconLeft,
	iconRight,
	...props
}: any) {
	return (
		<ButtonStyle className={classNames(className)} {...props}>
			{iconLeft}
			{children}
			{iconRight}
		</ButtonStyle>
	);
}

export default ButtonComponent;
