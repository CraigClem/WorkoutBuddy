import { useEffect, useState } from "react"
import axios from 'axios'

import WorkoutDetails from '../pages/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {

const [workouts, setWorkouts] = useState(null)
const [loading, setLoading ] = useState(true)

        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/workouts/');
                setWorkouts(response.data);
                setLoading(false)
                // Handle the response data here
            } catch (error) {
                console.error('Error:', error.message);
                setLoading(false)
                // Handle the error here
            }
        };

        useEffect(() => {
            fetchData()
        },[])

        const handleWorkoutFromSubmission = () => {
            fetchData()
        }

        const handleDelete = async (workoutId) => {
        try {
            await axios.delete(`http://localhost:4000/api/workouts/${workoutId}`);
            setWorkouts(workouts.filter((workout) => workout._id !== workoutId));
        } catch (error) {
            console.error('Error deleting workout:', error);
        }
        };

    return (
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='w-full md:w-2/3 lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-4'>
                    {workouts && workouts.map(workout => 
                            <WorkoutDetails  
                                key={workout._id}
                                workout={workout}
                                onDelete={handleDelete}
                            > 
                            </WorkoutDetails>
                        )
                    }
            </div>

            {loading ? 'loading' : ''}


            <div className="flex w-full md:w-1/3 lg:w-1/4 mb-5 md:ml-5">
                <WorkoutForm onWorkoutSubmit={handleWorkoutFromSubmission}/>
            </div>
        </div>
    )
}

export default Home