
const buildWorkoutStruct = (name, lastWorkedDate) => ({
    name,
    lastWorkedDate
});

const workout_templates_controller = ({}) => {

    const now = new Date();
    now.setDate(now.getDate() - 2);

    return [
        buildWorkoutStruct('Piernita frente', now.toISOString()),
        buildWorkoutStruct('Pecho', now.toISOString()),
        buildWorkoutStruct('Solo Cardio', now.toISOString()),
        buildWorkoutStruct('Piernita trasero', now.toISOString()),
        buildWorkoutStruct('Brazo', now.toISOString()),
        buildWorkoutStruct('Espalda', now.toISOString()),
    ]
};

export default workout_templates_controller;
