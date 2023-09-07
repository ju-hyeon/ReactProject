import React, {useState} from 'react';
import {Modal, Button} from 'antd';

import Details from './Details'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function PageHeader({pageHeaderName}) {

    return (
        <>
            <div className="bg-indigo-50 p-4 font-bold text-lg text-gray-700 mb-6">
                <FontAwesomeIcon icon={["far", "folder"]} className="w-5 h-5 mr-2" />
                <span>{pageHeaderName}</span>
            </div>
        </>

    );
};


export default PageHeader;