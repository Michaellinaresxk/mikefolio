export const transition = { type: "spring", duration: 2 };

export const slideAnimation = (direction) => {
	return {
		initial: {
			x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
			y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
			opacity: 0,
			transition: { ...transition, delay: 0.5 },
		},
		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: { ...transition, delay: 0 },
		},
		exit: {
			x: direction === "left" ? -200 : direction === "right" ? 200 : 0,
			y: direction === "up" ? 200 : direction === "down" ? -200 : 0,
			transition: { ...transition, delay: 0.5 },
		},
	};
};

export const fadeAnimation = {
	initial: {
		opacity: 0,
		transition: { ...transition, delay: 0.5 },
	},
	animate: {
		opacity: 1,
		transition: { ...transition, delay: 0 },
	},
	exit: {
		opacity: 0,
		transition: { ...transition, delay: 0 },
	},
};

export const homeTextAnimation = {
	initial: { x: 200, opacity: 0 },
	animate: { x: 0, opacity: 1 },
	transition: {
		type: "spring",
		damping: 20,
		stiffness: 60,
		restDelta: 0.001,
		duration: 3,
	},
};

export const homeContentAnimation = {
	initial: { y: 200, opacity: 0 },
	animate: { y: 0, opacity: 1 },
	transition: {
		type: "spring",
		damping: 20,
		stiffness: 50,
		restDelta: 0.001,
		duration: 2.5,
		delay: 0.5,
		delayChildren: 0.5,
	},
};

export const homeContainerAnimation = {
	initial: { x: -200, opacity: 0, transition: { ...transition, delay: 0.5 } },
	animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
	exit: { x: -200, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const sidebar = {
	open: (width = 300) => ({
		clipPath: `circle(${width * 2 + 200}px at calc(100% - 40px) 40px)`,
		transition: {
			type: "spring",
			stiffness: 20,
			damping: 10,
			restDelta: 2,
			duration: 2,
		},
	}),
	closed: {
		clipPath: "circle(30px at calc(100% - 40px) 40px)",
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 200,
			damping: 40,
			duration: 2,
		},
	},
};

export const variants_menu_items = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 150, velocity: -50, duration: 2 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 150, duration: 2 },
		},
	},
};

export const variants_navigation = {
	open: {
		transition: { staggerChildren: 0.1, delayChildren: 0.3 },
	},
	closed: {
		transition: { staggerChildren: 0.07, staggerDirection: -1 },
	},
};
