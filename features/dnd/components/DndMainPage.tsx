"use client";

import { useState } from "react";
import { columnType, Task } from "../types";
import Column from "./Column";

const COLUMNS: columnType[] = [
  {
    id: "TODO",
    title: "To Do",
  },
  {
    id: "IN_PROGRESS",
    title: "In PRogress",
  },
  {
    id: "DONE",
    title: "Done",
  },
];

const INITIAL_TASKS: Task[] = [
  {
    id: "1",
    title: "Research Project",
    description: "Gather requirements and create initial documentation",
    status: "TODO",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "TODO",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "IN_PROGRESS",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    status: "DONE",
  },
];

const DndMainPage = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  return (
    <div className="p-4">
      <div className="flex gap-8">
        {COLUMNS.map((column) => {
          return (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DndMainPage;
