import Button from "./Button";

export default {
    title: "Components/Button",
    component: Button,
    tags: ["autodocs", "button"],
};

export const Solid = {
    args: {
        variant: "solid",
        text: "Primary Button",
    },
};
export const SolidDisabled = {
    args: {
        ...Solid.args,
        disabled: true
    }
}

export const SolidLoading = {
    args: {
        ...Solid.args,
        loading: true
    }
}
export const Ghost = {
    args: {
        text: "Secondary Button",
        variant: "ghost",
    },
};

export const GhostDisabled = {
    args: {
        ...Ghost.args,
        disabled: true
    },
};

export const GhostLoading = {
    args: {
        ...Ghost.args,
        loading: true
    }
}