import React from 'react';
import { MessageSquare, Users, Award, Sparkles, BookOpen, Brain } from 'lucide-react';

const forumCategories = [
	{
		id: 1,
		title: 'Quantum Algorithms',
		description: 'Discussions around quantum algorithms and their implementations',
		icon: Brain,
		posts: 243,
		color: 'from-blue-500 to-indigo-600',
	},
	{
		id: 2,
		title: 'Qiskit & IBM Q',
		description: "Help and discussions for IBM's quantum computing platform",
		icon: Sparkles,
		posts: 187,
		color: 'from-red-500 to-pink-600',
	},
	{
		id: 3,
		title: 'Q# & Microsoft QDK',
		description: "Support for Microsoft's Quantum Development Kit",
		icon: BookOpen,
		posts: 156,
		color: 'from-emerald-500 to-teal-600',
	},
	{
		id: 4,
		title: 'Quantum Projects',
		description: 'Showcase your quantum computing projects and apps',
		icon: Award,
		posts: 94,
		color: 'from-amber-500 to-orange-600',
	},
];

const CommunitySection: React.FC = () => {
	return (
		<section id="community" className="py-24 bg-slate-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Join Our Community
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Connect with fellow quantum developers, share your projects, and get
						help from experts around the world.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-16">
					<div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 shadow-lg border border-slate-600/30">
						<div className="flex items-center mb-6">
							<div className="inline-flex items-center justify-center p-3 bg-red-500/20 rounded-lg">
								<MessageSquare className="h-6 w-6 text-red-400" />
							</div>
							<h3 className="ml-4 text-2xl font-bold text-white">
								Discussion Forum
							</h3>
						</div>
						<p className="text-gray-300 mb-6">
							Ask questions, share insights, and discuss the latest in quantum
							computing with our global community of developers and researchers.
						</p>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							{forumCategories.map((category) => (
								<div
									key={category.id}
									className={`bg-gradient-to-r ${category.color} rounded-lg p-4 transition-transform hover:scale-[1.02]`}
								>
									<div className="flex items-center mb-2">
										<category.icon className="h-5 w-5 text-white/90" />
										<h4 className="ml-2 font-semibold text-white">
											{category.title}
										</h4>
									</div>
									<p className="text-white/80 text-sm mb-3">
										{category.description}
									</p>
									<div className="text-sm text-white/70">
										{category.posts} posts
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-8 shadow-lg border border-slate-600/30">
						<div className="flex items-center mb-6">
							<div className="inline-flex items-center justify-center p-3 bg-red-500/20 rounded-lg">
								<Users className="h-6 w-6 text-red-400" />
							</div>
							<h3 className="ml-4 text-2xl font-bold text-white">
								Community Events
							</h3>
						</div>

						<div className="space-y-6">
							<div className="border-l-4 border-red-500 pl-4 py-1">
								<div className="text-red-400 text-sm">May 15-16, 2025</div>
								<h4 className="text-white font-semibold text-lg">
									Quantum Coding Hackathon
								</h4>
								<p className="text-gray-300 mb-2">
									Build quantum solutions to real-world problems in this global
									online event.
								</p>
								<button className="text-sm text-red-400 hover:text-red-300 font-medium">
									Register →
								</button>
							</div>

							<div className="border-l-4 border-teal-500 pl-4 py-1">
								<div className="text-teal-400 text-sm">Weekly on Thursdays</div>
								<h4 className="text-white font-semibold text-lg">
									Quantum Coding Office Hours
								</h4>
								<p className="text-gray-300 mb-2">
									Get help with your quantum coding challenges from our mentors.
								</p>
								<button className="text-sm text-teal-400 hover:text-teal-300 font-medium">
									Join Next Session →
								</button>
							</div>

							<div className="border-l-4 border-amber-500 pl-4 py-1">
								<div className="text-amber-400 text-sm">June 28, 2025</div>
								<h4 className="text-white font-semibold text-lg">
									Quantum Computing Summit
								</h4>
								<p className="text-gray-300 mb-2">
									Online conference featuring talks from industry leaders and
									researchers.
								</p>
								<button className="text-sm text-amber-400 hover:text-amber-300 font-medium">
									Learn More →
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className="text-center">
					<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg">
						Join Our Community
					</button>
				</div>
			</div>
		</section>
	);
};

export default CommunitySection;