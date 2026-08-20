const originalQuestions = [
  {
    q: "The process of making small improvements to an existing product is called:",
    opts: ["Radical Innovation", "Incremental Innovation", "Disruptive Innovation", "Process Innovation"],
    ans: 1
  },
  {
    q: "Which type of innovation completely reshaped financial services in Nigeria like mobile money?",
    opts: ["Incremental", "Sustaining", "Disruptive Innovation", "Architectural"],
    ans: 2
  },
  {
    q: "The correct order of the innovation lifecycle is:",
    opts: ["Scale → Ideation → Test → Prototype", "Ideation → Prototype → Test → Scale → Diffusion", "Test → Ideation → Prototype → Diffusion", "Prototype → Scale → Ideation → Test"],
    ans: 1
  },
  {
    q: "Design Thinking starts with which phase?",
    opts: ["Prototyping", "Testing", "Empathize", "Ideation"],
    ans: 2
  },
  {
    q: "Lean Startup methodology emphasizes building a:",
    opts: ["Full product", "Minimum Viable Product (MVP)", "Patent", "Business Plan"],
    ans: 1
  },
  {
    q: "Which Nigerian fintech is a good example of using lean methods for rapid iteration?",
    opts: ["Interswitch", "Flutterwave", "Microsoft", "MTN"],
    ans: 1
  },
  {
    q: "Agile innovation is best described as:",
    opts: ["Waterfall approach", "Iterative and flexible development", "One-time launch", "Government-led"],
    ans: 1
  },
  {
    q: "\"Pivoting\" in a startup means:",
    opts: ["Closing the company", "Changing strategy based on customer feedback", "Getting funding", "Hiring staff"],
    ans: 1
  },
  {
    q: "The last stage of innovation diffusion is:",
    opts: ["Testing", "Scaling", "Diffusion", "Ideation"],
    ans: 2
  },
  {
    q: "Which is NOT a principle of design thinking?",
    opts: ["Empathy", "Ideation", "Automation", "Prototyping"],
    ans: 2
  },
  {
    q: "Radical innovation typically results in:",
    opts: ["Small cost savings", "Breakthrough products/technologies", "Bug fixes", "Marketing changes"],
    ans: 1
  },
  {
    q: "Customer validation is most important at which stage?",
    opts: ["Scaling", "MVP Stage", "Diffusion", "Ideation"],
    ans: 1
  },
  {
    q: "A key goal of prototyping is to:",
    opts: ["Make profit", "Test ideas quickly and cheaply", "Hire developers", "File patents"],
    ans: 1
  },
  {
    q: "\"Fail fast, learn fast\" is associated with:",
    opts: ["Waterfall", "Lean Startup", "Traditional R&D", "Gartner Hype Cycle"],
    ans: 1
  },
  {
    q: "Innovation that creates a new market is called:",
    opts: ["Incremental", "Disruptive", "Process", "Marketing"],
    ans: 1
  },
  {
    q: "Which tool is used for brainstorming new ideas?",
    opts: ["SWOT", "Ideation Workshop", "Gantt Chart", "Balance Sheet"],
    ans: 1
  },
  {
    q: "Diffusion refers to:",
    opts: ["Creating an idea", "How an innovation spreads through society", "Testing a product", "Filing a patent"],
    ans: 1
  },
  {
    q: "The Nigerian tech ecosystem overview is usually covered in:",
    opts: ["Week 9-10", "Week 1-2", "Week 5-6", "Week 11-12"],
    ans: 1
  },
  {
    q: "Iteration in innovation means:",
    opts: ["Stopping after one try", "Repeated cycles of improvement", "Copying competitors", "Outsourcing"],
    ans: 1
  },
  {
    q: "A major outcome of innovation management is:",
    opts: ["Reduced staff", "Competitive advantage", "Less funding", "Slower growth"],
    ans: 1
  },
  {
    q: "AI used by Nigerian banks for fraud detection is an example of:",
    opts: ["IoT", "Predictive Analytics", "Cloud Computing", "AR/VR"],
    ans: 1
  },
  {
    q: "Blockchain is primarily known for:",
    opts: ["Faster internet", "Secure, decentralized transactions", "Video streaming", "Power generation"],
    ans: 1
  },
  {
    q: "Which technology uses sensors to connect physical devices to the internet?",
    opts: ["5G", "Quantum", "IoT", "Blockchain"],
    ans: 2
  },
  {
    q: "AWS, Azure, and Google Cloud are examples of:",
    opts: ["AI", "Cloud Computing", "IoT", "Blockchain"],
    ans: 1
  },
  {
    q: "The Gartner Hype Cycle is used to track:",
    opts: ["Stock prices", "Technology maturity", "Employee performance", "Internet speed"],
    ans: 1
  },
  {
    q: "Smart metering projects in Nigerian cities are an application of:",
    opts: ["AI", "IoT", "Quantum", "VR"],
    ans: 1
  },
  {
    q: "Which tech is still in early adoption phase with high challenges?",
    opts: ["Cloud", "Quantum Computing", "Mobile Money", "Email"],
    ans: 1
  },
  {
    q: "Machine Learning is a subset of:",
    opts: ["IoT", "Artificial Intelligence", "Blockchain", "5G"],
    ans: 1
  },
  {
    q: "Blockchain for transparent land registry addresses a key problem in:",
    opts: ["Education", "Nigerian Land Title Issues", "Healthcare", "Sports"],
    ans: 1
  },
  {
    q: "5G networks primarily improve:",
    opts: ["Battery life", "Speed and latency of connectivity", "Screen resolution", "Storage"],
    ans: 1
  },
  {
    q: "AR/VR is most commonly used for:",
    opts: ["Banking", "Immersive experiences and training", "Farming", "Email"],
    ans: 1
  },
  {
    q: "AI chatbots in Nigerian e-commerce are used for:",
    opts: ["Farming", "Customer Service", "Mining", "Road construction"],
    ans: 1
  },
  {
    q: "Which technology uses qubits instead of bits?",
    opts: ["Cloud", "Quantum Computing", "IoT", "Blockchain"],
    ans: 1
  },
  {
    q: "Supply chain tracking for Nigerian agriculture can use:",
    opts: ["5G", "Blockchain", "AR", "VR"],
    ans: 1
  },
  {
    q: "Scalable infrastructure for Nigerian startups is mostly provided by:",
    opts: ["IoT", "Cloud Computing", "Quantum", "Radio"],
    ans: 1
  },
  {
    q: "Predictive analytics helps in:",
    opts: ["Painting", "Forecasting future trends", "Cooking", "Driving"],
    ans: 1
  },
  {
    q: "The \"Peak of Inflated Expectations\" is part of:",
    opts: ["TAM", "Gartner Hype Cycle", "Lean Startup", "Design Thinking"],
    ans: 1
  },
  {
    q: "IoT sensors for smart agriculture help with:",
    opts: ["Marketing", "Irrigation and monitoring", "Banking", "Teaching"],
    ans: 1
  },
  {
    q: "Decentralization is a key feature of:",
    opts: ["Cloud", "Blockchain", "5G", "AI"],
    ans: 1
  },
  {
    q: "Neural networks are related to:",
    opts: ["IoT", "Machine Learning", "Cloud", "5G"],
    ans: 1
  },
  {
    q: "Which emerging tech has the highest energy consumption concern?",
    opts: ["Email", "Quantum Computing", "SMS", "Bluetooth"],
    ans: 1
  },
  {
    q: "Cloud computing reduces need for:",
    opts: ["Software", "On-premise hardware", "Internet", "Users"],
    ans: 1
  },
  {
    q: "Biometric AI systems can have issues with:",
    opts: ["Speed", "Bias in Nigerian demographics", "Color", "Weight"],
    ans: 1
  },
  {
    q: "Edge computing is closely related to:",
    opts: ["Quantum", "IoT", "Blockchain", "VR"],
    ans: 1
  },
  {
    q: "A major challenge of early 5G adoption in Nigeria is:",
    opts: ["Too many phones", "Infrastructure and cost", "Lack of apps", "Government ban"],
    ans: 1
  },
  {
    q: "According to Diffusion of Innovations, \"trialability\" means:",
    opts: ["Cost of tech", "Ability to experiment with tech", "Complexity", "Observability"],
    ans: 1
  },
  {
    q: "TAM stands for:",
    opts: ["Tech Adoption Method", "Technology Acceptance Model", "Total Access Matrix", "Training and Management"],
    ans: 1
  },
  {
    q: "Which factor is NOT in Rogers' 5 factors of adoption?",
    opts: ["Complexity", "Compatibility", "Color", "Observability"],
    ans: 2
  },
  {
    q: "Slow adoption of contactless payments in rural Nigeria is due to:",
    opts: ["Too much internet", "Infrastructure and digital literacy", "Government ban", "No phones"],
    ans: 1
  },
  {
    q: "High uptake of fintech in Lagos tech hubs shows importance of:",
    opts: ["Weather", "Ecosystem and infrastructure", "Tradition", "Luck"],
    ans: 1
  },
  {
    q: "Compatibility in tech adoption refers to:",
    opts: ["Price", "Fit with existing values and practices", "Speed", "Size"],
    ans: 1
  },
  {
    q: "Observability means:",
    opts: ["Secret tech", "Results of innovation are visible to others", "Hidden cost", "Complexity"],
    ans: 1
  },
  {
    q: "Digital literacy is a major adoption challenge in:",
    opts: ["Only USA", "Nigeria", "Only Europe", "Nowhere"],
    ans: 1
  },
  {
    q: "Cost is a key barrier to adoption of:",
    opts: ["Free apps", "Quantum Computing", "Radio", "SMS"],
    ans: 1
  },
  {
    q: "Diffusion of Innovations theory was developed by:",
    opts: ["Bill Gates", "Everett Rogers", "Mark Zuckerberg", "Elon Musk"],
    ans: 1
  },
  {
    q: "Perceived usefulness is a component of:",
    opts: ["IoT", "TAM", "Blockchain", "5G"],
    ans: 1
  },
  {
    q: "Which is an adoption challenge specific to Nigeria?",
    opts: ["Too much power", "Power supply and internet reach", "Too many developers", "Cold weather"],
    ans: 1
  },
  {
    q: "Early adopters are characterized by:",
    opts: ["Risk aversion", "Willingness to try new tech", "Late usage", "No internet"],
    ans: 1
  },
  {
    q: "Trialability reduces:",
    opts: ["Speed", "Uncertainty about innovation", "Users", "Profit"],
    ans: 1
  },
  {
    q: "Complexity negatively affects:",
    opts: ["Scaling", "Rate of adoption", "Color", "Marketing"],
    ans: 1
  },
  {
    q: "Social influence is emphasized in:",
    opts: ["Hype Cycle", "TAM2 and UTAUT", "Blockchain", "IoT"],
    ans: 1
  },
  {
    q: "Laggards adopt technology:",
    opts: ["First", "Last", "Never", "Randomly"],
    ans: 1
  },
  {
    q: "Government policy can affect:",
    opts: ["Color", "Technology adoption rate", "Screen size", "Battery"],
    ans: 1
  },
  {
    q: "Affordability is a major issue for tech adoption in:",
    opts: ["Only USA", "Developing countries like Nigeria", "Only Japan", "Nowhere"],
    ans: 1
  },
  {
    q: "Communication channels affect:",
    opts: ["Voltage", "Diffusion of innovation", "Weight", "Storage"],
    ans: 1
  },
  {
    q: "Automation may lead to:",
    opts: ["Only job loss", "Job disruption and creation of new tech roles", "No effect", "Less internet"],
    ans: 1
  },
  {
    q: "AI bias in facial recognition is a concern for:",
    opts: ["Only white people", "Nigerian demographics", "Animals", "Plants"],
    ans: 1
  },
  {
    q: "NDPR in Nigeria relates to:",
    opts: ["Farming", "Data Protection", "Sports", "Education"],
    ans: 1
  },
  {
    q: "E-waste management is important due to:",
    opts: ["Less phones", "Growing phone usage and disposal in Nigeria", "No computers", "Rain"],
    ans: 1
  },
  {
    q: "CBN regulations heavily affect:",
    opts: ["Schools", "Nigerian Fintech", "Music", "Fashion"],
    ans: 1
  },
  {
    q: "Energy-efficient tech supports:",
    opts: ["Pollution", "Sustainability", "Waste", "Noise"],
    ans: 1
  },
  {
    q: "Privacy concerns are highest with:",
    opts: ["Radio", "AI and Big Data", "Paper", "Pen"],
    ans: 1
  },
  {
    q: "Job creation from tech includes roles like:",
    opts: ["Farmer only", "Data Scientist, AI Engineer", "No new jobs", "Teacher only"],
    ans: 1
  },
  {
    q: "Ethical issue of deepfakes relates to:",
    opts: ["Cooking", "Misinformation and identity", "Farming", "Driving"],
    ans: 1
  },
  {
    q: "Regulation aims to balance:",
    opts: ["Speed only", "Innovation and public protection", "Color only", "Size only"],
    ans: 1
  },
  {
    q: "Sustainability in tech includes:",
    opts: ["More waste", "Energy efficiency and recycling", "Faster phones", "Bigger screens"],
    ans: 1
  },
  {
    q: "Data protection law in Nigeria is:",
    opts: ["GDPR", "NDPR", "HIPAA", "COPPA"],
    ans: 1
  },
  {
    q: "Socio-economic impact of mobile money includes:",
    opts: ["Less access", "Financial inclusion", "More poverty", "No change"],
    ans: 1
  },
  {
    q: "Bias in AI can be reduced by:",
    opts: ["Less data", "Diverse training data", "No testing", "Closing company"],
    ans: 1
  },
  {
    q: "Regulatory sandbox is used by CBN for:",
    opts: ["Schools", "Testing fintech innovations", "Farming", "Roads"],
    ans: 1
  },
  {
    q: "Identifying market gaps like offline payments in Nigeria is part of:",
    opts: ["Scaling", "Opportunity Identification", "Diffusion", "Testing"],
    ans: 1
  },
  {
    q: "MVP helps to:",
    opts: ["Waste money", "Validate product with minimal resources", "Hire staff", "File tax"],
    ans: 1
  },
  {
    q: "Intellectual property for tech in Nigeria includes:",
    opts: ["Only copyright", "Patents, Trademarks, Copyright", "Only trademark", "Nothing"],
    ans: 1
  },
  {
    q: "Pitching to VCs is part of:",
    opts: ["Testing", "Funding Strategy", "Coding", "Marketing only"],
    ans: 1
  },
  {
    q: "Andela Nigeria is an example of innovation in:",
    opts: ["Agriculture", "Tech Talent Outsourcing", "Oil", "Textiles"],
    ans: 1
  },
  {
    q: "Opay and Palmpay demonstrate:",
    opts: ["Failure", "Leapfrogging traditional banking", "Government only", "No impact"],
    ans: 1
  },
  {
    q: "Uber vs traditional taxis is a classic example of:",
    opts: ["Incremental", "Disruption Model", "Cloud", "IoT"],
    ans: 1
  },
  {
    q: "Customer validation should happen:",
    opts: ["After scaling", "Before full product launch", "Never", "After 10 years"],
    ans: 1
  },
  {
    q: "Grants are a type of:",
    opts: ["Tax", "Funding for startups", "Debt", "Salary"],
    ans: 1
  },
  {
    q: "Pivoting after feedback shows:",
    opts: ["Weakness", "Agile innovation mindset", "Failure", "Laziness"],
    ans: 1
  },
  {
    q: "A \"Digital Footprint\" implication for innovation is:",
    opts: ["No effect", "Privacy and data ethics concerns", "Faster CPU", "Bigger storage"],
    ans: 1
  },
  {
    q: "Problem framing for Nigerian context focuses on:",
    opts: ["USA problems", "Local user pain points", "European problems", "Asian problems"],
    ans: 1
  },
  {
    q: "Design thinking workshop exercise is:",
    opts: ["Accounting", "\"Solve a Nigerian problem with emerging tech\"", "Sports", "Music"],
    ans: 1
  },
  {
    q: "Patenting protects:",
    opts: ["Ideas only", "Inventions and innovations", "Nothing", "People"],
    ans: 1
  },
  {
    q: "6G relevance for Nigeria will be discussed in:",
    opts: ["Week 1-2", "Week 11-12", "Week 3-4", "Week 5-6"],
    ans: 1
  },
  {
    q: "Google Lumi in Nigeria faced challenges of:",
    opts: ["Too much funding", "Payment and trust issues", "Too many users", "No internet"],
    ans: 1
  },
  {
    q: "Entrepreneurial mindset includes:",
    opts: ["Fear of risk", "Problem-solving and strategic thinking", "Avoiding customers", "No planning"],
    ans: 1
  },
  {
    q: "Communication skill gained from the course includes:",
    opts: ["Cooking", "Pitching", "Driving", "Singing"],
    ans: 1
  },
  {
    q: "Future tech trend likely to affect Nigeria most in next 5 years:",
    opts: ["Fax", "AI and Cloud", "CD-ROM", "Pager"],
    ans: 1
  },
  {
    q: "Overall goal of CSC 322 is to prepare students to:",
    opts: ["Avoid technology", "Lead in tech-driven environments", "Only code", "Only test"],
    ans: 1
  }
];
