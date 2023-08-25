import React, {useState} from 'react';
import {Modal, Button} from 'antd';

import Details from './Details'

function PageHeader({pageHeaderName}) {

    return (
        <>
            <div className="bg-indigo-50 p-4 font-bold text-lg text-gray-700 mb-6">
                <span className="material-icons mr-2 text-2xl">folder_open</span>
                <span>{pageHeaderName}</span>
            </div>
        </>

    );
};


export default PageHeader;