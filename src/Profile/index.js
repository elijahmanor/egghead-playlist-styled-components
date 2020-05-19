import React, { useState } from "react";
import classNames from "classnames";

import "./styles.css";

const FILTERS = [
	"grayscale(1)",
	"sepia(1)",
	"saturate(8)",
	"invert(.8)",
	"brightness(3)",
	"contrast(4)",
];

export default function Profile({ className, user }) {
	const classes = classNames("Profile", className);
	const [filterIndex, setFilterIndex] = useState(0);
	const changeType = () => {
		setFilterIndex((filterIndex + 1) % FILTERS.length);
	};
	return (
		<div className={classes}>
			<div
				onClick={changeType}
				className="Profile-background"
				style={{
					backgroundImage: `url(${user.backgroundUrl})`,
					filter: FILTERS[filterIndex],
				}}
			/>
			<header className="Profile-header">
				<img className="Profile-avatar" src={user.avatar} alt={user.name} />
				<div>
					<div className="Profile-fullName">{user.name}</div>
					<div className="Profile-userName">@{user.username}</div>
				</div>
			</header>
			<div
				className="Profile-bio"
				dangerouslySetInnerHTML={{
					__html: user.aboutMe,
				}}
			/>
		</div>
	);
}
