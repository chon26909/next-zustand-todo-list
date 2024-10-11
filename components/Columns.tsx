import React from 'react';
import Column from './Column';

type Props = {};

const Columns = (props: Props) => {
    return (
        <div className='mt-10 flex gap-6 lg:gap-12'>
            <Column title='Todo' status='TODO' />
            <Column title='In Progress' status='IN_PROGRESS' />
            <Column title='Done' status='DONE' />
        </div>
    );
};

export default Columns;
