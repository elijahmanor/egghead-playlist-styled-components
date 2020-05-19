import React, { useState } from "react";
import classNames from "classnames";

import {
	StyledProfile,
	Background,
	Header,
	Avatar,
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

export default function Profile({ className, user }) {
	const [filterIndex, setFilterIndex] = useState(0);
	const changeType = () => {
		setFilterIndex((filterIndex + 1) % FILTERS.length);
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
				<Avatar src={user.avatar} alt={user.name} />
				<div>
					<FullName>{user.name}</FullName>
					<UserName>@{user.username}</UserName>
				</div>
			</Header>
			<Bio
				dangerouslySetInnerHTML={{
					__html: user.aboutMe,
				}}
			/>
		</StyledProfile>
	);
}
