import React, { useState } from 'react';
import './addworkout.css';
import { toast } from 'react-toastify';

const Page = () => {
  const [workout, setWorkout] = useState({
    name: '',
    description: '',
    durationInMinutes: 0,
    exercises: [],
    imageURL: '',
    imagefile: null,
  });

  const [exercise, setExercise] = useState({
    name: '',
    description: '',
    sets: 0,
    reps: 0,
    imageURL: '',
    imagefile: null,
  });

  const handleWorkoutChange = (event) => {
    setWorkout({ ...workout, [event.target.name]: event.target.value });
  };

  const handleExerciseChange = (event) => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

  const addExerciseToWorkout = () => {
    console.log(exercise);
    if (exercise.name === '' || exercise.description === '' || exercise.sets === 0 || exercise.reps === 0 || exercise.imageFile === null) {
      toast.error('Please fill all the fields', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    setWorkout({
      ...workout,
      exercises: [...workout.exercises, exercise]
    });
    // setExercise({
    //   name: '',
    //   description: '',
    //   sets: 0,
    //   reps: 0,
    //   imageURL: '',
    //   imageFile: null
    // });
  };
  
  

  const deleteExerciseFromWorkout = (index) => {};

  const uploadImage = async (image) => {};

  const checklogin = () => {};

  const saveWorkout = async () => {
    console.log(workout)
  };

  return (
    <div className='formpage'>
      <h1 className='title'>Add to workout</h1>

      <input
        type="text"
        placeholder='workout name'
        value={workout.name}
        onChange={handleWorkoutChange}
      />
      <textarea
        placeholder='Workout Description'
        name='description'
        value={workout.description}
        onChange={(e) => {
          setWorkout({
            ...workout,
            description: e.target.value,
          });
        }}
        rows={5}
        cols={50}
      ></textarea>
      <input
        type='number'
        placeholder='Workout Duration'
        name='durationInMinutes'
        value={workout.durationInMinutes}
        onChange={handleWorkoutChange}
      />
      <input
        type='file'
        placeholder='Workout Image'
        name='workoutImage'
        onChange={(e) =>
          setWorkout({
            ...workout,
            imageFile: e.target.files[0],
          })
        }
      />

      <div>
        <h2 className='title'>Add Exercise to workout</h2>
        <input
          type='text'
          placeholder='Exercise Name'
          name='name'
          value={exercise.name}
          onChange={handleExerciseChange}
        />
        <textarea
          placeholder='Exercise Description'
          name='description'
          value={exercise.description}
          onChange={(e) => {
            setExercise({
              ...exercise,
              description: e.target.value,
            });
          }}
          rows={5}
          cols={50}
        ></textarea>
        <label htmlFor='sets'>Sets</label>
        <input
          type='number'
          placeholder='Sets'
          name='sets'
          value={exercise.sets}
          onChange={handleExerciseChange}
        />
        <input
          type='number'
          placeholder='Reps'
          name='reps'
          value={exercise.reps}
          onChange={handleExerciseChange}
        />
        <input
          type='file'
          placeholder="Exercise Image"
          name='exerciseImage'
          onChange={(e) => {
            setExercise({
              ...exercise,
              imageFile: e.target.files[0],
            });
          }}
        />
        <button
          onClick={(e) => {
            addExerciseToWorkout(e);
          }}
        >
          Add Exercise
        </button>
      </div>
      <div className='exercise'>
  {workout.exercises.map((exercise, index) => (
    <div key={index}>
      <h3>{exercise.name}</h3>
      <p>{exercise.description}</p>
      <p>{exercise.sets} sets x {exercise.reps} reps</p>
      
      <button onClick={() => deleteExerciseFromWorkout(index)}>Delete Exercise</button>
    </div>
  ))}
</div>
      <button
onClick={(e) => {
  saveWorkout(e);
}}
>Add Workout</button>


    </div>
  
)};

export default Page;

