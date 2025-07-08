import { columnType, Task } from "../types";
import TaskCard from "./TaskCard";

type ColumnProps = {
  column: columnType;
  tasks: Task[];
};

const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <div className="flex flex-col bg-neutral-800 p-4 rounded-lg w-80">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-col flex-1 gap-4">
        {tasks.map((eachTask) => {
          return <TaskCard key={eachTask.id} task={eachTask} />;
        })}
      </div>
    </div>
  );
};

export default Column;
