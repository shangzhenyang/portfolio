"use client";

import { isChinaSite, t } from "@/i18n";
import avatar from "@/images/avatar-transparent.png";
import {
	faBilibili,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExportedImage from "next-image-export-optimizer";
import { useEffect, useState } from "react";

function Profile(): JSX.Element {
	const buttonStyles = "items-center bg-white/10 border font-inherit text-inherit cursor-default flex gap-1 justify-center transition-colors duration-200 w-[300px] px-5 py-2 rounded-lg border-solid border-white/20 focus:bg-white/20 hover:bg-white/20 hover:shadow active:bg-white/15";

	const [isChinaUser, setIsChinaUser] = useState<boolean>(isChinaSite);

	const { timeZone } = Intl.DateTimeFormat().resolvedOptions();

	useEffect(() => {
		if (!isChinaSite) {
			setIsChinaUser(timeZone === "Asia/Shanghai");
		}
	}, [timeZone]);

	return (
		<main className="items-center flex grow-0 shrink-0 basis-[calc(100%-46px)] flex-col justify-center overflow-auto text-center md:shadow-[0_0_5px_black] md:flex-1 md:w-[calc(100%-400px)]">
			<div className="w-full">
				<ExportedImage
					className="border block mx-auto my-0 rounded-full border-solid border-white/20 md:h-[150px] md:w-[150px]"
					src={avatar}
					alt="Avatar"
					height={100}
					width={100}
					draggable={false}
					placeholder="empty"
					priority={true}
				/>
				<h1 className="text-2xl mt-5 mb-2.5 mx-0">
					{t("shangzhenYang")}
				</h1>
				<div className="leading-6 mt-2.5 mb-7 mx-4">
					{isChinaSite &&
						<>
							<div>现就读于华盛顿大学计算机系</div>
							<div>
								<a
									className="transition-opacity duration-200 border-b border-solid hover:opacity-80 active:opacity-60"
									href="https://www.retiehe.com/"
									rel="noopener"
								>
									热铁盒
								</a>
								首席执行官兼软件工程师
							</div>
						</>
					}
					{!isChinaSite &&
						<>
							<div>CS Student at University of Washington</div>
							<div>Full-Stack Software Engineer</div>
						</>
					}
				</div>
			</div>
			<div className="flex flex-col gap-2 mx-auto">
				<a
					className={buttonStyles}
					href="https://github.com/shangzhenyang"
				>
					<FontAwesomeIcon className="h-4" icon={faGithub} />
					GitHub
				</a>
				{!isChinaUser &&
					<a
						className={buttonStyles}
						href="https://www.linkedin.com/in/shangzhenyang/"
					>
						<FontAwesomeIcon className="h-4" icon={faLinkedin} />
						LinkedIn
					</a>
				}
				{isChinaUser &&
					<a
						className={buttonStyles}
						href="https://space.bilibili.com/5931839"
					>
						<FontAwesomeIcon className="h-4" icon={faBilibili} />
						{t("bilibili")}
					</a>
				}
			</div>
		</main>
	);
}

export default Profile;
