import { create } from 'zustand';

export type Status = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Task = {
    id: string;
    title: string;
    description: string;
    status: Status;
};

export type State = {
    tasks: Task[];
};

export type Actions = {
    addTask: (title: string, description?: string) => void;
};
