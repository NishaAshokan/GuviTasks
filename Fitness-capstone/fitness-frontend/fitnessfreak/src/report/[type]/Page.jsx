import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { AiFillEdit } from 'react-icons/ai';
import CaloriIntakePopup from '@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup';
import './ReportPage.css';

const Page = () => {
    const color = '#ffc20e';

    const chartsParams = {
        height: 300,
    };

    const [dataS1, setDataS1] = useState(null);

    useEffect(() => {
        const getDataForS1 = async () => {
            let temp = [
                {
                    date: 'Thu Sep 28 2023 20:30:30 GMT+0530 (India Standard Time)',
                    value: 2000,
                    unit: 'kcal'
                },
                // other data entries...
            ];

            let dataForLineChart = temp.map(item => JSON.stringify(item.value));
            let dataForXAxis = temp.map(item => new Date(item.date));

            setDataS1({
                data: dataForLineChart,
                title: '1 Day Calorie Intake',
                color: color,
                xAxis: {
                    data: dataForXAxis,
                    label: 'Last 10 Days',
                    scaleType: 'time'
                }
            });
        };

        getDataForS1();
    }, []);

    const [showCalorieIntakePopup, setShowCalorieIntakePopup] = useState(false);

    return (
        <div className='reportpage'>
            {/* LineChart components */}
            {/* Edit button */}
            <button className='editbutton' onClick={() => setShowCalorieIntakePopup(true)}>
                <AiFillEdit />
            </button>
            {/* CaloriIntakePopup */}
            {showCalorieIntakePopup && <CaloriIntakePopup setShowCalorieIntakePopup={setShowCalorieIntakePopup} />}
        </div>
    );
};

export default Page;
