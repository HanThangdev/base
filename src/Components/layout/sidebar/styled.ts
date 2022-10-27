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

export const NavbarIcon = styled.div`
	display: block;
  padding: 10px 0 10px 20px;
  margin: 5px 0;
  border-radius: 9999px;
	&:hover {
    background-color: var(--bs-gray-100);
		cursor:pointer
  }
	&:focus {
		background-color: var(--bs-gray-100);
}
`;