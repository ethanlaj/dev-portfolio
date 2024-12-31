import React from "react";
import Projects from "../components/Projects";
import "../App.css";

const projects = [
	{
		title: "Community Connection Tracker",
		description: "A web app created to track communications between contact persons in organizations and college staff members",
		githubLink: "https://github.com/ethanlaj/community",
		tools: ["React.JS", "TypeScript", "Express.JS", "MySQL", "Sequelize", "Bootstrap"],
		previewImageUrl: "/previews/community.png",
		link: "https://github.com/ethanlaj/community/blob/main/docs/Powerpoint.pdf",
		linkBtnText: "View Presentation",
	},
	{
		title: "Solana WordWave",
		description: "A daily word learning game that rewards players with tokens on the Solana blockchain",
		link: "https://wordwave.ethanlaj.dev",
		githubLink: "https://github.com/ethanlaj/SolanaWordWave",
		tools: ["Web3.JS", "React.JS", "JavaScript", "Express.JS", "MySQL", "Sequelize", "Chakra UI"],
		previewImageUrl: "/previews/wordwave.png",
	},
	{
		title: "Photo Portfolio",
		description:
			"A digital portfolio for showcasing my photographs as part of the Digital Photography course at Elizabethtown College",
		link: "https://photos.ethanlaj.dev",
		githubLink: "https://github.com/ethanlaj/photo-portfolio",
		tools: ["React.JS", "TypeScript", "Chakra UI"],
		previewImageUrl: "/previews/photoPortfolio.png",
	},
	{
		title: "YOLO C++ API",
		description: "Real time object detection with a GUI to control detection settings",
		route: "/projects/YoloAPI",
		githubLink: "https://github.com/ethanlaj/yolo-cpp-api",
		tools: ["C++", "OpenCV", "QT", "GStreamer", "Jetson Nano"],
		previewImageUrl: "/privateProjects/yoloAPI/v7.png",
	},
	{
		title: "Room Signage",
		description:
			"Webpage that shows when certain rooms are available to use at Elizabethtown College",
		route: "/projects/RoomSignage",
		tools: ["JavaScript", "HTML", "CSS"],
		previewImageUrl: "/previews/roomSignage.png",
	},
	{
		title: "LabShare",
		description: "A collaborative social networking platform designed for scientists",
		link: "https://labshare.ethanlaj.dev",
		githubLink: "https://github.com/ethanlaj/labshare",
		tools: ["PHP", "JavaScript", "JQuery", "HTML", "CSS", "Bootstrap", "MySQL", "Google Cloud"],
		previewImageUrl: "/previews/labshare.png",
	},
	{
		title: "Couple Trivia",
		description:
			"A fun Valentine's trivia game to test and strengthen couples' knowledge of each other",
		link: "https://coupletrivia.ethanlaj.dev",
		linkBtnText: "Play Now",
		githubLink: "https://github.com/ethanlaj/coupletrivia",
		tools: ["React.JS", "JavaScript", "Node.js", "HTML", "CSS", "Bootstrap"],
		previewImageUrl: "/previews/coupletrivia.png",
	},
	{
		title: "TechOps Site",
		description:
			"Application for managing event staff at Elizabethtown College, utilized campus-wide for special events",
		route: "/projects/TechOps",
		tools: ["C#", "ASP.NET Core", "JavaScript", "Bootstrap", "SQL Server"],
		previewImageUrl: "/previews/techops.png",
	},
	{
		title: "Checkout System",
		description: "Asset management system for the Elizabethtown College IT department",
		route: "/projects/CheckoutSystem",
		tools: ["C#", "ASP.NET Core", "JavaScript", "Bootstrap", "SQL Server"],
		previewImageUrl: "/previews/checkoutSystem.png",
	},
	{
		title: "Amazon Affiliate Bot",
		description: "Automation of posting amazon affiliate promo codes to a Facebook group",
		route: "/projects/AmazonAffiliateBot",
		githubLink: "https://github.com/ethanlaj/amazon-affiliate",
		tools: ["Node.js", "JavaScript", "NPM", "Puppeteer", "Raspberry Pi"],
		previewImageUrl: "/previews/amazonAffiliateBot.png",
	},
	{
		title: "Resell Bot",
		description:
			"Identifies profitable resale deals by comparing eBay and Walmart prices, alerting users on Discord",
		route: "/projects/ResellBot",
		githubLink: "https://github.com/ethanlaj/resell-bot",
		tools: ["Node.js", "JavaScript", "NPM", "Heroku"],
		previewImageUrl: "/previews/resellBot.png",
	},
];

const App: React.FC = () => {
	return (
		<main>
			<Projects projects={projects} />
		</main>
	);
};

export default App;
