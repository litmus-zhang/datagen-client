import Tabs from "./Tabs";



export default {
    title: "Components/Tab",
    component: Tabs,
    tags: ["autodocs", "tab"],
};

export const Default = {
    args: {
        tabs: ["Login", "Signup", "Forgot password", "Sample Account", "Send mail"],
        defaultActive: 0,
        tabContent: ["Login", "Signup", "Forgot password", "Sample Account", "Send mail"],

    }
}