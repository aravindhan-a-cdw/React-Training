import { useCallback, useEffect, useState } from "react";

type AdTimeProps = {
	adWaitTime: number;
	adTime: number;
};

const withAdvertisement =
	(props: AdTimeProps) =>
	<P extends {}>(
		WrappedComponent: React.ComponentType<P>
	): React.FC<Omit<P, "hocProps">> => {
		const { adWaitTime, adTime } = props;

		return (props: Omit<P, "hocProps">) => {
			const [counter, setCounter] = useState(0);
			const [adImage] = useState(Math.ceil(Math.random() * 2));
			const [isAdCountDown, setIsAdCountDown] = useState(false);
			const [showAd, setShowAd] = useState(false);
			const [adCompleted, setAdCompleted] = useState(false);
			const [pauseAd, setPauseAd] = useState(true);
			const [started, setStarted] = useState(false);

			const resetAd = useCallback(() => {
				if (!showAd) {
					setIsAdCountDown(true);
					setAdCompleted(false);
					setCounter(adWaitTime);
				}
			}, [showAd]);

			const startAd = useCallback(() => {
				if (started) return;
				setStarted(true);
				setIsAdCountDown(true);
				setCounter(adWaitTime);
				setPauseAd(false);
			}, [started]);

			const hocProps = {
				adImage,
				isAdCountDown,
				counter,
				showAd,
				adCompleted,
				pauseHandler: setPauseAd,
				resetAd,
				startAd,
			};

			useEffect(() => {
				if (pauseAd || started === false) return;

				if (!adCompleted) {
					const timerInterval = setInterval(() => {
						setCounter((state) => state - 1);
					}, 1000);

					if (counter === 0 && isAdCountDown === true) {
						setShowAd(true);
						setCounter(adTime);
						setIsAdCountDown(false);
					}

					if (counter === 0 && showAd === true) {
						setAdCompleted(true);
						setShowAd(false);
					}

					return () => {
						clearInterval(timerInterval);
					};
				}
			}, [counter, adCompleted, showAd, isAdCountDown, pauseAd, started]);

			return <WrappedComponent {...(props as P)} hocProps={hocProps} />;
		};
	};

export default withAdvertisement;
