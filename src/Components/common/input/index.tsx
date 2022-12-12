import { Input, FormGroup, Label } from 'reactstrap';
import classNames from 'classnames';
import styled from 'styled-components';

const InputStyle = styled(FormGroup)``;

function InputComponent({ label, className, ...props }: any) {
	return (
		<InputStyle>
			{!!label && <Label>{label}</Label>}
			<Input className={classNames(className)} {...props} />
		</InputStyle>
	);
}

export default InputComponent;
