import styles from "./PrivateProject.module.css";

const TechOps = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Room Signage</h1>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Overview</h2>
				<p>
					Room Signage is a web application designed to display room availability at
					Elizabethtown College. While commercial alternatives exist, this solution offers
					a more cost-effective and customizable option.
				</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Project Details</h2>
				<ol>
					<li>Retrieves event information from the campus scheduling platform.</li>
					<li>
						Indicates a room as unavailable during closed hours or when an event is
						taking place.
					</li>
					<li>
						Displays distinct background images depending on the room's open or closed
						status.
					</li>
					<li>Adjusts the webpage border color to reflect the room's availability.</li>
					<li>
						Effortlessly incorporate additional rooms or locations with tailored
						settings.
					</li>
				</ol>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Screenshots</h2>
				<div className={styles.medias}>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/roomSignage/available.png"
							alt="Room Available"
						/>
						<figcaption>Room Available</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/roomSignage/unavailable.png"
							alt="Room Unavailable"
						/>
						<figcaption>Room Unavailable</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default TechOps;
