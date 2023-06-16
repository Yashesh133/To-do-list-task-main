import '../App.css';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListIcon from '@mui/icons-material/List';
import GridViewIcon from '@mui/icons-material/GridView';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';


import { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    // TextField,
    // Box,
    Card,
    CardContent,
    Typography,
    Grid,
    // Autocomplete
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { deepPurple } from "@mui/material/colors";
import EditIcon from '@mui/icons-material/Edit';

// get all data from local storage
const getdatahandle = (i) => {
    const getdata = localStorage.getItem("list");
    if (getdata) {
        return JSON.parse(getdata);
    }
    else {
        return []
    }

}

// clear all data from local storage
const clearDAata = () => {
    localStorage.clear();
    window.location.reload();
}


function Home(props) {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        Title: "",
        Description: "",
        Date: "",
        options: "",
    });
    const [edit, setEdit] = useState("");

    const [arr, setArr] = useState(getdatahandle());
    // store data in state
    const handle = (i, newValue) => {
        // console.log(i.target.name, i.target.value);
        setData({ ...data, [i.target.name]: i.target.value });
        console.log(data);
    };
    // edit and store data
    const addnote = (i) => {
        i.preventDefault();
        setOpen(false);
        if (edit) {
            setArr(
                arr.map((i) => {
                    if (i === edit) {
                        return ({ ...i, Title: data.Title, Description: data.Description, Date: data.Date, options: data.options })
                    }
                    return i
                })
            )
            setData({ Title: "", Description: "", Date: "" })
        }
        else {
            setArr([...arr, data]);
            setData({ Title: "", Description: "", Date: "" })
        }
        setEdit("")

    };

    // Store data in local storage
    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(arr));
    }, [arr])

    // delete task
    const deletetask = (i) => {
        var a = arr.filter((ele, ind) => {
            return ind !== i
        })
        setArr(a);
    }

    // edit task
    const editTask = (i) => {

        setOpen(true);
        var b = arr.find((ele, ind) => {
            return ind === i
        })
        setEdit(b)
        // console.log(b);
        setData({ Title: b.Title, Description: b.Description, Date: b.Date })

    }

    // cancel button 
    const cancelData = (i) => {
        setEdit({ Title: "", Description: "", Date: "" })
        setOpen(false);
    }

    // search button

    // const [search, setSearch] = useState("");

    const searchfunn = (i) => {
        // setSearch(i.target.value);
        // var c = arr.map((ele, ind) => {
        //     return ele.Title === search
        // }
        // )

    }

    return (
        <>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="dialog-title"
                aria-describedby="dialog-description"
            >
                {/* <DialogTitle id="dialog-title"> Add a task</DialogTitle> */}
                <DialogContent>
                    <section className='bg-slate-200 max-lg wa-full rounded-lg padding-sm flex-col justify-start '>
                        <h2 className='font-medium margin-bottam text-task'>
                            Add a task
                        </h2>
                        <form className=' flex-col stylesInputField'>
                            <label style={{ width: '100%' }}>
                                Title
                                <input type="text" placeholder='e.g, study for the test' name="Title" className='wa-full' value={data.Title} onChange={handle} />
                            </label>
                            <label style={{ width: '100%' }}>
                                Date
                                <input type="date" className='wa-full'  name="Date" onChange={handle} value={data.Date} />
                            </label>
                            <label style={{ width: '100%' }}>
                                Description (optional)
                                <textarea style={{ marginTop: '0.25rem' }} name="Description" placeholder='e.g, study for the test' required className='wa-full' value={data.Description}
                                    onChange={handle}
                                ></textarea>
                            </label>
                            <label style={{ width: '100%' }}>
                                Select a directory
                                <select style={{ marginTop: '0.25rem' }} className='block wa-full'>
                                    <option value="Main" className='bg-slate-100'>Main</option>
                                </select>
                            </label>
                            <label className=' d-flex items-center cursor-pointer'>
                                <div className='mar-right bg-slate-task width-rounde hight-task rounded-full grid place-items-center border border-slate-300'>
                                </div>
                                <span className='order-1 flex-1'>
                                    Mark as important
                                </span>
                            </label>
                            <label className=' d-flex items-center cursor-pointer'>
                                <div className='mar-right bg-slate-task width-rounde hight-task rounded-full grid place-items-center border border-slate-300'>
                                </div>
                                <span className='order-1 flex-1'>
                                    Mark as completed
                                </span>
                            </label>
                            <button type='submit' className='add-btn' onClick={addnote}>Add a task</button>
                        </form>
                    </section>

                </DialogContent>
                {/* <DialogActions>
                    <Button variant="outlined" onClick={addnote}>
                        Add to task
                    </Button>
                    <Button variant="outlined" autoFocus onClick={() => cancelData()}>
                        cancel
                    </Button>
                </DialogActions> */}
            </Dialog>



            <div className='m-auto min-hight w-full bg-slate'>
                <div className='padding-top pb-8'>
                    <header className='d-flex align-items-center grid' >
                        <div className='flex-1 justify-content-start col-span-3 row-start-2 md-pr '>
                            {/* <Autocomplete className='search inputstyles'
                                
                                option={data}
                                disablePortal
                                id="combo-box-demo"
                                sx={{ width: 320 }}
                                renderInput={(params) => <TextField  {...params} label="Search task" />}
                            /> */}
                            <div className='search inputstyles'>
                                <input className='search inputstyles' type="search" name="search" id="" onChange={(i) => searchfunn(i)} />
                            </div>
                        </div>
                        <div className='text-center'>
                            <time dateTime='2023-05-14}'>2023, Jun 14</time>
                        </div>
                        <div className='d-flex flex-1'>
                            <div className='grid mr-right place-items-center relative'>
                                <button className='relative p-0'>
                                    <NotificationsIcon className='fill-violet-600' />
                                </button>
                            </div>
                            <button className='add-btn justify-content-end' onClick={() => setOpen(true)}>Add new task</button>
                        </div>
                    </header>

                    <section>
                        <h1 className='font-medium text-left md-text my-task text-slate'>All tasks (3 tasks)</h1>

                        <div className='d-flex children-styles'>
                            <button>
                                <ListIcon stroke="currentColor" stroke-width="0.2" viewBox="0 0 24 24" fill="none" />
                            </button>
                            <button>
                                <GridViewIcon className='text-violet' />
                            </button>
                            <Autocomplete className='ml-auto inputstyles'
                                disablePortal
                                id="combo-box-demo"
                                options={top100Films}
                                sx={{ width: 176 }}
                                renderInput={(params) => <TextField {...params} label="Sort by" />}
                            />
                        </div>

                        {
                            arr.length > 0 ? (

                                <ul className='tasklist margin-top mb-0 p-0 gap grid-template-columns'>
                                    {
                                        arr.map((e, i) => {
                                            return (
                                                <>

                                                    <li>
                                                        <a title='Main' className=' margin-left-a w-min text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md '>Main</a>
                                                        <article className=' d-flex flex-col h-52 '>

                                                            <Box width={302.212} className="back-color color-2 p-4">
                                                                <div className='flex-col flex-1'>
                                                                    <div className='d-flex items-center justify-between mb-2'>
                                                                        <span className='block font-medium'>{e.Title}</span>
                                                                    </div>
                                                                    <p className='mb-2 description line-clamp-3'>
                                                                        {e.Description}
                                                                    </p>
                                                                    <time className='margin-top-box d-flex'>
                                                                        <CalendarMonthIcon viewBox='0 0 24 24' className='mar-right w-4 ' />
                                                                        {e.Date}
                                                                    </time>
                                                                    <hr />
                                                                </div>

                                                                <div className='d-flex items-center margin-top--botoom'>
                                                                    <button className='bg-emerald-200 text-emerald-800 margin-right order-0 rounded-full font-medium'>
                                                                        <span className='block py-1 px-3 absolute sm:static visible'>completed</span>
                                                                    </button>
                                                                    <button className='ml-auto p-0'>
                                                                        <StarBorderIcon viewBox='0 0 24 24' className='w-5 h-5 icon-color' />
                                                                    </button>
                                                                    <button className='margin-left-2 p-0'>
                                                                        <DeleteIcon onClick={() => deletetask(i)} viewBox='0 0 24 24' className='w-5 h-5 icon-color ' />
                                                                    </button>
                                                                    <button className='w-7 h-6 margin-left-2 grid place-items-center p-0 icon-color'>
                                                                        <EditIcon onClick={() => editTask(i)} className='w-4 h-4' />
                                                                    </button>
                                                                </div>
                                                            </Box>
                                                        </article>
                                                    </li>
                                                </>
                                            );
                                        })}
                                </ul>
                            ) : <Box width="300px" align="center">no task available</Box>


                        }


                    </section>
                </div>
            </div>


        </>
    );
}

const top100Films = [
    { label: 'Sort by' },
    { label: 'Order added' },
    { label: 'Earlier first' },
    { label: 'Later first' },
    { label: 'Completed first' },
    { label: 'Uncompleted first' },
];

export default Home;