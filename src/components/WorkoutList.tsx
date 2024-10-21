import React from 'react';
import { Calendar, Clock, Flame } from 'lucide-react';

interface Workout {
  id: number;
  type: string;
  duration: number;
  calories: number;
  date: string;
}

interface WorkoutListProps {
  workouts: Workout[];
}

const WorkoutList: React.FC<WorkoutListProps> = ({ workouts }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Recent Workouts</h2>
      {workouts.length === 0 ? (
        <p className="text-gray-500">No workouts recorded yet.</p>
      ) : (
        <ul className="space-y-4">
          {workouts.map((workout) => (
            <li key={workout.id} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h3 className="text-lg font-semibold">{workout.type}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-4">{workout.date}</span>
                <Clock className="w-4 h-4 mr-1" />
                <span className="mr-4">{workout.duration} min</span>
                <Flame className="w-4 h-4 mr-1" />
                <span>{workout.calories} cal</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutList;