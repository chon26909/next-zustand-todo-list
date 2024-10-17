'use client';

import React, { useEffect, useState } from 'react';
import { Switch } from './ui/switch';

const Restore = () => {
    const [restore, setRestore] = useState(false);

    useEffect(() => {
        setRestore(localStorage.getItem('restore') === 'true');
    }, []);

    const handleToggle = () => {
        setRestore(!restore);
        localStorage.setItem('restore', !restore ? 'true' : 'false');
    };

    return (
        <div className='my-5'>
            <div>save task local storage ?</div>
            <Switch checked={restore} onCheckedChange={handleToggle} />
        </div>
    );
};

export default Restore;
