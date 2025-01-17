'use client';
import { useState } from 'react';

export default function GameKhel() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Start guessing the number!');
  const [attempts, setAttempts] = useState(0);
  const [uniqueGuesses, setUniqueGuesses] = useState(new Set<number>()); // Tracks unique guesses
  const [stats, setStats] = useState(
    new Map<string, any>([
      ['attempts', 0],
      ['gamesPlayed', 0],
      ['wins', 0],
    ]),
  );

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1-100
  }

  function handleGuess() {
    const numericGuess = parseInt(guess, 10);

    // Ensure the guess is unique
    if (uniqueGuesses.has(numericGuess)) {
      setMessage('⛔ You already guessed this number! Try a different one.');
      return;
    }

    setUniqueGuesses((prev) => new Set(prev).add(numericGuess));
    setAttempts(attempts + 1);

    if (numericGuess === targetNumber) {
      setMessage(`🎉 Correct! You guessed it in ${attempts + 1} attempts.`);
      updateStats(true);
    } else if (numericGuess > targetNumber) {
      setMessage('📉 Too high! Try again.');
    } else {
      setMessage('📈 Too low! Try again.');
    }
  }

  function resetGame() {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('Start guessing the number!');
    setAttempts(0);
    setUniqueGuesses(new Set()); // Clear unique guesses
    updateStats(false);
  }

  function updateStats(isWin: boolean) {
    setStats((prev) => {
      const newStats = new Map(prev);
      newStats.set('attempts', attempts + 1);
      newStats.set('gamesPlayed', (newStats.get('gamesPlayed') || 0) + 1);

      if (isWin) {
        newStats.set('wins', (newStats.get('wins') || 0) + 1);
      }

      return newStats;
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="mb-6 text-4xl font-bold">Number Guessing Game</h1>
      <p className="mb-4 text-lg">{message}</p>

      <div className="mb-4 flex space-x-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="rounded px-4 py-2 text-black"
          placeholder="Enter your guess"
        />
        <button
          onClick={handleGuess}
          className="rounded bg-green-500 px-6 py-2 font-bold hover:bg-green-600">
          Guess
        </button>
      </div>

      <button
        onClick={resetGame}
        className="mb-4 rounded bg-red-500 px-6 py-2 font-bold hover:bg-red-600">
        Reset Game
      </button>

      <div className="text-center">
        <h2 className="mb-2 text-xl font-semibold">Game Stats</h2>
        <p>Total Attempts: {stats.get('attempts')}</p>
        <p>Games Played: {stats.get('gamesPlayed')}</p>
        <p>Wins: {stats.get('wins')}</p>
        <p>Unique Guesses: {uniqueGuesses.size}</p>
      </div>

      <footer className="absolute bottom-4 text-sm">
        <p>Guess the number between 1 and 100</p>
      </footer>
    </div>
  );
}
