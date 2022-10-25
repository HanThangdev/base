import styled from "styled-components";

interface IsVisibleSideBar {
	visible: boolean;
}

export const ToggleNav = styled.div<IsVisibleSideBar>`
	right: ${(props) => (props.visible ? "0px" : "-380px")} !important;
`;

export const Button = styled.button`
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`;