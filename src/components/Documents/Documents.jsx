import * as React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import img1 from '../../assets/img/interactive-rating.png'

import './style.css'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="div">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function Documents() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [isImg, setIsImg] = useState("/src/assets/img/interactive-rating.png")

    const setChange = (changeImg: any) => {
        setIsImg(changeImg);
    };

    return (
        <Box
            sx={{ flexGrow: 1, fontFamily: 'var(--first-font)', display: 'flex', height: '404px' }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs"
                sx={{
                    borderRadius: '0 0 .5rem .5rem', backgroundColor: 'var(--dark-black)',
                    "& button": { padding: '.5rem 1rem ', width: '175px', minHeight: '2rem', color: 'var(--first-color)' },
                    "& button.:hover": { backgroundColor: 'var(--alt-color)' },
                    "& button.Mui-selected": { color: 'var(--first-color)', backgroundColor: 'var(--dark-grey)', fontWeight: 'var(--font-regular)' }
                }}
                TabIndicatorProps={{ style: { background: 'none' } }}
            >
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>all</span>
                        </div>
                    }
                    {...a11yProps(0)}
                    sx={{ color: 'var(--second-color)', fontFamily: 'var(--first-font)', textTransform: 'inherit', alignItems: 'flex-start', width: '144px' }}
                    className="tab__button"
                />
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>javascript</span>
                        </div>
                    }
                    {...a11yProps(1)}
                    sx={{ color: 'var(--second-color)', fontFamily: 'var(--first-font)', textTransform: 'inherit', alignItems: 'flex-start', width: '144px' }}
                    className="tab__button"
                />
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>react</span>
                        </div>
                    }
                    {...a11yProps(2)}
                    sx={{ color: 'var(--second-color)', fontFamily: 'var(--first-font)', textTransform: 'inherit', alignItems: 'flex-start', width: '144px' }}
                    className="tab__button"
                />
                <Tab
                    label={
                        <div className='tabs__label'>
                            <i className='bx bx-folder icon__label'></i>
                            <span>java</span>
                        </div>
                    }
                    {...a11yProps(3)}
                    sx={{ color: 'var(--second-color)', fontFamily: 'var(--first-font)', textTransform: 'inherit', alignItems: 'flex-start', width: '144px' }}
                    className="tab__button"
                />
                <Tab label={
                    <div className='tabs__label'>
                        <i className='bx bx-folder icon__label'></i>
                        <span>tailwind</span>
                    </div>
                }
                    {...a11yProps(4)}
                    sx={{ color: 'var(--second-color)', fontFamily: 'var(--first-font)', textTransform: 'inherit', alignItems: 'flex-start', width: '144px' }}
                    className="tab__button"
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div onClick={() =>
                    setChange("/src/assets/img/foto-1.png")
                }>
                    1
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} >
                2
            </TabPanel>
            <TabPanel value={value} index={2}>
                3
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
        </Box>
    );
}