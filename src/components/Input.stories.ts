import Input from "./Input"

export default {
    title: "Components/Input",
    component: Input,
    tags: ["autodocs", "input"],
};

export const Default = {
    args: {
        label: "Fullname",
        type: "text",
        placeholder: "James Jones"
    }
}

export const Error = {
    args: {
        ...Default.args,
        errorMsg: "Please enter a valid email"
    }
}