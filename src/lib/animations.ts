export const OPACITY_LEFT = {
    initial: {
        opacity: 0,
        x: -100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
};
export const OPACITY_RIGHT = {
    initial: {
        opacity: 0,
        x: 100,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
    exit: {
        opacity: 0,
        x: 100,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
};

export const OPACITY_BOTTOM = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {

        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
    exit: {
        opacity: 0,
        y: 100,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
};


export const OPACITY_TOP = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {

        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
};



export const OPACITY = {
    initial: {
        opacity: 0,
    },
    animate: {

        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.97, 0.01, 0.36, 0.99],
        },
    },
};

export const STAGGER_CHILDREN = {
    animate: {
        transition: {
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.05,
        },
    },
}
