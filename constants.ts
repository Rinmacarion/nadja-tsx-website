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
    id: 'diffusion-ddm',
    title: 'The Power of Diffusion Models for Sequential Sampling Modeling',
    excerpt: 'A practical primer on using diffusion (generative) models to improve sequential sampling modeling and bridge DDM approaches with modern generative frameworks.',
    content: `In this blog, I introduce the diffusion decision model (DDM), a computational tool that was developed by Roger Ratcliff (1978).
This model has profoundly influenced fields ranging from cognitive neuroscience to psychology, and from behavioral economics to decision and clinical sciences.
I discuss the reasons behind its widespread adoption, including a summary of the four main parameters and their psychological interpretations.

We often use cognitive or social-cognitive tasks to study behavior in humans, primates, or other animals.`,
    category: 'Sequential Sampling Modeling',
    tags: ['Sequential Modeling'],
    date: 'May 11, 2024',
    slug: 'diffusion-ddm'
  },
  {
    id: 'ddm-deep-dive',
    title: 'Diffusion Decision Modeling: A Deep Dive into the Four Main Parameters',
    excerpt: 'A detailed walkthrough of the four principal DDM parameters (drift rate, boundary separation, starting point, nondecision time) and their behavioral implications.',
    content: `In this blog, I explain the behavioral impacts of the four principal parameters of the Diffusion Decision Model (DDM; Ratcliff, 1978). Note that this blog is supposed to give you a general idea of how each of these parameters exert distinct behavioral effects. However, the specific interpretation of each parameter must always be contextualized according to the details of the task at hand (for more details, see Ging-Jehli et al., 2021). Moreover, for an introduction to these parameters and their psychological interpretations, please see my earlier blog, "Decoding Decision-Making." All graphical illustrations were generated using the RTdist package in R, and the code for conducting your own simulations is available on my GitHub. At the conclusion of this post, you'll find a list of selected references that offer further insights.

<h2>Behavioral effect of changes in drift rate (v)</h2>
<img src="/images/blog/drift-rate.png" alt="Drift Rate" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 10px;" />
<p>Imagine the upper boundary represents correct responses and the lower boundary errors. Higher drift rates lead to more accurate and faster mean RTs of associated correct responses. This is illustrated by the blue versus red distributions in the figure (Ratcliff, 1978; Ratcliff et al., 2016; Smith & Ratcliff, 2004). Moreover, the impact of drift rate changes is more pronounced in the tails (slowest responses) than in the leading edge (fastest responses) of the RT distributions. Typically, variations in drift rate reflect differences in task difficulty or stimulus discrimination (Ging-Jehli et al., 2021, 2024; Ging-Jehli & Ratcliff, 2020; Ratcliff et al., 2016). Though, note that the specific interpretation of each parameter must be contextualized according to the details of the task at hand (for more details, see Ging-Jehli et al., 2021).</p>
<div style="clear: both;"></div>

<h2>Behavioral effect of changes in boundary separation (a)</h2>
<img src="/images/blog/boundary-separation.png" alt="Boundary Separation" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 10px;" />
<p>Let’s again assume the upper and lower boundaries represent correct and error responses, respectively. An increase in boundary separation indicates a shift towards a more cautious response strategy, prioritizing accuracy over speed. This results in higher accuracy but slower average RTs. The effects on RTs, particularly in the tails compared to the leading edges, show a roughly 1:2 ratio (Ratcliff et al., 2016; Smith & Ratcliff, 2004). Notably, changes in boundary separation have a greater impact on RTs than variations in drift rate. Changes in boundary separation are often influenced by modifications in task instructions, feedback, proactive difficulty or conflict, and stress.</p>
<div style="clear: both;"></div>

<h2>Behavioral effect of changes in starting points (z)</h2>
<img src="/images/blog/starting-point.png" alt="Starting Point" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 10px;" />
<p>The upper and lower boundaries now represent response options rather than correct or incorrect responses. This is to avoid the unreasonable assumption that people can predict the "accurate" outcome before a stimulus is presented. Therefore, models should typically set the starting point equidistant from both boundaries if the upper and lower boundaries represent corrects and errors, respectively. Variations in the starting point can bias responses towards the upper (A) or lower (B) options, with significant effects on the leading edge and asymmetric impacts on responses A versus B. Changes in starting points are often induced by influencing the frequency of the different stimulus occurrence or reward structures that change prior expectations about stimuli.</p>
<div style="clear: both;"></div>

<h2>Behavioral effect of changes in nondecision time (Ter)</h2>
<img src="/images/blog/nondecision-time.png" alt="Nondecision Time" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 10px;" />
<p>The nondecision time parameter accounts for the time taken by processes unrelated to the decision itself, such as stimulus encoding and motor response execution. Increases in nondecision time shift the entire reaction time (RT) distribution, impacting both correct and error responses. This parameter is influenced by various factors, including task-switching (Ging-Jehli & Ratcliff, 2020), sensory modality (Ging-Jehli et al., 2022), and the complexity of the stimulus features (Ging-Jehli et al., 2021; Smith & Ratcliff, 2004). Essentially, as nondecision time increases, it generally leads to slower overall response times, reflecting delays in these non-decision processes.</p>
<div style="clear: both;"></div>

<div style="margin-top: 2rem;">
  <a href="/blog" style="text-decoration: none; color: inherit;">← Back to posts</a>
</div>`,
    category: 'Sequential Sampling Modeling',
    tags: ['Sequential Modeling'],
    date: 'May 10, 2024',
    slug: 'ddm-deep-dive'
  },
  {
    id: 'ddm-variability',
    title: 'Why do we need variability parameters in the diffusion decision model?',
    excerpt: 'An exploration of the three sources of across-trial variability in the Diffusion Decision Model (DDM): drift rate (η), starting point (sz), and nondecision time (st), and why these parameters are crucial for accurately modeling empirical data.',
    content: `In a previous blog post, I introduced the four main parameters of the Diffusion Decision Model (DDM) (Ratcliff, 1978): drift rate (v), boundary separation (a), starting point (z), and nondecision time (Ter). The DDM often also incorporates three sources of across-trial variability, each represented by a distinct parameter. When these variability parameters are included, the model is often referred to as the “full” DDM or the “Ratcliff DDM” (Ging-Jehli et al., 2021; Ratcliff & Smith, 2004). We also note that the term “diffusion decision model” typically implies the inclusion of noisy diffusion processes that include within-trial variability, indicating that evidence accumulation is stochastic. In contrast, models like the “linear ballistic accumulator” (LBA) assume a deterministic accumulation process. I will explore the similarities and differences between these and other sequential sampling models in an upcoming blog post. For interested readers, I’m referring to the following great sources: (Brown & Heathcote, 2008; Donkin et al., 2011)

<h2>The three sources of variability in the DDM</h2>
<img src="/assets/the three sources.JPG" alt="The three sources of variability" style="float: right; width: 300px; margin-left: 20px; margin-bottom: 10px;" />
<p>There are three sources of variability that can be modeled across trials: variability in drift rate (denoted as “η”), variability in the starting point (denoted as “sz”), and variability in nondecision time (denoted as “st”). These parameters are used to capture the inherent fluctuations in cognitive processing that occur from one trial to the next. Specifically, even when presented with the identical stimulus twice, our decision-making process may differ each time due to the imperfect and inherently noisy nature of information integration in the brain (Forstmann & Wagenmakers, 2015; Ratcliff & Smith, 2004; Smith & Ratcliff, 2004). The graphic below illustrates these variabilities, showing how they influence the decision process across different trials.</p>
<p>Assuming, without loss of generality, that responses terminating at the upper boundary represent correct answers and those at the lower boundary represent errors, it’s worth revisiting some historical context about the DDM (see also my previous introductory blog about the DDM). Before Roger Ratcliff unified existing ideas into the DDM in 1978, earlier accumulator models struggled with a significant limitation: they simulated errors and correct responses as occurring at the same speed. However, empirical observations often show that response time (RT) distributions for different decision categories can vary significantly. For example, in discrimination tasks, errors are frequently slower than correct responses, although under certain conditions, the reverse can be true. Specifically, when discriminability is high and speed is emphasized, error RTs tend to be shorter than those for correct responses. Conversely, when discriminability is low and accuracy is prioritized, error RTs are longer than those for correct responses (Ratcliff & Smith, 2004). Ratcliff addressed this discrepancy by incorporating variability parameters into the DDM, successfully capturing this empirically observed phenomenon.</p>
<div style="clear: both;"></div>

<h2>Across-trial variability in drift rate can account for slower errors than corrects</h2>
<p>Across-trial variability in drift rate (η) reflects changes in the speed and consistency with which information is processed across trials. Incorporating this variability parameter into a model enhances its ability to account for the empirical observation that errors can be slower than correct responses. By assuming that drift rates vary across trials, we recognize that the decision-making process in each trial is influenced by different rates of information accumulation. Consequently, the resulting RT distributions are probability mixtures, composed of trials with varying drift rates - some high, some low. The overall mean RT for a given decision or response is thus a weighted average of RTs from trials with both high and low drift rates, accurately reflecting the diversity in decision-making speed and accuracy observed across trials (Ratcliff & Smith, 2004; Van Zandt & Ratcliff, 1995).</p>

<h2>Across-trial variability in starting point can account for faster errors than corrects</h2>
<p>Starting point variability (sz) accounts for differences in the bias or predisposition towards one decision boundary over another at the start of each trial. Variability in starting point is often driven by sequential effects, where the speed and accuracy of responses are influenced by the stimuli and responses on preceding trials. Incorporating this variability parameter into a model enhances its ability to account for the empirical observation that errors can be faster than correct responses (Ratcliff et al., 1999; Van Zandt & Ratcliff, 1995).</p>

<h2>Across-trial variability in nondecision time can account for condition-specific changes in the leading edge</h2>
<p>Nondecision time variability (st) represents fluctuations in the time taken by processes unrelated to decision-making, such as sensory encoding or motor responses. This aspect of variability is crucial for explaining why some responses are unexpectedly slow or fast, independent of the decision-making process itself. It's important to note that this parameter impacts both correct and error responses similarly, as it pertains to processes that are not directly related to the decision-making accuracy. Variability in nondecision time has been demonstrated to influence the spread of the leading edges of RT distributions across different conditions, such as in task-switching paradigms (Ging-Jehli & Ratcliff, 2020).</p>

<h2>Take home messages</h2>

<ol style="list-style-type: decimal; margin-left: 0; margin-bottom: 1rem;">
    <li style="margin-bottom: 1rem;">The diffusion model predicts equal RTs for correct and error responses only when the only source of variability is the moment-to-moment fluctuation in the evidence accumulation process.</li>
    <li style="margin-bottom: 1rem;">Variability in starting points (sz) can lead to scenarios where the mean RT for errors is less than that for correct responses.</li>
    <li style="margin-bottom: 1rem;">Across-trial variability in drift rates (η) often results in mean RT for correct responses exceeding that for errors.</li>
    <li style="margin-bottom: 1rem;">Combining sz and η variability helps to account for crossover interactions under different conditions. For example, fast errors might occur with high discriminability stimuli and slow errors with low discriminability stimuli.</li>
    <li style="margin-bottom: 1rem;">The model fails to predict a crossover pattern where errors are slower than correct responses in high-accuracy conditions and faster in low-accuracy conditions solely with drift rate variability. For such patterns, especially in conflict tasks, dual-stage conflict DDMs are used. I will elaborate more on this in an upcoming blog post.</li>
    <li style="margin-bottom: 1rem;">We want to interpret the variability parameters with caution, as their psychological interpretations are less established, and their recovery and identifiability are often poorer compared to the main model parameters. Some of these issues can be mitigated by fitting models within a Bayesian hierarchical framework. I will discuss this approach in more detail in an upcoming blog post.</li>
</ol>

<h2>Selected References</h2>

<ol style="list-style-type: none; padding-left: 0; margin-bottom: 1rem;">
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[1]</span><div><i>The simplest complete model of choice response time: Linear ballistic accumulation.</i> Brown, S. D., & Heathcote, A. (2008). Cognitive Psychology, 57(3), 153–178. <a href="https://doi.org/10.1016/j.cogpsych.2007.12.002" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.cogpsych.2007.12.002</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[2]</span><div><i>Diffusion versus linear ballistic accumulation: Different models but the same conclusions about psychological processes?</i> Donkin, C., Brown, S., Heathcote, A., & Wagenmakers, E.-J. (2011). Psychonomic Bulletin & Review, 18(1), 61–69. <a href="https://doi.org/10.3758/s13423-010-0022-4" target="_blank" rel="noopener noreferrer">https://doi.org/10.3758/s13423-010-0022-4</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[3]</span><div><i>Model-Based Cognitive Neuroscience: A Conceptual Introduction.</i> Forstmann, B. U., & Wagenmakers, E.-J. (2015). In B. U. Forstmann & E.-J. Wagenmakers (Eds.), An Introduction to Model-Based Cognitive Neuroscience (pp. 139–156). Springer. <a href="https://doi.org/10.1007/978-1-4939-2236-9_7" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/978-1-4939-2236-9_7</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[4]</span><div><i>Effects of aging in a task-switch paradigm with the diffusion decision model.</i> Ging-Jehli, N. R., & Ratcliff, R. (2020). Psychology and Aging, 35(6), 850–865. <a href="https://doi.org/10.1037/pag0000562" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/pag0000562</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[5]</span><div><i>Improving neurocognitive testing using computational psychiatry—A systematic review for ADHD.</i> Ging-Jehli, N. R., Ratcliff, R., & Arnold, L. E. (2021). Psychological Bulletin, 147(2), 169–231. <a href="https://doi.org/10.1037/bul0000319" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/bul0000319</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[6]</span><div><i>A theory of memory retrieval.</i> Ratcliff, R. (1978). Psychological Review, 85(2), 59–108. <a href="https://doi.org/10.1037/0033-295X.85.2.59" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.85.2.59</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[7]</span><div><i>A Comparison of Sequential Sampling Models for Two-Choice Reaction Time.</i> Ratcliff, R., & Smith, P. L. (2004). Psychological Review, 111(2), 333–367. <a href="https://doi.org/10.1037/0033-295X.111.2.333" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.111.2.333</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[8]</span><div><i>Connectionist and diffusion models of reaction time.</i> Ratcliff, R., Van Zandt, T., & McKoon, G. (1999). Psychological Review, 106(2), 261–300. <a href="https://doi.org/10.1037/0033-295X.106.2.261" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.106.2.261</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[9]</span><div><i>Psychology and neurobiology of simple decisions.</i> Smith, P. L., & Ratcliff, R. (2004). Trends in Neurosciences, 27(3), 161–168. <a href="https://doi.org/10.1016/j.tins.2004.01.006" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.tins.2004.01.006</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[10]</span><div><i>Statistical mimicking of reaction time data: Single-process models, parameter variability, and mixtures.</i> Van Zandt, T., & Ratcliff, R. (1995). Psychonomic Bulletin & Review, 2(1), 20–54. <a href="https://doi.org/10.3758/BF03214411" target="_blank" rel="noopener noreferrer">https://doi.org/10.3758/BF03214411</a></div></li>
</ol>

<div style="margin-top: 2rem;">
  <a href="/blog" style="text-decoration: none; color: inherit;">← Back to posts</a>
</div>`,
    category: 'Sequential Sampling Modeling',
    tags: ['Sequential Modeling'],
    date: 'May 9, 2024',
    slug: 'ddm-variability'
  },
  {
    id: 'ssm-overview',
    title: 'An overview of different sequential sampling models',
    excerpt: 'A comprehensive overview of seven important Information Accumulation Models (IAMs) and Sequential Sampling Models (SSMs), including diffusion decision models, random walk models, and competing accumulator models, categorized by their underlying assumptions.',
    content: `In my previous blogs about the diffusion decision model (DDM; Ratcliff, 1978), I already mentioned that this is a prominent model of a larger class called sequential sampling models (SSMs) or also commonly referred to as information accumulation models (IAMs). To describe the most important IAMs, it is helpful to categorize them into classes based on their underlying assumptions. The Figure below provides an overview of seven important models; it is a modified and extended figure from: Ratcliff & Smith, 2004. In this overview, I concentrate on models that simulate accumulation processes as diffusion processes, which include within-trial variability, thereby excluding linear ballistic accumulation models.

<img src="/assets/Information Accumulation Models.JPG" alt="Information Accumulation Models categorization" style="width: 100%; height: auto; margin: 2rem 0; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" />

<h2>First-level categorization: Relative vs. Absolute Evidence Accumulation</h2>

<p>At a first level, IAMs can be distinguished based on whether they assume a relative or an absolute decision criterion. Absolute Evidence Accumulation Models introduce a separate decision process (i.e., accumulator) for each response alternative. Therefore, the accumulator that has first reached a decision criterion represents the chosen alternative. In contrast, Relative Evidence Accumulation Models introduce a single decision process for all response alternatives. In so doing, the accumulation of evidence over time represents the net evidence for one response alternative (relative to other response alternatives). A response is initiated once the accumulated net evidence reaches a decision criterion.</p>

<h2>Second-level categorization: Discrete vs. Continuous Time Steps</h2>

<p>At a second level, IAMs can be distinguished based on whether they assume an evidence accumulation process in discrete time steps or in infinitesimal small time steps (i.e., continuous process).</p>

<h2>Third-level categorization: Evidence Accumulation Process Specifications</h2>

<p>At a third level, IAMs can be distinguished based on their specifications of the evidence accumulation process. Considering Relative Evidence Accumulation Models: Diffusion Decision Models (DDMs; Ratcliff, 1978) integrate evidence continuously over time. The path of evidence accumulation is modeled as a noisy wiener process with a mean (referred to as drift rate) and a variance (referred to as diffusion coefficient). In contrast, Ornstein-Uhlenbeck models (OUMs; Busemeyer & Townsend, 1992) integrate noisy evidence over time with a drift rate that either decreases or increases with time. Random Walk Models (RWMs; Ashby, 1983; Stone, 1960) are the discrete time counterparts of DDMs and OUMs. Considering Absolute Evidence Accumulation Models: Accumulator Models (AMs; Vickers et al., 1971) presume that for each accumulator, evidence is accumulated at discrete time steps (with evidence drawn from a normal distribution at each time step). There are different versions of AMs that vary in their underlying assumption about whether evidence accumulation processes are noisy and/or variable across trials (Linear Ballistic Accumulator Model; Brown & Heathcote, 2008; accumulator and counter models, Ratcliff & Smith, 2004; recruitment models, LaBerge, 1962). For models that assume a race of multiple continuous decision processes, there is an additional level that is important to distinguish. Namely, whether evidence accumulation for each response alternative evolves independently (models 5, 6) or dependently (model 7) from each other. Race Diffusion Models (RDM; Tillman et al., 2020) and Dual Diffusion Models (DuDM; Caplin & Martin, 2016) both assume that accumulators do not affect each other. RDMs are similar to DDMs in that both presume diffusion processes with constant drift rates. In contrast, DuDMs are similar to OUMs in that both presume diffusion processes with time-varying drift rates. Leaky Competing Accumulator Models (LCAM; Usher & McClelland, 2001) presume that accumulators affect each other. Specifically, the LCAM by Usher and McClelland presumes mutual inhibition between accumulators so that evidence for one accumulator is considered to represent evidence against the other accumulators. In that sense, this model is similar to DDMs but it provides an extension in that the LCAM framework can be extended to more than two response alternatives. The LCAM has been proposed for linking psychological and neural measures since it includes neural properties such as lateral inhibition and decay of incoming signals. Moreover, the LCAM incorporates a passive exponential decay of accumulated evidence (referred to as leakage).</p>

<h2>Comparative analysis: Predictive abilities and applicability</h2>

<p>The seven IAMs introduced above differ in their predictive ability to account for the speed of correct versus relative responses. For some models, this depends on the specification of parameters (e.g., OUMs). For other models, this depends on the type of variability parameters included (e.g., DDMs). Moreover, some of those models (at least in their classical form) are only applicable to tasks that involve binary choices (e.g., DDMs). Other models can be extended to account for tasks that involve multiple choice alternatives (e.g., AMs).</p>

<p>There are some fantastic papers that provide further fantastic overviews and comparisons: (Bogacz et al., 2006; Ratcliff & Smith, 2004; Voss et al., 2019).</p>

<h2>Selected References</h2>

<ol style="list-style-type: none; padding-left: 0; margin-bottom: 1rem;">
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[1]</span><div><i>A biased random walk model for two choice reaction times.</i> Ashby, F. G. (1983). Journal of Mathematical Psychology, 27(3), 277–297. <a href="https://doi.org/10.1016/0022-2496(83)90011-1" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/0022-2496(83)90011-1</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[2]</span><div><i>The physics of optimal decision making: A formal analysis of models of performance in two-alternative forced-choice tasks.</i> Bogacz, R., Brown, E., Moehlis, J., Holmes, P., & Cohen, J. D. (2006). Psychological Review, 113, 700–765. <a href="https://doi.org/10.1037/0033-295X.113.4.700" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.113.4.700</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[3]</span><div><i>The simplest complete model of choice response time: Linear ballistic accumulation.</i> Brown, S. D., & Heathcote, A. (2008). Cognitive Psychology, 57(3), 153–178. <a href="https://doi.org/10.1016/j.cogpsych.2007.12.002" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.cogpsych.2007.12.002</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[4]</span><div><i>Fundamental derivations from decision field theory.</i> Busemeyer, J. R., & Townsend, J. T. (1992). Mathematical Social Sciences, 23(3), 255–282. <a href="https://doi.org/10.1016/0165-4896(92)90043-5" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/0165-4896(92)90043-5</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[5]</span><div><i>The Dual-Process Drift Diffusion Model: Evidence from Response Times.</i> Caplin, A., & Martin, D. (2016). Economic Inquiry, 54(2), 1274–1282. <a href="https://doi.org/10.1111/ecin.12294" target="_blank" rel="noopener noreferrer">https://doi.org/10.1111/ecin.12294</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[6]</span><div><i>A recruitment theory of simple behavior.</i> LaBerge, D. (1962). Psychometrika, 27(4), 375–396. <a href="https://doi.org/10.1007/BF02289645" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/BF02289645</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[7]</span><div><i>A theory of memory retrieval.</i> Ratcliff, R. (1978). Psychological Review, 85(2), 59–108. <a href="https://doi.org/10.1037/0033-295X.85.2.59" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.85.2.59</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[8]</span><div><i>A Comparison of Sequential Sampling Models for Two-Choice Reaction Time.</i> Ratcliff, R., & Smith, P. L. (2004). Psychological Review, 111(2), 333–367. <a href="https://doi.org/10.1037/0033-295X.111.2.333" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.111.2.333</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[9]</span><div><i>Models for choice-reaction time.</i> Stone, M. (1960). Psychometrika, 25(3), 251–260. <a href="https://doi.org/10.1007/BF02289729" target="_blank" rel="noopener noreferrer">https://doi.org/10.1007/BF02289729</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[10]</span><div><i>Sequential sampling models without random between-trial variability: The racing diffusion model of speeded decision making.</i> Tillman, G., Van Zandt, T., & Logan, G. D. (2020). Psychonomic Bulletin & Review, 27(5), 911–936. <a href="https://doi.org/10.3758/s13423-020-01719-6" target="_blank" rel="noopener noreferrer">https://doi.org/10.3758/s13423-020-01719-6</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[11]</span><div><i>The time course of perceptual choice: The leaky, competing accumulator model.</i> Usher, M., & McClelland, J. L. (2001). Psychological Review, 108(3), 550–592. <a href="https://doi.org/10.1037/0033-295X.108.3.550" target="_blank" rel="noopener noreferrer">https://doi.org/10.1037/0033-295X.108.3.550</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[12]</span><div><i>Discriminating between the frequency of occurrence of two alternative events.</i> Vickers, D., Caudrey, D., & Willson, R. (1971). Acta Psychologica, 35(2), 151–172. <a href="https://doi.org/10.1016/0001-6918(71)90018-7" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/0001-6918(71)90018-7</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[13]</span><div><i>Sequential sampling models with variable boundaries and non-normal noise: A comparison of six models.</i> Voss, A., Lerche, V., Mertens, U., & Voss, J. (2019). Psychonomic Bulletin & Review, 26(3), 813–832. <a href="https://doi.org/10.3758/s13423-018-1560-4" target="_blank" rel="noopener noreferrer">https://doi.org/10.3758/s13423-018-1560-4</a></div></li>
</ol>

<div style="margin-top: 2rem;">
  <a href="/blog" style="text-decoration: none; color: inherit;">← Back to posts</a>
</div>`,
    category: 'Sequential Sampling Modeling',
    tags: ['Sequential Modeling'],
    date: 'May 8, 2024',
    slug: 'ssm-overview'
  }
];

