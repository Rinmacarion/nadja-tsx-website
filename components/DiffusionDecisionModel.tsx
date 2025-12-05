
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from '../types';
import CommentSection from './CommentSection';

const DiffusionDecisionModel: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = BLOG_POSTS.find((p) => p.id === id);

    const [rating, setRating] = React.useState(post?.rating || 0);
    const [comments, setComments] = React.useState(post?.comments || []);

    const handleCommentSubmit = (postId: string, comment: { author: string; text: string; date: string }) => {
        // Here you would typically send the comment to a backend server
        // For now, we'll just update the local state
        setComments([...comments, comment]);
        console.log(`Submitting comment for post ${postId}:`, comment);
    };

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 md:p-12"
        >
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center mb-4">
                    <p className="mr-2">Rate this post:</p>
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`cursor-pointer ${rating > i ? 'text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => setRating(i + 1)}
                        />
                    ))}
                </div>
                <p className="mb-4">
                    In this blog, I introduce the diffusion decision model (DDM), a computational tool that was developed by one of my former mentors, Roger Ratcliff (1978). This model has profoundly influenced fields ranging from cognitive neuroscience to psychology, and from behavioral economics to decision and clinical sciences. I discuss the reasons behind its widespread adoption, including a summary of the four main parameters and their psychological interpretations (Forstmann et al., 2016; Forstmann & Wagenmakers, 2015; Ging-Jehli, Ratcliff, & Arnold, 2021).  At the end of this blog, you find a list of essential references for deeper exploration. In my next blog, I provide an in-depth analysis of how these parameters capture distinct behavioral effects.
                </p>
                <h2 className="text-2xl font-bold mb-3">Studying behavior with experimental paradigms</h2>
                <p className="mb-4">
                    We often use cognitive or social-cognitive tasks to study behavior in humans, primates, or other animals. While subjects perform these tasks, we record their choices and response times (RTs). However, these behavioral measures are merely the observable outcomes of the underlying decision-making processes that truly interest us. These decision-making processes unfold from the instant a stimulus (such as a dog) is presented to the moment the behavior is recorded. So, how can we best study these unobservable processes?
                </p>
                <h2 className="text-2xl font-bold mb-3">Behavioral measures as end product of latent decision processes</h2>
                <p className="mb-4">
                    From the early beginning of mathematical psychology and behavioral economics, information theories (Wald & Wolfowitz, 1949) proposed that behavior results from a sequence of stages: encoding (e.g., obtaining a neural representation of a presented stimulus like a dog), decision-making, and response execution. The assumptions of the Diffusion Decision Model (DDM) are deeply embedded in these information theories, presenting decision-making as a dynamic process that evolves over time. To grasp these dynamics, we use models like the DDM to simulate the processes and account for the observable behavioral data. Before delving into how these models simulate behavior, let’s first explore why we employ them. Specifically, we not only use DDMs to provide clearer explanations but also to offer a more detailed description of the behavioral data.
                </p>
                <h2 className="text-2xl font-bold mb-3">Characteristics of RT distributions and reasons for moving beyond summary measures</h2>
                <p className="mb-4">
                    Typically, subjects repeat a task multiple times, and we record their choices and RTs for each trial. Empirical evidence from different experimental (e.g., perceptual, value-based) paradigms have consistently shown that RT distributions are often right-skewed (Smith & Ratcliff, 2004; Van Zandt, 2002). This skewness indicates that the distributions extend further to the right, reflecting longer delays in some responses. Therefore, relying solely on mean RTs can be misleading as this measure doesn’t capture the nuances at the extremes of the distribution – the very fast and very slow responses. Examining these extremes can provide additional insights into the cognitive processes that drive the responses. We typically summarize these RT distributions using quantiles or percentiles, referring to the fastest 10% of responses as the leading edge and the slowest responses – those above the 90th percentile – as the tails of the distribution.
                </p>
                <p className="mb-4">
                    Our goal is to succinctly capture the essential characteristics of the RT distribution for each choice option using as few parameters as possible but not fewer. The DDM excels in this task. It efficiently summarizes the entire RT distribution and the relative proportions of possible choices using just a few key parameters, which I will describe below. While the figure below illustrates the standard DDM for two choices, it's important to note that the model can be adapted to accommodate multiple choices. Additionally, I will cover the variability parameters in a separate blog.
                </p>
                <h2 className="text-2xl font-bold mb-3">What exactly is the diffusion decision model?</h2>
                <p className="mb-4">
                    The DDM (Ratcliff, 1978) belongs to the broader category of sequential sampling models (SSMs). These models are called “process-oriented” because they allow us to simulate the sequence of events between the presentation of a stimulus and the observable behavioral response. Specifically, SSMs posit that a subject accumulates bits of information sequentially until reaching a decision threshold that triggers a response. In the figure below, we exemplify a decision-making scenario involving a dog that runs towards us. We need to decide whether we want to approach or avoid that dog. If the dog appears playful, we might accumulate positive evidence towards approaching it, represented by an upper decision boundary in the graphical illustration below. Conversely, if the dog reminds us of a past negative experience, we might accumulate evidence towards avoiding it, indicated by a lower decision boundary.
                </p>
                <p className="mb-4 font-style: italic">
                    (modified figure from: Ging-Jehli, Arnold, & Van Zandt, 2023)
                </p>
                <p className='mb-4'>
                    The DDM accounts for the observed response data (choice and RTs) by simulating how evidence accumulation processes leads to decisions once specific boundaries are reached (Forstmann et al., 2016; Forstmann & Wagenmakers, 2015; Ging-Jehli et al., 2021; Smith & Ratcliff, 2004). Let’s assume we are presented with a series of different dogs and animals and each time we need to decide whether we want to approach or avoid that animal. In each trial, a diffusion particle simulates this decision process: it terminates at the upper boundary for an approach decision (black processes in the figure) or at the lower boundary for an avoidance decision (grey processes in the figure). Overall, DDM and other SSMs are used because they can capture the observed RT distributions for each decision option, offering detailed insights into decision-making processes. Specifically, the model summarizes our behavior with four main model parameters (represented in red in the figure): nondecision time (Ter), drift rate (v), boundary separation (a), and starting points (z).
                </p>
                <h3 className="text-xl font-bold mb-2">Nondecision Time (Ter)</h3>
                <p className="mb-4">
                    This parameter quantifies the time spent on activities that are not directly related to the decision process itself, such as sensory processing and motor response execution. Nondecision time ensures that the model’s focus remains on the core decision period, excluding the preliminary and concluding stages of the task.
                </p>
                <h3 className="text-xl font-bold mb-2">Drift Rate (v)</h3>
                <p className="mb-4">
                    The drift rate is a critical measure of the quality of evidence accumulation during the decision-making process. It reflects how quickly and effectively information is integrated to reach a decision. A higher drift rate signifies a more robust accumulation of information towards the upper boundary. Sometimes, the upper boundary indices correct responses, which is why we associated higher drift rate with higher accuracy. However, in value-based decision-making, the upper boundary could also reflect a particular response category (e.g., approach) and we then associated higher drift rate with more frequent approach (than avoidance reflected by lower boundary) choices (Ging Jehli et al., 2023; Ging-Jehli et al., 2021, 2024).
                </p>
                <h3 className="text-xl font-bold mb-2">Boundary Separation (a)</h3>
                <p className="mb-4">
                    This parameter indexes the strategic balance between speed and accuracy that participants adopt. Boundary separation is a gauge of decision caution: larger values indicate a preference for accuracy, entailing longer decision times, while smaller values suggest a bias toward quicker, but potentially less accurate, responses. In value-based decision-making, the boundary separation parameter reflects response consistency. For detailed information, see: Ging-Jehli, Kuhn, et al. (2024).
                </p>
                <h3 className="text-xl font-bold mb-2">Starting Point (z)</h3>
                <p className="mb-4">
                    Also known as the a priori response bias, this parameter reveals an inherent bias towards a particular response, regardless of the stimulus content. It illustrates how pre-existing preferences can influence decision outcomes before the decision-making process even begins. If the starting point is equidistant from both boundaries, it indicates no initial bias. A starting point closer to the upper boundary suggests a bias towards upper responses, while one closer to the lower boundary indicates a bias towards lower responses.
                </p>
                <h2 className="text-2xl font-bold mb-3">Take home messages:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>The DDM accurately represents the entire RT distribution and relative frequencies of each response option using a few core parameters.</li>
                    <li>By simulating latent decision-making processes, the DDM offers quantifiable and testable predictions, capturing observable behaviors with these parameters.</li>
                    <li>Each model parameter has a well-established psychological significance, grounded in a century of cognitive neuroscience and psychology research. It’s important to note that the above description of the mental meaning of each parameter are generic and the precise meaning of each parameter needs to be interpreted within the context of the task specifics (see for details: Ging-Jehli et al., 2021).</li>
                </ul>
                <p className="mb-4">
                    In my next blog post, I will detail how each parameter uniquely influences behavioral data.
                </p>
                <h2 className="text-2xl font-bold mb-3">Selected References:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Forstmann, B. U., Ratcliff, R., & Wagenmakers, E.-J. (2016). Sequential Sampling Models in Cognitive Neuroscience: Advantages, Applications, and Extensions. Annual Review of Psychology, 67(1), 641–666.</li>
                    <li>Forstmann, B. U., & Wagenmakers, E.-J. (2015). Model-Based Cognitive Neuroscience: A Conceptual Introduction. In B. U. Forstmann & E.-J. Wagenmakers (Eds.), An Introduction to Model-Based Cognitive Neuroscience (pp. 139–156). Springer.</li>
                    <li>Ging Jehli, N. R., Arnold, L. E., & Van Zandt, T. (2023). Cognitive & attentional mechanisms of cooperation: Implications for incentive designs and computational psychiatry.</li>
                    <li>Ging-Jehli, N. R., Kuhn, M., Blank, J. M., Chanthrakumar, P., Steinberger, D. C., Yu, Z., Herrington, T. M., Dillon, D. G., Pizzagalli, D. A., & Frank, M. J. (2024). Cognitive signatures of depressive and anhedonic symptoms, and affective states, using computational modeling and neurocognitive testing. Biological Psychiatry Cognitive Neuroscience and Neuroimaging, S2451-9022(24)00056-9.</li>
                    <li>Ging-Jehli, N. R., Ratcliff, R., & Arnold, L. E. (2021). Improving neurocognitive testing using computational psychiatry—A systematic review for ADHD. Psychological Bulletin, 147(2), 169–231.</li>
                    <li>Ratcliff, R. (1978). A theory of memory retrieval. Psychological Review, 85(2), 59–108.</li>
                    <li>Smith, P. L., & Ratcliff, R. (2004). Psychology and neurobiology of simple decisions. Trends in Neurosciences, 27(3), 161–168.</li>
                    <li>Van Zandt, T. (2002). Analysis of Response Time Distributions. In Stevens’ Handbook of Experimental Psychology, Methodology in Experimental Psychology (Vol. 4, pp. 461–516). John Wiley & Sons.</li>
                    <li>Wald, A., & Wolfowitz, J. (1949). Bayes Solutions of Sequential Decision Problems. Proceedings of the National Academy of Sciences, 35(2), 99–102.</li>
                </ul>
                <CommentSection postId={post.id} comments={comments} onCommentSubmit={handleCommentSubmit} />
            </div>
        </motion.div>
    );
};

export default DiffusionDecisionModel;
