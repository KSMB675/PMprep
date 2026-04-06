export const questions = [
  // Integration Management
  {
    id: 1,
    category: 'Integration Management',
    difficulty: 'easy',
    question: 'Which document formally authorizes a project and gives the project manager authority to apply organizational resources?',
    options: ['Project Management Plan', 'Project Charter', 'Scope Statement', 'Work Breakdown Structure'],
    answer: 1,
    explanation: 'The Project Charter formally authorizes the project and grants the project manager the authority to use organizational resources. It is created during the Initiation phase and is the first major project document.'
  },
  {
    id: 2,
    category: 'Integration Management',
    difficulty: 'medium',
    question: 'A project manager is performing Integrated Change Control. Which of the following is the BEST description of this process?',
    options: [
      'Reviewing all change requests and approving or rejecting them',
      'Managing changes to the schedule only',
      'Reviewing all change requests, approving changes, and managing changes to deliverables and the project',
      'Logging all change requests in a change log'
    ],
    answer: 2,
    explanation: 'Perform Integrated Change Control involves reviewing all change requests, approving changes, managing changes to deliverables, organizational process assets, project documents, and the project management plan.'
  },
  {
    id: 3,
    category: 'Integration Management',
    difficulty: 'hard',
    question: 'During project execution, a key stakeholder requests a major scope change. What should the project manager do FIRST?',
    options: [
      'Implement the change immediately to keep the stakeholder happy',
      'Reject the change to protect the project baseline',
      'Submit a change request through the Integrated Change Control process',
      'Update the project schedule to accommodate the change'
    ],
    answer: 2,
    explanation: 'All change requests must go through Integrated Change Control. The project manager should submit a formal change request, which will be evaluated for impact on scope, schedule, cost, quality, resources, and risk before a decision is made.'
  },

  // Scope Management
  {
    id: 4,
    category: 'Scope Management',
    difficulty: 'easy',
    question: 'What is the Work Breakdown Structure (WBS)?',
    options: [
      'A list of all project activities in order',
      'A hierarchical decomposition of the total scope of work to be carried out by the project team',
      'A document that describes project objectives',
      'A network diagram showing task dependencies'
    ],
    answer: 1,
    explanation: 'The WBS is a hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish the project objectives and create the required deliverables. The lowest level of the WBS is called a work package.'
  },
  {
    id: 5,
    category: 'Scope Management',
    difficulty: 'medium',
    question: 'Which process involves formalizing acceptance of completed project deliverables?',
    options: ['Control Scope', 'Validate Scope', 'Define Scope', 'Collect Requirements'],
    answer: 1,
    explanation: 'Validate Scope is the process of formalizing acceptance of the completed project deliverables. It involves reviewing deliverables with the customer or sponsor to ensure they are completed satisfactorily.'
  },
  {
    id: 6,
    category: 'Scope Management',
    difficulty: 'medium',
    question: 'Scope creep is BEST prevented by:',
    options: [
      'Having a strong project sponsor',
      'Establishing a formal change control process',
      'Hiring experienced team members',
      'Reducing the number of stakeholders'
    ],
    answer: 1,
    explanation: 'Scope creep (unauthorized expansion of project scope) is best prevented by establishing and enforcing a formal change control process. This ensures all scope changes are evaluated, approved, and properly managed.'
  },

  // Schedule Management
  {
    id: 7,
    category: 'Schedule Management',
    difficulty: 'easy',
    question: 'What is the Critical Path in project management?',
    options: [
      'The most expensive path through the project',
      'The sequence of activities that represents the longest path through the project',
      'The path with the most risk',
      'The path with the fewest resources'
    ],
    answer: 1,
    explanation: 'The Critical Path is the sequence of scheduled activities that determines the minimum project duration. Any delay on a critical path activity will delay the entire project. Activities on the critical path have zero float.'
  },
  {
    id: 8,
    category: 'Schedule Management',
    difficulty: 'medium',
    question: 'A project activity has an Early Start of day 5 and a Late Start of day 10. What is the float for this activity?',
    options: ['5 days', '10 days', '15 days', '0 days'],
    answer: 0,
    explanation: 'Float (also called slack) = Late Start - Early Start = 10 - 5 = 5 days. This means this activity can be delayed up to 5 days without delaying the project completion date.'
  },
  {
    id: 9,
    category: 'Schedule Management',
    difficulty: 'hard',
    question: 'A project\'s Schedule Performance Index (SPI) is 0.8. What does this mean?',
    options: [
      'The project is 20% ahead of schedule',
      'The project is performing at 80% of the planned rate — behind schedule',
      'The project has spent 80% of its budget',
      'The project will finish 20% over budget'
    ],
    answer: 1,
    explanation: 'SPI = EV / PV. An SPI of 0.8 means the project is only completing 80 cents worth of work for every $1 of work planned — it is behind schedule. An SPI > 1 is ahead of schedule; SPI < 1 is behind schedule.'
  },

  // Cost Management
  {
    id: 10,
    category: 'Cost Management',
    difficulty: 'easy',
    question: 'What does EVM stand for in project management?',
    options: ['Estimated Value Management', 'Earned Value Management', 'Expected Value Measurement', 'Execution Value Monitoring'],
    answer: 1,
    explanation: 'EVM stands for Earned Value Management. It is an integrated approach to measuring project performance and progress against the cost and schedule baselines. Key metrics include EV (Earned Value), PV (Planned Value), and AC (Actual Cost).'
  },
  {
    id: 11,
    category: 'Cost Management',
    difficulty: 'medium',
    question: 'A project has a Budget at Completion (BAC) of $100,000. At the current point, Earned Value (EV) is $40,000 and Actual Cost (AC) is $50,000. What is the Cost Performance Index (CPI)?',
    options: ['0.80', '1.25', '0.50', '1.00'],
    answer: 0,
    explanation: 'CPI = EV / AC = $40,000 / $50,000 = 0.80. A CPI of 0.80 means the project is getting 80 cents of value for every dollar spent — it is over budget. A CPI < 1 means over budget; CPI > 1 means under budget.'
  },
  {
    id: 12,
    category: 'Cost Management',
    difficulty: 'hard',
    question: 'Using the same project data (BAC = $100,000, EV = $40,000, AC = $50,000, PV = $60,000), what is the Estimate at Completion (EAC) assuming the current CPI will continue?',
    options: ['$125,000', '$110,000', '$100,000', '$90,000'],
    answer: 0,
    explanation: 'EAC = BAC / CPI = $100,000 / 0.80 = $125,000. This forecasts the total project cost if work continues at the current efficiency rate. The project is expected to overrun by $25,000.'
  },

  // Risk Management
  {
    id: 13,
    category: 'Risk Management',
    difficulty: 'easy',
    question: 'Which of the following BEST describes a risk in project management?',
    options: [
      'A certain negative event that will occur',
      'An uncertain event or condition that, if it occurs, has an effect on project objectives',
      'A problem that has already happened',
      'A stakeholder concern about the project'
    ],
    answer: 1,
    explanation: 'A risk is an uncertain event or condition that, if it occurs, has a positive or negative effect on one or more project objectives. Risks can be threats (negative) or opportunities (positive). Once a risk occurs, it becomes an issue.'
  },
  {
    id: 14,
    category: 'Risk Management',
    difficulty: 'medium',
    question: 'Which risk response strategy involves shifting the negative impact of a risk to a third party?',
    options: ['Avoid', 'Mitigate', 'Transfer', 'Accept'],
    answer: 2,
    explanation: 'Transfer involves shifting the negative impact of a risk, along with ownership of the response, to a third party. Common examples include insurance, performance bonds, and fixed-price contracts. The risk is not eliminated but the financial responsibility moves to another party.'
  },
  {
    id: 15,
    category: 'Risk Management',
    difficulty: 'hard',
    question: 'A risk has a 30% probability of occurring and would result in a $50,000 loss. What is the Expected Monetary Value (EMV) of this risk?',
    options: ['-$15,000', '$15,000', '-$50,000', '$35,000'],
    answer: 0,
    explanation: 'EMV = Probability × Impact = 0.30 × (-$50,000) = -$15,000. Negative EMV represents a threat (potential loss). EMV is used in decision tree analysis and risk quantification. The negative sign indicates it is a risk (not an opportunity).'
  },

  // Quality Management
  {
    id: 16,
    category: 'Quality Management',
    difficulty: 'easy',
    question: 'What is the difference between quality assurance (QA) and quality control (QC)?',
    options: [
      'QA is the same as QC',
      'QA audits processes to ensure quality standards are being followed; QC inspects deliverables to verify they meet requirements',
      'QC audits processes; QA inspects deliverables',
      'QA is done before the project; QC is done after'
    ],
    answer: 1,
    explanation: 'Quality Assurance (QA) focuses on the processes used to create deliverables — it ensures the right processes are being followed. Quality Control (QC) focuses on the deliverables themselves — it inspects outputs to ensure they meet requirements.'
  },
  {
    id: 17,
    category: 'Quality Management',
    difficulty: 'medium',
    question: 'The "Cost of Quality" includes which of the following?',
    options: [
      'Only the cost of rework and defect correction',
      'Costs of conformance (prevention + appraisal) and costs of non-conformance (failures)',
      'Only prevention costs',
      'The total project budget allocated to quality'
    ],
    answer: 1,
    explanation: 'Cost of Quality includes: Costs of Conformance (money spent during the project to avoid failures — prevention costs like training, and appraisal costs like testing) and Costs of Non-Conformance (money spent during and after the project because of failures — internal and external failure costs).'
  },

  // Communications Management
  {
    id: 18,
    category: 'Communications Management',
    difficulty: 'easy',
    question: 'How many communication channels exist in a project with 5 stakeholders?',
    options: ['5', '10', '15', '20'],
    answer: 1,
    explanation: 'Communication channels = n(n-1)/2, where n = number of stakeholders. With 5 stakeholders: 5(5-1)/2 = 5×4/2 = 10 channels. Understanding this formula helps project managers recognize why larger teams have exponentially more complex communications.'
  },
  {
    id: 19,
    category: 'Communications Management',
    difficulty: 'medium',
    question: 'A project manager spends most of their time doing which of the following?',
    options: ['Writing reports', 'Communicating', 'Resolving conflicts', 'Reviewing budgets'],
    answer: 1,
    explanation: 'According to PMI, a project manager spends approximately 90% of their time communicating. This includes meetings, emails, status reports, presentations, and informal conversations with stakeholders, team members, and sponsors.'
  },

  // Stakeholder Management
  {
    id: 20,
    category: 'Stakeholder Management',
    difficulty: 'easy',
    question: 'When should stakeholder identification occur?',
    options: [
      'During the Planning phase only',
      'As early as possible — beginning in Initiating — and continued throughout the project',
      'After the project charter is approved',
      'Only when a stakeholder complains'
    ],
    answer: 1,
    explanation: 'Stakeholder identification should begin as early as possible in the project (during Initiating) and continue throughout. Early identification allows the project manager to analyze stakeholder influence, interests, and expectations, and develop appropriate engagement strategies.'
  },
  {
    id: 21,
    category: 'Stakeholder Management',
    difficulty: 'medium',
    question: 'The Power/Interest Grid is used to:',
    options: [
      'Measure project performance',
      'Categorize stakeholders by their level of authority and concern regarding project outcomes',
      'Assign team roles and responsibilities',
      'Track change requests'
    ],
    answer: 1,
    explanation: 'The Power/Interest Grid categorizes stakeholders into four quadrants based on their power (authority) and interest in the project. This helps project managers tailor their engagement strategy: high power/high interest stakeholders require close management, while low power/low interest stakeholders need minimal monitoring.'
  },

  // Procurement Management
  {
    id: 22,
    category: 'Procurement Management',
    difficulty: 'medium',
    question: 'Which contract type places the MOST risk on the buyer (project owner)?',
    options: ['Fixed-Price (FP)', 'Time and Material (T&M)', 'Cost Plus Fixed Fee (CPFF)', 'Firm Fixed Price (FFP)'],
    answer: 2,
    explanation: 'Cost-reimbursable contracts (like Cost Plus Fixed Fee) place the most risk on the buyer because the buyer pays all actual costs plus a fee. The seller has little incentive to control costs. Fixed-price contracts shift risk to the seller since they must complete work for the agreed price.'
  },

  // Process Groups
  {
    id: 23,
    category: 'Process Groups',
    difficulty: 'easy',
    question: 'Which Process Group involves defining and refining objectives and planning the course of action required to attain the objectives of the project?',
    options: ['Initiating', 'Planning', 'Executing', 'Monitoring & Controlling'],
    answer: 1,
    explanation: 'The Planning Process Group involves establishing the total scope of the effort, defining and refining objectives, and developing the course of action to attain those objectives. This group produces the project management plan and project documents.'
  },
  {
    id: 24,
    category: 'Process Groups',
    difficulty: 'medium',
    question: 'The MAJORITY of the project budget is spent during which Process Group?',
    options: ['Initiating', 'Planning', 'Executing', 'Closing'],
    answer: 2,
    explanation: 'The majority of the project budget (and effort) is expended during the Executing Process Group. This is when the project work is actually being performed, resources are being consumed, and deliverables are being created.'
  },
  {
    id: 25,
    category: 'Process Groups',
    difficulty: 'hard',
    question: 'In which Process Group does the project manager spend the MOST time?',
    options: ['Initiating', 'Planning', 'Executing', 'Monitoring & Controlling'],
    answer: 2,
    explanation: 'The Executing Process Group typically takes the most time and resources. However, note that Monitoring & Controlling overlaps with all other process groups and occurs throughout the project. The Executing group drives most of the day-to-day work.'
  },
]

export const categories = [...new Set(questions.map(q => q.category))]
