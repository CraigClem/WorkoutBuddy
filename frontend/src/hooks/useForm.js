import { useState } from 'react'

export function useForm(initialFormdata) {
    const [formData, setFormData] = useState(initialFormdata)
    const [formErrors, setFormErrors] = useState({})

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setFormErrors({ ...formErrors, [e.target.name]: '' })
        // setFormData({ title: '', load: '', reps: ''})
        // location.reload()
    }

    return {
        formData,
        formErrors,
        handleChange,
        setFormErrors,
        setFormData
    }
}