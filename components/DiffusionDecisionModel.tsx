import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const DiffusionDecisionModel: React.FC = () => {
    const navigate = useNavigate();
    const params = useParams();
    const POST_ID = params.id || 'diffusion-ddm';
    const post = BLOG_POSTS.find((p: any) => p.id === POST_ID);
    // Ratings and comments persisted in localStorage per post
    const [hover, setHover] = React.useState<number | null>(null);
    const [ratingList, setRatingList] = React.useState<number[]>(() => {
        try {
            const raw = localStorage.getItem(`ratings_${POST_ID}`);
            return raw ? JSON.parse(raw) : [];
        } catch { return []; }
    });
    const avgRating = ratingList.length ? (ratingList.reduce((a, b) => a + b, 0) / ratingList.length) : 0;

    const [comments, setComments] = React.useState<Array<{author: string; text: string; date: string}>>(() => {
        try {
            const raw = localStorage.getItem(`comments_${POST_ID}`);
            return raw ? JSON.parse(raw) : [];
        } catch { return []; }
    });

    const [authorInput, setAuthorInput] = React.useState('');
    const [textInput, setTextInput] = React.useState('');

    const addRating = (value: number) => {
        const next = [...ratingList, value];
        setRatingList(next);
        try { localStorage.setItem(`ratings_${POST_ID}`, JSON.stringify(next)); } catch {}
    };

    const submitComment = () => {
        if (!textInput.trim()) return;
        const comment = { author: authorInput || 'Anonymous', text: textInput.trim(), date: new Date().toISOString() };
        const next = [...comments, comment];
        setComments(next);
        try { localStorage.setItem(`comments_${POST_ID}`, JSON.stringify(next)); } catch {}
        setAuthorInput('');
        setTextInput('');
    };

    return (
        <div className="min-h-screen p-6" style={{
            backgroundImage: "url('/assets/background neural network.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
        }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto my-8 p-8 md:p-12 bg-stone-100 shadow-xl rounded-lg border border-stone-300"
            >
                {!post ? (
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        <h1 className="text-2xl font-semibold">Post not found</h1>
                        <p className="text-stone-600">The post you're looking for doesn't exist.</p>
                        <div>
                            <button onClick={() => navigate('/blog')} className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm">← Back to posts</button>
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6 text-stone-700 leading-relaxed">
                        {POST_ID === 'diffusion-ddm' ? (
                            // Keep the specialized diffusion layout
                            <>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-stone-900">The Power of Diffusion Models in Cognitive, Decision, and Clinical Sciences - A brief Introduction</h1>

                                <div className="mb-6">
                                    <button
                                        onClick={() => navigate('/blog')}
                                        className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                    >
                                        ← Back to posts
                                    </button>
                                </div>

                                <div className="flex items-center mb-6">
                                    <p className="mr-4 text-sm text-stone-600">Rate this post:</p>
                                    <div className="flex items-center">
                                        {[1,2,3,4,5].map((s) => {
                                            const filled = (hover ?? Math.round(avgRating)) >= s;
                                            return (
                                                <Star
                                                    key={s}
                                                    className={`cursor-pointer w-5 h-5 transition-colors ${filled ? 'text-yellow-500' : 'text-stone-300'}`}
                                                    onMouseEnter={() => setHover(s)}
                                                    onMouseLeave={() => setHover(null)}
                                                    onClick={() => addRating(s)}
                                                />
                                            );
                                        })}
                                    </div>
                                    <span className="ml-3 text-sm text-stone-500">{avgRating.toFixed(1)} | {ratingList.length} Rating{ratingList.length === 1 ? '' : 's'}</span>
                                </div>

                                {/* Render the specialized diffusion content that was previously hard-coded */}
                                <div>
                                    {/* keep the detailed content and images as before */}
                                    <p className="mb-4">In this blog, I introduce the diffusion decision model (DDM), a computational tool that was developed by one of my former mentors, Roger Ratcliff (1978). This model has profoundly influenced fields ranging from cognitive neuroscience to psychology, and from behavioral economics to decision and clinical sciences. I discuss the reasons behind its widespread adoption, including a summary of the four main parameters and their psychological interpretations (Forstmann et al., 2016; Forstmann & Wagenmakers, 2015; Ging-Jehli, Ratcliff, & Arnold, 2021). At the end of this blog, you find a list of essential references for deeper exploration. In my next blog, I provide an in-depth analysis of how these parameters capture distinct behavioral effects.</p>
                                    <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Studying behavior with experimental paradigms</h2>
                                    <p className="mb-4">We often use cognitive or social-cognitive tasks to study behavior in humans, primates, or other animals. While subjects perform these tasks, we record their choices and response times (RTs). However, these behavioral measures are merely the observable outcomes of the underlying decision-making processes that truly interest us. These decision-making processes unfold from the instant a stimulus (such as a dog) is presented to the moment the behavior is recorded. So, how can we best study these unobservable processes?</p>
                                    <div className="my-4"><img src="/assets/observable%20data.JPG" alt="Observable data" className="w-full rounded shadow-md" /></div>
                                    <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Behavioral measures as end product of latent decision processes</h2>
                                    <p className="mb-4">From the early beginning of mathematical psychology and behavioral economics, information theories (Wald & Wolfowitz, 1949) proposed that behavior results from a sequence of stages: encoding (e.g., obtaining a neural representation of a presented stimulus like a dog), decision-making, and response execution. The assumptions of the Diffusion Decision Model (DDM) are deeply embedded in these information theories, presenting decision-making as a dynamic process that evolves over time. To grasp these dynamics, we use models like the DDM to simulate the processes and account for the observable behavioral data. Before delving into how these models simulate behavior, let’s first explore why we employ them. Specifically, we not only use DDMs to provide clearer explanations but also to offer a more detailed description of the behavioral data.</p>
                                    <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Characteristics of RT distributions and reasons for moving beyond summary measures</h2>
                                    <p className="mb-4">Typically, subjects repeat a task multiple times, and we record their choices and RTs for each trial. Empirical evidence from different experimental (e.g., perceptual, value-based) paradigms have consistently shown that RT distributions are often right-skewed (Smith & Ratcliff, 2004; Van Zandt, 2002). This skewness indicates that the distributions extend further to the right, reflecting longer delays in some responses. Therefore, relying solely on mean RTs can be misleading as this measure doesn’t capture the nuances at the extremes of the distribution – the very fast and very slow responses. Examining these extremes can provide additional insights into the cognitive processes that drive the responses. We typically summarize these RT distributions using quantiles or percentiles, referring to the fastest 10% of responses as the leading edge and the slowest responses – those above the 90th percentile – as the tails of the distribution.</p>
                                    <div className="my-4"><img src="/assets/typical%20respone%20rate.JPG" alt="Typical response rate" className="w-full rounded shadow-md" /></div>
                                    <p className="mb-4">Our goal is to succinctly capture the essential characteristics of the RT distribution for each choice option using as few parameters as possible but not fewer. The DDM excels in this task. It efficiently summarizes the entire RT distribution and the relative proportions of possible choices using just a few key parameters, which I will describe below. While the figure below illustrates the standard DDM for two choices, it's important to note that the model can be adapted to accommodate multiple choices. Additionally, I will cover the variability parameters in a separate blog.</p>
                                    <div className="my-4"><img src="/assets/inputoutput%20mapping.JPG" alt="Input-output mapping" className="w-full rounded shadow-md" /></div>
                                    <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">What exactly is the diffusion decision model?</h2>
                                    <p className="mb-4">The DDM (Ratcliff, 1978) belongs to the broader category of sequential sampling models (SSMs). These models are called “process-oriented” because they allow us to simulate the sequence of events between the presentation of a stimulus and the observable behavioral response. Specifically, SSMs posit that a subject accumulates bits of information sequentially until reaching a decision threshold that triggers a response. In the figure below, we exemplify a decision-making scenario involving a dog that runs towards us. We need to decide whether we want to approach or avoid that dog. If the dog appears playful, we might accumulate positive evidence towards approaching it, represented by an upper decision boundary in the graphical illustration below. Conversely, if the dog reminds us of a past negative experience, we might accumulate evidence towards avoiding it, indicated by a lower decision boundary.</p>
                                    <div className="my-4"><img src="/assets/aproach%20avoid.JPG" alt="Approach vs avoid" className="w-full rounded shadow-md" /></div>
                                    <p className="mb-4 italic text-sm text-stone-500">(modified figure from: Ging-Jehli, Arnold, & Van Zandt, 2023)</p>
                                    <p className='mb-4'>The DDM accounts for the observed response data (choice and RTs) by simulating how evidence accumulation processes leads to decisions once specific boundaries are reached (Forstmann et al., 2016; Forstmann & Wagenmakers, 2015; Ging-Jehli et al., 2021; Smith & Ratcliff, 2004). Let’s assume we are presented with a series of different dogs and animals and each time we need to decide whether we want to approach or avoid that animal. In each trial, a diffusion particle simulates this decision process: it terminates at the upper boundary for an approach decision (black processes in the figure) or at the lower boundary for an avoidance decision (grey processes in the figure). Overall, DDM and other SSMs are used because they can capture the observed RT distributions for each decision option, offering detailed insights into decision-making processes. Specifically, the model summarizes our behavior with four main model parameters (represented in red in the figure): nondecision time (Ter), drift rate (v), boundary separation (a), and starting points (z).</p>
                                    <h3 className="text-xl font-semibold mt-6 mb-2 text-stone-800">Nondecision Time (Ter)</h3>
                                    <p className="mb-4">This parameter quantifies the time spent on activities that are not directly related to the decision process itself, such as sensory processing and motor response execution. Nondecision time ensures that the model’s focus remains on the core decision period, excluding the preliminary and concluding stages of the task.</p>
                                    <h3 className="text-xl font-semibold mt-6 mb-2 text-stone-800">Drift Rate (v)</h3>
                                    <p className="mb-4">The drift rate is a critical measure of the quality of evidence accumulation during the decision-making process. It reflects how quickly and effectively information is integrated to reach a decision. A higher drift rate signifies a more robust accumulation of information towards the upper boundary. Sometimes, the upper boundary indices correct responses, which is why we associated higher drift rate with higher accuracy. However, in value-based decision-making, the upper boundary could also reflect a particular response category (e.g., approach) and we then associated higher drift rate with more frequent approach (than avoidance reflected by lower boundary) choices (Ging Jehli et al., 2023; Ging-Jehli et al., 2021, 2024).</p>
                                    <h3 className="text-xl font-semibold mt-6 mb-2 text-stone-800">Boundary Separation (a)</h3>
                                    <p className="mb-4">This parameter indexes the strategic balance between speed and accuracy that participants adopt. Boundary separation is a gauge of decision caution: larger values indicate a preference for accuracy, entailing longer decision times, while smaller values suggest a bias toward quicker, but potentially less accurate, responses. In value-based decision-making, the boundary separation parameter reflects response consistency. For detailed information, see: Ging-Jehli, Kuhn, et al. (2024).</p>
                                    <h3 className="text-xl font-semibold mt-6 mb-2 text-stone-800">Starting Point (z)</h3>
                                    <p className="mb-4">Also known as the a priori response bias, this parameter reveals an inherent bias towards a particular response, regardless of the stimulus content. It illustrates how pre-existing preferences can influence decision outcomes before the decision-making process even begins. If the starting point is equidistant from both boundaries, it indicates no initial bias. A starting point closer to the upper boundary suggests a bias towards upper responses, while one closer to the lower boundary indicates a bias towards lower responses.</p>
                                    <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Take home messages:</h2>
                                    <ol className="list-decimal list-inside ml-4 space-y-2">
                                        <li>The DDM accurately represents the entire RT distribution and relative frequencies of each response option using a few core parameters.</li>
                                        <li>By simulating latent decision-making processes, the DDM offers quantifiable and testable predictions, capturing observable behaviors with these parameters.</li>
                                        <li>Each model parameter has a well-established psychological significance, grounded in a century of cognitive neuroscience and psychology research. It’s important to note that the above description of the mental meaning of each parameter are generic and the precise meaning of each parameter needs to be interpreted within the context of the task specifics (see for details: Ging-Jehli et al., 2021).</li>
                                    </ol>
                                    <p className="mb-4">In my next blog post, I will detail how each parameter uniquely influences behavioral data.</p>
                                    <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Selected References:</h2>
                                    <ol className="list-none ml-0 space-y-2 text-sm">
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[1]</span><div><span className="italic">Sequential Sampling Models in Cognitive Neuroscience: Advantages, Applications, and Extensions</span>. Forstmann, B. U., Ratcliff, R., & Wagenmakers, E.-J. (2016). Annual Review of Psychology, 67(1), 641–666.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[2]</span><div><span className="italic">Model-Based Cognitive Neuroscience: A Conceptual Introduction</span>. Forstmann, B. U., & Wagenmakers, E.-J. (2015). In B. U. Forstmann & E.-J. Wagenmakers (Eds.), An Introduction to Model-Based Cognitive Neuroscience (pp. 139–156). Springer.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[3]</span><div><span className="italic">Cognitive & attentional mechanisms of cooperation: Implications for incentive designs and computational psychiatry</span>. Ging Jehli, N. R., Arnold, L. E., & Van Zandt, T. (2023).</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[4]</span><div><span className="italic">Cognitive signatures of depressive and anhedonic symptoms, and affective states</span>. Ging-Jehli, N. R., Kuhn, M., et al. (2024). Biological Psychiatry Cognitive Neuroscience and Neuroimaging.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[5]</span><div><span className="italic">Improving neurocognitive testing using computational psychiatry—A systematic review for ADHD</span>. Ging-Jehli, N. R., Ratcliff, R., & Arnold, L. E. (2021). Psychological Bulletin, 147(2), 169–231.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[6]</span><div><span className="italic">A theory of memory retrieval</span>. Ratcliff, R. (1978). Psychological Review, 85(2), 59–108.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[7]</span><div><span className="italic">Psychology and neurobiology of simple decisions</span>. Smith, P. L., & Ratcliff, R. (2004). Trends in Neurosciences, 27(3), 161–168.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[8]</span><div><span className="italic">Analysis of Response Time Distributions</span>. Van Zandt, T. (2002). In Stevens’ Handbook of Experimental Psychology, Methodology in Experimental Psychology (Vol. 4, pp. 461–516). John Wiley & Sons.</div></li>
                                        <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[9]</span><div><span className="italic">Bayes Solutions of Sequential Decision Problems</span>. Wald, A., & Wolfowitz, J. (1949). Proceedings of the National Academy of Sciences, 35(2), 99–102.</div></li>
                                    </ol>

                                    <div className="pt-6 border-t border-stone-200">
                                        <h3 className="text-lg font-semibold mb-3">Comments</h3>

                                        {comments.length === 0 ? (
                                            <p className="text-sm text-stone-600 mb-4">Be the first to comment on this post.</p>
                                        ) : (
                                            <div className="space-y-4 mb-4">
                                                {comments.map((c, idx) => (
                                                    <div key={idx} className="bg-white p-3 rounded border border-slate-100">
                                                        <div className="text-sm text-stone-700 font-medium">{c.author} <span className="text-xs text-stone-500 ml-2">{new Date(c.date).toLocaleString()}</span></div>
                                                        <div className="text-sm text-stone-700 mt-1">{c.text}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={authorInput}
                                                onChange={(e) => setAuthorInput(e.target.value)}
                                                placeholder="Your name (optional)"
                                                className="w-full p-2 border border-slate-200 rounded"
                                            />
                                            <textarea
                                                value={textInput}
                                                onChange={(e) => setTextInput(e.target.value)}
                                                placeholder="Write a comment..."
                                                className="w-full p-2 border border-slate-200 rounded h-24"
                                            />
                                            <div className="flex justify-end">
                                                <button
                                                    onClick={submitComment}
                                                    className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                                >
                                                    Submit Comment
                                                </button>
                                            </div>
                                        </div>
                                        <div className="mt-6 flex justify-end">
                                            <button
                                                onClick={() => navigate('/blog')}
                                                className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                            >
                                                ← Back to posts
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : POST_ID === 'ddm-deep-dive' ? (
                            // Specialized rendering for the ddm deep dive post with parameter images
                            <>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-stone-900">{post.title}</h1>

                                <div className="mb-6">
                                    <button
                                        onClick={() => navigate('/blog')}
                                        className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                    >
                                        ← Back to posts
                                    </button>
                                </div>

                                <div className="flex items-center mb-6">
                                    <p className="mr-4 text-sm text-stone-600">Rate this post:</p>
                                    <div className="flex items-center">
                                        {[1,2,3,4,5].map((s) => {
                                            const filled = (hover ?? Math.round(avgRating)) >= s;
                                            return (
                                                <Star
                                                    key={s}
                                                    className={`cursor-pointer w-5 h-5 transition-colors ${filled ? 'text-yellow-500' : 'text-stone-300'}`}
                                                    onMouseEnter={() => setHover(s)}
                                                    onMouseLeave={() => setHover(null)}
                                                    onClick={() => addRating(s)}
                                                />
                                            );
                                        })}
                                    </div>
                                    <span className="ml-3 text-sm text-stone-500">{avgRating.toFixed(1)} | {ratingList.length} Rating{ratingList.length === 1 ? '' : 's'}</span>
                                </div>

                                <div className="prose max-w-none text-stone-700">
                                    {
                                        (() => {
                                            const lines = post.content.split(/\n/);
                                            const headings = [
                                                'Behavioral effect of changes in drift rate (v)',
                                                'Behavioral effect of changes in boundary separation (a)',
                                                'Behavioral effect of changes in starting points (z)',
                                                'Behavioral effect of changes in nondecision time (Ter)'
                                            ];

                                            const elements: any[] = [];
                                            let buffer: string[] = [];

                                            const flushBufferAsParagraph = (keyBase: string) => {
                                                if (buffer.length === 0) return;
                                                const text = buffer.join(' ').trim();
                                                elements.push(<p key={`p-${keyBase}-${elements.length}`} className="mb-4">{text}</p>);
                                                // images based on paragraph content
                                                if (text.includes('Ratcliff, 1978') && /2016|Ratcliff et al\./.test(text)) {
                                                    elements.push(<div key={`img-drift-${elements.length}`} className="my-4"><img src="/assets/drift%20rates.JPG" alt="Drift rates" className="w-full rounded shadow-md" /></div>);
                                                }
                                                if (text.includes('Changes in boundary separation are often influenced') || text.includes('Changes in boundary separation are often')) {
                                                    elements.push(<div key={`img-boundary-${elements.length}`} className="my-4"><img src="/assets/boundary%20separation.JPG" alt="Boundary separation" className="w-full rounded shadow-md" /></div>);
                                                }
                                                if (text.includes('influencing the frequency of the different stimulus occurrence') || text.includes('frequency of the different stimulus')) {
                                                    elements.push(<div key={`img-start-${elements.length}`} className="my-4"><img src="/assets/starting%20point.JPG" alt="Starting point" className="w-full rounded shadow-md" /></div>);
                                                }
                                                if (text.includes('Essentially, as nondecision time increases') || text.includes('nondecision time')) {
                                                    elements.push(<div key={`img-nondec-${elements.length}`} className="my-4"><img src="/assets/nondecision%20time.JPG" alt="Nondecision time" className="w-full rounded shadow-md" /></div>);
                                                    elements.push(<h2 key={`summary-${elements.length}`} className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Summary</h2>);
                                                    elements.push(<div key={`img-all-${elements.length}`} className="my-4"><img src="/assets/all%20together.JPG" alt="All together" className="w-full rounded shadow-md" /></div>);
                                                }
                                                buffer = [];
                                            };

                                            for (let i = 0; i < lines.length; i++) {
                                                const raw = lines[i];
                                                const line = raw.trim();

                                                if (!line) {
                                                    // blank line -> flush any buffered paragraph
                                                    flushBufferAsParagraph(i.toString());
                                                    continue;
                                                }

                                                if (headings.includes(line)) {
                                                    // flush any buffered paragraph first
                                                    flushBufferAsParagraph(i.toString());
                                                    elements.push(<h2 key={`h2-${i}`} className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">{line}</h2>);
                                                    continue;
                                                }

                                                // accumulate line into buffer
                                                buffer.push(line);
                                            }

                                            // flush remaining buffer
                                            flushBufferAsParagraph('end');

                                            return elements;
                                        })()
                                    }
                                </div>

                                <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Take home messages</h2>
                                <ol className="list-decimal list-inside ml-4 space-y-4">
                                    <li>Above is a summary of the four main DDM parameters and how they produce distinct effects on the relative frequency of response options and their associated RT distributions.</li>

                                    <li>It’s important to note that model parameters can sometimes trade-off and how much they do so will depend on the task specifics, among others. I will explore this topic in depth in a future blog post, so stay tuned.</li>

                                    <li>If you examine the correct and error responses at a specific drift rate value in the first figure above, you’ll notice that they typically occur at similar speeds (i.e., similar mean RTs of corrects and errors). This uniformity results from excluding variability parameters in these simulations.</li>
                                </ol>

                                <h2 className="text-2xl font-semibold mt-8 mb-3 text-stone-800 border-b border-stone-300 pb-1">Selected References</h2>
                                <ol className="list-none ml-0 space-y-3 text-sm">
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[1]</span><div>Ging-Jehli, N. R., Arnold, L. E., Roley-Roberts, M. E., & deBeus, R. (2022). Characterizing Underlying Cognitive Components of ADHD Presentations and Co-morbid Diagnoses: A Diffusion Decision Model Analysis. Journal of Attention Disorders, 26(5), 706–722. https://doi.org/10.1177/10870547211020087</div></li>
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[2]</span><div>Ging-Jehli, N. R., Kuhn, M., Blank, J. M., Chanthrakumar, P., Steinberger, D. C., Yu, Z., Herrington, T. M., Dillon, D. G., Pizzagalli, D. A., & Frank, M. J. (2024). Cognitive signatures of depressive and anhedonic symptoms, and affective states, using computational modeling and neurocognitive testing. Biological Psychiatry: Cognitive Neuroscience and Neuroimaging. https://doi.org/10.1016/j.bpsc.2024.02.005</div></li>
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[3]</span><div>Ging-Jehli, N. R., & Ratcliff, R. (2020). Effects of aging in a task-switch paradigm with the diffusion decision model. Psychology and Aging, 35(6), 850–865. https://doi.org/10.1037/pag0000562</div></li>
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[4]</span><div>Ging-Jehli, N. R., Ratcliff, R., & Arnold, L. E. (2021). Improving neurocognitive testing using computational psychiatry—A systematic review for ADHD. Psychological Bulletin, 147(2), 169–231. https://doi.org/10.1037/bul0000319</div></li>
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[5]</span><div>Ratcliff, R. (1978). A theory of memory retrieval. Psychological Review, 85(2), 59–108. https://doi.org/10.1037/0033-295X.85.2.59</div></li>
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[6]</span><div>Ratcliff, R., Smith, P. L., Brown, S. D., & McKoon, G. (2016). Diffusion Decision Model: Current Issues and History. Trends in Cognitive Sciences, 20(4), 260–281. https://doi.org/10.1016/j.tics.2016.01.007</div></li>
                                    <li className="flex"><span className="mr-3 font-mono text-sm text-stone-700">[7]</span><div>Smith, P. L., & Ratcliff, R. (2004). Psychology and neurobiology of simple decisions. Trends in Neurosciences, 27(3), 161–168. https://doi.org/10.1016/j.tins.2004.01.006</div></li>
                                </ol>

                                <div className="pt-6 border-t border-stone-200">
                                    <h3 className="text-lg font-semibold mb-3">Comments</h3>

                                    {comments.length === 0 ? (
                                        <p className="text-sm text-stone-600 mb-4">Be the first to comment on this post.</p>
                                    ) : (
                                        <div className="space-y-4 mb-4">
                                            {comments.map((c, idx) => (
                                                <div key={idx} className="bg-white p-3 rounded border border-slate-100">
                                                    <div className="text-sm text-stone-700 font-medium">{c.author} <span className="text-xs text-stone-500 ml-2">{new Date(c.date).toLocaleString()}</span></div>
                                                    <div className="text-sm text-stone-700 mt-1">{c.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                value={authorInput}
                                                onChange={(e) => setAuthorInput(e.target.value)}
                                                placeholder="Your name (optional)"
                                                className="w-full p-2 border border-slate-200 rounded"
                                            />
                                            <textarea
                                                value={textInput}
                                                onChange={(e) => setTextInput(e.target.value)}
                                                placeholder="Write a comment..."
                                                className="w-full p-2 border border-slate-200 rounded h-24"
                                            />
                                            <div className="flex justify-end">
                                                <button
                                                    onClick={submitComment}
                                                    className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                                >
                                                    Submit Comment
                                                </button>
                                            </div>
                                        </div>

                                        <div className="mt-6 flex justify-end">
                                            <button
                                                onClick={() => navigate('/blog')}
                                                className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                            >
                                                ← Back to posts
                                            </button>
                                        </div>
                                </div>
                            </>
                        ) : (
                            // Generic post rendering for other posts
                            <>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold mb-1 text-stone-900">{post.title}</h1>
                                <div className="text-sm text-stone-500 mb-3">{post.date} • <span className="italic">{(post.tags || []).join(', ')}</span></div>
                                <div className="mb-6">
                                    <button onClick={() => navigate('/blog')} className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm">← Back to posts</button>
                                </div>

                                <div className="flex items-center mb-6">
                                    <p className="mr-4 text-sm text-stone-600">Rate this post:</p>
                                    <div className="flex items-center">
                                        {[1,2,3,4,5].map((s) => {
                                            const filled = (hover ?? Math.round(avgRating)) >= s;
                                            return (
                                                <Star
                                                    key={s}
                                                    className={`cursor-pointer w-5 h-5 transition-colors ${filled ? 'text-yellow-500' : 'text-stone-300'}`}
                                                    onMouseEnter={() => setHover(s)}
                                                    onMouseLeave={() => setHover(null)}
                                                    onClick={() => addRating(s)}
                                                />
                                            );
                                        })}
                                    </div>
                                    <span className="ml-3 text-sm text-stone-500">{avgRating.toFixed(1)} | {ratingList.length} Rating{ratingList.length === 1 ? '' : 's'}</span>
                                </div>

                                <div className="prose max-w-none text-stone-700">
                                    {post.content.split(/\n\s*\n/).map((para: string, idx: number) => (
                                        <p key={idx} className="mb-4">{para}</p>
                                    ))}
                                </div>

                                <div className="pt-6 border-t border-stone-200">
                                    <h3 className="text-lg font-semibold mb-3">Comments</h3>
                                    {comments.length === 0 ? (
                                        <p className="text-sm text-stone-600 mb-4">Be the first to comment on this post.</p>
                                    ) : (
                                        <div className="space-y-4 mb-4">
                                            {comments.map((c, idx) => (
                                                <div key={idx} className="bg-white p-3 rounded border border-slate-100">
                                                    <div className="text-sm text-stone-700 font-medium">{c.author} <span className="text-xs text-stone-500 ml-2">{new Date(c.date).toLocaleString()}</span></div>
                                                    <div className="text-sm text-stone-700 mt-1">{c.text}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div className="space-y-2">
                                        <input
                                            type="text"
                                            value={authorInput}
                                            onChange={(e) => setAuthorInput(e.target.value)}
                                            placeholder="Your name (optional)"
                                            className="w-full p-2 border border-slate-200 rounded"
                                        />
                                        <textarea
                                            value={textInput}
                                            onChange={(e) => setTextInput(e.target.value)}
                                            placeholder="Write a comment..."
                                            className="w-full p-2 border border-slate-200 rounded h-24"
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                onClick={submitComment}
                                                className="py-2 px-4 bg-academic-800 text-white rounded-md text-sm"
                                            >
                                                Submit Comment
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default DiffusionDecisionModel;