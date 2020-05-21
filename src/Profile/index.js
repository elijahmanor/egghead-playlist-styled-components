import React, { useState } from "react";

import {
	StyledProfile,
	Background,
	Header,
	Avatar,
	Names,
	FullName,
	UserName,
	Bio,
} from "./styles";

const FILTERS = [
	"grayscale(1)",
	"sepia(1)",
	"saturate(8)",
	"invert(.8)",
	"brightness(3)",
	"contrast(4)",
];

export default function Profile({
	className,
	user,
}) {
	const [filterIndex, setFilterIndex] = useState(
		0
	);
	const changeType = () => {
		setFilterIndex(
			(filterIndex + 1) % FILTERS.length
		);
	};
	return (
		<StyledProfile className={className}>
			<Background
				onClick={changeType}
				style={{
					backgroundImage: `url(${user.backgroundUrl})`,
					filter: FILTERS[filterIndex],
				}}
			/>
			<Header>
				<Avatar
					src={user.avatar}
					alt={user.name}
				/>
				<Names>
					<FullName>{user.name}</FullName>
					<UserName>@{user.username}</UserName>
				</Names>
			</Header>
			<Bio
				dangerouslySetInnerHTML={{
					__html: user.aboutMe,
				}}
			/>
		</StyledProfile>
	);
}
