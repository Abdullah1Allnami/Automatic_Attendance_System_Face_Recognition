import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import classes from './page.module.css';

const users = [
    { id: '2022adsdas0705', name: 'Machine Learning', status: 'Active' },
    { id: '2022asd07s06', name: 'John Doe', status: 'Absent' },
    { id: '2022s0706', name: 'John Doe', status: 'Absent' },
    { id: '202dasdss20706', name: 'John Doe', status: 'Absent' },
    { id: '202asd20706', name: 'John Doe', status: 'Absent' },
    { id: '20asdad220706', name: 'John Doe', status: 'Absent' },
    { id: '202adsa20706', name: 'John Doe', status: 'Absent' },
    { id: '202a20706', name: 'John Doe', status: 'Absent' },
    { id: '2022dad0706', name: 'John Doe', status: 'Absent' },
    { id: '202dasd20706', name: 'John Doe', status: 'Absent' },
    { id: '2022asda0706', name: 'John Doe', status: 'Absent' },
    { id: '2022asd0706', name: 'John Doe', status: 'Absent' },
    { id: '2022asda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022asadfda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022aadfsda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022aadfasda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022afdasasda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafassda0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasada0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasdga0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasdah0707', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasda07h07', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasda070u7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsaadfdfasda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafsdfaasda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsaafadffasda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dssdfsafasda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dssfdsfafaassda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafasasdda07sfsdf0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsaadsfasda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafaasdagsda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022dsafaadfaasdagsda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022adfaddsafaasdagsda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022aadfadsfdfaddsafaasdagsda07f0f7', name: 'Jane Smith', status: 'Present' },
    { id: '2022adfaddsafaasdaadfagsda07f0f7', name: 'Jane Smith', status: 'Present' },
];

export default function Courses() {
    return (
        <div className={classes.container}>
            <Header />
            <main className={classes.main}>
                {users.map((user) => (
                    <div key={user.id} className={classes.box}>
                        <div className={classes.image}><p>Image</p></div>
                        <div className={classes.userInfo}>
                            <p className={classes.userName}>{user.name}</p>
                            <p>ID: {user.id}</p>
                            <p>Status: {user.status}</p>
                        </div>
                        <button>View</button>
                    </div>
                ))}
            </main>
            <Footer />
        </div>
    );
}
