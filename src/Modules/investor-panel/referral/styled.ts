import styled from 'styled-components';

export const Wrapper = styled.div`
	.steps {
		background-color: #f5f7fa;
	}

	/* commission-tiers */
	.commission-tiers {
		.title {
			color: #fff;
		}
		.card {
			height: 100%;
		}
		.card-commission-tier {
			display: flex;
			justify-content: center;
			align-items: flex-end;
		}
		.amount {
			font-weight: 700;
			font-size: 128px;
			line-height: 128px;
			letter-spacing: -4px;
			-webkit-text-fill-color: transparent;
			background: linear-gradient(310deg, #141727, #3a416f);
			-webkit-background-clip: text;
		}
		.percent {
			font-weight: 700;
			font-size: 40px;
			line-height: 52px;
			-webkit-text-fill-color: transparent;
			background: linear-gradient(310deg, #141727, #3a416f);
			-webkit-background-clip: text;
			margin-bottom: 11px;
		}
		.description {
			font-weight: 400;
			font-size: 18px;
			line-height: 26px;
			text-align: center;
			margin-top: 20px;
		}
		.card-border {
			box-sizing: border-box;
			width: calc(100% - 24px);
			height: 64px;
			border-radius: 16px;
			z-index: 0;
			position: absolute;
			bottom: -32px;
			background: linear-gradient(310deg, #141727, #3a416f);
			left: 12px;
		}
	}

	/* terms-conditions */
	.terms-conditions {
		.list-terms-conditions {
			padding: 0;
			list-style: none;
			margin: 32px 0 0;
			li {
				list-style: none inside none;
				font-size: 14px;
				font-weight: 400;
				line-height: 24px;
				margin-bottom: 24px;
			}
		}

		.item {
			display: flex;
			justify-content: start;
			align-items: baseline;
		}
		.number {
			font-size: 16px;
			font-weight: 600;
			color: var(--bs-heading-color);
			line-height: 24px;
			margin-right: 9px;
		}
		.content {
			white-space: pre-wrap;
			font-size: 16px;
			font-weight: 400;
			color: #81858c;
			line-height: 24px;
		}
	}
`;
