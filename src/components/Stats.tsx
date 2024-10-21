import React from 'react';
import { BarChart, Activity, Flame } from 'lucide-react';

interface Workout {
  id: number;
  type: string;
  duration: number;
  calories: number;
  date: string;
}

interface StatsProps {
  workouts: Workout[];
}

const Stats: React.FC<StatsProps> = ({ workouts }) => {
  const totalWorkouts = workouts.length;
  const totalDuration = workouts.reduce((sum, workout) => sum + workout.duration, 0);
  const totalCalories = workouts.reduce((sum, workout) => sum + workout.calories, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        <BarChart className="mr-2" /> Stats
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-gray-600">Total Workouts</p>
          <p className="text-3xl font-bold">{totalWorkouts}</p>
        </div>
        <div>
          <p className="text-gray-600 flex items-center">
            <Activity className="mr-1" /> Total Duration
          </p>
          <p className="text-3xl font-bold">{totalDuration} min</p>
        </div>
        <div>
          <p className="text-gray-600 flex items-center">
            <Flame className="mr-1" /> Total Calories Burned
          </p>
          <p className="text-3xl font-bold">{totalCalories} cal</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;