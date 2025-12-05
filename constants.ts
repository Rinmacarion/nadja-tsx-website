import { Publication, ResearchArea, BlogPost } from './types';

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
    link: "https://link.springer.com/chapter/10.1007/978-3-032-10518-9_23",
    pdf: "https://osf.io/preprints/psyarxiv/5rq98_v1"
  },
  {
    id: 'p2',
    title: "Model-based EEG phenotyping uncovers distinct neurocomputational mechanisms underlying learning impairments across psychopathologies",
    journal: "Biological Psychiatry: Global Open Science (In Press)",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Rac-Lubashevsky, R.", "Bera, K.", "Roberts, A.", "Loder, A.", "Boudewyn, M.A.", "Carter, C.S.", "Erickson, M.", "Gold, J.", "Luck, S.J.", "Ragland, J.D.", "Yonelinas, A.P", "MacDonald III, A.W.", "Barch, D.M.", "Frank, M.J."],
    abstract: "Uncovering distinct neurocomputational mechanisms underlying learning impairments across psychopathologies using model-based EEG phenotyping.",
    tags: ["EEG", "Computational Psychiatry", "Learning Impairments", "Phenotyping"],
    link: "",
    pdf: "https://www.biorxiv.org/content/10.1101/2025.11.01.685815v1"
  },
  {
    id: 'p3',
    title: "From Symptom-Based Heterogeneity to Mechanism-Based Profiling in Youth ADHD: The Promise of Computational Psychiatry",
    journal: "Neuropsychopharmacology",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Pine, D.S."],
    abstract: "Discussing the transition from symptom-based heterogeneity to mechanism-based profiling in youth ADHD using computational psychiatry approaches.",
    tags: ["ADHD", "Computational Psychiatry", "Youth", "Mechanism-Based Profiling"],
    link: "https://www.nature.com/articles/s41386-025-02254-5"
  },
  {
    id: 'p4',
    title: "Theta-frequency subthalamic nucleus stimulation increases decision threshold",
    journal: "Brain Stimulation",
    year: 2025,
    authors: ["Cole, C.R.", "Ging-Jehli, N.R.", "Suarez, J.V.", "Greenlee, J.D.", "Wessel, J.R.", "Espinoza, A.I.", "Zhang, J.", "Cavanagh, J.F.", "Narayanan N.S."],
    abstract: "Investigating the effects of theta-frequency subthalamic nucleus stimulation on decision thresholds.",
    tags: ["Brain Stimulation", "Subthalamic Nucleus", "Decision Making"],
    link: "https://journals.plos.org/Plosbiology/article?id=10.1371/journal.pbio.3002978"
  },
  {
    id: 'p5',
    title: "Basal ganglia components have distinct computational roles in decision-making dynamics under conflict and uncertainty",
    journal: "PLOS Biology",
    year: 2025,
    authors: ["Ging-Jehli, N.R.", "Cavanagh, J.F.", "Ahn, M.", "Segar, D.J.", "Asaad, W.F.", "Frank, M.J."],
    abstract: "Elucidating the distinct computational roles of basal ganglia components in decision-making dynamics under conflict and uncertainty.",
    tags: ["Basal Ganglia", "Decision Making", "Uncertainty", "Conflict"],
    link: "https://journals.plos.org/Plosbiology/article?id=10.1371/journal.pbio.3002978"
  },
  {
    id: 'p6',
    title: "A jsPsych Touchscreen Extension for Behavioral Research on Touch-Enabled Interfaces",
    journal: "Behavior Research Methods",
    year: 2024,
    authors: ["Strittmatter, Y.", "Spitzer, W.H.", "Ging-Jehli, N.R.", "Musslick, S."],
    abstract: "Presenting a jsPsych touchscreen extension to facilitate behavioral research on touch-enabled interfaces.",
    tags: ["jsPsych", "Touchscreen", "Behavioral Research", "Methods"],
    link: "https://link.springer.com/article/10.3758/s13428-024-02454-9",
    pdf: "https://osf.io/preprints/psyarxiv/akzwj"
  },
  {
    id: 'p7',
    title: "Cognitive signatures of depression, anhedonia, and affective states using computational modeling and neurocognitive testing",
    journal: "Biological Psychiatry: Cognitive Neuroscience and Neuroimaging",
    year: 2024,
    authors: ["Ging-Jehli, N.R.", "Kuhn, M.", "Blank, J.M.", "Chanthrakumar, P.", "Steinberger, D.C.", "Yu, Z.", "Herrington, T.D.", "Dillon, D.G.", "Pizzagalli, D.A.", "Frank, M.J."],
    abstract: "Identifying cognitive signatures of depression, anhedonia, and affective states through computational modeling and neurocognitive testing.",
    tags: ["Depression", "Anhedonia", "Computational Modeling", "Neurocognitive Testing"],
    link: "https://www.sciencedirect.com/science/article/pii/S2451902224000569?casa_token=USIyjCmNw_kAAAAA:vFjKnBuoTiCaHAljwBGgBAHwd6sDzHl-xFuGq67O6uSJ0o26gG74SaPcd1sC-32cmlipNLk",
    pdf: "https://ski.clps.brown.edu/papers/GingJehliKuhnEtAl.pdf"
  },
  {
    id: 'p8',
    title: "Cognitive & attentional mechanisms of cooperation: implications for incentive designs and computational psychiatry",
    journal: "Cognitive, Affective, & Behavioral Neuroscience",
    year: 2023,
    authors: ["Ging-Jehli, N.R.", "Arnold, L.E.", "Van Zandt, T."],
    abstract: "Exploring cognitive and attentional mechanisms of cooperation and their implications for incentive designs and computational psychiatry.",
    tags: ["Cooperation", "Attention", "Incentives", "Computational Psychiatry"],
    link: "https://link.springer.com/article/10.3758/s13415-023-01129-w",
    pdf: "https://www.gingjehli.com/_files/ugd/2d0ae9_0e3a5ac0fddb488b93eeb975749397ee.pdf"
  },
  {
    id: 'p9',
    title: "A Diffusion Decision Model Analysis of The Cognitive Effects of Neurofeedback for ADHD",
    journal: "Neuropsychology",
    year: 2023,
    authors: ["Ging-Jehli, N.R.", "Painter, Q.A.", "Kraemer, H.", "Roley-Roberts, M.E.", "Panchyshyn, C.", "deBeus, R.", "Arnold, L.E."],
    abstract: "Applying Diffusion Decision Model Analysis to understand the cognitive effects of neurofeedback for ADHD.",
    tags: ["ADHD", "Neurofeedback", "Diffusion Decision Model"],
    link: "https://psycnet.apa.org/record/2024-26051-001",
    pdf: "https://www.gingjehli.com/_files/ugd/2d0ae9_3b9dca8259bf4bcdac818cb72b31eee8.pdf"
  },
  {
    id: 'p10',
    title: "Latent cognitive components moderate neurofeedback response in ADHD – A computational modeling analysis of a randomized clinical trial",
    journal: "Journal of Clinical and Experimental Neuropsychology",
    year: 2023,
    authors: ["Ging-Jehli, N.R.", "Kraemer, H.", "Arnold, L.E.", "Roley Roberts, M.E.", "deBeus, R."],
    abstract: "A computational modeling analysis of a randomized clinical trial showing how latent cognitive components moderate neurofeedback response in ADHD.",
    tags: ["ADHD", "Neurofeedback", "Clinical Trial", "Computational Modeling"],
    link: "https://www.tandfonline.com/doi/abs/10.1080/13803395.2023.2206637",
    pdf: "https://www.gingjehli.com/_files/ugd/2d0ae9_97b85b723d5f45348bdc9a576ce271d3.pdf"
  },
  {
    id: 'p11',
    title: "Comorbid anxiety and disruptive behavior disorders but not ADHD presentation moderate neurofeedback effect in children with ADHD",
    journal: "Applied Psychophysiology and Biofeedback",
    year: 2022,
    authors: ["Roley-Robert, M.E.", "Bergman, R.", "Pan, X.", "Tan, Y.", "Hendrix, K.", "deBeus, R.", "Kerson, C.", "Arns, M.", "Ging-Jehli, N.R.", "Connor, S.", "Shrader, C.", "Arnold, L.E."],
    abstract: "Investigating how comorbid anxiety and disruptive behavior disorders moderate the neurofeedback effect in children with ADHD.",
    tags: ["ADHD", "Anxiety", "Neurofeedback", "Comorbidities"],
    link: "https://pubmed.ncbi.nlm.nih.gov/36526924/"
  },
  {
    id: 'p12',
    title: "Improving Neurocognitive Testing using Computational Psychiatry – A Systematic Review for ADHD",
    journal: "Psychological Bulletin",
    year: 2021,
    authors: ["Ging Jehli, N.R.", "Ratcliff, R.", "Arnold, L.E."],
    abstract: "A systematic review advocating for the improvement of neurocognitive testing in ADHD research using computational psychiatry methods.",
    tags: ["ADHD", "Systematic Review", "Neurocognitive Testing", "Computational Psychiatry"],
    link: "https://psycnet.apa.org/record/2020-99592-001",
    pdf: "https://www.researchgate.net/profile/Nadja_Ging_Jehli"
  },
  {
    id: 'p13',
    title: "Characterizing underlying cognitive components of ADHD presentations and co-morbid diagnoses – A diffusion decision model analysis",
    journal: "Journal of Attention Disorders",
    year: 2021,
    authors: ["Ging-Jehli, N.R.", "Arnold, L.E.", "Roley-Roberts, M.E.", "deBeus, R."],
    abstract: "Using diffusion decision model analysis to characterize underlying cognitive components of ADHD presentations and co-morbid diagnoses.",
    tags: ["ADHD", "Diffusion Decision Model", "Comorbidities"],
    link: "https://doi.org/10.1177/10870547211020087",
    pdf: "https://www.researchgate.net/publication/351427873_Characterizing_underlying_cognitive_components_of_ADHD_presentations_and_co-morbid_diagnoses_-A_diffusion_decision_model_analysis"
  },
  {
    id: 'p14',
    title: "Effects of aging in a task-switch paradigm with the diffusion decision model",
    journal: "Journal of Psychology and Aging",
    year: 2020,
    authors: ["Ging-Jehli, N.R.", "Ratcliff, R."],
    abstract: "Analyzing the effects of aging in a task-switch paradigm using the diffusion decision model.",
    tags: ["Aging", "Task-Switching", "Diffusion Decision Model"],
    link: "https://link.growkudos.com/1js1cz9dxj4",
    pdf: "https://www.gingjehli.com/_files/ugd/2d0ae9_5abe5bccc9d24d22bdb54d12963505c7.pdf"
  },
  {
    id: 'p15',
    title: "Exploring cholesterol supplementation for autistic symptoms in Children with Low Cholesterol",
    journal: "Journal of Developmental and Physical Disabilities",
    year: 2020,
    authors: ["Ging-Jehli, N.R.", "Deepa, M.", "Hollway J.", "Hurt, E.", "Moone, S.", "Arnold, L.E."],
    abstract: "A study exploring the effects of cholesterol supplementation on autistic symptoms in children with low cholesterol.",
    tags: ["Autism", "Cholesterol", "Supplementation", "Children"],
    link: "",
    pdf: "https://www.gingjehli.com/_files/ugd/2d0ae9_cb058a9660db428286a192ce8391eabe.pdf"
  },
  {
    id: 'p16',
    title: "On self-serving strategic beliefs",
    journal: "Journal of Games and Economic Behavior",
    year: 2020,
    authors: ["Ging-Jehli, N.R.", "Schneider, F.H.", "Weber, R.A."],
    abstract: "Investigating self-serving strategic beliefs in economic games.",
    tags: ["Behavioral Economics", "Game Theory", "Beliefs"],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0899825620300713"
  },
  {
    id: 'p17',
    title: "Generosity across contexts",
    journal: "CESifo Working Paper, No. 5272, Center for Economic Studies and ifo Institute (CESifo), Munich",
    year: 2015,
    authors: ["Davis, A. L.", "Jehli, N.R.", "Miller, J.H.", "Weber, R.A."],
    abstract: "Examining generosity across different contexts.",
    tags: ["Behavioral Economics", "Generosity", "Working Paper"],
    link: ""
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

export const BLOG_POSTS: BlogPost[] = [

  {

    id: 'b1',

    title: 'The Power of Diffusion Models in Cognitive, Decision, and Clinical Sciences - A brief Introduction',

    content: `In this blog, I introduce the diffusion decision model (DDM), a computational tool that was developed by one of my former mentors, Roger Ratcliff (1978). This model has profoundly influenced fields ranging from cognitive neuroscience to psychology, and from behavioral economics to decision and clinical sciences. I discuss the reasons behind its widespread adoption, including a summary of the four main parameters and their psychological interpretations (Forstmann et al., 2016; Forstmann & Wagenmakers, 2015; Ging-Jehli, Ratcliff, & Arnold, 2021).  At the end of this blog, you find a list of essential references for deeper exploration. In my next blog, I provide an in-depth analysis of how these parameters capture distinct behavioral effects.





Studying behavior with experimental paradigms



We often use cognitive or social-cognitive tasks to study behavior in humans, primates, or other animals. While subjects perform these tasks, we record their choices and response times (RTs). However, these behavioral measures are merely the observable outcomes of the underlying decision-making processes that truly interest us. These decision-making processes unfold from the instant a stimulus (such as a dog) is presented to the moment the behavior is recorded. So, how can we best study these unobservable processes?



Behavioral measures as end product of latent decision processes



From the early beginning of mathematical psychology and behavioral economics, information theories (Wald & Wolfowitz, 1949) proposed that behavior results from a sequence of stages: encoding (e.g., obtaining a neural representation of a presented stimulus like a dog), decision-making, and response execution. The assumptions of the Diffusion Decision Model (DDM) are deeply embedded in these information theories, presenting decision-making as a dynamic process that evolves over time. To grasp these dynamics, we use models like the DDM to simulate the processes and account for the observable behavioral data. Before delving into how these models simulate behavior, let’s first explore why we employ them. Specifically, we not only use DDMs to provide clearer explanations but also to offer a more detailed description of the behavioral data.





Characteristics of RT distributions and reasons for moving beyond summary measures



Typically, subjects repeat a task multiple times, and we record their choices and RTs for each trial. Empirical evidence from different experimental (e.g., perceptual, value-based) paradigms have consistently shown that RT distributions are often right-skewed (Smith & Ratcliff, 2004; Van Zandt, 2002). This skewness indicates that the distributions extend further to the right, reflecting longer delays in some responses. Therefore, relying solely on mean RTs can be misleading as this measure doesn’t capture the nuances at the extremes of the distribution – the very fast and very slow responses. Examining these extremes can provide additional insights into the cognitive processes that drive the responses. We typically summarize these RT distributions using quantiles or percentiles, referring to the fastest 10% of responses as the leading edge and the slowest responses – those above the 90th percentile – as the tails of the distribution.



Our goal is to succinctly capture the essential characteristics of the RT distribution for each choice option using as few parameters as possible but not fewer. The DDM excels in this task. It efficiently summarizes the entire RT distribution and the relative proportions of possible choices using just a few key parameters, which I will describe below. While the figure below illustrates the standard DDM for two choices, it's important to note that the model can be adapted to accommodate multiple choices. Additionally, I will cover the variability parameters in a separate blog.





What exactly is the diffusion decision model?



The DDM (Ratcliff, 1978) belongs to the broader category of sequential sampling models (SSMs). These models are called “process-oriented” because they allow us to simulate the sequence of events between the presentation of a stimulus and the observable behavioral response. Specifically, SSMs posit that a subject accumulates bits of information sequentially until reaching a decision threshold that triggers a response. In the figure below, we exemplify a decision-making scenario involving a dog that runs towards us. We need to decide whether we want to approach or avoid that dog. If the dog appears playful, we might accumulate positive evidence towards approaching it, represented by an upper decision boundary in the graphical illustration below. Conversely, if the dog reminds us of a past negative experience, we might accumulate evidence towards avoiding it, indicated by a lower decision boundary.





(modified figure from: Ging-Jehli, Arnold, & Van Zandt, 2023)





The DDM accounts for the observed response data (choice and RTs) by simulating how evidence accumulation processes leads to decisions once specific boundaries are reached (Forstmann et al., 2016; Forstmann & Wagenmakers, 2015; Ging-Jehli et al., 2021; Smith & Ratcliff, 2004). Let’s assume we are presented with a series of different dogs and animals and each time we need to decide whether we want to approach or avoid that animal. In each trial, a diffusion particle simulates this decision process: it terminates at the upper boundary for an approach decision (black processes in the figure) or at the lower boundary for an avoidance decision (grey processes in the figure). Overall, DDM and other SSMs are used because they can capture the observed RT distributions for each decision option, offering detailed insights into decision-making processes. Specifically, the model summarizes our behavior with four main model parameters (represented in red in the figure): nondecision time (Ter), drift rate (v), boundary separation (a), and starting points (z).





Nondecision Time (Ter): This parameter quantifies the time spent on activities that are not directly related to the decision process itself, such as sensory processing and motor response execution. Nondecision time ensures that the model’s focus remains on the core decision period, excluding the preliminary and concluding stages of the task.





Drift Rate (v): The drift rate is a critical measure of the quality of evidence accumulation during the decision-making process. It reflects how quickly and effectively information is integrated to reach a decision. A higher drift rate signifies a more robust accumulation of information towards the upper boundary. Sometimes, the upper boundary indices correct responses, which is why we associated higher drift rate with higher accuracy. However, in value-based decision-making, the upper boundary could also reflect a particular response category (e.g., approach) and we then associated higher drift rate with more frequent approach (than avoidance reflected by lower boundary) choices (Ging Jehli et al., 2023; Ging-Jehli et al., 2021, 2024).





Boundary Separation (a): This parameter indexes the strategic balance between speed and accuracy that participants adopt. Boundary separation is a gauge of decision caution: larger values indicate a preference for accuracy, entailing longer decision times, while smaller values suggest a bias toward quicker, but potentially less accurate, responses. In value-based decision-making, the boundary separation parameter reflects response consistency. For detailed information, see: Ging-Jehli, Kuhn, et al. (2024).





Starting Point (z): Also known as the a priori response bias, this parameter reveals an inherent bias towards a particular response, regardless of the stimulus content. It illustrates how pre-existing preferences can influence decision outcomes before the decision-making process even begins. If the starting point is equidistant from both boundaries, it indicates no initial bias. A starting point closer to the upper boundary suggests a bias towards upper responses, while one closer to the lower boundary indicates a bias towards lower responses.





Take home messages:



The DDM accurately represents the entire RT distribution and relative frequencies of each response option using a few core parameters.



By simulating latent decision-making processes, the DDM offers quantifiable and testable predictions, capturing observable behaviors with these parameters.



Each model parameter has a well-established psychological significance, grounded in a century of cognitive neuroscience and psychology research. It’s important to note that the above description of the mental meaning of each parameter are generic and the precise meaning of each parameter needs to be interpreted within the context of the task specifics (see for details: Ging-Jehli et al., 2021).



 



In my next blog post, I will detail how each parameter uniquely influences behavioral data.



 



Selected References:



Forstmann, B. U., Ratcliff, R., & Wagenmakers, E.-J. (2016). Sequential Sampling Models in Cognitive Neuroscience: Advantages, Applications, and Extensions. Annual Review of Psychology, 67(1), 641–666. 



Forstmann, B. U., & Wagenmakers, E.-J. (2015). Model-Based Cognitive Neuroscience: A Conceptual Introduction. In B. U. Forstmann & E.-J. Wagenmakers (Eds.), An Introduction to Model-Based Cognitive Neuroscience (pp. 139–156). Springer. 



Ging Jehli, N. R., Arnold, L. E., & Van Zandt, T. (2023). Cognitive & attentional mechanisms of cooperation: Implications for incentive designs and computational psychiatry.



Ging-Jehli, N. R., Kuhn, M., Blank, J. M., Chanthrakumar, P., Steinberger, D. C., Yu, Z., Herrington, T. M., Dillon, D. G., Pizzagalli, D. A., & Frank, M. J. (2024). Cognitive signatures of depressive and anhedonic symptoms, and affective states, using computational modeling and neurocognitive testing. Biological Psychiatry Cognitive Neuroscience and Neuroimaging, S2451-9022(24)00056-9.



Ging-Jehli, N. R., Ratcliff, R., & Arnold, L. E. (2021). Improving neurocognitive testing using computational psychiatry—A systematic review for ADHD. Psychological Bulletin, 147(2), 169–231. 



Ratcliff, R. (1978). A theory of memory retrieval. Psychological Review, 85(2), 59–108.



Smith, P. L., & Ratcliff, R. (2004). Psychology and neurobiology of simple decisions. Trends in Neurosciences, 27(3), 161–168.



Van Zandt, T. (2002). Analysis of Response Time Distributions. In Stevens’ Handbook of Experimental Psychology, Methodology in Experimental Psychology (Vol. 4, pp. 461–516). John Wiley & Sons.



Wald, A., & Wolfowitz, J. (1949). Bayes Solutions of Sequential Decision Problems. Proceedings of the National Academy of Sciences, 35(2), 99–102.`,

    date: '2025-12-04',

    tags: ['DDM', 'Cognitive Science', 'Decision Making', 'Sequential Modeling'],

    rating: 0,

    comments: [],

  },

];
