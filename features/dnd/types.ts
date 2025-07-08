export type taskStatus = "TODO" | "IN_PROGRESS" | "DONE";

export type Task = {
  id: string;
  status: taskStatus;
  title: string;
  description: string;
};

export type columnType = {
  id: taskStatus;
  title: string;
};
