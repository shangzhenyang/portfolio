import styles from "@/styles/Footer.module.css";

function Footer() {
	return (
		<footer className={styles["footer"]}>
			<div>&copy; {new Date().getFullYear()} Shangzhen Yang</div>
			<div>Apple and the Apple Logo are registered trademarks of Apple Inc.</div>
			<div>Google Play and the Google Play logo are trademarks of Google LLC.</div>
		</footer>
	);
}

export default Footer;
