const originalQuestions = [
  {
    q: "In the context of the \"Four Paradigms of Science\" (Jim Gray), what represents the fourth, modern paradigm enabling breakthrough computer science innovations?",
    opts: [
      "Empirical observation of natural phenomena",
      "Theoretical analytical modeling and derivation",
      "Computational simulation of complex systems",
      "Data-intensive science driven by big data analytics and pipeline mining"
    ],
    ans: 3
  },
  {
    q: "The concept of \"Disruptive Innovation\" (Clayton Christensen) is best characterized in the software industry by an asset that:",
    opts: [
      "Introduces high-margin, elite-tier performance features to existing premium consumers",
      "Enters at the bottom of a market with a simpler, cheaper, or more convenient alternative, eventually displacing incumbents",
      "Demands massive legacy infrastructure investments to sustain incremental updates",
      "Focuses strictly on improving algorithmic execution time within established compiler frames"
    ],
    ans: 1
  },
  {
    q: "Which paradigm shift in quantum computing directly breaks traditional Von Neumann bottlenecks by embedding computational logic inside memory architectures?",
    opts: [
      "In-Memory Computing (Processor-in-Memory)",
      "Topological Error Correction",
      "Adiabatic Quantum Annealing",
      "Systolic Array Processing"
    ],
    ans: 0
  },
  {
    q: "When evaluating the Technology Readiness Level (TRL) of a university computer science research asset, which level indicates that a component has been verified in a relevant laboratory environment?",
    opts: [
      "TRL 1",
      "TRL 4",
      "TRL 7",
      "TRL 9"
    ],
    ans: 1
  },
  {
    q: "In software engineering research, Thomas Kuhn's concept of a \"Paradigm Shift\" is most clearly illustrated by the transition from:",
    opts: [
      "Sequential iteration loops to unrolled execution flows",
      "Structured Imperative Programming to Object-Oriented and Functional Declarative paradigms",
      "32-bit floating point processing to 64-bit precision standards",
      "Relational database primary keys to alternative composite layouts"
    ],
    ans: 1
  },
  {
    q: "Schumpeter's concept of \"Creative Destruction\" manifests in modern computer science through:",
    opts: [
      "Re-compiling ancient source code libraries without making syntactic structural mutations",
      "The complete obsolescence of established technologies (e.g., physical optical drives) by superior digital innovations (e.g., cloud object storage)",
      "Random programmatic error injection to test system resiliency matrices",
      "Database replication patterns running over isolated regional nodes"
    ],
    ans: 1
  },
  {
    q: "Which foundational computing paradigm treats calculations as the evaluation of mathematical functions, completely avoiding state changes and mutable data structures?",
    opts: [
      "Declarative Functional Programming",
      "Imperative Object-Oriented Frameworks",
      "Asynchronous Event-Driven Interception",
      "Co-inductive Logic Compilation"
    ],
    ans: 0
  },
  {
    q: "In complex systems science, \"Emergence\" within decentralized computer science systems (e.g., Swarm Intelligence, Blockchain networks) is formally defined as:",
    opts: [
      "The computational timeout error caused by circular dependency locks",
      "Complex, macro-level global behaviors arising from simple, localized micro-level interaction rules",
      "The automatic generation of hardware drivers by legacy compilers",
      "A lossy metadata compression strategy matching rows to columns"
    ],
    ans: 1
  },
  {
    q: "Radical innovation in computer architecture, such as Neuromorphic Computing, mimics the human biological nervous system primarily to optimize:",
    opts: [
      "Relational data schema normalization speeds",
      "Energy efficiency and parallel associative pattern-recognition processing at scale",
      "Synchronous serialized floating-point operations",
      "Low-level physical layer network packet encryption"
    ],
    ans: 1
  },
  {
    q: "Open Innovation frameworks (Henry Chesbrough) imply that a technology firm executing software R&D should:",
    opts: [
      "Enforce aggressive intellectual property restrictions to block external collaboration entirely",
      "Use both internal and external ideas and paths to market to accelerate technological advancement",
      "Build all architectural software components from scratch to eliminate external reliance",
      "Restrict system execution exclusively to closed, on-premise mainframe platforms"
    ],
    ans: 1
  },
  {
    q: "What metrics are traditionally mapped along the vertical and horizontal axes of a standard \"Technology S-Curve\"?",
    opts: [
      "Vertical: Algorithmic Execution Time; Horizontal: Hardware Storage Cost",
      "Vertical: Technology Performance; Horizontal: R&D Effort/Time",
      "Vertical: Network Packet Latency; Horizontal: System User Capacity",
      "Vertical: Code Line Density; Horizontal: Database Normalization Level"
    ],
    ans: 1
  },
  {
    q: "In the \"Crossing the Chasm\" model for tech innovations (Geoffrey Moore), the chasm represents a critical adoption gap between which two consumer segments?",
    opts: [
      "Innovators and Early Adopters",
      "Early Adopters and the Early Majority",
      "Early Majority and the Late Majority",
      "Late Majority and Laggards"
    ],
    ans: 1
  },
  {
    q: "What computational paradigm relies on distributing resource provisioning dynamically over decentralized edge nodes rather than centralizing tasks in hyperscale cloud data centers?",
    opts: [
      "Monolithic Mainframe Computing",
      "Edge/Fog Computing",
      "Systolic Array Stream Processing",
      "Homogeneous Grid Compilation"
    ],
    ans: 1
  },
  {
    q: "The scientific transition from deterministic classic computing to probabilistic quantum computing relies fundamentally on exploiting which quantum mechanical property?",
    opts: [
      "Transistor threshold voltage leakage",
      "Superposition and Entanglement",
      "Symmetric optical fiber attenuation",
      "Cache line hit ratio variance"
    ],
    ans: 1
  },
  {
    q: "Amdahl's Law establishes a theoretical scientific upper bound on the speedup of an innovation in parallel computing based on:",
    opts: [
      "The total non-volatile disk space allocated to the cluster",
      "The strictly sequential (serial) fraction of the software program that cannot be parallelized",
      "The physical clock frequency of individual hardware registers",
      "The cryptographic key size used in data packet encryption"
    ],
    ans: 1
  },
  {
    q: "What design philosophy in modern computing innovation ensures that software system architectures are built to remain operational despite individual component or node failures?",
    opts: [
      "Monolithic tightly coupled design",
      "Fault-Tolerant, Distributed Microservices Architecture",
      "Synchronous Single-Threaded Interception",
      "Deterministic Finite State Serialization"
    ],
    ans: 1
  },
  {
    q: "In innovation management, an \"Incumbent's Dilemma\" occurs when an established tech enterprise fails to adopt a breakthrough computer science asset because:",
    opts: [
      "The asset violates standard relational database schema rules",
      "The enterprise chooses to focus on sustaining innovations for its most profitable, existing customers",
      "The innovation is completely unvetted by academic literature",
      "The compiler engine throws unhandled memory segmentation faults"
    ],
    ans: 1
  },
  {
    q: "Which scientific paradigm prioritizes building simulation models of complex biological processes within silicon architectures to discover novel molecular configurations?",
    opts: [
      "In-silico Molecular Modeling / Computational Biology",
      "In-vitro Empirical Chromatography",
      "Unstructured Heuristic Text Parsing",
      "Empirical Ethnographic Visualization"
    ],
    ans: 0
  },
  {
    q: "The concept of \"Frugal Innovation\" in software systems engineering is best realized by:",
    opts: [
      "Maximizing hardware resource consumption to force faster execution cycles",
      "Developing high-utility, resource-optimized software that runs efficiently on low-tier, legacy hardware in resource-constrained environments",
      "Running continuous multi-pass global path tracing over massive cluster nodes",
      "Enforcing complex cryptographic structures that demand high GPU overhead"
    ],
    ans: 1
  },
  {
    q: "The automation of scientific discovery itself, using machine learning models to search through massive hypothesis spaces (e.g., AlphaFold for protein folding), is an innovation categorized under:",
    opts: [
      "Basic Manual Data Entry Structures",
      "AI-driven Scientific Discovery (AI4Science)",
      "Legacy Procedural Automation",
      "Linear Regression Extrapolation"
    ],
    ans: 1
  },
  {
    q: "In computer science research, what constitutes a primary feature of a \"Systematic Literature Review\" (SLR)?",
    opts: [
      "A casual, unscheduled reading of blog articles and unverified opinion columns",
      "A rigorous, reproducible, and transparent methodology used to identify, evaluate, and interpret all available research relevant to a specific question",
      "Writing code directly without executing any background contextual investigation",
      "Modifying database index settings based on intuitive guesswork alone"
    ],
    ans: 1
  },
  {
    q: "Which Intellectual Property (IP) mechanism provides legal protection for the underlying structural expression of source code as a literary work, but does not protect the abstract algorithmic concept itself?",
    opts: [
      "Patent",
      "Copyright",
      "Trade Secret",
      "Trademark"
    ],
    ans: 1
  },
  {
    q: "To qualify for utility patent protection, a computer science innovation must strictly satisfy which three statutory criteria?",
    opts: [
      "Open-source documentation, Cloud compatibility, and Rapid execution time",
      "Novelty, Non-obviousness, and Industrial applicability (Utility)",
      "Relational integrity, Low memory usage, and Multi-threaded design",
      "Abstract conceptualization, Geometric symmetry, and Cost efficiency"
    ],
    ans: 1
  },
  {
    q: "What type of open-source software license allows developers to modify and redistribute code freely under any license terms they choose, even within proprietary commercial applications?",
    opts: [
      "Copyleft License (e.g., GNU GPL)",
      "Permissive License (e.g., MIT, Apache 2.0)",
      "Proprietary EULA Restrictions",
      "Closed-source NDA Framework"
    ],
    ans: 1
  },
  {
    q: "The practice of \"Double-Blind Reviewing\" in computer science research conferences dictates that:",
    opts: [
      "The code undergoes separate independent compiler checks on two divergent operating systems",
      "Both the author's identity and the reviewer's identity are completely concealed from each other to prevent bias",
      "The researcher executes data parsing loops without viewing the database output logs",
      "The research asset is subjected to evaluation by exactly two non-technical business executives"
    ],
    ans: 1
  },
  {
    q: "When measuring the impact of a computer science publication, an author's \"h-index\" is formally defined as:",
    opts: [
      "The total line count of all source code files published on open platforms",
      "The number of papers (h) that have each received at least h citations",
      "The highest clock speed in Megahertz of the processing units used in an experiment",
      "The percentage of code blocks that compile without throwing warnings"
    ],
    ans: 1
  },
  {
    q: "Which data gathering approach in computer science human-computer interaction (HCI) research relies on capturing real-time user experiences by prompting them to voice their immediate thoughts while completing a digital task?",
    opts: [
      "Quantitative Log Analysis",
      "Think-Aloud Protocol",
      "Delphi Consensus Method",
      "Structural Regression Modeling"
    ],
    ans: 1
  },
  {
    q: "In empirical computer science research, a \"Type I Error\" (False Positive) manifests when a researcher:",
    opts: [
      "Correctly accepts a true valid hypothesis framework",
      "Rejects the null hypothesis when it is actually true (falsely claiming an effect or optimization exists)",
      "Encounters a compiler error that halts execution logs",
      "Deletes a non-empty relational data table by accident"
    ],
    ans: 1
  },
  {
    q: "What form of legal protection is best suited for a proprietary machine learning model's core hyperparameter configuration weights that a firm wishes to hide completely from competitors without public filing?",
    opts: [
      "Patent",
      "Copyright",
      "Trade Secret",
      "Design Right"
    ],
    ans: 2
  },
  {
    q: "In experimental algorithmics, the benchmarking practice of using \"Synthetic Workloads\" involves:",
    opts: [
      "Testing systems using real, historical operational data harvested from actual production environments",
      "Generating artificially simulated data patterns to systematically stress-test specific algorithmic boundary conditions",
      "Bypassing execution tests entirely to rely on pure mathematical proofs",
      "Running simple hello-world print statements inside a safe terminal thread"
    ],
    ans: 1
  },
  {
    q: "The ethical hazard of \"Data Dredging\" (or p-hacking) in computational data science research refers to:",
    opts: [
      "Storing backup datasets across separate geographically isolated arrays",
      "Exhaustively testing multiple statistical variables until a significant result emerges by chance, invalidating scientific integrity",
      "Encrypting raw data records with oversized cryptographic public keys",
      "Cleaning out corrupt database cells prior to system mapping steps"
    ],
    ans: 1
  },
  {
    q: "Which open-source governance framework mandates that any derivative works built upon the source code must also be open-sourced under the exact same license terms?",
    opts: [
      "Permissive Apache Model",
      "Copyleft / Reciprocal License (e.g., GPL)",
      "Commercial Freemium Tier",
      "Public Domain Dedication"
    ],
    ans: 1
  },
  {
    q: "When conducting a controlled experiment in software performance analysis, the \"Independent Variable\" represents:",
    opts: [
      "The structural performance metric being measured (e.g., execution latency)",
      "The specific condition or parameter that is intentionally manipulated by the researcher (e.g., caching strategy)",
      "The system background process that cannot be tracked or monitored",
      "The hardware clock cycle count held completely constant by the operating system"
    ],
    ans: 1
  },
  {
    q: "The \"P-value\" calculated during statistical hypothesis testing in computer science experiments indicates:",
    opts: [
      "The absolute processing capacity of a parallel cluster configuration",
      "The probability of obtaining the observed experimental results (or more extreme) assuming the null hypothesis is true",
      "The number of memory pages actively swapped out to disk",
      "The metric scaling dimension of a non-linear data node"
    ],
    ans: 1
  },
  {
    q: "What specific research methodology focuses on evaluating the usability of a software interface by having expert evaluators measure it against recognized usability principles?",
    opts: [
      "Stochastic Trace Analysis",
      "Heuristic Evaluation",
      "A/B Bucket Testing",
      "Relational Integrity Compilation"
    ],
    ans: 1
  },
  {
    q: "A computer science researcher who copies text, equations, or core algorithmic blocks from another published paper without providing formal attribution is guilty of:",
    opts: [
      "Fabrication",
      "Plagiarism",
      "Falsification",
      "Redundant publication"
    ],
    ans: 1
  },
  {
    q: "What metric represents the absolute geometric mean of an academic journal's citation frequency over a specific multi-year window, serving as an innovation benchmark?",
    opts: [
      "PageRank Factor",
      "Impact Factor",
      "G-index Core",
      "Bit-rate Velocity"
    ],
    ans: 1
  },
  {
    q: "The term \"Replicability\" in scientific software development research implies that:",
    opts: [
      "The code must automatically replicate itself across separate cloud storage regions",
      "Independent researchers can arrive at the same scientific conclusions using their own newly gathered data and experimental setups",
      "The database table features automatic primary key duplicate prevention",
      "The application must be rewritten in an alternative programming language"
    ],
    ans: 1
  },
  {
    q: "What type of patent protection safeguards the purely aesthetic or visual industrial design elements of a hardware device (e.g., the specific shell geometry of a smartphone) rather than its technical function?",
    opts: [
      "Utility Patent",
      "Design Patent",
      "Plant Patent",
      "Geographic Indicator"
    ],
    ans: 1
  },
  {
    q: "In Decentralized Ledger Technology (DLT), the scientific innovation of \"Smart Contracts\" allows for:",
    opts: [
      "The manual, paper-bound execution of enterprise service level agreements",
      "Self-executing digital protocols that automatically enforce contractual terms directly via cryptographic code without third-party intermediaries",
      "The dynamic acceleration of hardware CPU clock speeds across validator nodes",
      "Lossless image vectorization passes running inside transaction records"
    ],
    ans: 1
  },
  {
    q: "What is the fundamental scientific objective of Generative Adversarial Networks (GANs) within modern artificial intelligence innovation?",
    opts: [
      "To minimize database index fragmentation across hard disk drives",
      "To pit two neural networks (a Generator and a Discriminator) against each other to synthesize highly realistic novel data samples",
      "To serialize simple linear regression curves over single thread loops",
      "To implement end-to-end symmetric encryption over network packets"
    ],
    ans: 1
  },
  {
    q: "In Edge Computing, what is the purpose of implementing \"Model Quantization\" on deep learning assets?",
    opts: [
      "To expand the bit precision of weights from 32-bit to 128-bit to maximize memory usage",
      "To reduce the numerical precision of weights (e.g., from FP32 to INT8) to lower memory and computational overhead for resource-constrained edge devices",
      "To rewrite the underlying model using a purely procedural imperative syntax",
      "To replicate the entire training dataset across ten global cloud endpoints"
    ],
    ans: 1
  },
  {
    q: "Which emerging technology innovation provides an unchangeable, cryptographically secured, and distributed record of transaction states without requiring a centralized root authority?",
    opts: [
      "Relational Multi-Tenant Cloud Database",
      "Blockchain Technology",
      "Centralized Mainframe Registry",
      "Distributed Virtual File Stencil"
    ],
    ans: 1
  },
  {
    q: "The internet architectural paradigm shift denoted as \"Web3\" is primarily centered on:",
    opts: [
      "Enhancing raw dial-up modems to boost simple hypertext parsing transfers",
      "Transitioning from platform-dominated centralized ecosystems to user-owned, decentralized protocols leveraging blockchain fabrics",
      "Restricting all web experiences strictly to non-interactive, read-only flat text files",
      "Migrating graphics calculations exclusively to client-side vector engines"
    ],
    ans: 1
  },
  {
    q: "What unique operational capability distinguishes Neuromorphic Processing Units (NPUs) from traditional Von Neumann CPUs?",
    opts: [
      "They process commands strictly in a sequential, synchronous single-threaded loop",
      "They use non-volatile memristors and event-driven spiking architectures to perform parallel, low-power synapse-like calculations",
      "They avoid using cache memory hierarchies entirely to optimize disk swapping speeds",
      "They are restricted strictly to evaluating alphanumeric string parsing expressions"
    ],
    ans: 1
  },
  {
    q: "In the context of the Internet of Things (IoT), the \"Digital Twin\" innovation refers to:",
    opts: [
      "A secondary physical backup device stored in a warehouse for disaster recovery",
      "A real-time virtual simulation model that accurately mirrors the state, behavior, and dynamics of a physical object or system",
      "Splitting a data storage packet into two identical halves to pass over parallel channels",
      "An exact copy of an operating system kernel running inside a separate virtual machine"
    ],
    ans: 1
  },
  {
    q: "What structural scientific bottleneck prevents standard Deep Learning architectures from explaining the exact logical rationale behind a specific predictive output?",
    opts: [
      "Low network transmission bandwidth capacities",
      "The \"Black Box\" nature of highly non-linear, multi-layered neural networks containing millions of uninterpretable weight matrices",
      "The total absence of high-speed GPU floating-point acceleration hardware",
      "Strict relational schema constraints enforced by legacy data models"
    ],
    ans: 1
  },
  {
    q: "Autonomous systems (e.g., self-driving vehicles) integrate Sensor Fusion innovations primarily to:",
    opts: [
      "Double the storage capacity requirements of the onboard central file system",
      "Combine data streams from multiple distinct sensors (e.g., LiDAR, Radar, Cameras) to form a more accurate and reliable understanding of the environment",
      "Convert analog sound alerts into low-bit digital audio files",
      "Discard peripheral spatial coordinates that fall behind the vehicle frame boundaries"
    ],
    ans: 1
  },
  {
    q: "What is the core optimization mechanism of Transformer neural network architectures that allows them to outperform older recurrent models (RNNs) in natural language processing?",
    opts: [
      "Sequential word-by-word token filtering loops",
      "The Self-Attention Mechanism, which evaluates relative dependencies between all tokens in a sequence simultaneously",
      "Eliminating mathematical backpropagation passes entirely to save GPU memory cycles",
      "Restricting inputs to basic binary matrices containing zero state transitions"
    ],
    ans: 1
  },
  {
    q: "The deployment of Homomorphic Encryption within cloud computing innovation allows data platforms to:",
    opts: [
      "Access and read user cleartext records without needing an authentication token",
      "Perform mathematical computations directly on encrypted data without decrypting it first, preserving absolute privacy",
      "Compress data payloads down to exactly half their original bit density",
      "Block all incoming transport layer security connections automatically"
    ],
    ans: 1
  },
  {
    q: "In Federated Learning innovation, how is machine learning model training accomplished across a distributed network of mobile devices?",
    opts: [
      "Devices upload their raw, private local datasets to a single central database server for batch training",
      "Devices train the model locally on their own private data, then transmit only the model parameter updates (gradients) to a central aggregator, preserving data privacy",
      "The central server executes all computations and forcefully flashes updates to idle device storage arrays",
      "Data points are converted into unformatted text strings and streamed over open channels"
    ],
    ans: 1
  },
  {
    q: "Which computing innovation uses biological DNA molecules rather than silicon-based transistors to archive digital data assets?",
    opts: [
      "Optical Holographic Storage",
      "DNA Data Storage",
      "Quantum Charge-Coupled Disks",
      "Volatile Magnetic Core Stencils"
    ],
    ans: 1
  },
  {
    q: "The emerging concept of \"Explainable AI\" (XAI) is explicitly engineered to address which societal and scientific challenge?",
    opts: [
      "The systematic deceleration of computational throughput in processing pipelines",
      "The lack of transparency, trust, and accountability in black-box deep learning models by making their internal decision logic human-interpretable",
      "Optimizing the overall energy efficiency of deep learning training clusters",
      "Porting Python-based deep learning frameworks directly into low-level C assembly code"
    ],
    ans: 1
  },
  {
    q: "What scientific innovation in cybersecurity uses quantum mechanical principles to guarantee completely secure communication channels that cannot be intercepted without detection?",
    opts: [
      "Advanced Encryption Standard (AES-256)",
      "Quantum Key Distribution (QKD)",
      "Elliptic Curve Diffie-Hellman (ECDH)",
      "Homomorphic Hashing Framework"
    ],
    ans: 1
  },
  {
    q: "The architectural integration of Augmented Reality (AR) systems differs from Virtual Reality (VR) because AR:",
    opts: [
      "Generates a completely synthetic digital landscape that completely isolates the user from the physical world",
      "Overlays digital data, graphics, or synthetic models directly onto the user's view of the real-world physical environment in real time",
      "Avoids using any real-time 3D rendering algorithms or depth estimation passes",
      "Restricts all interface components to flat text streams rendered inside safe viewports"
    ],
    ans: 1
  },
  {
    q: "What scientific challenge represents a primary bottleneck in scaling up NISQ (Noisy Intermediate-Scale Quantum) computers for commercial application?",
    opts: [
      "Low non-volatile secondary disk read-write latency metrics",
      "High qubit susceptibility to environmental decoherence and systemic hardware noise errors",
      "The lack of standard relational database engines that can parse quantum bits",
      "The complete absence of high-level functional object-oriented programming frameworks"
    ],
    ans: 1
  },
  {
    q: "In computer science innovation, \"Zero-Knowledge Proofs\" (ZKPs) allow a system user to:",
    opts: [
      "Wipe the target frame buffer entirely to prevent data remnants from persisting",
      "Cryptographically prove to a verifier that a specific statement is true without revealing any underlying private information beyond the statement's validity",
      "Force the operating system kernel to execute threads with zero security permission flags",
      "De-allocate all basic variable spaces across active memory matrix blocks"
    ],
    ans: 1
  },
  {
    q: "The deployment of Extended Reality (XR) in medical training innovations (e.g., surgical simulation) requires what critical computer science optimization to avoid causing simulator sickness?",
    opts: [
      "Minimizing database table fragmentation rates down to absolute zero",
      "Maintaining ultra-low motion-to-photon latency (typically under 20ms) along with high-frequency rendering loops",
      "Ensuring all asset pipelines are saved strictly as flat uncompressed raster bitmaps",
      "Disabling all multi-threaded asynchronous interaction processing threads"
    ],
    ans: 1
  },
  {
    q: "What technological innovation involves building tiny, sub-millimeter sensors and actuators that integrate micro-mechanical structures with electronic computing circuits on a single silicon substrate?",
    opts: [
      "Hyperscale Mainframe Processors",
      "MEMS (Micro-Electro-Mechanical Systems)",
      "Systolic Stream Arrays",
      "Non-volatile Memristor Crossbars"
    ],
    ans: 1
  },
  {
    q: "In the commercialisation of computer science assets, a Minimum Viable Product (MVP) is strategically designed to:",
    opts: [
      "Include every single planned feature to guarantee complete enterprise customer satisfaction at initial launch",
      "Test core product hypotheses with the least amount of effort and development time by delivering essential value to early adopters",
      "Run strictly on high-end parallel cloud supercomputing clusters to maximize infrastructure spend",
      "Avoid any post-launch code modifications or continuous deployment updates"
    ],
    ans: 1
  },
  {
    q: "What model defines the step-by-step path that software innovations travel from academic laboratory concepts through validation, prototyping, and final global deployment?",
    opts: [
      "Capability Maturity Model Integration (CMMI)",
      "Technology Readiness Level (TRL) Lifecycle",
      "Relational Database Normalization Paradigm",
      "Software Defect Density Matrix"
    ],
    ans: 1
  },
  {
    q: "The process of \"Technology Transfer\" within a university computer science department involves:",
    opts: [
      "Moving physical hardware desktop units from one laboratory classroom to another",
      "Licensing or transferring intellectual property rights of university research innovations to external commercial entities for market deployment",
      "Porting legacy source code repositories from Python 2 to Python 3 frameworks",
      "Deleting academic researcher user records once their project contracts terminate"
    ],
    ans: 1
  },
  {
    q: "A \"Software-as-a-Service\" (SaaS) commercial business model differs from legacy shrink-wrapped software distribution because SaaS:",
    opts: [
      "Mandates upfront physical installation disks and permanent desktop licensing keys",
      "Delivers application functionality centrally hosted over cloud infrastructure accessed via recurring subscription models",
      "Prevents developers from deploying continuous updates or security hotfixes to consumers",
      "Operates entirely decoupled from internet protocols or network transport pipelines"
    ],
    ans: 1
  },
  {
    q: "What metric tracks the rate at which a newly launched, venture-backed computer science startup spends its investment capital before generating positive operational cash flow?",
    opts: [
      "Churn Rate",
      "Burn Rate",
      "Acquisition Velocity",
      "Latency Multiplier"
    ],
    ans: 1
  },
  {
    q: "When a software startup transitions its core product architecture from serving local niche clients to handling millions of global concurrent transactions without system degradation, it is executing:",
    opts: [
      "Database schema denormalization",
      "Horizontal and Vertical Scaling (Scale-Up and Scale-Out)",
      "Run-length memory compilation loops",
      "Static single-threaded processing serialization"
    ],
    ans: 1
  },
  {
    q: "In software product management, the point where a computer science innovation aligns perfectly with a verified market demand, solving a critical pain point for a scalable cohort of consumers, is known as:",
    opts: [
      "Algorithmic Convergence",
      "Product-Market Fit",
      "Structural Code Freeze",
      "Alpha Validation Baseline"
    ],
    ans: 1
  },
  {
    q: "What type of funding stage represents the initial institutional capital raised by a software startup to validate its core technical MVP and kickstart initial customer acquisition?",
    opts: [
      "Late-Stage Series C Corporate Funding",
      "Seed / Series A Capital",
      "Public Sovereign Debt Bond",
      "Legacy Mainframe Infrastructure Grant"
    ],
    ans: 1
  },
  {
    q: "The term \"Sustaining Innovation\" denotes a technological asset transformation that:",
    opts: [
      "Destroys existing value networks by introducing unverified, low-cost alternatives",
      "Continuously improves the performance of established products along dimensions historically valued by mainstream consumers",
      "Eliminates the requirement to write functional code by using visual drag-and-drop elements exclusively",
      "Forces the system execution environment to halt whenever user volumes scale up"
    ],
    ans: 1
  },
  {
    q: "In the software startup ecosystem, \"Churn Rate\" is an innovation health indicator that quantifies:",
    opts: [
      "The number of code refactoring cycles completed by the engineering team per sprint",
      "The percentage of subscribers or users who discontinue their service subscription within a given timeframe",
      "The execution speed of memory-swapping routines inside the server cache units",
      "The volume of data bits passing through network routing channels per second"
    ],
    ans: 1
  },
  {
    q: "When a technology enterprise protects its innovations by acquiring a vast collection of interconnected patents to block competitors from entering a specific software vertical, it is creating a:",
    opts: [
      "Open source software consortium",
      "Patent Thicket / Defensive Patent Shield",
      "Decentralized Ledger Repository",
      "Public domain allocation blueprint"
    ],
    ans: 1
  },
  {
    q: "The commercialisation phase known as \"Incubation\" provides early-stage university computer science spin-offs with:",
    opts: [
      "Immediate multi-billion-dollar initial public offerings on global stock exchanges",
      "Shared workspace, mentoring, technical infrastructure support, and business validation coaching to bridge lab-to-market gaps",
      "Automated tools to completely rewrite their systems in structural machine assembly language",
      "Strict regulatory isolation bans preventing them from engaging with actual market consumers"
    ],
    ans: 1
  },
  {
    q: "What architectural scalability strategy involves breaking a single, monolithic enterprise system into smaller, independently deployable services that communicate via lightweight APIs?",
    opts: [
      "Tight Spatial Coupling Optimization",
      "Microservices Architecture",
      "Centralized Mainframe Layering",
      "Non-recursive Static Array Pipeline"
    ],
    ans: 1
  },
  {
    q: "In tech entrepreneurship, a sudden, strategic alteration of a startup's product direction, target market, or business model, while retaining the core underlying technology asset developed in R&D, is a:",
    opts: [
      "Code Freeze",
      "Pivot",
      "Liquidation Event",
      "Deprecation Loop"
    ],
    ans: 1
  },
  {
    q: "What represents the primary hazard of \"Vendor Lock-In\" when an enterprise builds its software innovations entirely upon a single public cloud provider's proprietary APIs?",
    opts: [
      "The software code size expands past optimal storage capacity thresholds",
      "High switching costs and immense architectural friction if the enterprise ever needs to migrate its assets to a competitor platform",
      "The complete loss of local database indexing capabilities",
      "The compiler automatically transitions into an unverified functional declarative state"
    ],
    ans: 1
  },
  {
    q: "The operational practice of DevOps (Development and Operations) accelerates commercial feature deployment cycles through the implementation of:",
    opts: [
      "Manual batch-processed software installation schedules executed once per calendar year",
      "Continuous Integration and Continuous Deployment (CI/CD) pipelines backed by automated testing infrastructure",
      "Restricting developer access exclusively to local, offline staging sandboxes",
      "Stripping fragment shading layers from visual communication interfaces"
    ],
    ans: 1
  },
  {
    q: "What metric calculates the total net profit that a commercial software enterprise expects to earn from a single user customer throughout the entire duration of their operational relationship?",
    opts: [
      "Customer Acquisition Cost (CAC)",
      "Customer Lifetime Value (LTV)",
      "Net Promoter Vector (NPV)",
      "Bitwise Allocation Unit (BAU)"
    ],
    ans: 1
  },
  {
    q: "To safely scale a database innovation that handles immense concurrent read volumes, system engineers often deploy which strategy?",
    opts: [
      "Forcing all operations onto a single, isolated primary data partition",
      "Implementing a Read-Replica cluster architecture to offload query processing from the primary write node",
      "Deleting old metadata records without generating backup archives",
      "Converting table structures into unstructured binary point clouds"
    ],
    ans: 1
  },
  {
    q: "What legal contract is standardly signed between university computer science researchers and corporate partners before technical proprietary information is shared for commercial evaluation?",
    opts: [
      "End User License Agreement (EULA)",
      "Non-Disclosure Agreement (NDA)",
      "General Public License (GPL)",
      "Open Data Commons Framework"
    ],
    ans: 1
  },
  {
    q: "In technology scale-up management, the CAP Theorem dictates that any distributed data system can simultaneously provide only two of which three core scientific properties?",
    opts: [
      "Low cost, High storage, and Multi-threaded compilation",
      "Consistency, Availability, and Partition Tolerance",
      "Novelty, Utility, and Industrial Non-obviousness",
      "Structural modularity, Rapid latency, and Bitwise encapsulation"
    ],
    ans: 1
  },
  {
    q: "In scientific computing, the technique of \"Monte Carlo Simulation\" relies on which core approach to solve deterministic problems?",
    opts: [
      "Precise, analytical algebraic derivations executed without variable variance",
      "Using repetitive pseudo-random statistical sampling inputs to model probabilistic outcomes over complex systems",
      "Running linear binary search passes over highly sorted static arrays",
      "Compiling source structures into single-threaded imperative loops"
    ],
    ans: 1
  },
  {
    q: "What algorithmic innovation optimizes search spaces by mimicking the biological principles of natural selection, cross-over mutations, and survival of the fittest?",
    opts: [
      "Deterministic Finite Automata",
      "Genetic Algorithms",
      "Backpropagation Neural Networks",
      "Quicksort Indexing Pipelines"
    ],
    ans: 1
  },
  {
    q: "When modeling physical or computational processes using \"Discrete Event Simulation\" (DES), system state changes occur:",
    opts: [
      "Continuously and smoothly over a non-breaking, uninterrupted temporal line",
      "Chronologically at specific, isolated points in time triggered by the occurrence of distinct events",
      "Strictly when the frame memory buffer swaps its active drawing layers",
      "Whenever the underlying relational data rows undergo complete third-normal-form normalization"
    ],
    ans: 1
  },
  {
    q: "In data science innovation, the scientific process of \"Dimensionality Reduction\" is effectively achieved through which linear algebraic technique?",
    opts: [
      "Matrix Concatenation Shearing",
      "Principal Component Analysis (PCA)",
      "Polynomial Spline Interpolation",
      "Recursive Binary Search Tree Partitioning"
    ],
    ans: 1
  },
  {
    q: "What type of computational grid structure represents space as a regular arrangement of cells, where each cell updates its discrete state based on a mathematical rule tied to its immediate neighbors?",
    opts: [
      "Bounding Volume Hierarchy",
      "Cellular Automata (e.g., Conway's Game of Life)",
      "Sparse Tensor Array",
      "Non-Uniform Rational B-Spline Mesh"
    ],
    ans: 1
  },
  {
    q: "Big-O notation is utilized in algorithmic innovation research primarily to quantify:",
    opts: [
      "The exact financial cost required to deploy a cloud instance infrastructure",
      "The asymptotic upper bound of an algorithm's execution time or memory space complexity relative to the input size (n)",
      "The number of lines of source code written across active project directories",
      "The physical dimensions of pixel blocks mapped onto a display matrix"
    ],
    ans: 1
  },
  {
    q: "In numerical scientific computing, the hazard of \"Floating-Point Round-off Error\" occurs because:",
    opts: [
      "The database compiler throws memory segmentation exceptions",
      "Digital computers represent continuous real numbers using a fixed, finite number of binary bits, leading to precision loss",
      "The system administrator manually alters the configuration files mid-execution",
      "The execution thread encounters an unhandled circular dependency lock"
    ],
    ans: 1
  },
  {
    q: "What programming paradigm allows computational algorithms to be executed concurrently across thousands of lightweight arithmetic processing cores simultaneously, transforming modern scientific simulations?",
    opts: [
      "Single-Threaded Monolithic Processing",
      "Massively Parallel GPU Computing (GPGPU via CUDA/OpenCL)",
      "Asynchronous Procedural Interception",
      "Logic-Driven Co-inductive Compilation"
    ],
    ans: 1
  },
  {
    q: "In computational graph networks, the PageRank algorithm (Larry Page) serves as a classic structural innovation that determines node importance by calculating:",
    opts: [
      "The line density of data structures inside individual data packets",
      "The probability distribution of a random web surfer navigating the network links, measuring link volume and quality",
      "The raw physical distance in meters between decentralized server arrays",
      "The lossy compression ratio of metadata fields mapped across table records"
    ],
    ans: 1
  },
  {
    q: "Which optimization heuristic operates by exploring a multi-dimensional terrain space and continuously stepping down the steepest slope of a mathematical function to find a minimum error state?",
    opts: [
      "Linear Binary Splining",
      "Gradient Descent",
      "Area Sampling Heuristic",
      "Matrix Transposition Sorting"
    ],
    ans: 1
  },
  {
    q: "The computational science challenge of \"NP-Completeness\" implies that for a newly discovered combinatorial problem:",
    opts: [
      "There is an absolute mathematical proof that no solution can ever exist",
      "No deterministic algorithm is currently known that can solve the problem in polynomial time as input size scales up",
      "The system can easily be processed inside a simple 8-bit cache memory register",
      "The code cannot be compiled using modern object-oriented languages"
    ],
    ans: 1
  },
  {
    q: "When designing a scientific computer simulation model, \"Validation\" is formally distinct from \"Verification\" because validation asks:",
    opts: [
      "Did we build the software program correctly according to its specifications?",
      "Did we build the right model that accurately represents the real-world system behavior?",
      "Does the source code compile without throwing syntax warnings?",
      "Is the asset legally protected under global patent law guidelines?"
    ],
    ans: 1
  },
  {
    q: "What mathematical and computational framework models competitive interactions between rational agents, optimizing strategies where an individual's success depends on the choices of others?",
    opts: [
      "Queuing Theory",
      "Game Theory (e.g., Nash Equilibrium)",
      "Perturbation Analysis",
      "Cellular Differentiation Modeling"
    ],
    ans: 1
  },
  {
    q: "The architectural implementation of a \"MapReduce\" algorithmic programming framework optimizes big-data science innovations by:",
    opts: [
      "Forcing all computations to execute sequentially on a single, isolated server core",
      "Partitioning massive processing datasets across distributed clusters, computing localized intermediate maps, and reducing them to unified sets",
      "Converting numeric real values into low-precision binary arrays to save cache space",
      "Completely eliminating the requirement to use non-volatile disk arrays for long-term storage"
    ],
    ans: 1
  },
  {
    q: "In scientific optimization, a \"Heuristic Algorithm\" is deployed explicitly to find:",
    opts: [
      "The absolute, mathematically proven global optimal solution under all possible constraints",
      "A good, highly satisfactory, or approximate solution within a reasonable time frame when exact methods are computationally impossible",
      "The exact line count of code blocks that have been verified by a systematic review",
      "A pseudo-random state transition vector that causes the compiler engine to crash safely"
    ],
    ans: 1
  },
  {
    q: "What computational method represents a continuous physical field (e.g., fluid dynamics, stress analysis) as a collection of discrete, interconnected sub-regions to numerically solve complex differential equations?",
    opts: [
      "Finite Element Method (FEM)",
      "Discrete Run-Length Compressive Modeling",
      "Linear Regression Interpolation",
      "Homogeneous Scalar Reduction"
    ],
    ans: 0
  },
  {
    q: "In queuing theory modeling for computer network innovations, Little's Law establishes a stable long-term relationship among:",
    opts: [
      "Code density, database table index levels, and cloud hosting costs",
      "The average number of items in a queuing system, their average arrival rate, and their average processing wait time",
      "CPU clock speed, network packet bit depth, and hardware thread latency",
      "Patent novelty levels, non-obviousness scores, and industrial utility metrics"
    ],
    ans: 1
  },
  {
    q: "What computing approach uses neural networks to learn directly from unstructured or unlabelled data representations without requiring explicit feature engineering by human scientists?",
    opts: [
      "Legacy Procedural Automation",
      "Deep Learning / Representation Learning",
      "Linear Discriminant Analysis",
      "Structured Decision Tree Mapping"
    ],
    ans: 1
  },
  {
    q: "In high-performance scientific simulations, a \"Hot Spot\" in the source code refers to a specific section of the software program that:",
    opts: [
      "Suffers a catastrophic hardware burn-out due to excessive current voltage",
      "Consumes a disproportionately large percentage of the total execution time or CPU/GPU processing cycles",
      "Contains the highest density of unresolved syntax errors and warnings",
      "Is legally protected by a defensive patent thicket framework"
    ],
    ans: 1
  },
  {
    q: "The concept of \"Virtualisation\" in modern cloud engineering allows scientific computing clusters to maximize hardware innovation usage by:",
    opts: [
      "Rewriting all operating system kernels in a single functional declarative syntax",
      "Abstracting physical hardware resources into multiple isolated, independent virtual machine environments running concurrently on a single host",
      "Forcing all operations to run on ancient legacy mainframe hardware setups",
      "Eliminating the use of network transport layers during data distribution passes"
    ],
    ans: 1
  }
];
