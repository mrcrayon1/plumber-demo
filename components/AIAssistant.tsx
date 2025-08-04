import React, { useState, useCallback } from 'react';
import { getPlumbingDiagnosis } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [problem, setProblem] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleDiagnose = useCallback(async () => {
    if (!problem.trim()) {
      setError('Please describe your plumbing issue.');
      return;
    }
    setIsLoading(true);
    setError('');
    setResponse('');
    try {
      const diagnosis = await getPlumbingDiagnosis(problem);
      setResponse(diagnosis);
    } catch (err) {
      setError('An unexpected error occurred. Please try again or call us.');
    } finally {
      setIsLoading(false);
    }
  }, [problem]);

  return (
    <section id="ai-assistant" className="bg-peaks-light py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
            <h2 className="text-3xl font-bold font-display text-peaks-blue">AI-Powered Problem Diagnoser</h2>
            <p className="mt-4 text-lg text-gray-600">
                Not sure what's wrong? Describe the issue and our AI assistant can suggest possible causes.
            </p>
            <p className="text-sm text-gray-500 mt-2">Please note: This is for informational purposes only and is not a substitute for a professional diagnosis.</p>
        </div>
        <div className="mt-10 bg-white p-8 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="e.g., 'My kitchen sink is draining very slowly'"
                    className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-peaks-blue"
                    disabled={isLoading}
                    aria-label="Describe your plumbing problem"
                />
                <button
                    onClick={handleDiagnose}
                    disabled={isLoading}
                    className="px-8 py-3 font-bold text-white bg-peaks-blue rounded-md hover:bg-blue-800 transition-colors disabled:bg-gray-400"
                >
                    {isLoading ? 'Thinking...' : 'Get Diagnosis'}
                </button>
            </div>
            {error && <p className="mt-4 text-red-600">{error}</p>}
            {isLoading && (
                <div className="mt-6 text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-peaks-blue mx-auto"></div>
                    <p className="mt-2 text-gray-600">Analyzing your issue...</p>
                </div>
            )}
            {response && (
                <div className="mt-6 p-6 bg-blue-50 border border-peaks-blue rounded-md">
                    <h4 className="font-bold text-lg text-peaks-blue">AI Assistant's Analysis:</h4>
                    <p className="mt-2 whitespace-pre-wrap text-gray-700">{response}</p>
                </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;