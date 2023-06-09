import styles from "./PrivateProject.module.css";

const YoloAPI = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>YOLO C++ API</h1>
			<div className={styles.section}>
				<h2 className={styles.subtitle}>Overview</h2>
				<p>
					The YOLO C++ API project, featuring a user-friendly GUI, is designed to enable
					real-time object detection using the Jetson Nano device's camera. Users can
					effortlessly choose a specific YOLO model, start and stop the detection process,
					and customize object detection settings such as confidence and NMS thresholds
					directly through the interface. With the primary goal of developing an intuitive
					and engaging GUI, this project offers a seamless experience for users to perform
					real-time object detection and easily identify detected objects through bounding
					boxes and labels.
				</p>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Skills Utilized</h2>
				<ul className={styles.skills}>
					<li>C++</li>
					<li>OpenCV</li>
					<li>Deep Learning</li>
					<li>YOLO Object Detection</li>
					<li>Machine Learning</li>
					<li>QT Designer</li>
					<li>Valgrind</li>
				</ul>
			</div>

			<div className={styles.section}>
				<h2 className={styles.subtitle}>Screenshots</h2>
				<div className={styles.medias}>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/yoloAPI/detectionOff.png"
							alt="GUI with detection off"
						/>
						<figcaption>GUI With Detection Not Started</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/yoloAPI/v7-tiny.png"
							alt="Detections Using YOLOv7-Tiny"
						/>
						<figcaption>Detections Using YOLOv7-Tiny</figcaption>
					</figure>
					<figure>
						<img
							className={styles.media}
							src="/privateProjects/yoloAPI/v7.png"
							alt="Detections Using YOLOv7"
						/>
						<figcaption>Detections Using YOLOv7</figcaption>
					</figure>
				</div>
			</div>
		</div>
	);
};

export default YoloAPI;
