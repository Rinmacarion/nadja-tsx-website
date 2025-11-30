import { Publication, ResearchArea } from './types';

export const PERSONAL_INFO = {
  name: "Nadja Ging Jehli",
  title: "Leader & Cognitive Scientist Building the Future of Adaptive Systems",
  department: "Department of Behavioral Economics",
  university: "University of Excellence", // Placeholder
  email: "nadja@gingjehli.com",
  phone: "(614) 736 - 7755",
  about: `I am a cognitive and computational neuroscientist specializing in how humans and artificial agents adapt, learn, and exert control in uncertain environments. My work bridges clinical neuroscience, mathematical psychology, behavioral economics, and computational psychiatry to develop mechanistic models of cognition and behavior.

Trained across multiple disciplines, I design integrative experiments that combine EEG, eye-tracking, and advanced modeling techniques, and I analyze complex datasets from both clinical and non-clinical populations — as well as across species. My research spans ADHD, depression, bipolar disorder, OCD, and Parkinson’s disease, supported by experience with multimodal tasks, intracranial recordings, and cutting-edge computational approaches.

As a first-generation academic with a decade of industry experience in finance and consulting, I bring entrepreneurial drive, leadership, and project management skills to scientific innovation. I have independently secured multiple fellowships to fund my research, developed custom hardware and software tools, and built a strong publication record centered on adaptive behavior and clinical translation.

My long-term vision is to lead an interdisciplinary research program that unifies computational modeling, neuroscience, psychiatry, and economics — and builds partnerships across academia, industry, and society to translate foundational science into real-world impact.`,
  shortBio: "I am a cognitive and computational neuroscientist specializing in how humans and artificial agents adapt, learn, and exert control in uncertain environments. My work bridges clinical neuroscience, mathematical psychology, behavioral economics, and computational psychiatry to develop mechanistic models of cognition and behavior.",
  socials: {
    twitter: "https://twitter.com/NadjaGingJehli",
    twitterHandle: "@NadjaGingJehli",
    linkedin: "https://www.linkedin.com/in/nadja-ging-jehli-phd-7b1539a9",
    scholar: "https://scholar.google.com"
  }
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: '1',
    title: 'Behavioral Adaptability',
    description: 'Investigating how humans and artificial agents navigate uncertainty by adapting their decision-making and coping strategies across non-social and social environments. This includes studying when agents hold on to control, when they let go, and how rigid or flexible patterns emerge—especially in the context of mood, anxiety, ADHD, and autism-related conditions.',
    iconName: 'Brain'
  },
  {
    id: '2',
    title: 'Meta-Learning & AI',
    description: 'Developing computational and neural network models to explain how humans and AI systems balance the trade-off between adaptability and the motivation to control outcomes. These models reveal the mechanisms shaping cognitive flexibility, structure-learning, and learning-to-learn processes in dynamic, unpredictable settings.',
    iconName: 'BarChart'
  },
  {
    id: '3',
    title: 'Interdisciplinary Ecosystems',
    description: 'Using engineered game environments and machine-learning tools to build a comprehensive, multi-level understanding of adaptability—integrating neuroscientific, cognitive, affective, and psychiatric perspectives. This ecosystem helps uncover pathways into and out of mental health conditions, while informing the design of more adaptive, human-aligned AI systems.',
    iconName: 'Globe'
  }
];

export const PUBLICATIONS: Publication[] = [
  // Published Articles
  {
    id: 'p1',
    title: "Gearshift Fellowship: A Next-Generation Neurocomputational Game Platform to Model and Train Human-AI Adaptability",
    journal: "Lecture Notes in Computer Science, vol 16243. Springer, Cham (JCSG 2025)",
    year: 2026,
    authors: ["Ging-Jehli, N.R.", "Childers, R.K.", "Lu, J.", "Gemma, R.", "Zhu, R."],
    abstract: "In: Thomas, A., Meyer, M., Zank, M. (eds) Serious Games. A platform designed to model and train adaptability in human-AI interaction.",
    tags: ["Serious Games", "Human-AI Interaction", "Neurocomputational Modeling"],
    link: "#"
  },
  {
    id: 'p2',
    title: "Model-based EEG phenotyping uncovers distinct neurocomputational mechanisms underlying learning impairments across psychopathologies",
    journal: "Biological Psychiatry: Global Open Science (In Press)",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Rac-Lubashevsky, R.", "Bera, K.", "Roberts, A.", "Loder, A.", "Boudewyn, M.A.", "Carter, C.S.", "Erickson, M.", "Gold, J.", "Luck, S.J.", "Ragland, J.D.", "Yonelinas, A.P", "MacDonald III, A.W.", "Barch, D.M.", "Frank, M.J."],
    abstract: "Uncovering distinct neurocomputational mechanisms underlying learning impairments across psychopathologies using model-based EEG phenotyping.",
    tags: ["EEG", "Computational Psychiatry", "Learning Impairments", "Phenotyping"],
    link: "#"
  },
  {
    id: 'p3',
    title: "From Symptom-Based Heterogeneity to Mechanism-Based Profiling in Youth ADHD: The Promise of Computational Psychiatry",
    journal: "Neuropsychopharmacology",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Pine, D.S."],
    abstract: "Discussing the transition from symptom-based heterogeneity to mechanism-based profiling in youth ADHD using computational psychiatry approaches.",
    tags: ["ADHD", "Computational Psychiatry", "Youth", "Mechanism-Based Profiling"],
    link: "#"
  },
  {
    id: 'p4',
    title: "Theta-frequency subthalamic nucleus stimulation increases decision threshold",
    journal: "Brain Stimulation",
    year: 2025,
    authors: ["Cole, C.R.", "Ging-Jehli, N.R.", "Suarez, J.V.", "Greenlee, J.D.", "Wessel, J.R.", "Espinoza, A.I.", "Zhang, J.", "Cavanagh, J.F.", "Narayanan N.S."],
    abstract: "Investigating the effects of theta-frequency subthalamic nucleus stimulation on decision thresholds.",
    tags: ["Brain Stimulation", "Subthalamic Nucleus", "Decision Making"],
    link: "#"
  },
  {
    id: 'p5',
    title: "Basal ganglia components have distinct computational roles in decision-making dynamics under conflict and uncertainty",
    journal: "PLOS Biology",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Cavanagh, J.F.", "Ahn, M.", "Segar, D.J.", "Asaad, W.F.", "Frank, M.J."],
    abstract: "Elucidating the distinct computational roles of basal ganglia components in decision-making dynamics under conflict and uncertainty.",
    tags: ["Basal Ganglia", "Decision Making", "Uncertainty", "Conflict"],
    link: "#"
  },
  {
    id: 'p6',
    title: "A jsPsych Touchscreen Extension for Behavioral Research on Touch-Enabled Interfaces",
    journal: "Behavior Research Methods",
    year: 2024,
    authors: ["Strittmatter, Y.", "Spitzer, W.H.", "Ging-Jehli, N.R.", "Musslick, S."],
    abstract: "Presenting a jsPsych touchscreen extension to facilitate behavioral research on touch-enabled interfaces.",
    tags: ["jsPsych", "Touchscreen", "Behavioral Research", "Methods"],
    link: "#"
  },
  {
    id: 'p7',
    title: "Cognitive signatures of depression, anhedonia, and affective states using computational modeling and neurocognitive testing",
    journal: "Biological Psychiatry: Cognitive Neuroscience and Neuroimaging",
    year: 2024,
    authors: ["Ging-Jehli, N.R.", "Kuhn, M.", "Blank, J.M.", "Chanthrakumar, P.", "Steinberger, D.C.", "Yu, Z.", "Herrington, T.D.", "Dillon, D.G.", "Pizzagalli, D.A.", "Frank, M.J."],
    abstract: "Identifying cognitive signatures of depression, anhedonia, and affective states through computational modeling and neurocognitive testing.",
    tags: ["Depression", "Anhedonia", "Computational Modeling", "Neurocognitive Testing"],
    link: "#"
  },
  {
    id: 'p8',
    title: "Cognitive & attentional mechanisms of cooperation: implications for incentive designs and computational psychiatry",
    journal: "Cognitive, Affective, & Behavioral Neuroscience",
    year: 2023,
    authors: ["Ging-Jehli, N.R.", "Arnold, L.E.", "Van Zandt, T."],
    abstract: "Exploring cognitive and attentional mechanisms of cooperation and their implications for incentive designs and computational psychiatry.",
    tags: ["Cooperation", "Attention", "Incentives", "Computational Psychiatry"],
    link: "#"
  },
  {
    id: 'p9',
    title: "A Diffusion Decision Model Analysis of The Cognitive Effects of Neurofeedback for ADHD",
    journal: "Neuropsychology",
    year: 2023,
    authors: ["Ging-Jehli, N.R.", "Painter, Q.A.", "Kraemer, H.", "Roley-Roberts, M.E.", "Panchyshyn, C.", "deBeus, R.", "Arnold, L.E."],
    abstract: "Applying Diffusion Decision Model Analysis to understand the cognitive effects of neurofeedback for ADHD.",
    tags: ["ADHD", "Neurofeedback", "Diffusion Decision Model"],
    link: "#"
  },
  {
    id: 'p10',
    title: "Latent cognitive components moderate neurofeedback response in ADHD – A computational modeling analysis of a randomized clinical trial",
    journal: "Journal of Clinical and Experimental Neuropsychology",
    year: 2023,
    authors: ["Ging-Jehli, N.R.", "Kraemer, H.", "Arnold, L.E.", "Roley Roberts, M.E.", "deBeus, R."],
    abstract: "A computational modeling analysis of a randomized clinical trial showing how latent cognitive components moderate neurofeedback response in ADHD.",
    tags: ["ADHD", "Neurofeedback", "Clinical Trial", "Computational Modeling"],
    link: "#"
  },
  {
    id: 'p11',
    title: "Comorbid anxiety and disruptive behavior disorders but not ADHD presentation moderate neurofeedback effect in children with ADHD",
    journal: "Applied Psychophysiology and Biofeedback",
    year: 2022,
    authors: ["Roley-Robert, M.E.", "Bergman, R.", "Pan, X.", "Tan, Y.", "Hendrix, K.", "deBeus, R.", "Kerson, C.", "Arns, M.", "Ging-Jehli, N.R.", "Connor, S.", "Shrader, C.", "Arnold, L.E."],
    abstract: "Investigating how comorbid anxiety and disruptive behavior disorders moderate the neurofeedback effect in children with ADHD.",
    tags: ["ADHD", "Anxiety", "Neurofeedback", "Comorbidities"],
    link: "#"
  },
  {
    id: 'p12',
    title: "Improving Neurocognitive Testing using Computational Psychiatry – A Systematic Review for ADHD",
    journal: "Psychological Bulletin",
    year: 2021,
    authors: ["Ging Jehli, N.R.", "Ratcliff, R.", "Arnold, L.E."],
    abstract: "A systematic review advocating for the improvement of neurocognitive testing in ADHD research using computational psychiatry methods.",
    tags: ["ADHD", "Systematic Review", "Neurocognitive Testing", "Computational Psychiatry"],
    link: "#"
  },
  {
    id: 'p13',
    title: "Characterizing underlying cognitive components of ADHD presentations and co-morbid diagnoses – A diffusion decision model analysis",
    journal: "Journal of Attention Disorders",
    year: 2021,
    authors: ["Ging-Jehli, N.R.", "Arnold, L.E.", "Roley-Roberts, M.E.", "deBeus, R."],
    abstract: "Using diffusion decision model analysis to characterize underlying cognitive components of ADHD presentations and co-morbid diagnoses.",
    tags: ["ADHD", "Diffusion Decision Model", "Comorbidities"],
    link: "#"
  },
  {
    id: 'p14',
    title: "Effects of aging in a task-switch paradigm with the diffusion decision model",
    journal: "Journal of Psychology and Aging",
    year: 2020,
    authors: ["Ging-Jehli, N.R.", "Ratcliff, R."],
    abstract: "Analyzing the effects of aging in a task-switch paradigm using the diffusion decision model.",
    tags: ["Aging", "Task-Switching", "Diffusion Decision Model"],
    link: "#"
  },
  {
    id: 'p15',
    title: "Exploring cholesterol supplementation for autistic symptoms in Children with Low Cholesterol",
    journal: "Journal of Developmental and Physical Disabilities",
    year: 2020,
    authors: ["Ging-Jehli, N.R.", "Deepa, M.", "Hollway J.", "Hurt, E.", "Moone, S.", "Arnold, L.E."],
    abstract: "A study exploring the effects of cholesterol supplementation on autistic symptoms in children with low cholesterol.",
    tags: ["Autism", "Cholesterol", "Supplementation", "Children"],
    link: "#"
  },
  {
    id: 'p16',
    title: "On self-serving strategic beliefs",
    journal: "Journal of Games and Economic Behavior",
    year: 2020,
    authors: ["Ging-Jehli, N.R.", "Schneider, F.H.", "Weber, R.A."],
    abstract: "Investigating self-serving strategic beliefs in economic games.",
    tags: ["Behavioral Economics", "Game Theory", "Beliefs"],
    link: "#"
  },
  {
    id: 'p17',
    title: "Generosity across contexts",
    journal: "CESifo Working Paper, No. 5272, Center for Economic Studies and ifo Institute (CESifo), Munich",
    year: 2015,
    authors: ["Davis, A. L.", "Jehli, N.R.", "Miller, J.H.", "Weber, R.A."],
    abstract: "Examining generosity across different contexts.",
    tags: ["Behavioral Economics", "Generosity", "Working Paper"],
    link: "#"
  },
  // Under Review
  {
    id: 'ur1',
    title: "A Novel Approach-Avoidance Task to Study Decision Making Under Outcome Uncertainty",
    journal: "Submitted",
    year: 2025,
    authors: ["Ziwei, C.", "Ging-Jehli, N.R.", "Tarlow, M.", "Kim, J.", "Chase, H.W.", "Bonar, L.", "Stiffler, R.", "Grattery, A.", "Graur, S.", "Frank, M.J.", "Phillips, M.L.", "Shenhav, A."],
    abstract: "Article under review describing a novel approach-avoidance task.",
    tags: ["Decision Making", "Uncertainty", "Approach-Avoidance", "Under Review"],
    link: "#"
  },
  {
    id: 'ur2',
    title: "Broader visual processing and distinct pupil dynamics facilitate resolving perceptual conflict and compensate for ADHD distractibility",
    journal: "Submitted",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Arnold, L.E.", "Sellers J.", "Van Zandt, T."],
    abstract: "Article under review on visual processing, pupil dynamics, and ADHD distractibility.",
    tags: ["ADHD", "Visual Processing", "Pupillometry", "Under Review"],
    link: "#"
  }
];