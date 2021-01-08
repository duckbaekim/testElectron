import React from "react";

type TodoProps = {
    title: string;
};
const Todo = ({ title }: TodoProps) => {
    return <div>{title}</div>;
};

export default Todo;
