import Tabs from "./Tabs";



export default {
    title: "Tab",
    component: Tabs,
    tags: ["autodocs", "tab"],
};

export const Default = {
    args: {
        tabs: ["Login", "Signup"],
        defaultActive: 0
    }
}