import React, { useState } from 'react';
import { useGame, Decision } from '../contexts/GameContext';
import { CheckCircle, XCircle, ArrowRight, Lightbulb } from 'lucide-react';

interface DecisionPoint {
  id: string;
  title: string;
  situation: string;
  question: string;
  options: {
    text: string;
    points: number;
    isInclusive: boolean;
    feedback: string;
    insight?: string;
  }[];
}

const decisionPoints: DecisionPoint[] = [
  {
    id: 'team-formation',
    title: 'Team Formation & Role Assignment',
    situation: 'Your team has been assembled and you\'re in your first meeting. The project manager asks everyone to introduce themselves and suggests assigning roles based on "obvious strengths" - pointing to the two men for technical leadership and the women for communication roles.',
    question: 'How do you respond to this role assignment approach?',
    options: [
      {
        text: 'Go along with the suggestions since they seem reasonable and efficient',
        points: 10,
        isInclusive: false,
        feedback: 'While this might seem efficient, it reinforces gender stereotypes and may not utilize everyone\'s actual skills and interests.',
        insight: 'Unconscious bias can influence how we perceive "natural" leadership or communication abilities.'
      },
      {
        text: 'Suggest an open discussion where everyone shares their skills, interests, and preferred roles',
        points: 50,
        isInclusive: true,
        feedback: 'Excellent! This approach ensures roles are assigned based on actual capabilities and interests rather than assumptions.',
        insight: 'GBA+ principle: Avoid assumptions about people\'s abilities based on gender or other identity factors.'
      },
      {
        text: 'Privately express concerns to the project manager after the meeting',
        points: 25,
        isInclusive: false,
        feedback: 'While your concern is valid, addressing this privately misses the opportunity to model inclusive practices for the whole team.',
        insight: 'Speaking up in the moment can help create immediate change and demonstrate inclusive leadership.'
      }
    ]
  },
  {
    id: 'communication-styles',
    title: 'Managing Different Communication Styles',
    situation: 'During brainstorming sessions, you notice that two team members (both from different cultural backgrounds) rarely speak up, while others dominate the conversation. One team member makes a comment about "some people just not being idea people."',
    question: 'What\'s your approach to ensure everyone\'s voice is heard?',
    options: [
      {
        text: 'Let the natural flow continue - some people are just more vocal than others',
        points: 10,
        isInclusive: false,
        feedback: 'This approach may silence valuable perspectives and reinforce existing power dynamics.',
        insight: 'Different communication styles don\'t indicate different levels of capability or valuable ideas.'
      },
      {
        text: 'Implement structured turn-taking and create multiple ways for people to contribute ideas',
        points: 50,
        isInclusive: true,
        feedback: 'Perfect! This creates psychological safety and ensures diverse perspectives are included.',
        insight: 'GBA+ principle: Create multiple pathways for participation that accommodate different communication preferences.'
      },
      {
        text: 'Ask the quiet members directly to share their thoughts in front of everyone',
        points: 20,
        isInclusive: false,
        feedback: 'While well-intentioned, putting people on the spot can increase anxiety and may not be culturally appropriate for everyone.',
        insight: 'Consider offering private opportunities to share ideas or written alternatives to verbal participation.'
      }
    ]
  },
  {
    id: 'work-life-balance',
    title: 'Accommodating Personal Circumstances',
    situation: 'A team member mentions they need to leave early twice a week for eldercare responsibilities. Another team member suggests this person should "maybe step back from important projects" if they can\'t commit full time.',
    question: 'How do you address this situation?',
    options: [
      {
        text: 'Agree that project commitment requires full availability from everyone',
        points: 10,
        isInclusive: false,
        feedback: 'This approach excludes people with caregiving responsibilities and doesn\'t recognize diverse life circumstances.',
        insight: 'Caregiving responsibilities affect people of all genders and shouldn\'t limit career opportunities.'
      },
      {
        text: 'Explore flexible solutions and emphasize that diverse life experiences strengthen our team',
        points: 50,
        isInclusive: true,
        feedback: 'Excellent! This demonstrates understanding that work-life integration benefits everyone and creates inclusive solutions.',
        insight: 'GBA+ principle: Consider how policies and expectations affect people with different life circumstances.'
      },
      {
        text: 'Suggest the person handle their responsibilities outside of work hours',
        points: 15,
        isInclusive: false,
        feedback: 'This doesn\'t acknowledge that caregiving responsibilities often can\'t be rescheduled and places unfair burden on the individual.',
        insight: 'Inclusive workplaces recognize that people have legitimate responsibilities outside of work.'
      }
    ]
  },
  {
    id: 'feedback-recognition',
    title: 'Providing Feedback & Recognition',
    situation: 'The project is nearing completion. During the final review, you notice that credit for key innovations is being attributed primarily to the most vocal team members, while others\' contributions are being overlooked or minimized.',
    question: 'How do you ensure fair recognition of everyone\'s contributions?',
    options: [
      {
        text: 'Focus recognition on the most visible contributions since they had the biggest impact',
        points: 15,
        isInclusive: false,
        feedback: 'This approach may overlook crucial behind-the-scenes work and reinforce existing biases about whose contributions are "most valuable."',
        insight: 'Visible contributions aren\'t always the most important ones for project success.'
      },
      {
        text: 'Create a comprehensive review that acknowledges diverse types of contributions and their impact',
        points: 50,
        isInclusive: true,
        feedback: 'Perfect! This ensures all team members feel valued and demonstrates that success comes from diverse contributions.',
        insight: 'GBA+ principle: Recognize that people contribute in different ways and all contributions have value.'
      },
      {
        text: 'Give everyone equal recognition regardless of their actual contributions',
        points: 20,
        isInclusive: false,
        feedback: 'While fair-seeming, this approach doesn\'t actually address the issue of properly valuing different types of contributions.',
        insight: 'True inclusion means recognizing and valuing actual contributions, not treating everyone identically.'
      }
    ]
  }
];

const ScenarioScreen: React.FC = () => {
  const { state, dispatch } = useGame();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentDecision = decisionPoints[state.currentDecisionPoint];
  const isLastDecision = state.currentDecisionPoint >= decisionPoints.length - 1;

  const handleOptionSelect = (optionIndex: number) => {
    if (showFeedback) return;

    const selectedChoice = currentDecision.options[optionIndex];
    setSelectedOption(optionIndex);
    setShowFeedback(true);

    const decision: Decision = {
      id: currentDecision.id,
      choice: selectedChoice.text,
      points: selectedChoice.points,
      feedback: selectedChoice.feedback,
      isInclusive: selectedChoice.isInclusive
    };

    dispatch({ type: 'MAKE_DECISION', payload: decision });
  };

  const handleNext = () => {
    if (isLastDecision) {
      dispatch({ type: 'COMPLETE_TRAINING' });
    } else {
      dispatch({ type: 'NEXT_DECISION' });
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--background-dark)] text-[var(--text-main)] relative overflow-hidden">
      {/* Canadian maple leaf background */}
      <div className="absolute top-8 left-8 text-7xl opacity-20 animate-bounce-slow">🍁</div>
      <div className="absolute bottom-8 right-8 text-8xl opacity-10 animate-spin-slow">🍁</div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="card p-8 md:p-12 shadow-2xl border border-[var(--primary-color)]/40">
          {/* Progress indicator */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">
                Decision {state.currentDecisionPoint + 1} of {decisionPoints.length}
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-300">{state.selectedCharacter?.name}</span>
                <span className="text-2xl">{state.selectedCharacter?.avatar}</span>
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-red-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${((state.currentDecisionPoint + 1) / decisionPoints.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {currentDecision.title}
              </h2>
            </div>

            <div className="bg-white/5 rounded-xl p-6 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">Situation</h3>
              <p className="text-gray-200 leading-relaxed">{currentDecision.situation}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-4">{currentDecision.question}</h3>
              <div className="space-y-3">
                {currentDecision.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={showFeedback}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 border-2 ${
                      selectedOption === index
                        ? option.isInclusive
                          ? 'bg-green-500/20 border-green-400 text-green-100'
                          : 'bg-red-500/20 border-red-400 text-red-100'
                        : 'bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30'
                    } ${showFeedback ? 'cursor-default' : 'cursor-pointer'}`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="flex-1">{option.text}</span>
                      {selectedOption === index && showFeedback && (
                        <div className="ml-3 flex-shrink-0">
                          {option.isInclusive ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
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

            {showFeedback && selectedOption !== null && (
              <div className="space-y-4 mb-6">
                <div className={`rounded-xl p-6 ${
                  currentDecision.options[selectedOption].isInclusive 
                    ? 'bg-green-500/10 border border-green-400/30' 
                    : 'bg-red-500/10 border border-red-400/30'
                }`}>
                  <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                    {currentDecision.options[selectedOption].isInclusive ? (
                      <>
                        <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                        Inclusive Choice!
                      </>
                    ) : (
                      <>
                        <XCircle className="h-5 w-5 mr-2 text-red-400" />
                        Consider Another Approach...
                      </>
                    )}
                  </h4>
                  <p className="text-gray-200 mb-3">{currentDecision.options[selectedOption].feedback}</p>
                  <div className="text-red-300 font-medium">
                    +{currentDecision.options[selectedOption].points} points
                  </div>
                </div>

                {currentDecision.options[selectedOption].insight && (
                  <div className="bg-red-500/10 border border-red-400/30 rounded-xl p-4">
                    <h5 className="text-red-300 font-semibold mb-2 flex items-center">
                      <Lightbulb className="h-4 w-4 mr-2" />
                      Inclusion Insight
                    </h5>
                    <p className="text-gray-200 text-sm">{currentDecision.options[selectedOption].insight}</p>
                  </div>
                )}

                <div className="text-center">
                  <button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-red-600 to-blue-600 hover:from-red-700 hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
                  >
                    {isLastDecision ? 'Complete Training' : 'Next Decision'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScenarioScreen;