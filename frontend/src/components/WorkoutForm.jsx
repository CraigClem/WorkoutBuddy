import axios from 'axios'
import { useForm } from '../hooks/useForm'

const WorkoutForm = ({onWorkoutSubmit}) => {
    const { formData, formErrors, handleChange, setFormErrors, setFormData } = useForm({
        title: '',
        load: '',
        reps: '',
    })

    const { title, load, reps } = formData

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let errors = {}

            if (!title) {
                errors.title = 'Please enter a title'
            }

            if (!load) {
                errors.load = 'Please enter a load'
            }

            if (!reps) {
                errors.reps = 'Please enter the number of reps'
            }

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors)
            return
        }

        const response = await axios.post('http://localhost:4000/api/workouts/', formData)
        console.log('new workout added', response.data)
        setFormErrors({})

        if(onWorkoutSubmit) {
            onWorkoutSubmit()    
        }

        setFormData({ title: '', load: '', reps: '' }) // Clear the form inputs


        } catch (error) {
            if (error.response) {
                console.error(error.response.data.error)
                setFormErrors({ server: error.response.data.error })
            } else {
                setFormErrors({ server: 'An error occurred. Please try again later' })
                console.log(error)
            }
        }
    }

    return (
        <form
        onSubmit={handleSubmit}
        className="p-5 bg-pink-200 rounded-xl mx-auto w-full flex flex-col h-fit"
        >
            <h4 className="text-xl tracking-widest mb-5">Add a Workout</h4>
            <label className="mb-2">Exercise:</label>
            <input
                className="rounded-lg p-1 mb-2"
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
            />
            {formErrors.title && <div className="text-red-700 text-xs mb-2">{formErrors.title}</div>}

            <label className="mb-2">Load (kg):</label>
            <input
                className="rounded-lg p-1 mb-2"
                type="number"
                name="load"
                onChange={handleChange}
                value={formData.load}
            />
            {formErrors.load && <div className="text-red-700 text-xs mb-2">{formErrors.load}</div>}

            <label className="mb-2">Reps:</label>
            <input
                className="rounded-lg p-1 mb-2"
                type="number"
                name="reps"
                onChange={handleChange}
                value={formData.reps}
            />
            {formErrors.reps && <div className="text-red-700 text-xs mb-2">{formErrors.reps}</div>}

            {formErrors.server && <div className="text-red-500 text-xs mb-2">{formErrors.server}</div>}

            <button
                type="submit"
                className="bg-slate-700 hover:bg-slate-400 my-5 p-5 mx-auto rounded-md  text-gray-200 hover:text-slate-700 flex justify-center"
            >
                <span className="tracking-widest text-base md:text-xl font-bold">Add Workout</span>
            </button>
        </form>
    )
}

export default WorkoutForm