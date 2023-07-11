import Button from "./Button";

export default {
    title: "Button",
    component: Button,
    tags: ["autodocs", "button"],
};

export const Primary = {
    args: {
        variant: "primary",
        text: "Primary Button",
    },
};
export const PrimaryDisabled = {
    args: {
        ...Primary.args,
        disabled: true
    }
}

export const PrimaryLoading = {
    args: {
        ...Primary.args,
        loading: true
    }
}
export const Secondary = {
    args: {
        text: "Secondary Button",
        variant: "secondary",
    },
};

export const SecondaryDisabled = {
    args: {
        ...Secondary.args,
        disabled: true
    },
};

export const SecondaryLoading = {
    args: {
        ...Secondary.args,
        loading: true
    }
}