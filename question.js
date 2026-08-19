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
  {
    q: "Which file allocation method suffers from high seek time when accessing random blocks?",
    opts: ["Indexed allocation", "Contiguous allocation", "Linked allocation", "Multi-level indexing"],
    ans: 2
  },
  {
    q: "Directory implementation using a hash table provides:",
    opts: ["Slow search time", "Fast lookup time", "No collisions", "Fixed length storage only"],
    ans: 1
  },
  {
    q: "FAT (File Allocation Table) is a variation of:",
    opts: ["Contiguous allocation", "Linked allocation", "Indexed allocation", "Segmented allocation"],
    ans: 1
  },
  {
    q: "In FAT file systems, the pointers are stored in:",
    opts: ["The file header", "A centralized table at the beginning of the volume", "Inside each data block", "The inode structure"],
    ans: 1
  },
  {
    q: "The main advantage of FAT over pure linked allocation is:",
    opts: ["Faster random access by caching the table", "Elimination of file size limits", "No external fragmentation", "Integrated user permissions"],
    ans: 0
  },
  {
    q: "Free space management using linked lists requires:",
    opts: ["Keeping a pointer to the first free block", "A huge memory overhead", "A bit for every disk sector", "Compaction every minute"],
    ans: 0
  },
  {
    q: "File system consistency checks are performed by utilities such as:",
    opts: ["fsck or chkdsk", "top or htop", "gcc or clang", "ping or traceroute"],
    ans: 0
  },
  {
    q: "Virtual File System (VFS) provides:",
    opts: ["A physical hard drive interface", "An abstraction layer allowing different file systems to coexist", "Automatic file backup", "Disk defragmentation"],
    ans: 1
  },
  {
    q: "Disk scheduling algorithms aim to minimize:",
    opts: ["CPU utilization", "Memory usage", "Seek time and access latency", "Page fault rate"],
    ans: 2
  },
  {
    q: "Seek time is defined as the time required to:",
    opts: ["Rotate the disk sector under the read/write head", "Move the disk arm to the desired cylinder", "Transfer data from disk to main memory", "Format the magnetic platter"],
    ans: 1
  },
  {
    q: "Rotational latency is the time taken for:",
    opts: ["The disk arm to move to a cylinder", "The target sector to rotate beneath the read/write head", "Data to flow through the controller", "The OS to issue an I/O request"],
    ans: 1
  },
  {
    q: "In FCFS disk scheduling, requests are serviced:",
    opts: ["By nearest cylinder first", "In the order they arrive", "By shortest track distance", "In alternating directions"],
    ans: 1
  },
  {
    q: "SSTF (Shortest Seek Time First) selects the request that:",
    opts: ["Arrived first", "Is closest to the current head position", "Is at the edge of the platter", "Requires minimum rotation"],
    ans: 1
  },
  {
    q: "A major drawback of SSTF disk scheduling is:",
    opts: ["High head travel distance", "Possibility of starvation for distant requests", "Complex algorithm design", "Excessive rotational delay"],
    ans: 1
  },
  {
    q: "The SCAN disk scheduling algorithm is also known as the:",
    opts: ["Elevator algorithm", "First-in First-out algorithm", "Circular algorithm", "Shortest job algorithm"],
    ans: 0
  },
  {
    q: "In SCAN scheduling, the read/write head:",
    opts: ["Moves randomly across the disk", "Moves continuously back and forth from one end of the disk to the other", "Serves requests only in one direction and jumps back to start", "Stops servicing requests when idle"],
    ans: 1
  },
  {
    q: "C-SCAN (Circular SCAN) scheduling differs from SCAN because it:",
    opts: ["Services requests in both directions", "Services requests only when moving in one direction, returning to start immediately", "Uses shortest seek time criteria", "Does not move to disk edges"],
    ans: 1
  },
  {
    q: "LOOK scheduling differs from SCAN because the head:",
    opts: ["Goes all the way to the disk edge every time", "Only goes as far as the last request in the current direction", "Moves in a circular pattern", "Services requests out of order"],
    ans: 1
  },
  {
    q: "C-LOOK scheduling is a variation of C-SCAN where the head:",
    opts: ["Reaches the absolute end of the disk platter", "Reverses direction at the outermost cylinder", "Only moves as far as the last request before returning", "Processes requests randomly"],
    ans: 2
  },
  {
    q: "Disk transfer rate is measured as:",
    opts: ["Time taken to move the arm", "Amount of data delivered per unit time from disk to memory", "Number of rotations per minute", "Frequency of disk interrupts"],
    ans: 1
  },
  {
    q: "RAID stands for:",
    opts: ["Random Access Independent Disks", "Redundant Array of Independent Disks", "Real-time Array of Integrated Devices", "Rapid Access Internal Drive"],
    ans: 1
  },
  {
    q: "RAID Level 0 provides:",
    opts: ["Mirroring only", "Striping without redundancy", "Parity check only", "Dual redundancy"],
    ans: 1
  },
  {
    q: "RAID Level 1 provides data redundancy through:",
    opts: ["Bit-level striping", "Block-level striping with parity", "Disk mirroring", "Hamming code error correction"],
    ans: 2
  },
  {
    q: "RAID Level 5 distributes parity across:",
    opts: ["A single dedicated parity disk", "All member disks in the array", "Only two secondary disks", "None of the disks"],
    ans: 1
  },
  {
    q: "Direct Memory Access (DMA) allows I/O devices to:",
    opts: ["Bypass the operating system completely", "Transfer data directly to/from main memory without continuous CPU intervention", "Increase CPU clock speed", "Format hard drives dynamically"],
    ans: 1
  },
  {
    q: "An interrupt-driven I/O cycle starts when:",
    opts: ["The CPU continuously polls the device", "The device controller signals the CPU that data is ready", "Memory is fully cleared", "The process enters the terminated state"],
    ans: 1
  },
  {
    q: "Polling I/O is also referred to as:",
    opts: ["Programmed I/O with busy waiting", "Interrupt-driven I/O", "Direct memory access", "Asynchronous transfer"],
    ans: 0
  },
  {
    q: "A device driver acts as an interface between:",
    opts: ["Application software and the compiler", "The OS subsystem and specific hardware controllers", "RAM and virtual memory", "User login screens and kernel"],
    ans: 1
  },
  {
    q: "Character stream devices process data:",
    opts: ["In fixed-size blocks of bytes", "Byte by byte", "In full disk tracks", "Only through DMA"],
    ans: 1
  },
  {
    q: "Block devices store data in:",
    opts: ["Continuous single-byte streams", "Fixed-size, individually addressable blocks", "Unstructured strings", "Variable-length registers"],
    ans: 1
  },
  {
    q: "Spooling (Simultaneous Peripheral Operations On-Line) is commonly used for:",
    opts: ["Managing mouse input", "Managing shared output devices like printers", "Accelerating RAM speed", "Page table translation"],
    ans: 1
  },
  {
    q: "A block device driver manages access to devices like:",
    opts: ["Keyboards and serial ports", "Hard drives and SSDs", "Mice and touchpads", "Microphones"],
    ans: 1
  },
  {
    q: "I/O buffering is used to:",
    opts: ["Cope with speed mismatches between producer and consumer of data", "Increase disk capacity", "Eliminate hardware interrupts", "Prevent deadlocks in processes"],
    ans: 0
  },
  {
    q: "Double buffering improves performance by:",
    opts: ["Allocating two CPUs to I/O tasks", "Allowing one buffer to fill while the other is being processed", "Doubling hard drive RPM", "Caching page tables"],
    ans: 1
  },
  {
    q: "An asynchronous I/O operation:",
    opts: ["Blocks the execution of the calling process until completed", "Allows the calling process to continue while I/O completes in background", "Requires polling in a loop", "Does not trigger interrupts"],
    ans: 1
  },
  {
    q: "Which I/O communication technique consumes the most CPU cycles during transfer?",
    opts: ["DMA", "Interrupt-driven I/O", "Programmed I/O (polling)", "Spooling"],
    ans: 2
  },
  {
    q: "A memory-mapped I/O structure maps device registers to:",
    opts: ["Dedicated CPU I/O ports", "The system's main physical address space", "Disk sectors", "Virtual memory swap spaces"],
    ans: 1
  },
  {
    q: "The main benefit of using a buffer cache in the I/O system is:",
    opts: ["Reducing magnetic platter degradation", "Avoid reading from disk repeatedly for recently used data", "Increasing network throughput", "Executing processes without memory"],
    ans: 1
  },
  {
    q: "In operating system security, authentication verifies:",
    opts: ["What actions a user is allowed to perform", "The identity of the user accessing the system", "The memory addresses of processes", "The checksum of files"],
    ans: 1
  },
  {
    q: "Authorization in operating systems determines:",
    opts: ["User identity", "User access rights and resource privileges", "Network latency", "CPU scheduling order"],
    ans: 1
  },
  {
    q: "The Principle of Least Privilege states that:",
    opts: ["All users should have administrator rights", "Users and processes should be granted only minimum necessary permissions", "Security should be turned off for high speed", "Kernel modules must have root access"],
    ans: 1
  },
  {
    q: "A Trojan horse is a type of malware that:",
    opts: ["Replicates autonomously through networks", "Disguises itself as legitimate software to deceive users", "Encrypts files for ransom", "Attaches to BIOS chips directly"],
    ans: 1
  },
  {
    q: "A computer worm differs from a virus because a worm:",
    opts: ["Requires a host executable file to spread", "Spreads autonomously across networks without human action or host files", "Only affects hardware components", "Never uses bandwidth"],
    ans: 1
  },
  {
    q: "Buffer overflow attacks exploit software vulnerabilities by:",
    opts: ["Reading empty memory registers", "Writing data past the end of an allocated buffer to overwrite adjacent memory", "Deleting operating system files", "Slowing down CPU frequency"],
    ans: 1
  },
  {
    q: "An Access Control Matrix defines permissions between:",
    opts: ["CPUs and processes", "Domains/Users (subjects) and Objects (resources)", "Pages and frames", "Interrupts and handlers"],
    ans: 1
  },
  {
    q: "In Role-Based Access Control (RBAC), access permissions are assigned based on:",
    opts: ["Individual user preference", "User job duties and roles within an organization", "File creation timestamp", "CPU utilization levels"],
    ans: 1
  },
  {
    q: "A denial-of-service (DoS) attack aims to:",
    opts: ["Steal sensitive passwords", "Make system or network resources unavailable to intended users", "Modify file contents silently", "Install keyloggers"],
    ans: 1
  },
  {
    q: "In symmetric encryption:",
    opts: ["Two different keys are used for encryption and decryption", "The same secret key is used for both encryption and decryption", "No keys are required", "Only public keys are involved"],
    ans: 1
  },
  {
    q: "Asymmetric encryption uses:",
    opts: ["A private key and a public key pair", "A single shared secret key", "Only hash functions", "No mathematical calculations"],
    ans: 0
  },
  {
    q: "A digital signature provides:",
    opts: ["Data confidentiality only", "Authenticity, integrity, and non-repudiation", "Automatic virus scanning", "Fast file compression"],
    ans: 1
  },
  {
    q: "In an Access Control List (ACL), permissions are associated with:",
    opts: ["Each individual object (file/resource)", "Each user profile domain", "Each process ID", "The operating system kernel"],
    ans: 0
  },
  {
    q: "A Capability List associates permissions with:",
    opts: ["The resource object", "The domain or user subject", "The hard drive partition", "The network card"],
    ans: 1
  },
  {
    q: "Ransomware is malicious software designed to:",
    opts: ["Speed up internet connection", "Lock or encrypt victim files and demand payment for decryption", "Monitor hardware temperature", "Perform disk scheduling"],
    ans: 1
  },
  {
    q: "A hypervisor (or Virtual Machine Monitor) is software that:",
    opts: ["Compiles C programs into machine code", "Creates and runs virtual machines on underlying hardware", "Manages printer spooling queues", "Formats hard disks"],
    ans: 1
  },
  {
    q: "Type 1 hypervisors run:",
    opts: ["Inside a host operating system like Windows", "Directly on bare-metal hardware", "As a web browser extension", "Inside a docker container"],
    ans: 1
  },
  {
    q: "Type 2 hypervisors run:",
    opts: ["Directly on physical server hardware", "On top of an existing host operating system", "Without any CPU involvement", "Only on mobile phones"],
    ans: 1
  },
  {
    q: "An example of a Type 1 hypervisor is:",
    opts: ["Oracle VirtualBox", "VMware ESXi", "VMware Workstation", "QEMU user-mode"],
    ans: 1
  },
  {
    q: "An example of a Type 2 hypervisor is:",
    opts: ["VMware ESXi", "Microsoft Hyper-V Core", "Oracle VirtualBox", "Citrix XenServer"],
    ans: 2
  },
  {
    q: "Container-based virtualization (like Docker) differs from full virtualization because containers:",
    opts: ["Emulate full hardware and run separate guest OS kernels", "Share the host OS kernel and isolate user space", "Require Type 1 hypervisors", "Do not support process execution"],
    ans: 1
  },
  {
    q: "Full virtualization requires that:",
    opts: ["Guest OS must be modified to run", "Unmodified guest OS can run as if on real hardware", "No hypervisor is used", "Hardware support is absent"],
    ans: 1
  },
  {
    q: "Paravirtualization improves performance by:",
    opts: ["Modifying guest OS to communicate directly with hypervisor via hypercalls", "Running without CPU virtual support", "Eliminating memory allocation", "Bypassing hardware security"],
    ans: 0
  },
  {
    q: "Hardware-assisted virtualization utilizes special CPU extensions such as:",
    opts: ["Intel VT-x and AMD-V", "ARM Cortex-M0", "TCP/IP offload", "PCI Express 4.0"],
    ans: 0
  },
  {
    q: "In cloud computing, Infrastructure as a Service (IaaS) provides:",
    opts: ["Application software ready to use", "Virtual machines, storage, and networking hardware resources", "Database design tools only", "Web page themes"],
    ans: 1
  },
  {
    q: "Platform as a Service (PaaS) provides developers with:",
    opts: ["Bare-metal servers only", "An environment for building, deploying, and running applications", "Only email services", "Physical networking cables"],
    ans: 1
  },
  {
    q: "Software as a Service (SaaS) delivers:",
    opts: ["Virtual machine hypervisors", "Complete applications over the internet to end users", "Operating system kernels", "Storage area networks"],
    ans: 1
  },
  {
    q: "Live migration in virtualized environments allows:",
    opts: ["Moving a running VM from one physical host to another with minimal downtime", "Deleting a VM without losing data", "Converting a container into a hypervisor", "Upgrading host RAM automatically"],
    ans: 0
  },
  {
    q: "Virtual Machine Sprawl refers to:",
    opts: ["VMs consuming too much network traffic", "Uncontrolled proliferation of unused or unmanaged VMs on a network", "Hardware failure of hypervisors", "Paging in guest operating systems"],
    ans: 1
  },
  {
    q: "A snapshot in virtualization captures:",
    opts: ["A photo of the server rack", "The exact state (memory, storage, settings) of a VM at a specific point in time", "Only the log files of the hypervisor", "The network MAC address only"],
    ans: 1
  },
  {
    q: "A system call is initiated by a user program using a:",
    opts: ["Hardware trap or software interrupt instruction", "Standard loop", "Global variable definition", "HTML tag"],
    ans: 0
  },
  {
    q: "The CPU transitions from User Mode to Kernel Mode via:",
    opts: ["Memory compaction", "A system call or interrupt", "A context switch delay", "Process termination"],
    ans: 1
  },
  {
    q: "Kernel mode differs from user mode because kernel mode has:",
    opts: ["Restricted access to memory", "Unrestricted access to hardware and all system memory", "No privilege rights", "Slower CPU execution speed"],
    ans: 1
  },
  {
    q: "Dual-mode operation in CPUs protects the system by using a hardware:",
    opts: ["Mode bit", "Page fault counter", "Disk scheduler", "TLB miss flag"],
    ans: 0
  },
  {
    q: "Privileged instructions can only be executed in:",
    opts: ["User mode", "Kernel mode", "Suspended mode", "Interactive mode"],
    ans: 1
  },
  {
    q: "Which of the following instructions is PRIVILEGED?",
    opts: ["Add two registers", "Disable interrupts", "Read a local variable", "Perform bitwise AND"],
    ans: 1
  },
  {
    q: "A monolithic kernel architecture:",
    opts: ["Runs all OS services inside the kernel space in a single binary", "Runs OS services in user space modules", "Does not support file systems", "Is used only in embedded microcontrollers"],
    ans: 0
  },
  {
    q: "A microkernel architecture moves services like file systems and device drivers into:",
    opts: ["Kernel space", "User space as server processes", "BIOS firmware", "Hardware controllers"],
    ans: 1
  },
  {
    q: "A major benefit of microkernels is:",
    opts: ["Faster execution speed than monolithic kernels", "High modularity, security, and stability (failures don't crash whole OS)", "Zero message-passing overhead", "No need for CPU scheduling"],
    ans: 1
  },
  {
    q: "A major disadvantage of microkernel architecture is:",
    opts: ["Increased performance overhead due to frequent message passing", "System crashes whenever a driver fails", "Inability to run user apps", "Lack of memory protection"],
    ans: 0
  },
  {
    q: "Loadable Kernel Modules (LKMs) allow an OS to:",
    opts: ["Recompile the kernel every time hardware changes", "Dynamically add or remove kernel services at runtime", "Run without physical RAM", "Bypass security checks entirely"],
    ans: 1
  },
  {
    q: "In UNIX systems, the POSIX API defines:",
    opts: ["Standard system call interfaces for portability across operating systems", "Hardware wiring rules", "Graphics rendering algorithms", "Network router protocols"],
    ans: 0
  },
  {
    q: "Which system architecture combines monolithic speed with microkernel modularity?",
    opts: ["Batch Architecture", "Hybrid Kernel Architecture", "Layered Architecture only", "Simple Architecture"],
    ans: 1
  },
  {
    q: "Windows and macOS are built on which kernel architecture type?",
    opts: ["Pure Microkernel", "Pure Monolithic", "Hybrid Kernel", "Batch Kernel"],
    ans: 2
  },
  {
    q: "In a layered OS structure, Layer 0 corresponds to:",
    opts: ["User interface", "Hardware layer", "File system layer", "CPU scheduling layer"],
    ans: 1
  },
  {
    q: "An interrupt vector table stores:",
    opts: ["Hardware device serial numbers", "Memory addresses of interrupt service routines (ISRs)", "Active process PIDs", "Paging records"],
    ans: 1
  },
  {
    q: "An interrupt that is generated by software executing an illegal instruction is called a:",
    opts: ["Trap or Exception", "Hardware interrupt", "DMA request", "Spooling signal"],
    ans: 0
  },
  {
    q: "Maskable interrupts differ from non-maskable interrupts (NMI) because they:",
    opts: ["Can be temporarily ignored or disabled by the CPU", "Can never be disabled", "Are generated only by user software", "Do not use the interrupt vector"],
    ans: 0
  },
  {
    q: "A timer interrupt is primarily used by the OS to:",
    opts: ["Prevent user programs from monopolizing the CPU", "Measure network latency", "Format storage media", "Clear the L1 cache"],
    ans: 0
  },
  {
    q: "When an interrupt occurs, the CPU saves:",
    opts: ["All files on disk", "The current execution state (registers, program counter)", "The entire main memory", "User login passwords"],
    ans: 1
  },
  {
    q: "Polling overhead occurs because:",
    opts: ["The CPU wastes clock cycles periodically checking device flags", "Interrupts are triggered too fast", "DMA takes over memory control", "Buffers overflow"],
    ans: 0
  },
  {
    q: "In mobile operating systems, energy efficiency is achieved by using aggressive:",
    opts: ["Disk defragmentation", "Power state management and process suspension", "Continuous CPU polling", "Static memory allocation"],
    ans: 1
  },
  {
    q: "Android OS uses which underlying kernel?",
    opts: ["Windows NT", "Linux Kernel", "Mach Microkernel", "BSD Kernel"],
    ans: 1
  },
  {
    q: "Apple's iOS is based on which core operating system family?",
    opts: ["Linux", "Darwin / macOS (UNIX-based)", "MS-DOS", "Android"],
    ans: 1
  },
  {
    q: "Android application execution relies on runtime environments such as:",
    opts: ["ART (Android Runtime) / Dalvik", "JVM standard edition", "NET Common Language Runtime", "V8 Engine"],
    ans: 0
  },
  {
    q: "In real-time embedded systems, hard real-time systems require:",
    opts: ["Deadlines to be met strictly, or total system failure occurs", "Deadlines to be met on average", "No timing constraints", "Interactive response times only"],
    ans: 0
  },
  {
    q: "In soft real-time systems:",
    opts: ["Missing a deadline causes immediate catastrophic failure", "Missing a deadline degrades quality but does not cause system collapse", "No priority scheduling is used", "Execution time is unpredictable"],
    ans: 1
  },
  {
    q: "Rate-Monotonic Scheduling (RMS) assigns priorities based on:",
    opts: ["Shortest task burst time", "Task period (shorter periods get higher priority)", "Arrival time of tasks", "Random selection"],
    ans: 1
  },
  {
    q: "Earliest Deadline First (EDF) scheduling is a dynamic algorithm that assigns highest priority to the task with:",
    opts: ["Smallest period", "Closest absolute deadline", "Highest resource consumption", "Oldest creation time"],
    ans: 1
  },
  {
    q: "In Linux, process privileges are dropped using which system call family?",
    opts: ["setuid() and setgid()", "fork() and exec()", "malloc() and free()", "chmod() and chown()"],
    ans: 0
  },
  {
    q: "In UNIX, standard output (stdout) corresponds to file descriptor number:",
    opts: ["0", "1", "2", "3"],
    ans: 1
  },
  {
    q: "In UNIX, standard error (stderr) corresponds to file descriptor number:",
    opts: ["0", "1", "2", "3"],
    ans: 2
  },
  {
    q: "In UNIX, standard input (stdin) corresponds to file descriptor number:",
    opts: ["0", "1", "2", "3"],
    ans: 0
  },
  {
    q: "In operating systems, IPC stands for:",
    opts: ["Internal Process Controller", "Inter-Process Communication", "Instruction Program Counter", "Integrated Power Circuit"],
    ans: 1
  },
  {
    q: "The two fundamental models of Inter-Process Communication are:",
    opts: ["Paging and Segmentation", "Shared Memory and Message Passing", "FCFS and Round Robin", "Monolithic and Microkernel"],
    ans: 1
  },
  {
    q: "Shared memory IPC is generally faster than message passing because:",
    opts: ["It requires kernel intervention for every data exchange", "Data transfers occur directly via shared RAM without system call overhead", "It uses network sockets", "It avoids synchronization issues"],
    ans: 1
  },
  {
    q: "Message passing IPC is better suited for:",
    opts: ["Distributed networks and multi-system communication", "Single CPU shared registers", "Very large contiguous data blocks", "Zero-copy memory pipelines"],
    ans: 0
  },
  {
    q: "A named pipe (FIFO) in UNIX allows communication between:",
    opts: ["Only parent and child processes", "Unrelated processes running on the same file system", "Processes on two different remote networks", "Kernel threads only"],
    ans: 1
  },
  {
    q: "An anonymous pipe in UNIX is created using:",
    opts: ["pipe() system call", "mkfifo() system call", "socket() system call", "shmget() system call"],
    ans: 0
  },
  {
    q: "Socket communication enables process communication across:",
    opts: ["Local address spaces only", "Networked systems using IP addresses and port numbers", "Single thread registries", "Disk sectors exclusively"],
    ans: 1
  },
  {
    q: "RPC stands for:",
    opts: ["Remote Process Command", "Remote Procedure Call", "Resource Allocation Control", "Real-time Program Code"],
    ans: 1
  },
  {
    q: "Marshalling in RPC refers to:",
    opts: ["Scheduling thread priorities", "Packaging parameters into a standard format for transmission over a network", "Allocating virtual memory frames", "Compacting fragmentation"],
    ans: 1
  },
  {
    q: "In Message Passing, direct communication requires that:",
    opts: ["Processes explicitly name the recipient or sender", "Messages are placed in intermediate mailboxes", "Processes share identical memory addresses", "No kernel buffering exists"],
    ans: 0
  },
  {
    q: "Indirect communication in Message Passing uses:",
    opts: ["Named processes only", "Mailboxes or ports to hold messages", "Direct register transfers", "Zero memory allocations"],
    ans: 1
  },
  {
    q: "Synchronous message passing implies that sending is:",
    opts: ["Non-blocking", "Blocking (sender waits until message is received)", "Deferred to disk", "Unbuffered"],
    ans: 1
  },
  {
    q: "Asynchronous message passing implies that sending is:",
    opts: ["Blocking until read", "Non-blocking (sender resumes immediately)", "Delayed by CPU scheduling", "Impossible"],
    ans: 1
  },
  {
    q: "Zero capacity buffering in message queues means:",
    opts: ["The queue length is 0, requiring forced synchronization (rendezvous)", "Messages are dropped automatically", "Infinite messages can sit in queue", "Messages are written to disk"],
    ans: 0
  },
  {
    q: "Signal handling in UNIX is used to:",
    opts: ["Notify a process that a specific event has occurred", "Allocate virtual memory pages", "Mount external storage", "Format swap space"],
    ans: 0
  },
  {
    q: "Which UNIX signal cannot be caught or ignored?",
    opts: ["SIGINT", "SIGTERM", "SIGKILL", "SIGUSR1"],
    ans: 2
  },
  {
    q: "The SIGINT signal is typically generated by pressing:",
    opts: ["Ctrl + C", "Ctrl + Z", "Ctrl + Alt + Del", "Alt + F4"],
    ans: 0
  },
  {
    q: "System thrashing can be identified by high disk activity combined with:",
    opts: ["High CPU utilization", "Extremely low CPU utilization", "Fast execution speeds", "Zero page faults"],
    ans: 1
  },
  {
    q: "The translation buffer miss penalty refers to the time needed to:",
    opts: ["Access the page table in RAM when TLB fails to contain the address", "Format hard drive tracks", "Context switch threads", "Reboot the kernel"],
    ans: 0
  },
  {
    q: "Slab allocation in Linux memory management is designed to:",
    opts: ["Eliminate external fragmentation caused by frequent kernel object creation", "Replace disk scheduling algorithms", "Manage user level threads", "Perform swap space encryption"],
    ans: 0
  },
  {
    q: "A buddy system memory allocator satisfies memory requests by:",
    opts: ["Splitting memory blocks into halves repeatedly until fit", "Allocating random memory locations", "Paging frames to disk", "Using single-byte chunks"],
    ans: 0
  },
  {
    q: "Spinlocks are synchronization locks where processes:",
    opts: ["Sleep while waiting for lock release", "Loop continuously (busy wait) until the lock becomes available", "Terminate immediately", "Yield CPU to long-term scheduler"],
    ans: 1
  },
  {
    q: "Spinlocks are most efficient in:",
    opts: ["Single-processor systems", "Multiprocessor systems where lock hold times are short", "High-latency network connections", "Disk I/O queues"],
    ans: 1
  },
  {
    q: "In memory-mapped files, file content is mapped directly into:",
    opts: ["Process virtual address space", "CPU instruction registers", "I/O controller ports", "Swap space sectors"],
    ans: 0
  },
  {
    q: "Page pinning (or locking) in memory prevents:",
    opts: ["Pages from being swapped out to disk during active I/O", "Processes from writing to variables", "Kernel execution", "Thread creation"],
    ans: 0
  },
  {
    q: "A file system block size choice affects trade-offs between:",
    opts: ["Internal fragmentation and transfer throughput", "CPU clock speed and RAM speed", "Thread count and process count", "User count and admin permissions"],
    ans: 0
  },
  {
    q: "Larger block sizes in file systems generally lead to:",
    opts: ["Higher transfer rates for large files but increased internal fragmentation for small files", "Zero fragmentation", "Slower disk reads", "Lower total storage capacity"],
    ans: 0
  },
  {
    q: "The dirty bit (modify bit) in a page table entry indicates whether the page has been:",
    opts: ["Read from memory", "Written to / modified since loaded into RAM", "Swapped to secondary disk", "Corrupted by virus"],
    ans: 1
  },
  {
    q: "The valid-invalid bit in a page table entry specifies if the page is:",
    opts: ["ReadOnly or Writeable", "Currently in the process's logical address space and physical RAM", "Encrypted or Plaintext", "Shared or Private"],
    ans: 1
  },
  {
    q: "Dynamic link libraries (DLLs / shared objects) save memory by:",
    opts: ["Sharing a single copy of library code across multiple running processes", "Compressing files on hard disk", "Running without main RAM", "Disabling context switches"],
    ans: 0
  },
  {
    q: "Overlaying is an old technique where:",
    opts: ["Programs manually swap portions of code into memory as needed", "Kernel code overwrites user apps", "Virtual memory is doubled", "Hardware emulates RAM"],
    ans: 0
  },
  {
    q: "Modern operating systems replaced overlays with:",
    opts: ["Contiguous allocation", "Virtual memory and demand paging", "Batch processing", "Static partitioning"],
    ans: 1
  },
  {
    q: "The main benefit of Copy-On-Write (COW) during fork() is:",
    opts: ["Duplicate memory pages only when a process modifies them", "Increase process priority", "Prevent child process creation", "Format swap partition"],
    ans: 0
  },
  {
    q: "In UNIX, exec() system call family replaces:",
    opts: ["The parent process image with a new program image", "The CPU architecture", "The file system structure", "The hard disk sector map"],
    ans: 0
  },
  {
    q: "An orphan process is a child process whose parent has:",
    opts: ["Terminated while child is still running", "Not executed wait()", "Entered deadlock state", "Been suspended"],
    ans: 0
  },
  {
    q: "In UNIX, orphan processes are adopted by:",
    opts: ["The init process (PID 1) or systemd", "The root user domain", "Another sibling process", "The kernel scheduler queue"],
    ans: 0
  },
  {
    q: "A process state transition from Running to Ready is caused by:",
    opts: ["I/O completion", "Time quantum expiration or preemption", "System call request", "Process error"],
    ans: 1
  },
  {
    q: "A process state transition from Waiting to Ready is caused by:",
    opts: ["CPU scheduling decision", "I/O or event completion", "Time quantum expiration", "Process creation"],
    ans: 1
  },
  {
    q: "In CPU scheduling, Convoy Effect occurs in FCFS when:",
    opts: ["Short processes wait behind a long CPU-bound process", "Many small processes block large processes", "CPU remains continuously idle", "Preemption triggers high overhead"],
    ans: 0
  },
  {
    q: "A priority ceiling protocol is used in real-time systems to solve:",
    opts: ["Thrashing", "Priority Inversion", "External fragmentation", "Deadlock detection"],
    ans: 1
  },
  {
    q: "Starvation in scheduling can be solved by:",
    opts: ["Increasing time quantum", "Aging (gradually increasing process priority over time)", "Reducing RAM size", "Disabling interrupts"],
    ans: 1
  },
  {
    q: "A thread pool model improves performance by:",
    opts: ["Creating a fixed set of reusable threads at startup", "Spawning infinite new threads", "Deleting user threads", "Disabling multi-core support"],
    ans: 0
  },
  {
    q: "Which CPU scheduling algorithm is non-preemptive by definition?",
    opts: ["Round Robin", "FCFS", "SRTF", "Preemptive Priority"],
    ans: 1
  },
  {
    q: "A major drawback of Round Robin with a very small time quantum is:",
    opts: ["High context-switching overhead", "Convoy effect", "Starvation of short jobs", "Deadlock occurrence"],
    ans: 0
  },
  {
    q: "If Round Robin time quantum is extremely large, it behaves like:",
    opts: ["Shortest Job First", "FCFS", "Priority Scheduling", "Multilevel Feedback Queue"],
    ans: 1
  },
  {
    q: "Multilevel Queue Scheduling partitions the ready queue into:",
    opts: ["Separate queues based on process type/priority", "Contiguous RAM spaces", "Virtual page frames", "Disk sectors"],
    ans: 0
  },
  {
    q: "Multilevel Feedback Queue scheduling allows processes to:",
    opts: ["Move between different priority queues based on execution history", "Remain in a fixed queue forever", "Bypass kernel checks", "Avoid memory allocation"],
    ans: 0
  },
  {
    q: "A critical section is a piece of code that accesses:",
    opts: ["Private local variables only", "Shared resources that must not be accessed concurrently by multiple processes", "Read-only instructions", "BIOS firmware"],
    ans: 1
  },
  {
    q: "Peterson’s Solution is a classic algorithm that satisfies mutual exclusion for:",
    opts: ["Two processes", "Infinite processes", "Hardware controllers", "Distributed systems"],
    ans: 0
  },
  {
    q: "Peterson’s Solution assumes that execution instructions are:",
    opts: ["Atomic and execute without hardware reordering", "Distributed across networks", "Delayed by disk arm travel", "Multi-threaded natively"],
    ans: 0
  },
  {
    q: "An atomic hardware instruction completes:",
    opts: ["As a single indivisible unit without interruption", "In multiple context switches", "Only after page fault", "By disk controller"],
    ans: 0
  },
  {
    q: "Counting semaphores can be initialized to:",
    opts: ["Only 0 and 1", "Any non-negative integer representing available resource count", "Negative numbers only", "Floating point decimals"],
    ans: 1
  },
  {
    q: "When a process calls wait() on a counting semaphore with value 0, it:",
    opts: ["Increments the value", "Blocks until the value becomes greater than 0", "Terminates immediately", "Ignores the signal"],
    ans: 1
  },
  {
    q: "When a process calls signal() on a semaphore, it:",
    opts: ["Decrements the semaphore value", "Increments the semaphore value and unblocks a waiting process if any", "Locks the critical section", "Triggers a page fault"],
    ans: 1
  },
  {
    q: "The Dining Philosophers problem illustrates challenges in:",
    opts: ["Memory allocation strategies", "Deadlock and starvation in concurrent resource sharing", "File system indexing", "Disk sector alignment"],
    ans: 1
  },
  {
    q: "The Readers-Writers problem deals with synchronizing access where:",
    opts: ["Multiple readers can read concurrently, but writers require exclusive access", "Writers share memory without locks", "Readers must block other readers", "No locks are used"],
    ans: 0
  },
  {
    q: "Deadlock Detection algorithms for multiple instances of resources use:",
    opts: ["Banker's Algorithm variants with allocation/request matrices", "First-fit search", "Elevator algorithm", "LRU page replacements"],
    ans: 0
  },
  {
    q: "Ignoring the deadlock problem completely and assuming it won't happen is called:",
    opts: ["Ostrich Algorithm", "Banker's Algorithm", "Peterson's Algorithm", "SCAN Algorithm"],
    ans: 0
  },
  {
    q: "The Ostrich Algorithm is used by general-purpose OSs because:",
    opts: ["Deadlocks are rare and prevention costs are high relative to recovery", "Deadlocks are impossible in modern software", "It mathematically proves safety", "It requires zero RAM"],
    ans: 0
  },
  {
    q: "Resource Allocation Graphs (RAG) contain cycles:",
    opts: ["Which ALWAYS imply deadlock if resources have single instances", "Which NEVER imply deadlock", "Which only happen in virtual memory", "Which stop CPU clocks"],
    ans: 0
  },
  {
    q: "If a Resource Allocation Graph contains a cycle and resources have multiple instances, deadlock:",
    opts: ["MAY exist, but is not guaranteed", "Definitely exists", "Is completely impossible", "Triggers disk format"],
    ans: 0
  },
  {
    q: "An advantage of strict deadlock prevention over avoidance is:",
    opts: ["It requires no runtime information about future process requests", "It leads to maximum CPU utilization", "It uses no system memory", "It supports infinite processes"],
    ans: 0
  },
  {
    q: "Memory paging eliminates external fragmentation by:",
    opts: ["Dividing memory into fixed physical frames and logical pages", "Compacting disk space", "Swapping kernel files", "Using dynamic variable partitions"],
    ans: 0
  },
  {
    q: "A page table entry (PTE) maps:",
    opts: ["Logical page number to physical frame number", "Disk cylinder to sector number", "Process ID to file path", "CPU register to memory bus"],
    ans: 0
  },
  {
    q: "In a system with 32-bit logical addresses and 4 KB page size, the offset requires:",
    opts: ["10 bits", "12 bits", "16 bits", "20 bits"],
    ans: 1
  },
  {
    q: "In a system with 32-bit logical addresses and 4 KB page size, the page number requires:",
    opts: ["12 bits", "20 bits", "24 bits", "32 bits"],
    ans: 1
  },
  {
    q: "An Inverted Page Table reduces page table size by maintaining:",
    opts: ["One entry for each physical frame in memory rather than each logical page", "One entry for all files", "Multiple tables per process", "No entries at all"],
    ans: 0
  },
  {
    q: "Hashed Page Tables are commonly used in systems with address spaces larger than:",
    opts: ["8-bit", "16-bit", "32-bit", "128-bit"],
    ans: 2
  },
  {
    q: "Segmentation reflects which view of main memory?",
    opts: ["User/programmer view", "Hardware cylinder view", "Network packet view", "Binary bit view"],
    ans: 0
  },
  {
    q: "A segment limit specifies:",
    opts: ["The length of the segment", "The starting physical address of the segment", "The file owner permissions", "The CPU priority level"],
    ans: 0
  },
  {
    q: "A segment base specifies:",
    opts: ["The starting physical address of the segment in memory", "The end offset of the segment", "The process PID", "The page fault rate"],
    ans: 0
  },
  {
    q: "If a segment offset exceeds the segment limit, the operating system raises a:",
    opts: ["Segmentation Fault / Trap", "Page Fault", "Disk Error", "TLB Miss"],
    ans: 0
  },
  {
    q: "Swap space is a section of secondary storage reserved for:",
    opts: ["Holding memory pages removed from physical RAM", "Installing new operating system files", "Storing permanent video downloads", "Buffering printer queues"],
    ans: 0
  },
  {
    q: "A page fault handler is executed by the OS when:",
    opts: ["A referenced page is marked invalid/not present in RAM", "A program finishes normally", "Disk speed drops", "Keyboard input arrives"],
    ans: 0
  },
  {
    q: "The sequence of steps in handling a page fault includes:",
    opts: ["Trap to OS -> Save state -> Locate page on disk -> Read page into free frame -> Update page table -> Restart instruction", "Restart system -> Clear RAM -> Recompile code", "Delete process -> Clear swap -> Format disk", "Ignore trap -> Continue execution"],
    ans: 0
  },
  {
    q: "Pure Demand Paging starts executing a process with:",
    opts: ["Zero pages in physical RAM", "All pages pre-loaded into physical RAM", "Half of the pages in RAM", "Pages stored in CPU registers"],
    ans: 0
  },
  {
    q: "Belady’s Anomaly states that for some page replacement algorithms, increasing frame count:",
    opts: ["Increases the number of page faults", "Decreases the number of page faults", "Keeps page faults constant", "Eliminates virtual memory"],
    ans: 0
  },
  {
    q: "Which page replacement algorithm is immune to Belady's Anomaly?",
    opts: ["FIFO", "LRU (Least Recently Used)", "Second Chance", "Clock Algorithm"],
    ans: 1
  },
  {
    q: "The Clock Page Replacement Algorithm is an efficient approximation of:",
    opts: ["Optimal Algorithm", "LRU Algorithm", "FIFO Algorithm", "MFU Algorithm"],
    ans: 1
  },
  {
    q: "In the Second Chance page replacement algorithm, if a page's reference bit is 1, the OS:",
    opts: ["Replaces it immediately", "Clears the bit to 0 and gives it a second chance", "Swaps it to secondary storage", "Terminates its parent process"],
    ans: 1
  },
  {
    q: "Equal allocation of frames divides free memory:",
    opts: ["Equally among all processes regardless of size", "Proportionally based on process size", "Based on thread priority", "Randomly"],
    ans: 0
  },
  {
    q: "Proportional frame allocation divides available frames based on:",
    opts: ["The size of each process relative to total memory requirements", "Arrival time of processes", "Process execution time", "User permissions"],
    ans: 0
  },
  {
    q: "Global page replacement allows a process to select a replacement frame from:",
    opts: ["The set of all frames in the system, even if allocated to other processes", "Only its own allocated set of frames", "Disk storage directly", "The TLB buffer only"],
    ans: 0
  },
  {
    q: "Local page replacement limits frame selection to:",
    opts: ["The process's own allocated frames", "Any frame across the system", "Kernel memory frames", "Unpartitioned sectors"],
    ans: 0
  },
  {
    q: "Global page replacement can cause one process to suffer page faults due to:",
    opts: ["Paging behavior of another process", "Hardware interrupts", "Disk formatting", "Process creation delay"],
    ans: 0
  },
  {
    q: "A file control block (FCB) contains:",
    opts: ["File permissions, ownership, size, and location of data blocks", "User passwords", "Compiled machine code", "CPU register states"],
    ans: 0
  },
  {
    q: "In UNIX, a hard link creates:",
    opts: ["A new directory entry pointing to an existing inode", "A file containing a text path to another file", "A duplicate copy of file content", "A shortcut executable"],
    ans: 0
  },
  {
    q: "A symbolic (soft) link creates:",
    opts: ["A file that contains the path string pointing to another target file", "A direct pointer to the raw physical inode", "A new process image", "A hard drive sector lock"],
    ans: 0
  },
  {
    q: "Deleting the original target file breaks which type of link?",
    opts: ["Symbolic (soft) link", "Hard link", "Both symbolic and hard link", "Neither link"],
    ans: 0
  },
  {
    q: "Mounting a file system attaches its root directory to:",
    opts: ["A specified directory (mount point) in an existing file system tree", "The CPU register space", "A virtual page frame", "A swap partition"],
    ans: 0
  },
  {
    q: "Network File System (NFS) allows a client system to access files across a network as if they were:",
    opts: ["Local storage files", "Web search results", "Read-only database records", "System calls"],
    ans: 0
  },
  {
    q: "In disk layout, a boot sector (or MBR/GPT) contains code to:",
    opts: ["Load and execute the operating system kernel during startup", "Manage printer queues", "Compile application code", "Perform garbage collection"],
    ans: 0
  },
  {
    q: "Disk defragmentation re-organizes data blocks to:",
    opts: ["Store file pieces in contiguous sectors for faster read speed", "Increase total physical disk capacity", "Remove viruses", "Update user access permissions"],
    ans: 0
  },
  {
    q: "An operating system shell is best described as:",
    opts: ["A user interface (command-line or GUI) that interprets user commands", "The low-level device driver layer", "The physical computer casing", "The CPU control unit"],
    ans: 0
  },
  {
    q: "Which operating system structure uses a message-passing mechanism as its primary core communication?",
    opts: ["Microkernel", "Monolithic Kernel", "Layered Kernel", "Flat Architecture"],
    ans: 0
  }
];
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
