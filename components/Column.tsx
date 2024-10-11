import React from 'react';
import Task from './Task';

const tasks = [
    {
        id: '1234',
        title: 'Task 1',
        description: 'some description',
        status: 'TODO'
    }
];

type ColumnProps = {
    title: string;
    status: string;
};

const Column = (props: ColumnProps) => {
    const filteredTasks = tasks.filter((task) => task.status === props.status);

    return (
        <section className='h-[600px] flex-1'>
            <h2 className='ml-1 font-serif text-2xl font-semibold'>{props.title}</h2>

            <div className='mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4'>
                <div className='flex flex-col gap-4'>
                    {filteredTasks.map((task) => (
                        <Task key={task.id} {...task} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Column;
