import { Task } from "../types";

type ColumnProps = {
  task: Task;
};

const TaskCard = ({ task }: ColumnProps) => {
  return (
    <div className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md">
      <h3 className="font-medium text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
    </div>
  );
};

export default TaskCard;
