import { useCallback, useEffect, useState } from "react";

/*
	@author Aravindhan A
	@description This is a HOC to have common logic for showing of advertisements.
*/

type AdTimeProps = {
	adWaitTime: number;
	adTime: number;
};

type HOCProps = {
	adImage: number;
	isAdCountDown: boolean;
	counter: number;
	showAd: boolean;
	adCompleted: boolean;
	pauseHandler: (arg0: boolean) => void;
	resetAd: () => void;
	startAd: () => void;
};

const withAdvertisement =
	(props: AdTimeProps) =>
	<P extends {}>(
		WrappedComponent: React.ComponentType<P>
	): React.FC<Omit<P, keyof HOCProps>> => {
		const { adWaitTime, adTime } = props;

		return (props) => {
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
				// This is a handler to start ad only when the timer hasn't started.
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
				// This controls the timer and shows ad when timer ends.
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

			return <WrappedComponent {...(props as P)} {...hocProps} />;
		};
	};

export default withAdvertisement;
