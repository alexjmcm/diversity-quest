import React, { useState } from 'react';
import { Code, Copy, Check } from 'lucide-react';

type CodeSnippet = {
  id: number;
  language: string;
  title: string;
  description: string;
  code: string;
};

const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    language: 'Python (Qiskit)',
    title: 'Creating a Bell State',
    description: 'Initialize a quantum circuit to create a Bell state, one of the simplest examples of quantum entanglement.',
    code: `from qiskit import QuantumCircuit

# Create a quantum circuit with 2 qubits
qc = QuantumCircuit(2, 2)

# Apply H-gate to the first qubit
qc.h(0)

# Apply CNOT with control=first qubit and target=second qubit
qc.cx(0, 1)

# Measure both qubits
qc.measure([0, 1], [0, 1])

print(qc.draw())
`
  },
  {
    id: 2,
    language: 'Python (Cirq)',
    title: 'Quantum Teleportation',
    description: 'A quantum teleportation circuit that transfers the state of one qubit to another using entanglement.',
    code: `import cirq

# Create three qubits
q0, q1, q2 = cirq.LineQubit.range(3)

# Create a circuit
circuit = cirq.Circuit()

# Prepare an entangled pair between q1 and q2
circuit.append([
    cirq.H(q1),
    cirq.CNOT(q1, q2)
])

# Bell measurement of q0 and q1
circuit.append([
    cirq.CNOT(q0, q1),
    cirq.H(q0),
    cirq.measure(q0, q1, key='result')
])

# Conditional operations on q2 based on measurement
circuit.append([
    cirq.X(q2).controlled_by(q1),
    cirq.Z(q2).controlled_by(q0)
])

print(circuit)
`
  },
  {
    id: 3,
    language: 'Q#',
    title: 'Grover\'s Algorithm',
    description: 'Implementation of Grover\'s search algorithm, which provides quadratic speedup for searching an unsorted database.',
    code: `namespace GroverSearch {
    open Microsoft.Quantum.Intrinsic;
    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Math;
    open Microsoft.Quantum.Convert;
    
    operation GroverSearch(nQubits : Int, oracle : (Qubit[] => Unit is Adj)) : Result[] {
        mutable resultArray = new Result[nQubits];
        using (qubits = Qubit[nQubits]) {
            // Initialize in superposition
            ApplyToEach(H, qubits);
            
            // Calculate number of iterations
            let iterations = Round(PI() / 4.0 * Sqrt(PowD(2.0, IntAsDouble(nQubits))));
            
            // Apply Grover iterations
            for (i in 1..iterations) {
                // Oracle
                oracle(qubits);
                
                // Diffusion operator
                ApplyToEach(H, qubits);
                ApplyToEach(X, qubits);
                Controlled Z(Most(qubits), Tail(qubits));
                ApplyToEach(X, qubits);
                ApplyToEach(H, qubits);
            }
            
            // Measure all qubits
            for (i in 0..nQubits - 1) {
                set resultArray w/= i <- M(qubits[i]);
            }
            
            ResetAll(qubits);
        }
        
        return resultArray;
    }
}`
  }
];

const CodeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<number | null>(null);
  
  const handleCopyCode = (id: number, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };
  
  return (
    <section id="code" className="py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Quantum Code Examples</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore practical quantum computing code samples across different quantum programming frameworks.
          </p>
        </div>
        
        <div className="bg-slate-800 rounded-xl shadow-xl overflow-hidden">
          <div className="flex overflow-x-auto border-b border-slate-700">
            {codeSnippets.map((snippet) => (
              <button
                key={snippet.id}
                className={`px-6 py-3 font-medium text-sm whitespace-nowrap ${
                  activeTab === snippet.id
                    ? 'text-purple-400 border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab(snippet.id)}
              >
                <div className="flex items-center">
                  <Code className="h-4 w-4 mr-2" />
                  {snippet.language}
                </div>
              </button>
            ))}
          </div>
          
          <div className="p-6">
            {codeSnippets.map((snippet) => (
              <div
                key={snippet.id}
                className={activeTab === snippet.id ? 'block' : 'hidden'}
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{snippet.title}</h3>
                  <p className="text-gray-300">{snippet.description}</p>
                </div>
                
                <div className="relative">
                  <pre className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <code className="text-gray-300 text-sm font-mono">{snippet.code}</code>
                  </pre>
                  <button
                    onClick={() => handleCopyCode(snippet.id, snippet.code)}
                    className="absolute top-4 right-4 p-2 bg-slate-700 hover:bg-slate-600 rounded-md transition-colors"
                    title="Copy code"
                  >
                    {copiedId === snippet.id ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium transition-colors">
            View Code Library
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;