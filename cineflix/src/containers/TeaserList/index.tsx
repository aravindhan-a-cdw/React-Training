import { Await, useLoaderData, useRouteLoaderData } from "react-router-dom";
import Teaser from "../../components/Teaser";
import { HOME_CONSTANTS } from "../../constants/pageConstants";
import styles from "./styles.module.scss";
import { Suspense } from "react";

type TeaserData = {
	id: number;
	title: string;
	videoSrc: string;
};

// type TeaserListProp = {
// 	data: Array<TeaserData>;
// };

const TeaserList = () => {
	const teaserList = useLoaderData() as Array<TeaserData>;
	// const { data: teaserList } = props;
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<Await resolve={teaserList}>
				{(teaserList) => (
					<div className={styles.teasersSection}>
						<h4>{HOME_CONSTANTS.TEASER_TITLE}</h4>
						<div className={styles.teasersContainer}>
							{teaserList.map(
								(data: TeaserData, index: number) => (
									<Teaser key={index} data={data} />
								)
							)}
						</div>
					</div>
				)}
			</Await>
		</Suspense>
	);
};

export default TeaserList;
