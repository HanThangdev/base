import styled from 'styled-components';

export const Wrapper = styled.div``;

export const ImageDiccussion = styled.img`
	width: 40px;
	height: 40px;
	padding: 3px;
	background-color: rgba(255, 255, 255, 1);
`;

export const Avatar = styled.img`
	width: 50px;
	height: 50px;
	background-color: rgba(255, 255, 255, 1);
`;

export const Button = styled.div`
	&:hover {
		cursor: pointer;
		color: #cb0c9f;
	}
`;

interface IconLikeProps {
	disabled: boolean;
}

export const IconLike = styled.div<IconLikeProps>`
	color: ${(props) => (props.disabled ? '' : '#cb0c9f')};
	&:hover {
		cursor: pointer;
		color: #cb0c9f;
	}
`;

export const CommentItem = styled.div<IconLikeProps>`
	color: ${(props) => (props.disabled ? '' : '#cb0c9f')};
	&:hover {
		cursor: pointer;
		color: #cb0c9f;
	}
`;

export const TagName = styled.span`
	&:hover {
		cursor: pointer;
	}
`;
