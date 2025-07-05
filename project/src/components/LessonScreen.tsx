import React, { useEffect } from 'react';
import { useGame } from '../contexts/GameContext';
import { CheckCircle, XCircle, ArrowRight, Lightbulb, Heart, Star, Sword, Shield } from 'lucide-react';

const questData = [
	{
		level: 1,
		realmName: 'Realm of Unity',
		challenges: [
			{
				id: 'unity-challenge-1',
				scenario: 'In the great hall of team formation, the Guild Master suggests assigning quests based on "obvious strengths" - sending warriors to battle and healers to support roles.',
				challenge: 'How do you respond to this ancient tradition?',
				choices: [
					{
						text: 'Honor the old ways - they have served us well',
						points: 10,
						isInclusive: false,
						feedback: 'The old ways may limit the true potential of your guild members.',
						insight: 'True strength comes from understanding each hero\'s unique abilities, not assumptions.'
					},
					{
						text: 'Propose a council where all heroes share their true skills',
						points: 50,
						isInclusive: true,
						feedback: 'Wise choice! Your guild will be stronger when roles match true abilities.',
						insight: 'The greatest leaders discover hidden talents in their companions.'
					},
					{
						text: 'Remain silent but feel the injustice',
						points: 20,
						isInclusive: false,
						feedback: 'Your instincts serve you well, but a true hero speaks for justice.',
						insight: 'Courage means standing up for what\'s right, even in difficult moments.'
					}
				]
			},
			{
				id: 'unity-challenge-2',
				scenario: 'During the gathering, some heroes hesitate to speak of their legendary deeds and mystical abilities.',
				challenge: 'How do you encourage all to share their power?',
				choices: [
					{
						text: 'Let their true nature reveal itself in time',
						points: 15,
						isInclusive: false,
						feedback: 'Some heroes need encouragement to reveal their hidden strengths.',
						insight: 'Quiet heroes often possess the most powerful magic.'
					},
					{
						text: 'Create a sacred circle where all may speak safely',
						points: 50,
						isInclusive: true,
						feedback: 'Excellent! Your wisdom creates a sanctuary for all voices.',
						insight: 'True leadership creates safe spaces for every hero to shine.'
					},
					{
						text: 'Call upon the silent ones to demonstrate their power',
						points: 25,
						isInclusive: false,
						feedback: 'Your intent is noble, but forcing heroes to perform may weaken their spirit.',
						insight: 'Offer many paths for heroes to show their worth, not just one.'
					}
				]
			},
			{
				id: 'unity-challenge-3',
				scenario: 'A hero reveals unexpected mastery in an art that surprises the guild based on their appearance.',
				challenge: 'How do you honor this revelation?',
				choices: [
					{
						text: 'Express amazement at their hidden talents',
						points: 10,
						isInclusive: false,
						feedback: 'Your surprise reveals the limitations of your own vision.',
						insight: 'True heroes see potential where others see only surface.'
					},
					{
						text: 'Celebrate their mastery and seek ways to use their gift',
						points: 50,
						isInclusive: true,
						feedback: 'Perfect! You honor their strength without question.',
						insight: 'The greatest treasures are often hidden in unexpected places.'
					},
					{
						text: 'Ask about their journey to this mastery',
						points: 30,
						isInclusive: false,
						feedback: 'Curiosity is natural, but heroes shouldn\'t need to justify their power.',
						insight: 'Focus on what heroes can do, not how they came to do it.'
					}
				]
			}
		]
	},
	{
		level: 2,
		realmName: 'Valley of Voices',
		challenges: [
			{
				id: 'voices-challenge-1',
				scenario: 'In the mystical Valley of Voices, some heroes speak boldly while others remain silent. An elder declares "some souls are simply not meant to lead."',
				challenge: 'How do you ensure all voices join the chorus?',
				choices: [
					{
						text: 'Accept that some are born to follow',
						points: 10,
						isInclusive: false,
						feedback: 'This silences the wisdom that quiet heroes possess.',
						insight: 'Leadership takes many forms - not all heroes lead with loud voices.'
					},
					{
						text: 'Create multiple ways for heroes to share their wisdom',
						points: 50,
						isInclusive: true,
						feedback: 'Brilliant! You understand that wisdom flows in many streams.',
						insight: 'The Valley teaches us that every voice has its own sacred frequency.'
					},
					{
						text: 'Command the silent ones to speak before all',
						points: 20,
						isInclusive: false,
						feedback: 'Force may break the delicate magic that allows true voices to emerge.',
						insight: 'Some flowers bloom only in gentle moonlight, not harsh sunlight.'
					}
				]
			},
			{
				id: 'voices-challenge-2',
				scenario: 'You notice that certain heroes are interrupted when they attempt to share their ancient knowledge.',
				challenge: 'What magic do you weave to protect their words?',
				choices: [
					{
						text: 'Let the natural rhythm of conversation flow',
						points: 15,
						isInclusive: false,
						feedback: 'Some voices need protection to be heard above the storm.',
						insight: 'True leaders guard the space where wisdom can be shared.'
					},
					{
						text: 'Cast a spell of sacred speaking time for all',
						points: 50,
						isInclusive: true,
						feedback: 'Masterful! Your magic ensures every voice can complete its song.',
						insight: 'The most powerful enchantment is one that protects the vulnerable.'
					},
					{
						text: 'Whisper privately to those who interrupt',
						points: 30,
						isInclusive: false,
						feedback: 'Private words help, but public protection prevents future harm.',
						insight: 'Sometimes the spell must be cast openly to be truly effective.'
					}
				]
			},
			{
				id: 'voices-challenge-3',
				scenario: 'A veteran warrior insists that direct battle speech is the only honorable way to communicate in the guild.',
				challenge: 'How do you respond to this ancient code?',
				choices: [
					{
						text: 'Agree that directness shows true strength',
						points: 15,
						isInclusive: false,
						feedback: 'Different cultures have different ways of showing respect and strength.',
						insight: 'What seems direct to one may feel like an attack to another.'
					},
					{
						text: 'Teach that many communication styles can show honor',
						points: 50,
						isInclusive: true,
						feedback: 'Wise! You understand that honor speaks in many languages.',
						insight: 'The Valley of Voices teaches us that diversity in communication is strength.'
					},
					{
						text: 'Suggest all heroes must learn the warrior\'s way',
						points: 25,
						isInclusive: false,
						feedback: 'This forces all heroes into one mold, losing their unique gifts.',
						insight: 'True strength comes from many different approaches working together.'
					}
				]
			}
		]
	},
	{
		level: 3,
		realmName: 'Sanctuary of Balance',
		challenges: [
			{
				id: 'balance-challenge-1',
				scenario: 'In the sacred Sanctuary, a hero must tend to their elder\'s needs twice each week. Another guild member suggests they should abandon important quests if they cannot devote full time.',
				challenge: 'How do you restore balance to this situation?',
				choices: [
					{
						text: 'Agree that quests require complete dedication',
						points: 10,
						isInclusive: false,
						feedback: 'This banishes heroes with sacred duties from achieving greatness.',
						insight: 'Caring for others is itself a noble quest that strengthens the hero.'
					},
					{
						text: 'Seek flexible paths that honor both duty and quest',
						points: 50,
						isInclusive: true,
						feedback: 'Perfect! You understand that true balance serves all purposes.',
						insight: 'The Sanctuary teaches that life\'s duties can coexist with great achievements.'
					},
					{
						text: 'Suggest moving their duties to times of rest',
						points: 15,
						isInclusive: false,
						feedback: 'Sacred duties cannot always be moved to convenient times.',
						insight: 'Some responsibilities are as fixed as the stars and must be honored.'
					}
				]
			},
			{
				id: 'balance-challenge-2',
				scenario: 'The guild plans a mandatory celebration on the day of rest. Some heroes seem troubled but speak no words of concern.',
				challenge: 'How do you ensure the celebration includes all?',
				choices: [
					{
						text: 'Proceed - celebrations unite all heroes',
						points: 15,
						isInclusive: false,
						feedback: 'What brings joy to some may create barriers for others.',
						insight: 'True celebration includes everyone, not just the majority.'
					},
					{
						text: 'Consult all heroes about timing and create alternatives',
						points: 50,
						isInclusive: true,
						feedback: 'Excellent! Your wisdom ensures no hero is left behind.',
						insight: 'The greatest celebrations are those where every hero can participate.'
					},
					{
						text: 'Make attendance a choice, not a command',
						points: 30,
						isInclusive: false,
						feedback: 'Choice helps, but true inclusion means planning so all can join.',
						insight: 'Optional events can still exclude - better to plan inclusively from the start.'
					}
				]
			},
			{
				id: 'balance-challenge-3',
				scenario: 'During a time of great trials, someone suggests that heroes without family bonds should bear greater burdens since they have "more freedom."',
				challenge: 'How do you address this imbalance?',
				choices: [
					{
						text: 'Accept this practical distribution of duties',
						points: 10,
						isInclusive: false,
						feedback: 'This assumes some heroes\' time is less valuable than others.',
						insight: 'Every hero\'s time and energy are equally precious gifts.'
					},
					{
						text: 'Distribute burdens fairly based on ability, not family status',
						points: 50,
						isInclusive: true,
						feedback: 'Wise! You see that all heroes deserve equal respect for their time.',
						insight: 'The Sanctuary teaches that balance means honoring every hero\'s whole life.'
					},
					{
						text: 'Seek magical aid instead of burdening any hero',
						points: 35,
						isInclusive: false,
						feedback: 'While creative, this doesn\'t address the unfair assumption about heroes\' worth.',
						insight: 'Address the root belief that some heroes matter less than others.'
					}
				]
			}
		]
	},
	{
		level: 4,
		realmName: 'Temple of Honor',
		challenges: [
			{
				id: 'honor-challenge-1',
				scenario: 'In the golden Temple of Honor, the loudest heroes receive all the glory while others\' deeds fade into shadow.',
				challenge: 'How do you ensure all heroic deeds are remembered?',
				choices: [
					{
						text: 'Honor those whose deeds shine brightest',
						points: 15,
						isInclusive: false,
						feedback: 'The brightest deeds are not always the most important for victory.',
						insight: 'Many crucial heroic acts happen in shadow but are vital to success.'
					},
					{
						text: 'Create a complete chronicle honoring all forms of heroism',
						points: 50,
						isInclusive: true,
						feedback: 'Magnificent! Your temple will inspire all heroes to greatness.',
						insight: 'True honor recognizes that victory comes from many different contributions.'
					},
					{
						text: 'Give equal praise to all, regardless of their deeds',
						points: 20,
						isInclusive: false,
						feedback: 'This doesn\'t truly value the unique ways each hero contributes.',
						insight: 'Honor means recognizing actual contributions, not treating everyone identically.'
					}
				]
			},
			{
				id: 'honor-challenge-2',
				scenario: 'A hero consistently provides crucial support but is never mentioned in the bards\' tales of victory.',
				challenge: 'What action do you take to right this wrong?',
				choices: [
					{
						text: 'Trust that the bards know which deeds matter most',
						points: 10,
						isInclusive: false,
						feedback: 'Support magic is often invisible but essential for any quest\'s success.',
						insight: 'The most important heroic acts are sometimes the least visible.'
					},
					{
						text: 'Ensure the bards learn of all heroic contributions',
						points: 50,
						isInclusive: true,
						feedback: 'Perfect! You ensure no hero\'s worth goes unrecognized.',
						insight: 'Great leaders actively seek out and celebrate hidden heroism.'
					},
					{
						text: 'Teach the hero to proclaim their own deeds louder',
						points: 25,
						isInclusive: false,
						feedback: 'This places the burden on the hero rather than fixing the system.',
						insight: 'Not all heroes are comfortable with self-proclamation, nor should they need to be.'
					}
				]
			},
			{
				id: 'honor-challenge-3',
				scenario: 'In the sacred scrolls of achievement, you notice similar deeds are described with different levels of praise for different heroes.',
				challenge: 'How do you restore justice to these records?',
				choices: [
					{
						text: 'Trust that the differences reflect true variations in achievement',
						points: 15,
						isInclusive: false,
						feedback: 'Language differences often reflect bias rather than actual performance.',
						insight: 'Pay attention to patterns in how achievements are described for different heroes.'
					},
					{
						text: 'Establish consistent, fair language for all heroic evaluations',
						points: 50,
						isInclusive: true,
						feedback: 'Excellent! Your justice ensures all heroes receive fair recognition.',
						insight: 'The Temple teaches that consistent standards create true honor.'
					},
					{
						text: 'Focus only on making your own records fair',
						points: 30,
						isInclusive: false,
						feedback: 'Individual fairness is good, but systemic justice requires broader action.',
						insight: 'True honor spreads throughout the realm when leaders address systemic issues.'
					}
				]
			}
		]
	}
];

const LessonScreen: React.FC = () => {
	const { state, dispatch } = useGame();

	const currentQuest = questData.find(q => q.level === state.currentLevel);
	const currentChallenge = currentQuest?.challenges[state.currentQuestion];

	useEffect(() => {
		if (state.showFeedback) {
			const timer = setTimeout(() => {
				if (state.currentQuestion >= 2) {
					dispatch({ type: 'COMPLETE_LEVEL' });
					if (state.currentLevel >= 4) {
						dispatch({ type: 'COMPLETE_TRAINING' });
					} else {
						dispatch({ type: 'NEXT_QUESTION' });
					}
				} else {
					dispatch({ type: 'NEXT_QUESTION' });
				}
			}, 4000);

			return () => clearTimeout(timer);
		}
	}, [state.showFeedback, state.currentQuestion, state.currentLevel, dispatch]);

	const handleChoiceSelect = (choiceIndex: number) => {
		if (state.showFeedback) return;

		dispatch({ type: 'SELECT_ANSWER', payload: choiceIndex });

		const choice = currentChallenge!.choices[choiceIndex];
		const decision = {
			id: currentChallenge!.id,
			choice: choice.text,
			points: choice.points,
			feedback: choice.feedback,
			isInclusive: choice.isInclusive
		};

		dispatch({ type: 'ADD_DECISION', payload: decision });
		dispatch({ type: 'SHOW_FEEDBACK' });
	};

	if (!currentChallenge) return null;

	const selectedChoice = state.selectedAnswer !== null ? currentChallenge.choices[state.selectedAnswer] : null;

	return (
		<div className="min-h-screen flex items-center justify-center p-4 bg-[var(--background-dark)] text-[var(--text-main)] relative overflow-hidden">
			{/* Canadian maple leaf background */}
			<div className="absolute top-8 left-8 text-7xl opacity-20 animate-bounce-slow">🍁</div>
			<div className="absolute bottom-8 right-8 text-8xl opacity-10 animate-spin-slow">🍁</div>
			<div className="max-w-4xl mx-auto relative z-10">
				<div className="card p-8 md:p-12 shadow-2xl border border-[var(--primary-color)]/40">
					{/* Quest Header */}
					<div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/50 mb-6">
						<div className="flex items-center justify-between mb-3">
							<div className="flex items-center">
								<div className="text-2xl mr-2">{state.selectedCharacter?.avatar}</div>
								<div>
									<span className="font-bold text-white">{currentQuest?.realmName}</span>
									<div className="text-xs text-slate-300">Challenge {state.currentQuestion + 1} of 3</div>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<div className="flex items-center">
									<Heart className="h-4 w-4 text-red-500 mr-1" />
									<span className="text-sm font-bold text-red-400">{state.hearts}</span>
								</div>
								<div className="flex items-center">
									<Star className="h-4 w-4 text-amber-500 mr-1" />
									<span className="text-sm font-bold text-amber-400">{state.xp}</span>
								</div>
							</div>
						</div>

						<div className="bg-slate-700 rounded-full h-2 overflow-hidden">
							<div
								className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 h-2 rounded-full transition-all duration-500 relative"
								style={{ width: `${((state.currentQuestion + 1) / 3) * 100}%` }}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 animate-pulse"></div>
							</div>
						</div>
					</div>

					{/* Challenge Scroll */}
					<div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-slate-700/50 mb-6">
						<div className="mb-6">
							<div className="bg-gradient-to-r from-blue-900/30 to-red-900/30 rounded-xl p-4 mb-4 border border-blue-700/30">
								<p className="text-sm text-blue-100 leading-relaxed">{currentChallenge.scenario}</p>
							</div>
							<h3 className="text-lg font-bold text-white flex items-center">
								<Sword className="h-5 w-5 mr-2 text-amber-400" />
								{currentChallenge.challenge}
							</h3>
						</div>

						<div className="space-y-3">
							{currentChallenge.choices.map((choice, index) => (
								<button
									key={index}
									onClick={() => handleChoiceSelect(index)}
									disabled={state.showFeedback}
									className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 relative overflow-hidden ${
										state.selectedAnswer === index
											? choice.isInclusive
												? 'border-emerald-400 bg-gradient-to-r from-emerald-900/30 to-green-900/30 shadow-lg'
												: 'border-red-400 bg-gradient-to-r from-red-900/30 to-orange-900/30 shadow-lg'
											: 'border-slate-600 bg-slate-700/30 hover:border-slate-500 hover:bg-slate-600/30'
									} ${state.showFeedback ? 'cursor-default' : 'cursor-pointer hover:scale-[1.02]'}`}
								>
									{state.selectedAnswer === index && (
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] animate-pulse"></div>
									)}

									<div className="flex items-center justify-between relative z-10">
										<span className="text-sm font-medium text-white pr-2">{choice.text}</span>
										{state.selectedAnswer === index && state.showFeedback && (
											<div className="flex-shrink-0">
												{choice.isInclusive ? (
													<CheckCircle className="h-5 w-5 text-emerald-400" />
												) : (
													<XCircle className="h-5 w-5 text-red-400" />
												)}
											</div>
										)}
									</div>
								</button>
							))}
						</div>
					</div>

					{/* Mystical Feedback */}
					{state.showFeedback && selectedChoice && (
						<div className={`rounded-2xl p-6 shadow-2xl border-2 relative overflow-hidden ${
							selectedChoice.isInclusive 
								? 'border-emerald-400 bg-gradient-to-br from-emerald-900/30 to-green-900/30' 
								: 'border-red-400 bg-gradient-to-br from-red-900/30 to-orange-900/30'
						}`}>
							<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 animate-pulse"></div>

							<div className="flex items-center mb-4 relative z-10">
								{selectedChoice.isInclusive ? (
									<>
										<CheckCircle className="h-6 w-6 text-emerald-400 mr-3" />
										<div>
											<h4 className="font-bold text-emerald-300">Heroic Choice!</h4>
											<p className="text-xs text-emerald-400">+{selectedChoice.points} XP earned</p>
										</div>
									</>
								) : (
									<>
										<Shield className="h-6 w-6 text-amber-400 mr-3" />
										<div>
											<h4 className="font-bold text-amber-300">Learning Moment</h4>
											<p className="text-xs text-amber-400">+{selectedChoice.points} XP earned</p>
										</div>
									</>
								)}
							</div>

							<p className="text-sm text-slate-200 mb-4 relative z-10">{selectedChoice.feedback}</p>

							{selectedChoice.insight && (
								<div className="bg-slate-800/50 rounded-lg p-4 border border-slate-600/30 relative z-10">
									<div className="flex items-start">
										<Lightbulb className="h-5 w-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
										<div>
											<h5 className="text-amber-300 font-semibold text-sm mb-1">Ancient Wisdom</h5>
											<p className="text-xs text-slate-300 leading-relaxed">{selectedChoice.insight}</p>
										</div>
									</div>
								</div>
							)}

							<div className="mt-4 text-center relative z-10">
								<div className="text-xs text-slate-400">Continuing your quest in 4 seconds...</div>
								<div className="w-full bg-slate-700 rounded-full h-1 mt-2 overflow-hidden">
									<div className="bg-gradient-to-r from-amber-400 to-orange-500 h-1 rounded-full animate-pulse"></div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LessonScreen;