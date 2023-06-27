import  formatDistanceToNow from 'date-fns/formatDistanceToNow'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';


const WorkoutDetails = ({workout, onDelete}) => {

    const handleDelete = () => {
        onDelete(workout._id);
    };

    return (
        <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-2xl flex">
            <div className='w-full'>
                <h4 className="text-xl mb-5 tracking-widest text-green-500">{workout.title.toUpperCase()}</h4>
                <p>
                    <span className="font-bold">Load (kg): &nbsp;</span>
                    {workout.load}
                </p>
                <p>
                    <span className="font-bold">Reps: &nbsp;</span>
                    {workout.load}
                </p>
                <p className="mt-2">
                    <span className="font-bold">added:</span> {formatDistanceToNow(new Date(workout.createdAt), {addSuffix:true})}
                </p>
            </div>
            <div className='w-full flex relative'>
                <button 
                    onClick={handleDelete}
                    className='absolute bottom-0 right-0 flex flex-col justify-center mx-auto px-1'
                >
                    <DeleteForeverRoundedIcon className='flex justify-center mx-auto text-red-600'/>
                    <p className='tracking-widest text-sm text-red-600'>DELETE</p>
                </button>
            </div>
        </div>
    )
}

export default WorkoutDetails