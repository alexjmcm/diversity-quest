import React from 'react';
import { Terminal, Server, Shield, Database, Cpu, GitBranch } from 'lucide-react';

const tools = [
	{
		id: 1,
		title: 'Quantum Circuit Designer',
		description:
			'Visual interface for building and testing quantum circuits without writing code.',
		icon: Cpu,
		link: '#',
	},
	{
		id: 2,
		title: 'Quantum Cloud Simulators',
		description:
			'Access to cloud-based quantum simulators to test your algorithms at scale.',
		icon: Server,
		link: '#',
	},
	{
		id: 3,
		title: 'Quantum Programming Libraries',
		description:
			'Comprehensive collection of quantum programming libraries and frameworks.',
		icon: Database,
		link: '#',
	},
	{
		id: 4,
		title: 'Quantum Code Validator',
		description:
			'Verify your quantum code for correctness and performance optimization.',
		icon: Shield,
		link: '#',
	},
	{
		id: 5,
		title: 'Quantum Terminal',
		description:
			'Command-line interface for rapid quantum algorithm development and testing.',
		icon: Terminal,
		link: '#',
	},
	{
		id: 6,
		title: 'Quantum Version Control',
		description:
			'Specialized version control system for quantum programming projects.',
		icon: GitBranch,
		link: '#',
	},
];

const ToolsSection: React.FC = () => {
	return (
		<section
			id="tools"
			className="py-24 bg-gradient-to-b from-slate-900 to-slate-800"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						Developer Tools
					</h2>
					<p className="text-lg text-gray-300 max-w-3xl mx-auto">
						Access powerful resources to accelerate your quantum programming
						workflow.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{tools.map((tool) => (
						<div
							key={tool.id}
							className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl"
						>
							<div className="p-6">
								<div className="bg-gradient-to-r from-red-500/20 to-indigo-500/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
									<tool.icon className="h-6 w-6 text-red-400" />
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">
									{tool.title}
								</h3>
								<p className="text-gray-300 mb-4">
									{tool.description}
								</p>
								<a
									href={tool.link}
									className="text-red-400 hover:text-red-300 font-medium inline-flex items-center"
								>
									Explore Tool
									<svg
										className="ml-1 w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 5l7 7-7 7"
										></path>
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ToolsSection;