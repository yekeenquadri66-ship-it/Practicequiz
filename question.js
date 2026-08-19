const originalQuestions = [
  {
    q: "The primary role of an (OS) operating system is to:",
    opts: ["Compile high-level programs", "Manage hardware and software resources", "Design computer circuits", "Execute only application software"],
    ans: 1
  },
  {
    q: "An operating system acts as an interface between:",
    opts: ["Hardware and electricity", "User and computer hardware", "CPU and RAM only", "Application and compiler"],
    ans: 1
  },
  {
    q: "Which of the following is NOT a core function of an operating system?",
    opts: ["Process management", "Memory management", "Web page design", "File system management"],
    ans: 2
  },
  {
    q: "The component of the operating system that decides which process runs next is called:",
    opts: ["Loader", "Scheduler", "Compiler", "Assembler"],
    ans: 1
  },
  {
    q: "Resource allocation in an operating system involves managing:",
    opts: ["Only CPU time", "Only memory", "CPU, memory, and I/O devices", "Only disk storage"],
    ans: 2
  },
  {
    q: "Which of the following best describes multitasking?",
    opts: ["Running multiple operating systems simultaneously", "Executing one task at a time", "Running multiple processes seemingly at the same time", "Using multiple keyboards"],
    ans: 2
  },
  {
    q: "The kernel of an operating system is responsible for:",
    opts: ["Word processing", "Core system operations", "Internet browsing", "Game execution"],
    ans: 1
  },
  {
    q: "Which of the following is an example of a system call?",
    opts: ["Print statement", "File open request", "Variable declaration", "Comment line"],
    ans: 1
  },
  {
    q: "Time-sharing operating systems are designed to:",
    opts: ["Serve a single user only", "Allow multiple users to share system resources interactively", "Perform batch processing only", "Operate without memory"],
    ans: 1
  },
  {
    q: "Device management in an operating system is responsible for:",
    opts: ["Managing input/output devices", "Writing application programs", "Installing hardware physically", "Designing device circuits"],
    ans: 0
  },
  {
    q: "Which of the following is an example of an operating system?",
    opts: ["Microsoft Word", "Linux", "Adobe Photoshop", "Python"],
    ans: 1
  },
  {
    q: "Memory management in an operating system ensures:",
    opts: ["Programs are compiled", "Efficient allocation and deallocation of memory", "Permanent storage of files", "Hardware manufacturing"],
    ans: 1
  },
  {
    q: "A batch operating system primarily processes:",
    opts: ["Interactive jobs", "Real-time transactions", "Jobs in groups without user interaction", "Distributed network tasks"],
    ans: 2
  },
  {
    q: "Protection and security in an operating system help to:",
    opts: ["Increase CPU speed", "Prevent unauthorized access", "Reduce memory size", "Compile programs faster"],
    ans: 1
  },
  {
    q: "Which of the following best describes a distributed operating system?",
    opts: ["Runs on a single computer only", "Manages a network of independent computers as a single system", "Works without memory", "Supports only batch jobs"],
    ans: 1
  },
  {
    q: "A batch operating system processes:",
    opts: ["Interactive user commands immediately", "Jobs one at a time with user interaction", "Jobs in groups without direct user interaction", "Real-time transactions only"],
    ans: 2
  },
  {
    q: "A time-sharing operating system is designed to:",
    opts: ["Serve only one user", "Allow multiple users to share system resources interactively", "Execute batch jobs only", "Run without CPU scheduling"],
    ans: 1
  },
  {
    q: "A real-time operating system (RTOS) is primarily used in:",
    opts: ["Word processing applications", "Banking websites", "Time-critical control systems", "Social media platforms"],
    ans: 2
  },
  {
    q: "Which of the following is a feature of a distributed operating system?",
    opts: ["Operates on a single standalone computer", "Manages multiple independent computers as a unified system", "Does not support networking", "Only supports batch processing"],
    ans: 1
  },
  {
    q: "A network operating system is mainly designed to:",
    opts: ["Replace hardware components", "Manage network resources and services", "Eliminate file systems", "Operate without users"],
    ans: 1
  },
  {
    q: "Which type of operating system allows multiple programs to reside in memory simultaneously?",
    opts: ["Single-tasking OS", "Multiprogramming OS", "Embedded OS", "Batch OS"],
    ans: 1
  },
  {
    q: "An embedded operating system is commonly found in:",
    opts: ["Desktop computers", "Supercomputers", "Smart appliances and devices", "Mainframe systems only"],
    ans: 2
  },
  {
    q: "A single-user single-tasking operating system:",
    opts: ["Supports multiple users and tasks", "Allows one user to run one task at a time", "Manages network servers only", "Is designed for distributed systems"],
    ans: 1
  },
  {
    q: "Which of the following is an example of a real-time operating system?",
    opts: ["Windows 10", "Linux Ubuntu", "VxWorks", "macOS"],
    ans: 2
  },
  {
    q: "In a multiprocessor operating system:",
    opts: ["Only one CPU is used", "Multiple CPUs share system tasks", "No scheduling is required", "Only batch jobs are executed"],
    ans: 1
  },
  {
    q: "A multi-user operating system allows:",
    opts: ["Only one user to access the system", "Several users to access system resources simultaneously", "Only real-time applications", "No file sharing"],
    ans: 1
  },
  {
    q: "Which operating system type is best suited for air traffic control systems?",
    opts: ["Batch OS", "Real-time OS", "Single-user OS", "Time-sharing OS"],
    ans: 1
  },
  {
    q: "The main advantage of distributed operating systems is:",
    opts: ["Centralized processing only", "Resource sharing and improved reliability", "No communication between systems", "Limited scalability"],
    ans: 1
  },
  {
    q: "A network operating system differs from a distributed operating system because it:",
    opts: ["Makes multiple computers appear as one system", "Requires no network", "Provides services to computers connected over a network", "Eliminates user authentication"],
    ans: 2
  },
  {
    q: "Which type of operating system is most appropriate for personal computers?",
    opts: ["Batch OS", "Single-user multitasking OS", "Real-time OS", "Distributed OS"],
    ans: 1
  },
  {
    q: "A process is defined as:",
    opts: ["A program in storage", "A program in execution", "A compiled file", "A hardware unit"],
    ans: 1
  },
  {
    q: "A job differs from a process because a job:",
    opts: ["Is always interactive", "Is a unit submitted for execution", "Has its own PCB", "Shares memory"],
    ans: 1
  },
  {
    q: "A thread is best described as:",
    opts: ["A heavy-weight process", "A lightweight process", "A batch job", "A disk request"],
    ans: 1
  },
  {
    q: "Threads within the same process share:",
    opts: ["Separate address spaces", "Different files", "Same address space", "Separate CPUs"],
    ans: 2
  },
  {
    q: "Context switching occurs between:",
    opts: ["Files", "Processes", "Directories", "Devices"],
    ans: 1
  },
  {
    q: "Which is NOT part of a process?",
    opts: ["Program counter", "Stack", "Heap", "Printer driver"],
    ans: 3
  },
  {
    q: "Multithreading improves:",
    opts: ["CPU temperature", "Responsiveness", "Disk failure", "Hardware damage"],
    ans: 1
  },
  {
    q: "A process in memory but not executing is in:",
    opts: ["Running state", "Ready state", "Terminated", "New state"],
    ans: 1
  },
  {
    q: "The smallest unit of CPU scheduling is:",
    opts: ["Job", "Thread", "File", "Device"],
    ans: 1
  },
  {
    q: "Process creation in UNIX uses:",
    opts: ["exec()", "fork()", "load()", "spawn()"],
    ans: 1
  },
  {
    q: "A zombie process is:",
    opts: ["Running process", "Waiting process", "Terminated but not cleaned", "Deadlocked process"],
    ans: 2
  },
  {
    q: "Parent-child process relationship is created by:",
    opts: ["fork()", "open()", "read()", "write()"],
    ans: 0
  },
  {
    q: "Threads reduce overhead because they:",
    opts: ["Use separate memory", "Share process resources", "Use different OS", "Require separate PCB"],
    ans: 1
  },
  {
    q: "Process termination releases:",
    opts: ["CPU only", "Memory and resources", "Disk only", "Threads only"],
    ans: 1
  },
  {
    q: "Which is true about threads?",
    opts: ["Each has separate address space", "They are independent processes", "They share code segment", "They cannot run concurrently"],
    ans: 2
  },
  {
    q: "A process in execution is in:",
    opts: ["Ready", "Running", "Waiting", "Suspended"],
    ans: 1
  },
  {
    q: "The PCB stores:",
    opts: ["User password", "Process state", "Disk map", "File table only"],
    ans: 1
  },
  {
    q: "Transition from running to waiting occurs due to:",
    opts: ["I/O request", "Completion", "CPU idle", "Shutdown"],
    ans: 0
  },
  {
    q: "The ready queue contains:",
    opts: ["Running processes", "Terminated processes", "Processes waiting for CPU", "Blocked processes"],
    ans: 2
  },
  {
    q: "Context switch updates:",
    opts: ["PCB", "File directory", "BIOS", "Cache"],
    ans: 0
  },
  {
    q: "A suspended process is:",
    opts: ["Executing", "Removed temporarily from memory", "Deleted", "Terminated"],
    ans: 1
  },
  {
    q: "Which is NOT a standard process state?",
    opts: ["New", "Ready", "Running", "Installed"],
    ans: 3
  },
  {
    q: "The dispatcher selects from:",
    opts: ["Disk queue", "Ready queue", "I/O buffer", "PCB table"],
    ans: 1
  },
  {
    q: "PCB contains:",
    opts: ["CPU registers", "Printer driver", "Hard disk", "Cache memory"],
    ans: 0
  },
  {
    q: "When a process completes, it enters:",
    opts: ["Ready", "Running", "Terminated", "Waiting"],
    ans: 2
  },
  {
    q: "State transition diagram represents:",
    opts: ["File allocation", "Process lifecycle", "Disk scheduling", "Memory mapping"],
    ans: 1
  },
  {
    q: "Waiting state is also called:",
    opts: ["Blocked", "Suspended", "New", "Exit"],
    ans: 0
  },
  {
    q: "Process priority is stored in:",
    opts: ["CPU", "PCB", "File system", "BIOS"],
    ans: 1
  },
  {
    q: "Preemption causes a process to move to:",
    opts: ["Terminated", "Ready", "Waiting", "New"],
    ans: 1
  },
  {
    q: "Long-term scheduler controls:",
    opts: ["CPU allocation", "Admission of processes", "Memory swapping", "I/O buffering"],
    ans: 1
  },
  {
    q: "First-Come, First-Served (FCFS) scheduling is classified as:",
    opts: ["Preemptive", "Non-preemptive", "Real-time", "Priority-based"],
    ans: 1
  },
  {
    q: "The scheduling algorithm that selects the process with the shortest burst time is:",
    opts: ["FCFS", "Round Robin", "Shortest Job First (SJF)", "Priority Scheduling"],
    ans: 2
  },
  {
    q: "Shortest Remaining Time First (SRTF) is:",
    opts: ["A non-preemptive version of SJF", "A preemptive version of SJF", "A type of FCFS", "A real-time algorithm"],
    ans: 1
  },
  {
    q: "Round Robin (RR) scheduling is primarily based on:",
    opts: ["Process priority", "Time quantum", "Shortest job length", "Arrival time only"],
    ans: 1
  },
  {
    q: "Priority scheduling may lead to:",
    opts: ["Deadlock", "Thrashing", "Starvation", "Fragmentation"],
    ans: 2
  },
  {
    q: "The dispatcher in an operating system is responsible for:",
    opts: ["Managing file allocation", "Selecting processes from the ready queue", "Performing context switching and allocating CPU", "Detecting deadlock"],
    ans: 2
  },
  {
    q: "Turnaround time is calculated as:",
    opts: ["Burst time – Waiting time", "Completion time – Arrival time", "Arrival time – Completion time", "Waiting time + Response time"],
    ans: 1
  },
  {
    q: "Waiting time refers to the total time a process:",
    opts: ["Spends executing", "Spends in the ready queue", "Spends performing I/O", "Spends in terminated state"],
    ans: 1
  },
  {
    q: "Response time is the time between:",
    opts: ["Process creation and completion", "Arrival time and first CPU allocation", "Waiting time and execution time", "Scheduling and termination"],
    ans: 1
  },
  {
    q: "Which scheduling algorithm generally provides the minimum average waiting time (theoretically)?",
    opts: ["FCFS", "Round Robin", "Shortest Job First", "Priority Scheduling"],
    ans: 2
  },
  {
    q: "Context switching introduces:",
    opts: ["Increased throughput", "Scheduling overhead", "Reduced CPU utilization", "Memory compaction"],
    ans: 1
  },
  {
    q: "Aging is used in scheduling to:",
    opts: ["Increase burst time", "Prevent starvation", "Reduce response time", "Increase context switches"],
    ans: 1
  },
  {
    q: "Which scheduling algorithm is most suitable for time-sharing systems?",
    opts: ["FCFS", "Round Robin", "SJF", "Non-preemptive Priority"],
    ans: 1
  },
  {
    q: "In preemptive scheduling:",
    opts: ["A process runs until completion", "A process cannot be interrupted", "A running process can be interrupted", "No context switching occurs"],
    ans: 2
  },
  {
    q: "Throughput in CPU scheduling refers to:",
    opts: ["Total memory used", "Number of processes completed per unit time", "Total waiting time", "CPU clock speed"],
    ans: 1
  },
  {
    q: "Multiprogramming is primarily designed to:",
    opts: ["Increase disk capacity", "Improve CPU utilization", "Reduce memory size", "Eliminate scheduling"],
    ans: 1
  },
  {
    q: "In a multiprogramming system, multiple processes:",
    opts: ["Run simultaneously on multiple CPUs", "Reside in memory at the same time", "Execute without context switching", "Use separate operating systems"],
    ans: 1
  },
  {
    q: "The main objective of multiprogramming is to:",
    opts: ["Increase I/O speed", "Minimize CPU idle time", "Eliminate deadlock", "Remove process states"],
    ans: 1
  },
  {
    q: "Multiprocessing systems differ from multiprogramming systems because they:",
    opts: ["Use only one CPU", "Use multiple CPUs", "Do not require scheduling", "Support only batch jobs"],
    ans: 1
  },
  {
    q: "A system with two or more processors sharing memory is called:",
    opts: ["Distributed system", "Cluster system", "Symmetric Multiprocessing (SMP) system", "Batch system"],
    ans: 2
  },
  {
    q: "In symmetric multiprocessing (SMP):",
    opts: ["One processor controls others", "Each processor runs its own copy of the OS", "All processors share the same memory and OS", "No scheduling is required"],
    ans: 2
  },
  {
    q: "Asymmetric multiprocessing differs from SMP because:",
    opts: ["All processors are equal", "One processor controls the system", "Memory is not shared", "It uses only one CPU"],
    ans: 1
  },
  {
    q: "Multiprocessing improves system reliability because:",
    opts: ["If one CPU fails, others can continue", "It eliminates scheduling", "It removes memory", "It avoids context switching"],
    ans: 0
  },
  {
    q: "Parallel execution of processes occurs in:",
    opts: ["Multiprogramming only", "Multiprocessing only", "Single-user systems", "Batch systems"],
    ans: 1
  },
  {
    q: "Load balancing in multiprocessing ensures:",
    opts: ["Equal disk usage", "Even distribution of tasks among processors", "Reduced memory", "No context switching"],
    ans: 1
  },
  {
    q: "Context switching is essential in multiprogramming because:",
    opts: ["Multiple CPUs are present", "Only one CPU is available", "No memory exists", "Processes do not wait"],
    ans: 1
  },
  {
    q: "Throughput in multiprogramming systems increases because:",
    opts: ["More CPUs are added", "CPU is kept busy by switching between processes", "Disk speed increases", "Memory size doubles"],
    ans: 1
  },
  {
    q: "Scalability in multiprocessing systems refers to:",
    opts: ["Increasing memory only", "Increasing number of processors efficiently", "Removing scheduling", "Reducing disk usage"],
    ans: 1
  },
  {
    q: "Which of the following is a major advantage of multiprocessing?",
    opts: ["Reduced hardware cost", "Increased parallelism", "Elimination of interrupts", "No need for memory management"],
    ans: 1
  },
  {
    q: "A key difference between multiprogramming and multiprocessing is:",
    opts: ["Multiprogramming uses multiple CPUs", "Multiprocessing uses one CPU", "Multiprogramming uses one CPU with multiple jobs in memory", "Both are identical concepts"],
    ans: 2
  },
  {
    q: "A thread model defines:",
    opts: ["How files are allocated", "How user threads are mapped to kernel threads", "How memory is partitioned", "How disk scheduling is performed"],
    ans: 1
  },
  {
    q: "In the many-to-one thread model:",
    opts: ["Each user thread maps to one kernel thread", "Many user threads map to one kernel thread", "Each process has no threads", "Threads run on multiple CPUs simultaneously"],
    ans: 1
  },
  {
    q: "A major disadvantage of the many-to-one model is:",
    opts: ["High memory usage", "Blocking system call blocks all threads", "No context switching", "High overhead"],
    ans: 1
  },
  {
    q: "The one-to-one thread model maps:",
    opts: ["Many user threads to one kernel thread", "One user thread to one kernel thread", "One process to many CPUs", "Threads to memory pages"],
    ans: 1
  },
  {
    q: "A key advantage of the one-to-one model is:",
    opts: ["No parallelism", "True parallel execution on multiprocessor systems", "No context switching", "No kernel involvement"],
    ans: 1
  },
  {
    q: "The many-to-many thread model:",
    opts: ["Maps many user threads to many kernel threads", "Maps one user thread to one kernel thread", "Uses no kernel threads", "Disables scheduling"],
    ans: 0
  },
  {
    q: "The many-to-many model is more flexible because:",
    opts: ["It removes scheduling", "It allows the OS to decide how many kernel threads to create", "It eliminates context switching", "It avoids memory allocation"],
    ans: 1
  },
  {
    q: "User-level threads are managed by:",
    opts: ["The hardware", "The operating system kernel", "A user-level thread library", "The disk scheduler"],
    ans: 2
  },
  {
    q: "Kernel-level threads are managed by:",
    opts: ["User applications", "The operating system", "BIOS", "Compiler"],
    ans: 1
  },
  {
    q: "Which thread model allows concurrency but not true parallelism on multiprocessors?",
    opts: ["One-to-one", "Many-to-one", "Many-to-many", "Hybrid model"],
    ans: 1
  },
  {
    q: "Thread creation is generally faster than process creation because:",
    opts: ["Threads use separate address spaces", "Threads share resources of the process", "Threads require new OS", "Threads do not use CPU"],
    ans: 1
  },
  {
    q: "In a one-to-one model, creating too many threads may:",
    opts: ["Improve performance indefinitely", "Increase system overhead", "Eliminate scheduling", "Reduce memory usage"],
    ans: 1
  },
  {
    q: "A thread control block (TCB) stores:",
    opts: ["File allocation data", "Thread state and registers", "Disk information", "Network configuration"],
    ans: 1
  },
  {
    q: "Blocking in user-level threads under many-to-one affects:",
    opts: ["Only one thread", "All threads in the process", "Only kernel threads", "No thread"],
    ans: 1
  },
  {
    q: "Hybrid thread models are typically based on:",
    opts: ["One-to-one and many-to-one combination", "Many-to-many mapping", "No kernel threads", "Batch processing"],
    ans: 1
  },
  {
    q: "Process synchronization is required to:",
    opts: ["Increase CPU speed", "Prevent race conditions", "Reduce disk usage", "Eliminate paging"],
    ans: 1
  },
  {
    q: "A race condition occurs when:",
    opts: ["Two processes compete for CPU", "The outcome depends on the order of execution of processes", "A process finishes early", "The disk rotates too fast"],
    ans: 1
  },
  {
    q: "The critical section problem deals with:",
    opts: ["Disk scheduling", "Shared resource access", "Memory fragmentation", "Process termination"],
    ans: 1
  },
  {
    q: "Mutual exclusion ensures that:",
    opts: ["Multiple processes execute in critical section simultaneously", "Only one process enters critical section at a time", "All processes are blocked", "No process is scheduled"],
    ans: 1
  },
  {
    q: "A semaphore is:",
    opts: ["A memory partition", "A synchronization tool", "A scheduling algorithm", "A disk controller"],
    ans: 1
  },
  {
    q: "A binary semaphore can take values:",
    opts: ["0 and 1", "0 and 2", "1 and 2", "Any integer"],
    ans: 0
  },
  {
    q: "The operations used with semaphores are typically:",
    opts: ["Start and Stop", "Wait and Signal", "Load and Store", "Read and Write"],
    ans: 1
  },
  {
    q: "A mutex differs from a semaphore because:",
    opts: ["It allows multiple processes in critical section", "It provides mutual exclusion to a single process", "It manages disk operations", "It prevents paging"],
    ans: 1
  },
  {
    q: "The Producer-Consumer problem is a classical example of:",
    opts: ["Deadlock", "Scheduling", "Synchronization", "Paging"],
    ans: 2
  },
  {
    q: "In the bounded buffer problem, semaphores are used to:",
    opts: ["Increase memory", "Coordinate producer and consumer processes", "Allocate CPU", "Delete processes"],
    ans: 1
  },
  {
    q: "Busy waiting occurs when a process:",
    opts: ["Is terminated", "Continuously checks for a condition", "Is in suspended state", "Is swapped to disk"],
    ans: 1
  },
  {
    q: "A monitor is:",
    opts: ["A hardware device", "A high-level synchronization construct", "A scheduling policy", "A disk algorithm"],
    ans: 1
  },
  {
    q: "Test-and-set instruction is used to:",
    opts: ["Format memory", "Provide atomic locking mechanism", "Schedule processes", "Detect deadlock"],
    ans: 1
  },
  {
    q: "Priority inversion occurs when:",
    opts: ["High-priority process waits for lower-priority process", "CPU is idle", "Disk fails", "Memory overflows"],
    ans: 0
  },
  {
    q: "Synchronization ensures:",
    opts: ["Efficient disk usage", "Data consistency in shared memory", "Faster context switching", "Reduced paging"],
    ans: 1
  },
  {
    q: "A deadlock occurs in an operating system when:",
    opts: ["A process completes execution", "Two or more processes wait indefinitely for resources held by each other", "CPU utilization is high", "A process is in ready state"],
    ans: 1
  },
  {
    q: "Which of the following is NOT one of the four necessary conditions for deadlock?",
    opts: ["Mutual exclusion", "Hold and wait", "Preemption allowed", "Circular wait"],
    ans: 2
  },
  {
    q: "Mutual exclusion means:",
    opts: ["Resources cannot be shared", "A process holds multiple resources", "Processes can preempt resources", "Resources are unlimited"],
    ans: 0
  },
  {
    q: "Hold and wait condition implies that:",
    opts: ["A process holds at least one resource and waits for others", "Processes release all resources before requesting new ones", "Only one process runs at a time", "No resource allocation occurs"],
    ans: 0
  },
  {
    q: "Circular wait occurs when:",
    opts: ["One process waits for itself", "A chain of processes exists where each waits for a resource held by the next", "CPU is idle", "Memory is full"],
    ans: 1
  },
  {
    q: "Deadlock prevention works by:",
    opts: ["Detecting deadlock after it occurs", "Eliminating at least one necessary condition", "Increasing memory size", "Reducing CPU speed"],
    ans: 1
  },
  {
    q: "Deadlock avoidance requires:",
    opts: ["No scheduling", "Prior knowledge of maximum resource requirements", "Removal of circular wait only", "Unlimited resources"],
    ans: 1
  },
  {
    q: "Banker’s algorithm is used for:",
    opts: ["Deadlock detection", "Deadlock avoidance", "Deadlock recovery", "Memory compaction"],
    ans: 1
  },
  {
    q: "A system is said to be in a safe state if:",
    opts: ["Deadlock has already occurred", "There exists a safe sequence of process execution", "CPU is idle", "Memory is fragmented"],
    ans: 1
  },
  {
    q: "Deadlock detection involves:",
    opts: ["Preventing resource allocation", "Periodically checking for cycles in resource allocation graph", "Eliminating hold and wait", "Using time quantum"],
    ans: 1
  },
  {
    q: "A resource allocation graph is used to:",
    opts: ["Schedule CPU", "Detect circular wait conditions", "Allocate memory partitions", "Manage disk requests"],
    ans: 1
  },
  {
    q: "Deadlock recovery can be achieved by:",
    opts: ["Increasing time quantum", "Terminating one or more processes", "Disabling interrupts", "Increasing CPU speed"],
    ans: 1
  },
  {
    q: "Starvation differs from deadlock because starvation:",
    opts: ["Involves circular wait", "Occurs when a process never gets CPU time", "Always causes system crash", "Requires four necessary conditions"],
    ans: 1
  },
  {
    q: "Preemption as a recovery method means:",
    opts: ["Forcibly taking resources from processes", "Blocking all processes", "Suspending CPU scheduling", "Deleting all files"],
    ans: 0
  },
  {
    q: "Which of the following is a necessary condition for deadlock?",
    opts: ["Unlimited resources", "Preemption of resources", "No preemption", "Shortest job scheduling"],
    ans: 2
  },
  {
    q: "Memory management in an operating system is responsible for:",
    opts: ["Scheduling CPU processes", "Allocating and deallocating main memory", "Managing disk sectors", "Controlling network traffic"],
    ans: 1
  },
  {
    q: "Swapping refers to:",
    opts: ["Exchanging data between CPU registers", "Moving processes between main memory and secondary storage", "Replacing pages in cache", "Switching between threads"],
    ans: 1
  },
  {
    q: "Contiguous memory allocation requires that:",
    opts: ["Processes occupy non-adjacent memory blocks", "Each process occupies a single continuous block of memory", "Memory is divided into equal pages", "Memory is shared among processes"],
    ans: 1
  },
  {
    q: "Internal fragmentation occurs when:",
    opts: ["Memory blocks are too large for processes", "Free memory is scattered in small blocks", "Disk space is insufficient", "Processes share memory"],
    ans: 0
  },
  {
    q: "External fragmentation occurs when:",
    opts: ["Free memory is divided into small non-contiguous blocks", "Processes use too much CPU", "Pages are replaced", "Threads are blocked"],
    ans: 0
  },
  {
    q: "Compaction is used to:",
    opts: ["Increase CPU speed", "Reduce external fragmentation", "Remove internal fragmentation", "Swap processes to disk"],
    ans: 1
  },
  {
    q: "The Memory Management Unit (MMU) is responsible for:",
    opts: ["Disk scheduling", "Address translation", "Process synchronization", "File allocation"],
    ans: 1
  },
  {
    q: "A logical address is generated by:",
    opts: ["Disk controller", "CPU", "RAM", "I/O device"],
    ans: 1
  },
  {
    q: "A physical address refers to:",
    opts: ["Address used in program code", "Actual location in main memory", "Virtual memory location", "Disk block number"],
    ans: 1
  },
  {
    q: "Fixed partitioning may lead to:",
    opts: ["External fragmentation", "Internal fragmentation", "Deadlock", "Thrashing"],
    ans: 1
  },
  {
    q: "Dynamic partitioning is designed to:",
    opts: ["Eliminate CPU scheduling", "Allocate memory according to process size", "Prevent deadlock", "Remove paging"],
    ans: 1
  },
  {
    q: "The best-fit memory allocation strategy:",
    opts: ["Allocates the largest available block", "Allocates the first available block", "Allocates the smallest sufficient block", "Allocates memory randomly"],
    ans: 2
  },
  {
    q: "The first-fit strategy:",
    opts: ["Searches entire memory before allocating", "Selects the first block that is large enough", "Always minimizes fragmentation", "Uses page tables"],
    ans: 1
  },
  {
    q: "The worst-fit strategy:",
    opts: ["Allocates the largest available block", "Allocates the smallest available block", "Uses indexing", "Eliminates fragmentation"],
    ans: 0
  },
  {
    q: "Relocation in memory management allows:",
    opts: ["Processes to execute only at fixed memory locations", "Processes to be moved to different memory locations", "Disk blocks to be moved", "CPU registers to change"],
    ans: 1
  },
  {
    q: "Paging is a memory management scheme that:",
    opts: ["Divides memory into variable-sized segments", "Divides logical memory into fixed-size pages", "Uses only contiguous allocation", "Eliminates virtual memory"],
    ans: 1
  },
  {
    q: "In paging, physical memory is divided into:",
    opts: ["Pages", "Segments", "Frames", "Blocks"],
    ans: 2
  },
  {
    q: "A page table is used to:",
    opts: ["Store file names", "Map logical pages to physical frames", "Schedule CPU", "Manage disk I/O"],
    ans: 1
  },
  {
    q: "Paging eliminates:",
    opts: ["Internal fragmentation", "External fragmentation", "Deadlock", "Thrashing"],
    ans: 1
  },
  {
    q: "Internal fragmentation may occur in paging because:",
    opts: ["Pages are variable in size", "Pages are fixed in size", "Segments overlap", "Frames are unlimited"],
    ans: 1
  },
  {
    q: "Segmentation divides memory into:",
    opts: ["Equal-sized pages", "Fixed-size frames", "Logical segments of variable size", "Disk sectors"],
    ans: 2
  },
  {
    q: "A segment table typically contains:",
    opts: ["Page numbers only", "Base address and limit", "Frame numbers only", "File descriptors"],
    ans: 1
  },
  {
    q: "External fragmentation is more common in:",
    opts: ["Paging", "Segmentation", "Virtual memory", "Cache memory"],
    ans: 1
  },
  {
    q: "In paging, a logical address consists of:",
    opts: ["Segment number and offset", "Page number and offset", "Frame number and base", "Disk number and block"],
    ans: 1
  },
  {
    q: "The Translation Lookaside Buffer (TLB) is used to:",
    opts: ["Store disk data", "Speed up address translation", "Schedule processes", "Manage file systems"],
    ans: 1
  },
  {
    q: "Multilevel paging is used to:",
    opts: ["Increase CPU speed", "Reduce page table size", "Eliminate fragmentation", "Prevent deadlock"],
    ans: 1
  },
  {
    q: "Segmentation supports:",
    opts: ["Physical memory protection only", "Logical program structure", "Fixed-size memory blocks", "No address translation"],
    ans: 1
  },
  {
    q: "A major advantage of paging over segmentation is:",
    opts: ["Logical grouping of code", "Elimination of external fragmentation", "Variable-sized memory blocks", "Better user visibility"],
    ans: 1
  },
  {
    q: "An inverted page table:",
    opts: ["Has one entry per process", "Has one entry per frame", "Stores segment limits", "Eliminates virtual memory"],
    ans: 1
  },
  {
    q: "Protection in segmentation is achieved by:",
    opts: ["Ignoring segment limits", "Using base and limit registers", "Removing page tables", "Disabling TLB"],
    ans: 1
  },
  {
    q: "Virtual memory allows:",
    opts: ["Only one process to run at a time", "Execution of processes larger than physical memory", "Elimination of secondary storage", "Removal of paging"],
    ans: 1
  },
  {
    q: "Virtual memory is primarily implemented using:",
    opts: ["Segmentation only", "Paging only", "Paging with demand loading", "Fixed partitioning"],
    ans: 2
  },
  {
    q: "Demand paging means:",
    opts: ["All pages are loaded at program start", "Pages are loaded only when needed", "Pages are never removed", "Only kernel pages are loaded"],
    ans: 1
  },
  {
    q: "A page fault occurs when:",
    opts: ["A page is successfully found in memory", "A referenced page is not in physical memory", "CPU is idle", "Disk is full"],
    ans: 1
  },
  {
    q: "When a page fault occurs, the OS must:",
    opts: ["Restart the system", "Load the required page from disk", "Terminate all processes", "Increase CPU speed"],
    ans: 1
  },
  {
    q: "Thrashing occurs when:",
    opts: ["CPU utilization is high", "The system spends excessive time swapping pages", "No page faults occur", "Memory is empty"],
    ans: 1
  },
  {
    q: "The working set model is used to:",
    opts: ["Allocate CPU time", "Prevent thrashing", "Schedule disk I/O", "Manage files"],
    ans: 1
  },
  {
    q: "Page replacement is required when:",
    opts: ["There is free frame available", "No free frame is available", "CPU is idle", "Segmentation is used"],
    ans: 1
  },
  {
    q: "Which of the following is a page replacement algorithm?",
    opts: ["First Come First Serve", "Round Robin", "Least Recently Used (LRU)", "Shortest Job First"],
    ans: 2
  },
  {
    q: "The FIFO page replacement algorithm replaces:",
    opts: ["Most recently used page", "Random page", "Oldest loaded page", "Smallest page"],
    ans: 2
  },
  {
    q: "Belady’s anomaly is associated with:",
    opts: ["LRU algorithm", "Optimal algorithm", "FIFO algorithm", "Segmentation"],
    ans: 2
  },
  {
    q: "The Optimal page replacement algorithm:",
    opts: ["Replaces the page not used for the longest future time", "Replaces the most frequently used page", "Is always implementable in practice", "Causes thrashing"],
    ans: 0
  },
  {
    q: "A reference string in virtual memory refers to:",
    opts: ["A list of disk blocks", "Sequence of page numbers referenced", "CPU instruction set", "Memory addresses of segments"],
    ans: 1
  },
  {
    q: "Copy-on-write technique is used to:",
    opts: ["Duplicate pages immediately", "Delay copying pages until modification", "Delete old pages", "Increase fragmentation"],
    ans: 1
  },
  {
    q: "The main advantage of virtual memory is:",
    opts: ["Reduces CPU speed", "Allows efficient use of physical memory", "Eliminates page faults", "Removes secondary storage"],
    ans: 1
  },
  {
    q: "A file system is responsible for:",
    opts: ["Managing CPU scheduling", "Organizing and managing data on storage devices", "Controlling network traffic", "Managing virtual memory only"],
    ans: 1
  },
  {
    q: "A file is defined as:",
    opts: ["A collection of related data stored on secondary storage", "A memory frame", "A CPU instruction", "A process in execution"],
    ans: 0
  },
  {
    q: "The basic file operations include:",
    opts: ["Compile and execute", "Create, read, write, delete", "Schedule and dispatch", "Encrypt and decrypt"],
    ans: 1
  },
  {
    q: "A directory in a file system is used to:",
    opts: ["Allocate CPU time", "Store process IDs", "Organize and locate files", "Manage memory frames"],
    ans: 2
  },
  {
    q: "In a single-level directory structure:",
    opts: ["Each user has a separate directory", "All files are stored in one directory", "Files are arranged in tree format", "There are multiple root directories"],
    ans: 1
  },
  {
    q: "A two-level directory structure:",
    opts: ["Has only one directory", "Allows each user to have a separate directory", "Eliminates file naming conflicts globally", "Uses only linked allocation"],
    ans: 1
  },
  {
    q: "A tree-structured directory:",
    opts: ["Has no subdirectories", "Allows hierarchical organization of files", "Stores files randomly", "Uses fixed partitions"],
    ans: 1
  },
  {
    q: "An inode in UNIX-based systems stores:",
    opts: ["File content", "File metadata (permissions, size, pointers)", "CPU registers", "Page table entries"],
    ans: 1
  },
  {
    q: "File attributes typically include:",
    opts: ["Process state", "File name, size, type, permissions", "Page number", "Frame number"],
    ans: 1
  },
  {
    q: "File access methods include:",
    opts: ["Sequential and direct access", "FIFO and LRU", "Paging and segmentation", "First-fit and best-fit"],
    ans: 0
  },
  {
    q: "In sequential access:",
    opts: ["Files are accessed randomly", "Records are accessed in order", "Files are indexed", "Pages are replaced"],
    ans: 1
  },
  {
    q: "In direct (random) access:",
    opts: ["Data is accessed in fixed sequence only", "Any record can be accessed directly", "Files cannot be modified", "Only directories are accessed"],
    ans: 1
  },
  {
    q: "A mount point in a file system refers to:",
    opts: ["CPU register", "Location where a file system is attached to directory tree", "Disk scheduling method", "Page replacement algorithm"],
    ans: 1
  },
  {
    q: "File system protection mechanisms are used to:",
    opts: ["Increase CPU speed", "Control access to files", "Eliminate fragmentation", "Manage disk head movement"],
    ans: 1
  },
  {
    q: "Journaling file systems improve:",
    opts: ["CPU scheduling", "System reliability and recovery", "Page replacement", "Memory allocation"],
    ans: 1
  },
  {
    q: "File allocation methods determine:",
    opts: ["CPU scheduling order", "How files are stored on disk blocks", "Memory partition size", "Process priority levels"],
    ans: 1
  },
  {
    q: "The three main file allocation methods are:",
    opts: ["FIFO, LRU, Optimal", "Contiguous, Linked, Indexed", "Paging, Segmentation, Swapping", "First-fit, Best-fit, Worst-fit"],
    ans: 1
  },
  {
    q: "In contiguous allocation:",
    opts: ["File blocks are scattered randomly", "File occupies consecutive disk blocks", "Blocks are linked using pointers", "Index block stores all addresses"],
    ans: 1
  },
  {
    q: "A major advantage of contiguous allocation is:",
    opts: ["Easy file expansion", "Simple implementation and fast access", "No fragmentation", "No need for directory"],
    ans: 1
  },
  {
    q: "The main disadvantage of contiguous allocation is:",
    opts: ["Internal fragmentation", "External fragmentation", "No direct access", "High disk latency"],
    ans: 1
  }
];
