import styled from "styled-components/macro";

export const StyledProfile = styled.div`
	color: black;
	background-color: white;
	position: relative;
	max-width: 400px;
	border: 1px solid black;
	overflow: hidden;
	margin: 0 1rem;
`;

export const Background = styled.div`
	height: 5rem;
	background-size: cover;
	background-position: center top;
`;

export const Header = styled.header`
	display: flex;
	padding: 1rem 1rem 0 1rem;

	@media (max-width: 21rem) {
		flex-direction: column;
	}
`;

export const Avatar = styled.img`
	height: 100%;
	width: 7rem;
	border-radius: 50%;
	margin-right: 1rem;
	margin-top: -3rem;
	border: 0.3rem solid white;
	align-self: center;
	filter: drop-shadow(0.3rem 0.3rem 0.3rem #999);

	@media (max-width: 21rem) {
		margin: -3rem 0 1rem 0;
	}
`;

export const Names = styled.div`
	@media (max-width: 21rem) {
		text-align: center;
	}
`;

export const FullName = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`;

export const UserName = styled.div`
	color: #999;
`;

export const Bio = styled.div`
	padding: 1rem;
`;
