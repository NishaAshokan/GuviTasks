import React, { useState } from 'react'
import './addworkout.css'
import { toast } from 'react-toastify';

const page = () => {

    const [workout, setWorkout] = useState({
        name: '',
        description: '',
        durationInMinutes: 0,
        exercises: [],
        imageURL: '',
        imageFile: null
    });

    const [exercise, setExercise] = useState({
        name: '',
        description: '',
        sets: 0,
        reps: 0,
        imageURL: '',
        imageFile: null
    });

    const handleWorkoutChange = (e) => {
        setWorkout({
            ...workout,
            [e.target.name]: e.target.value
        });
    }

    const handleExerciseChange = (e) => {
        setExercise({
            ...exercise,
            [e.target.name]: e.target.value
        });
    }

    const addExerciseToWorkout = () => {
        console.log(exercise);
        if (exercise.name === '' || exercise.description === '' || exercise.sets === 0 || exercise.reps === 0 || exercise.imageFile === null) {
            toast.error('please fill all the fields', {
                position: 'top-center'
            });
        }
        setWorkout({
            ...workout,
            exercises: [...workout.exercises, exercise]
        });
    }

    const deleteExerciseFromWorkout = (index) => {
        setWorkout({
            ...workout,
            exercises: workout.exercises.filter((exercise, i) => i !== index)
        });
    }

    const uploadImage = async (image) => {
        const formData = new FormData();
        formData.append('myimage', image);

        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/image-upload/uploadimage`, {
            method: 'POST',
            body: formData,
        });
        if (response.ok) {
            const data = await response.json();
            console.log('Image upload successfully:', data);
            return data.imageUrl;
        }
        else {
            console.log('Failed to upload the image');
            return null;
        }
    }

    const checkLogin = async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/checkLogin', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },
            credentials: 'include'
        });
        if (response.ok) {
            console.log('admin is authenticated');
        }
        else {
            console.log('admin failed');
            window.location.href = '/adminauth/login';
        }
    }

    const saveWorkout = async () => {
        await checkLogin();
        console.log(workout);

        if (exercise.name === '' || exercise.description === '' || exercise.sets === 0 || exercise.reps === 0 || exercise.imageFile === null) {
            toast.error('please fill all the fields', {
                position: 'top-center'
            });
            return;
        }

        if (workout.imageFile) {
            const imageURL = await uploadImage(workout.imageFile);
            if (imageURL) {
                setWorkout({
                    ...workout,
                    imageURL
                });
            }
        }

        for (let i = 0; i < workout.exercises.length; i++) {
            let tempimg = workout.exercises[i].imageFile;
            if (tempimg) {
                let imgURL = await uploadImage(tempimg);
                workout.exercises[i].imageURL = imgURL;
            }
        }
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/workoutplans/workouts`, {
      method: 'POST',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(workout),
      credentials: 'include'
  });
  
  if (response.ok) {
      const data = await response.json();
      console.log('Workout Registered Successfully', data);
      toast.success('workout registered successfully', {
          position: 'top-center'
      });
  } else {
      console.error('workout registration failed:', response.statusText);
      toast.error(' workout Registration failed', {
          position: 'top-center'
      });
  }
  
  return (
    <div className='formpage'>
        <h1 className='title'>Add Workout</h1>
        <input type="text"
        placeholder='Workout name'
        name='name'
        value={workout.name}
        onChange={handleWorkoutChange} />


        <textarea 
        placeholder='workout Description'
        name='description'
        value={workout.description}
        onChange={(e) => {
            setWorkout({
                ...workout,
                description : e.target.value
            })
        }}
        rows={5}
        cols={50}
        ></textarea>
        <label htmlFor="durationInMinutes"> Duration In Minutes</label>

        <input type="number"
        placeholder='workout duration'
        name='durationInMinutes'
        value={workout.durationInMinutes}
        onChange={handleWorkoutChange}
        />

        <input type="file"
        name="Image"
        placeholder='workoutImage'
        onChange={(e) => {
            setWorkout({
                ...workout,
                imageFile : e.target.files[0]
            })
        }} 
         />


         <div
         style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        justifyContent: 'center'         }}
         >
            <h3 className='title'>Add Exercise to Workout</h3>
            <input type="text"
        placeholder='Exercise name'
        name='name'
        value={exercise.name}
        onChange={handleExerciseChange} />

<textarea 

        placeholder='Exercise Description'
        name='description'
        value={exercise.description}
        onChange={(e) => {
            setExercise({
                ...exercise,
                description : e.target.value
            })
        }}
        rows={5}
        cols={50}
        ></textarea>
            

            <label htmlFor="sets">sets</label>

<input type="number"
placeholder='sets'
name='sets'
value={exercise.sets}
onChange={handleExerciseChange}
/>
<label htmlFor="reps"> Reps</label>
<input type="number"
placeholder='reps'
name='reps'
value={exercise.reps}
onChange={handleExerciseChange}
/>

<input 
type="file"
name="exerciseImage"
placeholder='Exercise Image'
onChange={(e) => {
setExercise({
...exercise,
imageFile : e.target.files[0]
})
}}

/>  
<div className='exercises'>
    <h1 className='title'> Exercises</h1>
    {
        workout.exercises.map((exercises, index) => (
            <div className='exercise'>

                <h2>{exercise.name}</h2>
                <p>{exercise.description}</p> <p>{exercise.sets}</p> <p>{exercise.reps}</p>

                <img src=
                {exercise.imageFile ?
                    URL.createObjectURL(exercise.imageFile) : exercise.imageURL
                }  alt="" />
                <button
                onClick={() => deleteExerciseFromWorkout(index)}>
                    Delete Workout
                </button>
            </div>
        ))
    }
</div>

   <button onClick={() => {
    addExerciseToWorkout()
   }}>
   Add Exercise
   </button>

         </div>
         <button
         onClick={(e) =>{
            saveWorkout()
            console.log()
         }}> AddWorkout</button>
    </div>
  )
}  


export default Page;

