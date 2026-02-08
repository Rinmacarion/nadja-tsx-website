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
    description: 'I <b>investigate</b> how humans and artificial agents navigate uncertainty by adapting their decision-making and coping strategies. My work focuses on when agents hold on to control versus when they let go, and how these patterns emerge in the context of mood, anxiety, ADHD, and autism.',
    iconName: 'Brain'
  },
  {
    id: '2',
    title: 'Meta-Learning & AI',
    description: 'I <b>develop</b> computational and neural network models to explain how we balance the trade-off between adaptability and the motivation to control outcomes. These models reveal the mechanisms shaping cognitive flexibility and "learning-to-learn" processes in dynamic, unpredictable settings.',
    iconName: 'BarChart'
  },
  {
    id: '3',
    title: 'Interdisciplinary Bridging',
    description: 'I <b>bridge</b> the gap between psychology, psychiatry, and neuroscience to build a new generation of adaptive AI. By integrating biomarkers like EEG and eye-tracking into social-cognitive paradigms, I translate mechanistic research into clinical tools that improve neurocognitive testing and foster real-world resilience.',
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
  // Under Review publications removed as requested
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
    slug: 'diffusion-ddm',
    ratings: [5, 4, 5, 5],
    comments: [
      { author: 'Anna', text: 'Fantastic introduction to DDMs! Very clear and practical.' },
      { author: 'Ben', text: 'Loved the examples and the way you break down the parameters.' },
      { author: 'Sophie', text: 'This helped me understand sequential sampling models for my thesis.' }
    ]
  },
  {
    id: 'ddm-deep-dive',
    title: 'Diffusion Decision Modeling: A Deep Dive into the Four Main Parameters',
    excerpt: 'A detailed walkthrough of the four principal DDM parameters (drift rate, boundary separation, starting point, nondecision time) and their behavioral implications.',
    content: `
    <p>In this blog, I explain the behavioral impacts of the four principal parameters of the Diffusion Decision Model (DDM; Ratcliff, 1978). Note that this blog is supposed to give you a general idea of how each of these parameters exert distinct behavioral effects. However, the specific interpretation of each parameter must always be contextualized according to the details of the task at hand (for more details, see Ging-Jehli et al., 2021). Moreover, for an introduction to these parameters and their psychological interpretations, please see my earlier blog, "Decoding Decision-Making." All graphical illustrations were generated using the RTdist package in R, and the code for conducting your own simulations is available on my GitHub. At the conclusion of this post, you'll find a list of selected references that offer further insights.</p>

    <h2>Behavioral effect of changes in drift rate (v)</h2>
    <div class="flex items-start my-4">
        <p class="w-2/3 mr-4">The drift rate (v) is a critical measure of the quality of evidence accumulation during the decision-making process. It reflects how quickly and effectively information is integrated to reach a decision. A higher drift rate signifies a more robust accumulation of information towards one boundary over the other. Often, the upper boundary indicates correct responses, which is why a higher drift rate is associated with higher accuracy. However, in value-based decision-making, the upper boundary could also reflect a particular response category (e.g., approach), and a higher drift rate would then be associated with more frequent approach (than avoidance, reflected by the lower boundary) choices (Ging-Jehli et al., 2023; Ging-Jehli et al., 2021, 2024). The drift rate is influenced by the quality of the stimulus: the higher the quality, the faster the evidence accumulation, and thus the higher the drift rate. Changes in drift rate primarily affect the accuracy of decisions. For example, a higher drift rate leads to more accurate and faster responses, whereas a lower drift rate results in less accurate and slower responses. The relationship between drift rate and RT is complex, as it is also influenced by other DDM parameters and jejich interakce (Ratcliff & Smith, 2004; Ratcliff et al., 2016).</p>
        <div class="w-1/3">
            <img src="/assets/drift rates.JPG" alt="Drift rates" class="w-full rounded shadow-md" />
        </div>
    </div>

    <h2>Behavioral effect of changes in boundary separation (a)</h2>
    <div class="flex items-start my-4">
        <p class="w-2/3 mr-4">The boundary separation (a) parameter indexes the strategic balance between speed and accuracy that participants adopt. It is a gauge of decision caution: larger values indicate a preference for accuracy, entailing longer decision times, while smaller values suggest a bias toward quicker, but potentially less accurate, responses. In value-based decision-making, the boundary separation parameter can reflect response consistency (for detailed information, see: Ging-Jehli, Kuhn, et al., 2024). Changes in boundary separation are often influenced by explicit instructions from the experimenter. For example, if participants are instructed to respond as accurately as possible, they will likely adopt a wider boundary separation. Conversely, if they are instructed to respond as quickly as possible, they will likely adopt a narrower boundary separation. Changes in boundary separation affect both the speed and accuracy of decisions. A wider boundary separation leads to slower and more accurate responses, whereas a narrower boundary separation leads to faster and less accurate responses.</p>
        <div class="w-1/3">
            <img src="/assets/boundary separation.JPG" alt="Boundary separation" class="w-full rounded shadow-md" />
        </div>
    </div>

    <h2>Behavioral effect of changes in starting points (z)</h2>
    <div class="flex items-start my-4">
        <p class="w-2/3 mr-4">The starting point (z), also known as the a priori response bias, reveals an inherent bias towards a particular response, regardless of the stimulus content. It illustrates how pre-existing preferences can influence decision outcomes before the decision-making process even begins. If the starting point is equidistant from both boundaries, it indicates no initial bias. A starting point closer to the upper boundary suggests a bias towards upper responses, while one closer to the lower boundary indicates a bias towards lower responses. Changes in starting point are often influenced by the probability of a particular stimulus category. For example, if one stimulus category is more likely to occur than another, participants will likely adopt a starting point that is closer to the boundary representing the more likely stimulus category. This is a strategic adaptation that can improve overall performance. Changes in starting point primarily affect the accuracy of decisions, but they also have a small effect on the speed of decisions. A starting point that is closer to one boundary leads to more responses to that boundary, but it also leads to slightly faster responses to that boundary. The effect of starting point on RT is more pronounced for the boundary that is further away from the starting point.</p>
        <div class="w-1/3">
            <img src="/assets/starting point.JPG" alt="Starting point" class="w-full rounded shadow-md" />
        </div>
    </div>

    <h2>Behavioral effect of changes in nondecision time (Ter)</h2>
    <div class="flex items-start my-4">
        <p class="w-2/3 mr-4">The nondecision time (Ter) parameter quantifies the time spent on activities that are not directly related to the decision process itself, such as sensory processing and motor response execution. It ensures that the model’s focus remains on the core decision period, excluding the preliminary and concluding stages of the task. Essentially, as nondecision time increases, the entire RT distribution is shifted to the right, affecting both correct and error responses equally. The nondecision time is influenced by factors that are not related to the decision process itself, such as the modality of the stimulus (e.g., visual vs. auditory) or the type of response required (e.g., button press vs. verbal response). Changes in nondecision time primarily affect the speed of decisions. An increase in nondecision time leads to slower responses, whereas a decrease in nondecision time leads to faster responses.</p>
        <div class="w-1/3">
            <img src="/assets/nondecision time.JPG" alt="Nondecision time" class="w-full rounded shadow-md" />
        </div>
    </div>
    `,
    category: 'Sequential Sampling Modeling',
    tags: ['Sequential Modeling'],
    date: 'May 10, 2024',
    slug: 'ddm-deep-dive',
    ratings: [5, 5, 4, 5, 4],
    comments: [
      { author: 'Lukas', text: 'The deep dive into DDM parameters was super insightful. Thank you!' },
      { author: 'Maria', text: 'Great visuals and explanations. I finally get the difference between drift rate and boundary separation.' },
      { author: 'James', text: 'This is the best resource I found for understanding DDMs.' }
    ]
  },
  {
    id: 'ddm-variability',
    title: 'Understanding Variability Parameters in the Diffusion Decision Model',
    excerpt: 'An exploration of three types of across-trial variability in the DDM: variability in drift rate, starting point, and nondecision time, and how they account for different empirical patterns in response time distributions.',
    content: `<h2>The three sources of variability in the DDM</h2>
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
    slug: 'ddm-variability',
    ratings: [5, 4, 5, 4, 5, 4],
    comments: [
      { author: 'Chris', text: 'Excellent explanation of variability parameters. The figures were really helpful!' },
      { author: 'Patricia', text: 'Finally understand why we need these variability parameters in the DDM.' },
      { author: 'David', text: 'Clear and concise. This is the resource I recommend to all my students.' }
    ]
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
    tags: ['Sequential Modeling'],
    date: 'May 8, 2024',
    slug: 'ssm-overview',
    ratings: [5, 5, 4, 5],
    comments: [
      { author: 'Michael', text: 'Fantastic overview of different sequential sampling models! The categorization made it so easy to understand.' },
      { author: 'Rachel', text: 'This comprehensive guide helped me choose the right model for my research.' }
    ]
  },
  {
    id: 'bayesian-vs-frequentist',
    title: 'Brief synopsis: Differences between Bayesian and Frequentist modeling',
    excerpt: 'An exploration of key distinctions between Bayesian and Frequentist modeling approaches, including differences in model specification, theoretical foundations, inference methods, and computational techniques.',
    content: `Having been trained extensively in both Bayesian and Frequentist methodologies, I aim to elucidate key distinctions between these approaches in a concise and precise manner.

<h2>First: Model Specification</h2>

<p>Bayesian models are specified by a likelihood function and prior distributions for each parameter that will be estimated. In contrast, non-Bayesian models are specified by a population model (because it includes error terms) that represents the hypothesized relationship (e.g., linear, nonlinear) between input and output variables and a set of assumptions about the asymptotic properties of the variables. Hence, Bayesian models require the specification of the distribution of model parameters, whereas non-Bayesian models require the specification of the distribution of variables.</p>

<h2>Second: Theoretical Foundations and Inference</h2>

<p>Bayesian models are rooted in probability theory because of their requirement to specify the space of all possible outcomes and the assignment of a probability to each of these possible outcomes. The mathematical identity, Bayes' Rule, is then used to combine the prior with the observed data to obtain the posterior. Hence, this approach leads to a probability distribution (i.e., posterior distribution) of estimated model parameters. Specifically, this distribution tells us how likely each of the parameter values is given the data we have observed and our a priori specification of the range of possible parameter values (i.e., prior distribution). Therefore, the posterior distribution captures both prior knowledge and the information contained in the data (likelihood), appropriately weighted by the strength of evidence.</p>

<p>In contrast, non-Bayesian models are not rooted in probability theory. Instead, these models rely on asymptotic properties (e.g., law of large numbers justifying an approximation by a normal distribution, central limit theorem) and assumptions about the error terms (e.g., partial/strict exogeneity) to rationalize whether coefficients are unbiased and/or consistent.</p>

<h2>Third: Uncertainty Quantification</h2>

<p>Outcomes of Bayesian models are distributions of probabilities of each parameter value. These models therefore incorporate a direct quantification of uncertainty. In contrast, non-Bayesian models lead to point estimates (incl. standard deviations) and in so doing ignore any estimation uncertainty that may arise from the estimation procedure of these parameters itself.</p>

<h2>Fourth: Hypothesis Testing and Evidence</h2>

<p>Bayesian models use Bayes' theorem and update estimates of a parameter in light of new incoming evidence. In contrast, non-Bayesian models use asymptotic properties of estimates and focus on hypothesis testing. Inferences based on non-Bayesian models usually involve a frequentist approach that allows one only to reject null hypotheses to gather evidence for an alternative hypothesis. In contrast, inference of Bayesian models can benefit from the fact that estimates are associated with probabilities that provide immediate evidence for a specific hypothesis. This also explains why Bayesian modeling approaches are not susceptible to type 1 errors.</p>

<h2>Differences in Computational Techniques</h2>

<p>Non-Bayesian models typically involve defining an optimization problem. Specifically, specifying a model (e.g., relationship between input and output variables) and a deviance function (e.g., residual sum of squares). One may then define different types of constraints that lead to different estimation techniques (e.g., OLS, ridge regression, LASSO). These are non-parametric approaches because they do not require a specification of the distribution of the model parameters. Maximum likelihood estimation (MLE) is considered a parametric approach because the distribution of the coefficients is specified. However, MLE itself still represents a non-Bayesian modeling approach. This is because prior distributions of coefficients are not explicitly specified.</p>

<p>From a Bayesian perspective, MLE is a special case for which the mode as the maximum posterior estimation (MAP) coincides with the maximum likelihood estimation and for which one assumes a uniform prior distribution for the model parameters. However, the Bayesian approach considers that even though likelihoods permit relative comparisons between different parameter values, they are not suited for estimating absolute probabilities. In fact, the likelihood L(θ|y) is not a probability and it is not the reverse of P(y|θ) (which is why it is absolutely misleading to name the latter also a likelihood). Moreover, the likelihood function cannot be treated like a probability density because it does not integrate to 1. Therefore, Bayesian parameter estimation uses Bayes' Theorem:</p>

<p style="text-align: center; margin: 1.5rem 0; font-family: 'Courier New', monospace; background-color: #f5f5f5; padding: 1rem; border-radius: 4px;"><strong>P(θ|y) = P(y|θ) × P(θ) / P(y)</strong></p>

<p>This provides information about the probability distribution of the parameters, allowing for direct probabilistic inference and proper uncertainty quantification.</p>

<h2>Selected References</h2>

<ol style="list-style-type: none; padding-left: 0; margin-bottom: 1rem;">
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[1]</span><div><i>Data analysis using regression and multilevel/hierarchical models.</i> Gelman, A., & Hill, J. (2006). Cambridge University Press.</div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[2]</span><div><i>Bayesian data analysis.</i> Kruschke, J. K. (2010). Wiley Interdisciplinary Reviews: Cognitive Science, 1(5), 658–676.</div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[3]</span><div><i>Statistical rethinking: A Bayesian course with examples in R and Stan.</i> McElreath, R. (2018). Chapman and Hall/CRC.</div></li>
</ol>`,
    category: 'Hierarchical/Multilevel Modeling',
    tags: ['Hierarchical/Multilevel Modeling'],
    date: 'May 2, 2024',
    slug: 'bayesian-vs-frequentist',
    ratings: [5, 5, 5, 5, 5, 4],
    comments: [
      { author: 'Dr. Kevin', text: 'Brilliant comparison! This clarified many misconceptions I had about Bayesian approaches.' },
      { author: 'Lisa', text: 'Finally, a clear explanation of why Bayesian approaches are more intuitive for uncertainty quantification.' },
      { author: 'Tom', text: 'Perfect for someone transitioning from frequentist to Bayesian methods.' }
    ]
  },
  {
    id: 'setting-priors',
    title: 'Setting reasonable priors for computational modeling',
    excerpt: 'A comprehensive guide to understanding and setting weakly informative priors for Bayesian computational modeling, including common prior distributions and practical recommendations for diffusion decision models.',
    content: `<p style="font-style: italic; margin-bottom: 1.5rem; color: #666;">Note: This blog is based on information available as of May 2024 and may be updated periodically.</p>

In an earlier blog (titled: "Differences between Bayesian and Frequentist approaches"), I talked about the need to define priors for model parameters estimated within a Bayesian framework. To briefly recapitulate: Priors are combined with the likelihood of observed data to update beliefs and form posterior distributions of parameters. We define priors to summarize our a priori assumptions (i.e., before we look at the data) about possible parameter values. Defining priors should be informed by the context of the data (laboratory, field, game experiments of longitudinal vs cross-sectional data), prior applications in the same research field (e.g., modeling diffusion decision models, Ornstein-Uhlenbeck models, leaking accumulator models), and the scale of variables (e.g., restriction to positive values, rate parameters). I provide below a summary of common priors including those used for parameters of the diffusion decision model (DDM; Ratcliff, 1978).

<h2>Disclosure</h2>

<p>We want to choose priors wisely because they can influence model convergence and the extent of biases in our interpretations of estimated parameters. Below, I provide a list of commonly used priors, including explanations for when and why we use them. These tips are not exhaustive and are drawn from my own experience as well as the extensive resources provided by the STAN community and other experts in the field. Therefore, these recommendations should be considered cautiously and are based on our current knowledge. I will update them as our understanding evolves.</p>

<h2>General Advice</h2>

<ul style="margin: 1.5rem 0;">
  <li style="margin-bottom: 1rem;"><strong>Use weakly informative priors rather than uniform flat priors.</strong> Because uniform priors are NOT non-informative priors (i.e., they impose the assumption that all values within the defined range are equally plausible). Moreover, hard constraints should only be used if they present true constraints and even then, it's better to transform your predictors to an unconstrained scale to avoid that the sampler gets stuck.</li>
  
  <li style="margin-bottom: 1rem;"><strong>Standardize your data</strong> to ensure that covariates are on the same scale, enhancing their interpretability and stability of the regression model. This practice helps to improve model convergence and interpretability by ensuring that the prior is appropriately scaled and centered relative to the data.</li>
  
  <li style="margin-bottom: 1rem;"><strong>One prior per parameter.</strong> When setting up models, we typically specify one prior for each model parameter. By so doing, we assume that parameters are independent from each other. We do so because the model is easier to handle and better to understand. However, we need to be careful about model parameterization and we should check this assumption about prior independence (will be covered in a future blog).</li>
</ul>

<h2>Common Weakly Informative Priors</h2>

<p>Below is a list of common priors and a brief description when we use them. I generally recommend to always plot specified priors to get a better handle on them. I provide the corresponding R code for the plots shown below on my GitHub account (under the section "Visualizing Priors").</p>

<h2>Beta Distribution as Prior</h2>

<img src="/assets/Beta Distribution.JPG" alt="Beta Distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>The Beta distribution is commonly used for parameters that are probabilities or proportions and that are constrained to the interval [0, 1]. The beta distribution (in Stan notation) is defined as follows: <code>x ~ beta(alpha, beta)</code>, where alpha and beta represent the shape parameters. Note that if these parameters are set to 1, the beta distribution represents a uniform distribution. The Stan community recommends for a correlation parameter a Beta(2,2). It keeps point estimates away from the boundaries but still allows the likelihood to get close to these boundaries if this is what the data is suggesting. If we choose 2 for alpha and beta, then we will have a mean of 0.5 and a moderate variance.</p>

<p>In Bayesian inference, the Beta distribution is conjugate to the binomial likelihood, which means the posterior distribution is also a Beta distribution. This property can simplify analytical and computational procedures. In the DDM context, we can use the beta distribution as a prior for the parameter starting point (z). In this case, we could center the distribution around 0.5 if we want to impose an initial assumption that there isn't any starting point bias in our data. Some have argued that starting points range between 0.3 and 0.7 but I think that this is highly context-dependent and depends on whether you apply a DDM to a value-based decision-making task (for which I have seen already greater ranges of values) or to perceptual tasks.</p>

<div style="clear: both;"></div>

<h2>Exponential Distribution as Prior</h2>

<img src="/assets/exponential distribution.JPG" alt="Exponential Distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>This prior is useful for parameters that are strictly positive and that represent a rate (like in a Poisson process). We also often use an exponential prior for variance components which is favored over the usual use of half-cauchy priors as the latter tends to favor extreme values in particular in logistic regressions (Bürkner, 2017; McElreath, 2016). This prior assumes that very large values of the parameter are increasingly unlikely. The exponential distribution (in Stan notation) is defined as follows: <code>x ~ exponential(lambda)</code> with lambda representing the rate parameter. A smaller lambda results in a wider spread (higher mean), and a larger lambda results in more mass concentration around zero. The mean of the distribution can guide the choice of lambda. Specifically, the mean of an exponential distribution is 1/lambda. Let's assume we expect the values of our parameter to lie between 0 and 1.3. Furthermore, we expect that the mean is somewhat in the middle of that range. So, we could choose a mean around 0.65 which implies: lambda = 1/0.65 = 1.54.</p>

<div style="clear: both;"></div>

<h2>Gamma Distribution as Prior</h2>

<img src="/assets/gamma distribution.JPG" alt="Gamma Distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>This prior is useful for parameters that represent rates or scales of non-negative continuous data. The shape and rate (or scale) parameters of the gamma distribution can be adjusted to reflect different levels of knowledge and uncertainty about the parameter's expected value. The Stan community recommends Gamma(2,0.1) for scale parameters in a hierarchical model to keep the mode away from 0 but still allow it to be arbitrarily close if the likelihood suggests that based on the data. Though, this prior can induce positive biases in estimates when the number of groups is small. Therefore, they suggest Gamma(2, 1/A) for small groups where A is a scale parameter representing how high the outcome variable can be. The gamma distribution (in STAN notation) is defined as follows: <code>x ~ gamma(alpha,beta)</code> with alpha representing the shape and beta representing the rate.</p>

<p>In the DDM context, we can use gamma distributions as priors for boundary separation (a) which have typical values between 0.5 and 2, with higher values indicating a greater emphasis on accuracy over speed.</p>

<div style="clear: both;"></div>

<h2>Half-Normal Distribution as Prior</h2>

<img src="/assets/half-normal distribution.JPG" alt="Half-Normal Distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>This refers to a normal distribution restricted to non-negative values. Hence, we assume that the actual parameter value could be close to zero. Sigma refers to the standard deviation and determines the range of plausible parameter values. The half-normal distribution (in STAN notation) is defined as follows: <code>x ~ HalfNormal(μ,σ)</code> with μ=0 and σ=2.5. In the DDM context, we can use this prior for across-trial variability parameters whose expected ranges are more context-specific, but values are typically small relative to their respective main parameters.</p>

<div style="clear: both;"></div>

<h2>Log-Normal Distribution as Prior</h2>

<img src="/assets/log-normal distribution.JPG" alt="Log-Normal Distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>This prior is useful if we expect a parameter to vary over several orders of magnitude. This prior assumes that the logarithm of the parameter follows a normal distribution. It is useful when the parameter can be both small and very large. For instance, imagine we assume that the mean of our prior is around 1.5 and that possible values can be 2 standard deviations above and below that mean but they cannot go negative. In this case, a log-normal as prior seems suitable because it will allow us to specify a distribution that is strictly positive while also centering around our desired mean with a large variable. The lognormal distribution (in STAN notation) is defined as follows: <code>x ~ Lognormal(mu,sigma)</code> where mu and sigma represent the mean and std of the logarithmized variable x.</p>

<p>In the DDM context, we can use this prior for the model parameter nondecision time (Ter), particularly if we assume that the range of possible values is wide (e.g., different conditions that present stimuli across different modalities such as visual and auditory).</p>

<div style="clear: both;"></div>

<p style="font-style: italic; margin: 1.5rem 0; padding: 1rem; background-color: #f9f5f0; border-left: 3px solid #d97706; border-radius: 4px;"><strong>Choosing between a gamma and lognormal as prior:</strong> Choosing between a gamma and a lognormal distribution as a prior depends on the specific characteristics of the parameter and the context of the problem. Both, the gamma and log-normal distributions are defined on the positive real line but the latter allows for a wider range of shapes and skewness. If the parameter is strictly positive and there is no need to accommodate extreme skewness or heavy tails, a gamma distribution seems more appropriate due to its simplicity and tractability. Instead, if there is prior knowledge that the parameter's distribution is skewed or asymmetric, the lognormal distribution may be preferred. In some cases, the parameters have natural interpretations on a logarithmic scale. For example, parameters related to rates, scales, elasticities might be more naturally interpreted on a logarithmic scale. In such cases, a lognormal prior might be more interpretable and align better with the theoretical understanding of the parameter. However, if the likelihood function and other priors in the model allow for conjugacy with the gamma distribution, it might be preferred for computational and analytical convenience.</p>

<h2>Normal Distribution as Prior</h2>

<img src="/assets/normal distribution.JPG" alt="Normal Distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>The normal distribution is commonly used as a prior for parameters expected to be around a certain value with some uncertainty. In hierarchical modeling, it is often used for group-level parameters to pool information across groups, enhancing parameter estimation accuracy. As we are often centering the data (to put them on the same scale), we are commonly using <code>Normal(0,2.5)</code> as a prior because it provides a weakly informative prior, centered at zero with a standard deviation of 2.5. This corresponds to the null hypothesis in the Frequentist approach, where we assume the parameter is equal to zero. This prior setting helps to regularize the estimates, preventing overfitting while allowing sufficient flexibility for the data to inform the parameter estimates.</p>

<p>In the DDM context, empirical applications often find drift rates in the range of -5 to 5 (but again, this can vary depending on the task and individual differences). In this case, a <code>Normal(0,2.5)</code> as a prior seems suitable.</p>

<div style="clear: both;"></div>

<h2>t-distribution as Prior</h2>

<img src="/assets/students t-distribution.JPG" alt="Student's t-distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" />

<p>The t-distribution is useful if we expect that parameters have a distribution with heavier tails than the normal distribution. We could account this circumstance with a t-student distribution that has fatter tails than a normal distribution. For instance, we could set: <code>student_t(3,0,2)</code>.</p>

<div style="clear: both;"></div>

<p style="font-style: italic; margin: 1.5rem 0; padding: 1rem; background-color: #f9f5f0; border-left: 3px solid #d97706; border-radius: 4px;"><img src="/assets/cauchy distribution.JPG" alt="Cauchy distribution" style="float: right; width: 280px; margin-left: 20px; margin-bottom: 10px; border-radius: 6px;" /><strong>Cauchy distribution as a special case:</strong> The Cauchy is a special case of the t-distribution with only 1 degree of freedom. It has an even heavier tail than other t-distributions. It is often used as a prior for location parameters, particularly when we know very little a priori about the scale of the parameter. However, note that while this heavier tail makes it more robust to not bias towards a priori information it also makes it more prone to be influenced by extreme values. Moreover, unlike many other distributions, the Cauchy distribution does often not lead to a conjugate prior which makes analytical solutions to the posterior more difficult. Note that the Stan community has moved away from the Cauchy and often use now <code>normal(0, 2.5)</code> as default priors for parameters whose data has been normalized.</p>

<div style="clear: both;"></div>

<h2>Priors for Hierarchical Covariance Matrices</h2>

<p>The Lewandowski-Kurowicka-Joe (LKJ) distribution is used as a prior for correlation matrices in Bayesian hierarchical models (Lewandowski et al., 2009). It is particularly useful for specifying priors on the correlation structure of multivariate normal distributions. The LKJ distribution ensures that the resulting correlation matrix is positive definite and allows for control over the concentration of correlations around zero. When using the LKJ prior in practice, you typically set a shape parameter η; η=1 implies a uniform prior over correlation matrices, while η>1 concentrates the prior around the identity matrix, favoring weaker correlations. For a hierarchical covariance matrix, a Wishart (not inverse-Wishart) is sometimes also suggested (see link to Stan community website below).</p>

<h2>Frequently Asked Questions</h2>

<h3 style="font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: 0.75rem;"><strong>Why should I care about conjugacy of priors?</strong></h3>

<p>Conjugate priors are a concept in Bayesian statistics where the prior distribution is chosen to be from the same family as the posterior distribution. This choice simplifies the calculations because the posterior distribution has the same functional form as the prior. For example, if you're using a normal distribution as the likelihood function, choosing a normal distribution as the prior would result in a normal distribution as the posterior. However, in many cases, practitioners may choose non-conjugate priors for various reasons, such as flexibility or capturing specific characteristics of the data more accurately. For instance: Lognormal distributions are not conjugate to many likelihood functions, but they still offer certain analytical conveniences and computational advantages over more complex distributions.</p>

<h2>Useful Links</h2>

<ul style="margin: 1.5rem 0;">
  <li style="margin-bottom: 0.75rem;"><a href="https://stackoverflow.com/questions/61670240/how-to-decide-on-what-priors-distributions-to-use-for-parameters-in-pymc3" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/61670240/how-to-decide-on-what-priors-distributions-to-use-for-parameters-in-pymc3</a></li>
  <li style="margin-bottom: 0.75rem;"><a href="https://github.com/stan-dev/stan/wiki/Prior-Choice-Recommendations" target="_blank" rel="noopener noreferrer">https://github.com/stan-dev/stan/wiki/Prior-Choice-Recommendations</a></li>
</ul>

<h2>Selected References</h2>

<h3 style="font-size: 1.05rem; margin-top: 1.5rem; margin-bottom: 1rem;"><strong>General advice on priors:</strong></h3>

<ol style="list-style-type: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[1]</span><div><i>brms: An R Package for Bayesian Multilevel Models Using Stan.</i> Bürkner, P.-C. (2017a). Journal of Statistical Software, 80, 1–28. <a href="https://doi.org/10.18637/jss.v080.i01" target="_blank" rel="noopener noreferrer">https://doi.org/10.18637/jss.v080.i01</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[2]</span><div><i>Advanced Bayesian Multilevel Modeling with the R Package brms.</i> Bürkner, P.-C. (2017b). ArXiv:1705.11123 [Stat]. <a href="http://arxiv.org/abs/1705.11123" target="_blank" rel="noopener noreferrer">http://arxiv.org/abs/1705.11123</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[3]</span><div><i>Data Analysis Using Regression and Multilevel/Hierarchical Models.</i> Gelman, A., & Hill, J. (2006). Cambridge University Press.</div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[4]</span><div><i>Generating random correlation matrices based on vines and extended onion method.</i> Lewandowski, D., Kurowicka, D., & Joe, H. (2009). Journal of Multivariate Analysis, 100(9), 1989–2001. <a href="https://doi.org/10.1016/j.jmva.2009.04.008" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.jmva.2009.04.008</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[5]</span><div><i>Statistical Rethinking: A Bayesian Course with Examples in R and Stan.</i> McElreath, R. (2016). Chapman and Hall/CRC. <a href="https://doi.org/10.1201/9781315372495" target="_blank" rel="noopener noreferrer">https://doi.org/10.1201/9781315372495</a></div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[6]</span><div><i>Doing Bayesian Data Analysis: A Tutorial with R, JAGS, and Stan.</i> Kruschke, J. (2014). Academic Press.</div></li>
</ol>

<h3 style="font-size: 1.05rem; margin-top: 1.5rem; margin-bottom: 1rem;"><strong>For setting priors for the DDM:</strong></h3>

<ol style="list-style-type: none; padding-left: 0; margin-bottom: 1.5rem;">
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[7]</span><div><i>A practical introduction to using the drift diffusion model of decision-making in cognitive psychology, neuroscience, and health sciences.</i> Myers, C. E., Interian, A., & Moustafa, A. A. (2022). Frontiers in Psychology, 13, 1039172.</div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[8]</span><div><i>Systematic parameter reviews in cognitive modeling: Towards a robust and cumulative characterization of psychological processes in the diffusion decision model.</i> Tran, N. H., Van Maanen, L., Heathcote, A., & Matzke, D. (2021). Frontiers in Psychology, 11, 608287.</div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[9]</span><div><i>HDDM: Hierarchical Bayesian estimation of the drift-diffusion model in Python.</i> Wiecki, T. V., Sofer, I., & Frank, M. J. (2013). Frontiers in Neuroinformatics, 7, 14.</div></li>
</ol>

<h3 style="font-size: 1.05rem; margin-top: 1.5rem; margin-bottom: 1rem;"><strong>For general information about the DDM and estimating model parameters:</strong></h3>

<ol style="list-style-type: none; padding-left: 0;">
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[10]</span><div><i>A theory of memory retrieval.</i> Ratcliff, R. (1978). Psychological Review, 85(2), 59.</div></li>
    <li style="margin-bottom: 1rem; display: flex;"><span style="margin-right: 0.75rem; font-family: monospace; font-size: 0.875rem; color: rgb(120, 113, 108);">[11]</span><div><i>Estimating parameters of the diffusion model: Approaches to dealing with contaminant reaction times and parameter variability.</i> Ratcliff, R., & Tuerlinckx, F. (2002). Psychonomic Bulletin & Review, 9(3), 438–481.</div></li>
</ol>`,
    category: 'Modeling Technicalities',
    tags: ['Modeling Technicalities'],
    date: 'May 1, 2024',
    slug: 'setting-priors',
    ratings: [4, 5, 4, 5, 5, 4, 5],
    comments: [
      { author: 'Samantha', text: 'The most helpful guide on setting priors I\'ve found. The DDM examples were perfect!' },
      { author: 'Oliver', text: 'Finally understand the difference between weakly informative and informative priors.' },
      { author: 'Emma', text: 'Great reference guide for my modeling work. Bookmarked this immediately!' }
    ]
  }
];

