"use client";

import { useState } from "react";
import { columnType, Task, taskStatus } from "../types";
import Column from "./Column";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

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
    status: "POOL",
  },
  {
    id: "2",
    title: "Design System",
    description: "Create component library and design tokens",
    status: "POOL",
  },
  {
    id: "3",
    title: "API Integration",
    description: "Implement REST API endpoints",
    status: "POOL",
  },
  {
    id: "4",
    title: "Testing",
    description: "Write unit tests for core functionality",
    status: "POOL",
  },
];

const DndMainPage = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as taskStatus;

    setTasks(() =>
      tasks.map((eachTask) =>
        eachTask.id === taskId
          ? {
              ...eachTask,
              status: newStatus,
            }
          : eachTask
      )
    );
  }
  return (
    <div className="p-4 mx-auto gap-8 w-[1440px]">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="flex gap-8 mb-12">
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
          <div>
            <Column
              column={{ id: "POOL", title: "Task Pool" }}
              tasks={tasks.filter((task) => task.status === "POOL")}
            />
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default DndMainPage;
