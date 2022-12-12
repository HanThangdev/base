import { UncontrolledCollapse } from 'reactstrap';
import classNames from 'classnames';
import styled from 'styled-components';

const CollapseStyle = styled.ul``;

function CollapseComponent({
	children,
	className,
	iconLeft,
	iconRight,
	...props
}: any) {
	return (
		<CollapseStyle className={classNames(className)} {...props}>
			{/* {children.map((_: any, index: number) => {
				return (
					<li className="title" key={index} id={`Collapse_${index}`}>
						<div id={`Collapse_${index}`} className="title">
							<span>How long does</span>
						</div>
						<UncontrolledCollapse
							toggler={`#Collapse_${index}`}
							className="description"
						>
							<span>Referral</span>
						</UncontrolledCollapse>
					</li>
				);
			})} */}
			<li className="title" key={1} id={`Collapse_${1}`}>
				<div id={`Collapse_${1}`} className="title">
					<span>How long does</span>
				</div>
				<UncontrolledCollapse
					toggler={`#Collapse_${1}`}
					className="description"
				>
					<span>Referral</span>
				</UncontrolledCollapse>
			</li>
		</CollapseStyle>
	);
}

export default CollapseComponent;
