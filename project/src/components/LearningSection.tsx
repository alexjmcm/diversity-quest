import React from 'react';
import { BookOpen, BarChart, Zap, Award } from 'lucide-react';

const courses = [
	{
		id: 1,
		title: 'Introduction to Quantum Computing',
		description:
			'Learn the foundational principles of quantum computing and how it differs from classical computing.',
		level: 'Beginner',
		duration: '4 weeks',
		icon: BookOpen,
	},
	{
		id: 2,
		title: 'Quantum Programming Fundamentals',
		description: 'Start coding with quantum programming languages like Qiskit and Cirq.',
		level: 'Beginner',
		duration: '6 weeks',
		icon: BarChart,
	},
	{
		id: 3,
		title: 'Quantum Algorithms Deep Dive',
		description: "Master essential quantum algorithms like Shor's, Grover's, and quantum simulation.",
		level: 'Intermediate',
		duration: '8 weeks',
		icon: Zap,
	},
	{
		id: 4,
		title: 'Advanced Quantum Development',
		description: 'Build complete quantum applications and tackle real-world computational problems.',
		level: 'Advanced',
		duration: '10 weeks',
		icon: Award,
	},
];

const LearningSection: React.FC = () => {
	return (
		<section id="learn" className="py-24 bg-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Learning Paths
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Structured courses to take you from quantum computing basics to
						advanced quantum algorithms and applications.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{courses.map((course) => (
						<div
							key={course.id}
							className="bg-slate-700 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
						>
							<div className="p-6">
								<div className="inline-flex items-center justify-center p-3 bg-red-500/20 rounded-lg mb-5">
									<course.icon className="h-6 w-6 text-red-400" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">
									{course.title}
								</h3>
								<p className="text-gray-300 mb-4">{course.description}</p>
								<div className="flex items-center justify-between text-sm text-gray-400 mb-4">
									<span className="bg-purple-900/40 px-3 py-1 rounded-full">
										{course.level}
									</span>
									<span>{course.duration}</span>
								</div>
								<button className="w-full bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors mt-2">
									Explore Course
								</button>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<button className="bg-transparent hover:bg-purple-600 text-purple-400 hover:text-white border border-purple-500 px-6 py-3 rounded-md text-lg font-medium transition-colors">
						View All Courses
					</button>
				</div>
			</div>
		</section>
	);
};

export default LearningSection;