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
    opts: ["Environmental degradation", "Religious conversion programs", "Foreign military invasions", "Lack of public transportation"],
    ans: 0
  },
  {
    q: "Economic competition over fertile land and water resources fuels recurring clashes between which two groups in northern Nigeria?",
    opts: ["Pastoralists and farmers", "Traders and civil servants", "Fishermen and miners", "Urban workers and factory owners"],
    ans: 0
  },
  {
    q: "Why do competing groups perceive control of chieftaincy positions as vital?",
    opts: ["It guarantees international diplomatic posts", "It is critical to social recognition and resource allocation", "It allows them to draft federal laws", "It provides immunity from criminal prosecution"],
    ans: 1
  },
  {
    q: "Which historical struggle in Nigeria (1967–1970) reflected nationalist movements rooted in perceived exclusion and economic disparity?",
    opts: ["The Biafran War", "The Maitatsine Uprising", "The Niger Delta Rebellion", "The Kiriji War"],
    ans: 0
  },
  {
    q: "Besides historical grievances and inclusive governance, effective peacebuilding requires mechanisms for social reconciliation and what?",
    opts: ["Equitable resource distribution", "Increased military spending", "Border closures", "Centralized economic control"],
    ans: 0
  },

  // ==========================================
  // TOPIC 2: CASE STUDIES & NATIONALIST MOVEMENTS
  // ==========================================
  {
    q: "The Zangon Kataf crisis occurred in which Nigerian state?",
    opts: ["Kaduna State", "Plateau State", "Benue State", "Taraba State"],
    ans: 0
  },
  {
    q: "Which two communities were involved in the violent confrontations of the Zangon Kataf crisis?",
    opts: ["Atyap and Hausa", "Tiv and Jukun", "Efik and Ibibio", "Kanuri and Fulani"],
    ans: 0
  },
  {
    q: "Control over land is directly linked to social status, political influence, and what else?",
    opts: ["Economic livelihoods", "International travel rights", "National tax collection", "Military rank"],
    ans: 0
  },
  {
    q: "Which states are explicitly cited in the text regarding localized land disputes in southeastern Nigeria?",
    opts: ["Anambra and Enugu", "Lagos and Ogun", "Kano and Jigawa", "Borno and Yobe"],
    ans: 0
  },
  {
    q: "Which militant group is cited as leading agitations for autonomy and resource control in the Niger Delta?",
    opts: ["Movement for the Emancipation of the Niger Delta (MEND)", "Boko Haram", "Atyap Youth Council", "Oodua People's Congress"],
    ans: 0
  },
  {
    q: "What strategy has proven effective in reducing the recurrence of violent conflicts in some Nigerian communities?",
    opts: ["Equitable land redistribution and local mediation", "Permanent military curfews", "Mass arrest of community leaders", "Abolishing traditional chieftaincies"],
    ans: 0
  },

  // ==========================================
  // TOPIC 3: CONFLICT DYNAMICS & ASSESSMENT
  // ==========================================
  {
    q: "What does the term 'conflict dynamics' refer to?",
    opts: ["The physical weapons used in warfare", "The patterns, stages, and processes through which conflicts evolve, escalate, and de-escalate", "The economic cost of post-war reconstruction", "The legal frameworks governing international borders"],
    ans: 1
  },
  {
    q: "Constructive conflict occurs when opposing parties engage in disagreement that leads to what?",
    opts: ["Positive outcomes like innovation, problem-solving, or improved relationships", "Immediate military escalation", "Permanent division of national territories", "Systemic economic disruption"],
    ans: 0
  },
  {
    q: "In the stages of conflict, what characterizes 'latent conflict'?",
    opts: ["Underlying tensions exist but have not yet manifested", "Parties engage in open armed confrontation", "Emotional involvement peaks into riots", "Post-conflict reconciliation is underway"],
    ans: 0
  },
  {
    q: "Emotional involvement intensifies during which stage of conflict?",
    opts: ["Felt conflict", "Latent conflict", "Manifest conflict", "Conflict aftermath"],
    ans: 0
  },
  {
    q: "Manifest conflict is characterized by visible actions such as what?",
    opts: ["Protests, strikes, or armed confrontations", "Unexpressed feelings of jealousy", "Unrecognized differences in values", "Drafting future policy proposals"],
    ans: 0
  },
  {
    q: "Which conflict assessment tool provides a visual representation of key actors and sources of tension?",
    opts: ["Conflict mapping", "Stakeholder analysis", "Conflict scales", "Economic audit"],
    ans: 0
  },
  {
    q: "What is the primary function of stakeholder analysis in conflict assessment?",
    opts: ["Evaluating the interests, power, and influence of each actor", "Counting the exact number of physical weapons", "Calculating the financial cost of property damage", "Mapping physical terrain and borders"],
    ans: 0
  },
  {
    q: "What do conflict scales measure?",
    opts: ["The intensity and destructiveness of conflict", "The financial budget of peacekeepers", "The demographic growth rate of ethnic groups", "The distance between border checkpoints"],
    ans: 0
  },
  {
    q: "Immediate triggers of conflict, such as election disputes or land encroachments, are distinct from what deeper factors?",
    opts: ["Long-term structural issues", "Short-term economic gains", "Immediate media rumors", "Temporary police operations"],
    ans: 0
  },
  {
    q: "What tools do conflict managers use to counteract misinformation and restore trust?",
    opts: ["Dialogue, mediation, and confidence-building measures", "Media blackouts and censorship", "Military force deployments", "Unilateral executive bans"],
    ans: 0
  },

  // ==========================================
  // TOPIC 4: PEACEBUILDING & CONFLICT MANAGEMENT
  // ==========================================
  {
    q: "How does conflict management differ from peacebuilding?",
    opts: ["It involves strategies to limit dispute intensity, prevent escalation, and resolve conflicts through structured approaches", "It focuses exclusively on long-term economic development", "It completely eliminates the need for mediation", "It relies solely on military defeat of all parties"],
    ans: 0
  },
  {
    q: "Why are religious leaders often central in mediating disputes in African societies?",
    opts: ["They possess moral authority, social influence, and knowledge of local customs", "They hold official executive powers in government", "They command state armed forces", "They control foreign investment funds"],
    ans: 0
  },
  {
    q: "In Nigeria and Ghana, what type of initiative involving religious leaders has successfully reduced community tensions?",
    opts: ["Interfaith dialogue initiatives", "Unilateral executive decrees", "Military peacekeeping operations", "Economic sanction programs"],
    ans: 0
  },
  {
    q: "Which state institution in Nigeria is cited as a coordinating framework for addressing immediate and structural conflict issues?",
    opts: ["Peace and Security Councils", "Federal Board of Revenue", "National Electricity Commission", "Ministry of Foreign Trade"],
    ans: 0
  },
  {
    q: "Town hall meetings, community mediation, and local peace committees are examples of what type of conflict approach?",
    opts: ["Community-based approaches", "Unilateral government mandates", "International military interventions", "Macroeconomic trade strategies"],
    ans: 0
  },
  {
    q: "What is the role of a third party in mediation?",
    opts: ["Acting as a neutral facilitator to guide discussions and propose possible solutions", "Enforcing legal penalties on both sides", "Representing the political interests of the government", "Financing post-war business investments"],
    ans: 0
  },
  {
    q: "Joint problem-solving where conflicting groups work together toward shared objectives, such as managing resources or rebuilding infrastructure, is called what?",
    opts: ["Collaboration", "Mediation", "Arbitration", "Isolation"],
    ans: 0
  },
  {
    q: "Why is combining multiple conflict approaches (such as dialogue, mediation, and collaboration) beneficial?",
    opts: ["It addresses both the psychological and structural dimensions of conflict", "It reduces the financial cost of government operations", "It eliminates the need for formal legal frameworks", "It guarantees immediate total economic equality"],
    ans: 0
  },

  // ==========================================
  // TOPIC 5: LEGAL FRAMEWORKS & COUNTER-TERRORISM
  // ==========================================
  {
    q: "In the context of Africa and Nigeria, what dual functions does justice serve in peace and conflict studies?",
    opts: ["Preventive and corrective functions", "Military and monetary functions", "Executive and judicial functions", "Diplomatic and commercial functions"],
    ans: 0
  },
  {
    q: "Restorative justice seeks to repair harm and restore relationships rather than doing what?",
    opts: ["Solely punishing perpetrators", "Conducting public trials", "Offering financial compensation", "Deploying military forces"],
    ans: 0
  },
  {
    q: "The Nigerian legal system is characterized by a combination of statutory laws, religious laws, and what else?",
    opts: ["Customary laws", "International trade laws", "Colonial mandates", "Military decrees"],
    ans: 0
  },
  {
    q: "What preventive approaches help address the social and ideological dimensions of terrorism alongside military operations?",
    opts: ["Intelligence gathering, deradicalization, and community policing", "Permanent border closures and media blackouts", "Economic sanctions and currency redenomination", "Mass deportations and martial law"],
    ans: 0
  },
  {
    q: "In which two Nigerian states have community engagement initiatives successfully built trust between local populations and security agencies?",
    opts: ["Borno and Yobe States", "Lagos and Ogun States", "Enugu and Anambra States", "Kano and Kaduna States"],
    ans: 0
  },
  {
    q: "Which specific Nigerian legislation establishes legal mechanisms for prosecution, intelligence sharing, and rehabilitation programs?",
    opts: ["Terrorism Prevention Act", "Customary Rights Law", "National Security Reserve Act", "Electoral Reform Act"],
    ans: 0
  },

  // ==========================================
  // TOPIC 6: PEACEKEEPING & INTERNATIONAL ORGANIZATIONS
  // ==========================================
  {
    q: "How did early peacekeeping missions differ from modern peacekeeping operations?",
    opts: ["Early missions were passive, focusing on monitoring ceasefires or separating warring factions", "Early missions focused heavily on state building and democratic elections", "Early missions carried out active counter-insurgency warfare", "Early missions were run exclusively by regional trade unions"],
    ans: 0
  },
  {
    q: "What are the three core principles under which UN 'Blue Helmets' traditionally operate?",
    opts: ["Consent, impartiality, and minimum use of force", "Deterrence, pre-emption, and total dominance", "Neutrality, economic aid, and judicial authority", "Surveillance, enforcement, and mandatory disarmament"],
    ans: 0
  },
  {
    q: "In West Africa, UN peacekeeping interventions in which two countries are frequently cited as successful examples?",
    opts: ["Sierra Leone and Liberia", "Nigeria and Ghana", "Mali and Niger", "Senegal and The Gambia"],
    ans: 0
  },
  {
    q: "Which African Union mission in Somalia highlighted the shift of regional peacekeeping into peace enforcement and counter-insurgency?",
    opts: ["AMISOM", "ECOMOG", "UNAMID", "MONUSCO"],
    ans: 0
  },
  {
    q: "Which West African regional body established ECOMOG to intervene in regional security crises?",
    opts: ["ECOWAS", "SADC", "EAC", "AMU"],
    ans: 0
  },
  {
    q: "ECOWAS demonstrated its commitment to maintaining regional peace and constitutional order in 2017 by intervening in which country?",
    opts: ["The Gambia", "Sierra Leone", "Cote d'Ivoire", "Guinea-Bissau"],
    ans: 0
  },
  {
    q: "Which United Nations agencies provide life-saving support, healthcare, and education in IDP camps in northeastern Nigeria?",
    opts: ["UNHCR and UNICEF", "UNESCO and UNIDO", "IMF and World Bank", "UNDP and UNCTAD"],
    ans: 0
  },
  {
    q: "The 1994 Rwandan genocide serves as a prominent historical example of how the media can be weaponized to do what?",
    opts: ["Fuel violence and inflame tensions", "Promote rapid economic development", "Facilitate democratic elections", "Support international peacekeeping"],
    ans: 0
  },

  // ==========================================
  // TOPIC 7: ALTERNATIVE DISPUTE RESOLUTION (ADR)
  // ==========================================
  {
    q: "Why do many communities prefer Alternative Dispute Resolution (ADR) over formal litigation in courts?",
    opts: ["Formal litigation is often slow, expensive, and rigid", "ADR decisions carry mandatory international military enforcement", "Courts are prohibited from hearing land disputes", "ADR completely replaces statutory constitutional law"],
    ans: 0
  },
  {
    q: "What is considered the first step in Alternative Dispute Resolution?",
    opts: ["Dialogue", "Arbitration", "Litigation", "Sanctions"],
    ans: 0
  },
  {
    q: "What defines the process of arbitration in ADR?",
    opts: ["Disputing parties present cases to a neutral third party who delivers a binding decision", "Parties hold informal talks without any third-party involvement", "Community members vote publicly on who should win the dispute", "A government minister issues an executive order"],
    ans: 0
  },
  {
    q: "Arbitration is increasingly utilized in Nigeria for resolving disputes in which specific industry?",
    opts: ["Oil and gas disputes", "Agricultural grain pricing", "Public transit fare setting", "Telecommunications spectrum licensing"],
    ans: 0
  },
  {
    q: "Traditional African approaches to justice prioritize social harmony, restoration of relationships, and what else over punishment?",
    opts: ["Reconciliation", "Financial compensation", "Exile", "Imprisonment"],
    ans: 0
  },
  {
    q: "Which major African peace agreement in 2003 was achieved through intensive regional mediation and ADR techniques led by ECOWAS and the UN?",
    opts: ["Accra Peace Agreement (Liberia)", "Arusha Accords (Rwanda)", "Comprehensive Peace Agreement (Sudan)", "Lusaka Ceasefire Agreement (DRC)"],
    ans: 0
  },

  // ==========================================
  // TOPIC 8: MANAGING POST-CONFLICT SITUATIONS
  // ==========================================
  {
    q: "What is the distinction between refugees and internally displaced persons (IDPs)?",
    opts: ["Refugees flee across international borders; IDPs move within their own country", "IDPs flee across international borders; refugees move within their own country", "Refugees are combatants; IDPs are non-combatants", "IDPs receive international passports; refugees do not"],
    ans: 0
  },
  {
    q: "In Nigeria, the Boko Haram insurgency has created millions of IDPs, particularly in which three states?",
    opts: ["Borno, Yobe, and Adamawa States", "Lagos, Ogun, and Oyo States", "Enugu, Imo, and Abia States", "Kano, Kaduna, and Katsina States"],
    ans: 0
  },
  {
    q: "Following Liberia's civil war, which specific reform was critical to restoring public confidence in governance?",
    opts: ["Security sector reform (retraining military and police)", "Privatizing the national power grid", "Adopting a new national currency", "Abolishing traditional chieftaincy titles"],
    ans: 0
  },
  {
    q: "What famous post-conflict mechanism did South Africa use to promote restorative justice and truth-telling?",
    opts: ["Truth and Reconciliation Commission (TRC)", "Gacaca Community Courts", "Special Court for Sierra Leone", "International Criminal Tribunal"],
    ans: 0
  },
  {
    q: "To process thousands of genocide cases quickly and promote healing, Rwanda combined international tribunals with what local court system?",
    opts: ["Gacaca courts", "Customary Sharia courts", "ECOMOG military tribunals", "Town Hall arbitration panels"],
    ans: 0
  },
  {
    q: "In the Niger Delta, what program provided ex-militants with skills training and economic reintegration?",
    opts: ["Amnesty program", "DDR military campaign", "Operation Restore Hope", "Task Force Green"],
    ans: 0
  },
  {
    q: "What does the acronym DDR stand for in post-conflict security management?",
    opts: ["Disarmament, Demobilization, and Reintegration", "Demilitarization, Dialogue, and Reconstruction", "Diplomacy, Development, and Reconciliation", "De-escalation, Defense, and Restructuring"],
    ans: 0
  },
  {
    q: "In Sierra Leone, DDR programs paid special attention to rehabilitating which vulnerable group of former combatants?",
    opts: ["Former child soldiers", "Foreign mercenaries", "Retired senior military officers", "Paramilitary police units"],
    ans: 0
  },

  // ==========================================
  // TOPIC 9: SUDAN, DRC, & CÔTE D'IVOIRE CRISES
  // ==========================================
  {
    q: "The ongoing civil war in Sudan that began on 15 April 2023 is fundamentally a power struggle between which two forces?",
    opts: ["Sudanese Armed Forces (SAF) and Rapid Support Forces (RSF)", "Sudanese Armed Forces (SAF) and M23 Rebels", "Rapid Support Forces (RSF) and Boko Haram", "Sudanese Liberation Army and Allied Democratic Forces"],
    ans: 0
  },
  {
    q: "What globally significant record regarding displacement does Sudan hold as of 2025?",
    opts: ["Highest number of internally displaced people globally", "Lowest rate of cross-border refugees", "First country to fully resolve child displacement", "Largest urban-only migration displacement"],
    ans: 0
  },
  {
    q: "Which neighboring countries are explicitly cited as hosting large numbers of Sudanese refugees escaping the conflict?",
    opts: ["Chad, South Sudan, and Egypt", "Nigeria, Ghana, and Benin", "Kenya, Tanzania, and Uganda", "Morocco, Algeria, and Tunisia"],
    ans: 0
  },
  {
    q: "Which rebel group seized the major cities of Goma (Jan 2025) and Bukavu (Feb 2025) in eastern DRC?",
    opts: ["M23 rebel group", "Boko Haram", "Rapid Support Forces (RSF)", "Lord's Resistance Army"],
    ans: 0
  },
  {
    q: "Control over territory in eastern DRC offers access to strategic minerals such as gold, coltan, and what other major battery mineral?",
    opts: ["Cobalt", "Petroleum", "Uranium", "Bauxite"],
    ans: 0
  },
  {
    q: "How was Côte d'Ivoire geographically divided during the 2002–2007 Civil War?",
    opts: ["The north under rebel control, and the south under government control", "The east under UN control, and the west under French control", "The coastal south under rebels, and the interior north under government", "The urban cities under rebels, and rural areas under government"],
    ans: 0
  },
  {
    q: "What trigger caused the major 2010–2011 Ivorian Post-Election Crisis?",
    opts: ["Laurent Gbagbo refusing to concede defeat to Alassane Ouattara", "A military coup led by northern rebel commanders", "A dispute over cocoa export tariffs", "A border invasion by Malian jihadist groups"],
    ans: 0
  },
  {
    q: "On 13 March 2016, a major jihadist attack targeted civilians in which Ivorian beach resort location, killing 22 people?",
    opts: ["Grand-Bassam", "Kafolo", "Abidjan", "Yamoussoukro"],
    ans: 0
  },

  // ==========================================
  // TOPIC 10: NIGERIAN HISTORICAL & CONTEMPORARY CONFLICTS
  // ==========================================
  {
    q: "Which October 1967 tragedy during the Nigerian Civil War saw between 373 and 800 civilian deaths at the hands of federal troops?",
    opts: ["The Asaba massacre", "The Odi massacre", "The Odugbeho massacre", "The Akpanta massacre"],
    ans: 0
  },
  {
    q: "What major military assault occurred in Bayelsa State in 1999 following the killing of security operatives near an Ijaw town?",
    opts: ["The Odi massacre", "The Asaba massacre", "The Warri Crisis", "The Zangon Kataf crisis"],
    ans: 0
  },
  {
    q: "The Warri Crisis (1997–2003) in the Niger Delta involved ethno-communal fighting over local political control between the Ijaw, Urhobo, and which other group?",
    opts: ["Itsekiri", "Tiv", "Jukun", "Atyap"],
    ans: 0
  },
  {
    q: "Which environmental factor is cited as a primary driver pushing northern herders southward into competition with sedentary farmers?",
    opts: ["Desertification and climate change", "Severe coastal erosion", "Unprecedented snowfall", "Industrial deforestation in the south"],
    ans: 0
  },
  {
    q: "Which high-profile school abductions are associated with the Boko Haram / ISWAP insurgency?",
    opts: ["Chibok (2014) and Dapchi (2018)", "Kankara and Jangebe", "Asaba and Odi", "Zangon-Kataf and Kafolo"],
    ans: 0
  },
  {
    q: "What long-standing social dynamics primarily triggered the Jos Crises in Plateau State between 2001 and the 2010s?",
    opts: ["Indigene–settler tensions, political representation, and religious differences", "Pipeline vandalism and oil bunkering", "School kidnappings and cattle rustling", "Protests against British colonial rule"],
    ans: 0
  },
  {
    q: "Which conflict in Northwest Nigeria starting around 2018 is characterized by cattle rustling, school kidnappings, and a ransom economy?",
    opts: ["Banditry and Mass Kidnappings", "Maitatsine Religious Uprisings", "OPC–Hausa/Yoruba Clashes", "Tiv–Jukun Conflict"],
    ans: 0
  },
  {
    q: "What government action eventually de-escalated the long-standing Ife–Modakeke Conflict in Southwest Nigeria?",
    opts: ["Creation of Ife East Local Government Area (LGA)", "Presidential amnesty and financial stipends", "Deployment of UN peacekeepers", "Establishment of regional grazing reserves"],
    ans: 0
  },
  {
    q: "What triggered major urban riots in cities like Kaduna, Kano, and Jos between 1999 and 2002?",
    opts: ["Introduction of Sharia law in 12 northern states", "Creation of new oil revenue allocation formulas", "School abductions by militant groups", "Electoral defeat of Laurent Gbagbo"],
    ans: 0
  },
  {
    q: "Where did ethnic clashes involving the Oodua People’s Congress (OPC) and Hausa communities take place between 1999 and 2002?",
    opts: ["Lagos, Ibadan, and Sagamu", "Jos, Bukavu, and Goma", "Maiduguri, Yola, and Kano", "Warri, Odi, and Yenagoa"],
    ans: 0
  },
  {
    q: "Who was the leader of the anti-modern, anti-state radical Islamic sect that caused 10,000–18,000 deaths during the 1980–1985 uprisings?",
    opts: ["Mohammed Marwa Maitatsine", "Joseph Kony", "Ahmad al-Faqi al-Mahdi", "Dominic Ongwen"],
    ans: 0
  },

  // ==========================================
  // TOPIC 11: INTERNATIONAL CRIMINAL COURT (ICC) CASES
  // ==========================================
  {
    q: "Who was the sitting head of state indicted by the ICC for genocide, war crimes, and crimes against humanity related to the 2003 Darfur conflict?",
    opts: ["Omar al-Bashir", "Muammar Gaddafi", "Laurent Gbagbo", "Uhuru Kenyatta"],
    ans: 0
  },
  {
    q: "What prompted the ICC intervention in Kenya that led to charges against Uhuru Kenyatta and William Ruto?",
    opts: ["Ethnic and politically motivated post-election violence following the 2007 elections", "The destruction of ancient cultural shrines in Mombasa", "The recruitment of child soldiers in border regions", "A military coup attempting to overthrow the government"],
    ans: 0
  },
  {
    q: "Why were the ICC charges against political leaders in the Kenya post-election case ultimately withdrawn?",
    opts: ["Witness intimidation and lack of state cooperation", "The accused were proven completely innocent by new DNA evidence", "The ICC lost legal jurisdiction over African nations", "The United Nations Security Council ordered a full pardon"],
    ans: 0
  },
  {
    q: "Who became the first person ever convicted by the International Criminal Court (ICC) in 2012?",
    opts: ["Thomas Lubanga", "Germain Katanga", "Bosco Ntaganda", "Jean-Pierre Bemba"],
    ans: 0
  },
  {
    q: "Which Congolese warlord received a 30-year prison sentence from the ICC—the longest sentence handed down by the court?",
    opts: ["Bosco Ntaganda", "Thomas Lubanga", "Charles Blé Goudé", "Ahmad al-Faqi al-Mahdi"],
    ans: 0
  },
  {
    q: "What unique legal aspect defined the ICC prosecution of Lord's Resistance Army (LRA) commander Dominic Ongwen?",
    opts: ["He was both a victim (abducted as a child soldier) and a perpetrator of war crimes", "He was the first head of state tried in absentia", "He was acquitted due to diplomatic immunity", "He was prosecuted solely for environmental destruction"],
    ans: 0
  },
  {
    q: "What were the ICC charges against former Ivorian President Laurent Gbagbo and youth leader Charles Blé Goudé?",
    opts: ["Crimes against humanity: murder, rape, and persecution following the 2010 election", "War crimes: illegal destruction of oil pipelines", "Genocide against minority ethnic groups in neighbouring Mali", "Pillaging and illegal gold extraction"],
    ans: 0
  },
  {
    q: "Former DRC Vice President Jean-Pierre Bemba was charged by the ICC for atrocities committed by his troops in which country?",
    opts: ["Central African Republic (CAR)", "Rwanda", "Uganda", "Sudan"],
    ans: 0
  },
  {
    q: "Ahmad al-Faqi al-Mahdi was prosecuted and sentenced to 9 years imprisonment by the ICC for what milestone war crime in Mali (2012)?",
    opts: ["Intentional destruction of cultural and historical property in Timbuktu", "Recruitment of child soldiers in Bamako", "Use of chemical weapons against civilian populations", "Forcible deportation of ethnic minorities"],
    ans: 0
  },
  {
    q: "The ongoing ICC investigation regarding Myanmar focuses primarily on crimes against humanity committed against which population?",
    opts: ["Rohingya Muslim minority", "Karen ethnic group", "Kachin civilian militia", "Mon agricultural workers"],
    ans: 0
  },
  {
    q: "What key principle regarding sitting national leaders was established by the ICC indictment of Omar al-Bashir?",
    opts: ["State leaders cannot claim official immunity when orchestrating mass atrocities", "Sitting presidents are entirely exempt from international law until they resign", "Only military commanders, not political leaders, can be tried by the ICC", "Heads of state can only be tried by national domestic courts"],
    ans: 0
  },
  {
    q: "In the DRC cases involving Lubanga and Ntaganda, which specific practice involving minors was firmly established as a prosecutable war crime?",
    opts: ["Recruitment and use of child soldiers under the age of 15", "Forcing children to work in agricultural plantations", "Failure to provide mandatory primary education", "Denial of international travel visas to minors"],
    ans: 0
  },
  {
    q: "Which Janjaweed commander surrendered voluntarily in 2020 and stood trial before the ICC for Darfur atrocities?",
    opts: ["Ali Kushayb (Ali Muhammad Ali Abd-Al-Rahman)", "Ahmad Harun", "Joseph Kony", "Germain Katanga"],
    ans: 0
  },
  {
    q: "Why does the ICC maintain jurisdiction over forced deportation in the Rohingya crisis despite Myanmar not being an ICC state party?",
    opts: ["An element of the crime (entry/deportation) occurred on the territory of Bangladesh, an ICC state party", "The UN General Assembly dissolved Myanmar's sovereignty", "All Asian nations are automatically subject to mandatory ICC trials", "Myanmar signed a special temporary agreement allowing all international trials"],
    ans: 0
  },
  // ==========================================
  // TOPIC 12: CONFLICT TYPES & STAGES
  // ==========================================
  {
    q: "A conflict that occurs between two or more distinct nations or sovereign entities is classified as what?",
    opts: ["Inter-state conflict", "Intra-state conflict", "Inter-personal conflict", "Intra-personal conflict"],
    ans: 0
  },
  {
    q: "A civil war occurring within the boundaries of a single recognized nation-state is an example of what?",
    opts: ["Intra-state conflict", "Inter-state conflict", "Global systemic conflict", "Structural arbitration"],
    ans: 0
  },
  {
    q: "Psychological tension or internal moral dilemmas experienced within a single individual constitute what type of conflict?",
    opts: ["Intra-personal conflict", "Inter-personal conflict", "Inter-group conflict", "Structural conflict"],
    ans: 0
  },
  {
    q: "Disagreements or power struggles occurring between two distinct social, ethnic, or political organizations are called what?",
    opts: ["Inter-group conflict", "Intra-group conflict", "Intra-personal conflict", "Micro-level conflict"],
    ans: 0
  },
  {
    q: "What is the final phase of the classic conflict cycle, following resolution or de-escalation?",
    opts: ["Conflict aftermath / Post-conflict stage", "Latent conflict", "Manifest conflict", "Felt conflict"],
    ans: 0
  },
  {
    q: "When a conflict remains active but stabilizes without immediate physical violence or movement toward resolution, it is in what state?",
    opts: ["Stalemate / Protracted state", "Latent phase", "Crisis escalation stage", "Reconciliation phase"],
    ans: 0
  },
  {
    q: "The stage where parties begin to recognize their differing goals and experience emotional responses such as anger or mistrust is called what?",
    opts: ["Perceived / Felt conflict stage", "Manifest conflict stage", "Post-conflict stage", "Arbitration stage"],
    ans: 0
  },

  // ==========================================
  // TOPIC 13: THEORIES OF CONFLICT & BEHAVIOR
  // ==========================================
  {
    q: "Which major sociological theory argues that conflict arises primarily due to competition over scarce resources and social power?",
    opts: ["Conflict Theory", "Structural Functionalism", "Symbolic Interactionism", "Social Identity Theory"],
    ans: 0
  },
  {
    q: "Which theory posits that individuals organize their self-concept based on group membership, leading to in-group favoring and out-group hostility?",
    opts: ["Social Identity Theory", "Relative Deprivation Theory", "Greed vs. Grievance Theory", "Human Needs Theory"],
    ans: 0
  },
  {
    q: "According to John Burton's Human Needs Theory, violent conflicts occur when what fundamental human requirements are denied?",
    opts: ["Needs for identity, security, and recognition", "Needs for luxury goods and foreign capital", "Needs for military superiority", "Needs for territorial conquest"],
    ans: 0
  },
  {
    q: "The theory suggesting that people become aggressive when they perceive a gap between what they expect and what they actually achieve is known as what?",
    opts: ["Relative Deprivation Theory", "Realistic Group Conflict Theory", "Game Theory", "Structural Functionalism"],
    ans: 0
  },
  {
    q: "The economic framework contrasting profit-seeking incentives (looting/resources) with political or social injustice in civil wars is called what?",
    opts: ["Greed versus Grievance framework", "Opportunity Cost Theory", "Dependency Theory", "Zero-Sum Theory"],
    ans: 0
  },

  // ==========================================
  // TOPIC 14: DIPLOMACY & PEACEBUILDING STRATEGIES
  // ==========================================
  {
    q: "Official, state-to-state diplomatic relations conducted by accredited government officials are known as what?",
    opts: ["Track 1 Diplomacy", "Track 2 Diplomacy", "Track 3 Diplomacy", "Multi-Track Diplomacy"],
    ans: 0
  },
  {
    q: "Unofficial, informal problem-solving workshops involving non-governmental experts and civil society leaders are referred to as what?",
    opts: ["Track 2 Diplomacy", "Track 1 Diplomacy", "Coercive Diplomacy", "Shuttle Diplomacy"],
    ans: 0
  },
  {
    q: "Grassroots initiatives involving local community members, local NGOs, and ordinary citizens are categorized as what?",
    opts: ["Track 3 Diplomacy", "Track 1 Diplomacy", "Gunboat Diplomacy", "Track 2 Diplomacy"],
    ans: 0
  },
  {
    q: "What term describes peace processes that combine government officials, civil society, business elites, and local grassroots groups?",
    opts: ["Multi-Track Diplomacy", "Unilateral Diplomacy", "Bilateral Arbitration", "State-Centric Peacekeeping"],
    ans: 0
  },
  {
    q: "What is the primary objective of Preventive Diplomacy?",
    opts: ["To prevent disputes from arising between parties or escalating into armed conflict", "To reconstruct physical infrastructure after war", "To prosecute war criminals in international courts", "To enforce economic sanctions on hostile nations"],
    ans: 0
  },
  {
    q: "Measures designed to build mutual trust and reduce fear or suspicion among conflicting parties are known as what?",
    opts: ["Confidence-Building Measures (CBMs)", "Economic Sanctions", "Disarmament Commands", "Demographic Adjustments"],
    ans: 0
  },

  // ==========================================
  // TOPIC 15: REGIONAL ORGANIZATIONS & SECURITY
  // ==========================================
  {
    q: "What is the primary continental body responsible for promoting peace, security, and stability in Africa?",
    opts: ["African Union (AU)", "Economic Community of West African States (ECOWAS)", "Southern African Development Community (SADC)", "East African Community (EAC)"],
    ans: 0
  },
  {
    q: "Which standing decision-making organ of the African Union is dedicated to the prevention, management, and resolution of conflicts?",
    opts: ["Peace and Security Council (PSC)", "Pan-African Parliament", "African Court of Justice", "Economic Council"],
    ans: 0
  },
  {
    q: "The African Standby Force (ASF) was established to operate under the direction of which institution?",
    opts: ["African Union", "United Nations Security Council", "ECOWAS Monitoring Group", "International Criminal Court"],
    ans: 0
  },
  {
    q: "Which Southern African organization has deployed regional peacekeeping forces to manage security crises, such as in Mozambique?",
    opts: ["SADC (Southern African Development Community)", "ECOWAS", "AMU", "IGAD"],
    ans: 0
  },
  {
    q: "Which East African regional body has historically led mediation efforts in the Horn of Africa, including South Sudan and Somalia?",
    opts: ["IGAD (Intergovernmental Authority on Development)", "SADC", "ECCAS", "CEMAC"],
    ans: 0
  },

  // ==========================================
  // TOPIC 16: HUMAN RIGHTS & INTERNATIONAL HUMANITARIAN LAW
  // ==========================================
  {
    q: "Which international legal framework specifically regulates the conduct of armed conflict and seeks to limit its effects?",
    opts: ["International Humanitarian Law (IHL)", "International Trade Law", "Customary Land Law", "Maritime Boundary Law"],
    ans: 0
  },
  {
    q: "The fundamental agreements forming the core of International Humanitarian Law are collectively known as what?",
    opts: ["The Geneva Conventions", "The Treaty of Versailles", "The Rome Statute", "The Charter of the United Nations"],
    ans: 0
  },
  {
    q: "In International Humanitarian Law, what principle dictates that combatants must distinguish between civilian populations and military targets?",
    opts: ["Principle of Distinction", "Principle of Proportionality", "Principle of Military Necessity", "Principle of Non-Refoulement"],
    ans: 0
  },
  {
    q: "Which IHL principle prohibits attacks if the expected civilian harm is excessive in relation to the concrete military advantage?",
    opts: ["Principle of Proportionality", "Principle of Distinction", "Principle of Reciprocity", "Principle of Sovereignty"],
    ans: 0
  },
  {
    q: "What cornerstone rule of refugee law prevents a nation from returning a refugee to a territory where their life or freedom is threatened?",
    opts: ["Principle of Non-Refoulement", "Principle of Extradition", "Principle of Universal Jurisdiction", "Principle of Territorial Sovereignty"],
    ans: 0
  },
  {
    q: "Which universal document adopted by the UN General Assembly in 1948 outlines fundamental human rights to be protected globally?",
    opts: ["Universal Declaration of Human Rights (UDHR)", "African Charter on Human Rights", "Geneva Protocol", "Declaration of Helsinki"],
    ans: 0
  },

  // ==========================================
  // TOPIC 17: TRANSITIONAL JUSTICE & RECONCILIATION
  // ==========================================
  {
    q: "What does the concept of 'Transitional Justice' refer to?",
    opts: ["Full range of processes and mechanisms associated with a society's attempts to come to terms with past large-scale abuses", "Immediate transfer of military personnel to civil courts", "Drafting new national commercial business laws", "Temporary legal bans on political parties"],
    ans: 0
  },
  {
    q: "In transitional justice, mechanisms focused on uncovering historical facts about past violations rather than prosecution are called what?",
    opts: ["Truth Commissions", "Military Tribunals", "Summary Courts", "Arbitration Panels"],
    ans: 0
  },
  {
    q: "Providing financial, symbolic, or social support to victims of human rights abuses as part of transitional justice is known as what?",
    opts: ["Reparations", "Amnesty", "Arbitration", "Restitution of Title"],
    ans: 0
  },
  {
    q: "What is 'retributive justice' primarily centered upon?",
    opts: ["Punishing offenders proportionately for the crimes committed", "Rehabilitating victims and offenders through dialogue", "Restoring land back to indigenous owners", "Promoting economic trade agreements"],
    ans: 0
  },
  {
    q: "The process of screening public employees to remove individuals responsible for human rights violations is known as what?",
    opts: ["Vetting / Lustration", "Demobilization", "Reconstruction", "Arbitration"],
    ans: 0
  },

  // ==========================================
  // TOPIC 18: GENDER, YOUTH, & CONFLICT
  // ==========================================
  {
    q: "Which landmark UN Security Council Resolution (passed in 2000) formally recognized the impact of armed conflict on women and girls?",
    opts: ["UNSCR 1325", "UNSCR 2250", "UNSCR 1244", "UNSCR 2417"],
    ans: 0
  },
  {
    q: "UN Security Council Resolution 2250 focuses on the critical role of which demographic group in peacebuilding and conflict resolution?",
    opts: ["Youth", "Traditional Elders", "Women", "Military Veterans"],
    ans: 0
  },
  {
    q: "The systematic use of sexual violence during armed conflict as a military tactic is classified under international law as what?",
    opts: ["A war crime and crime against humanity", "A misdemeanor offense", "An unavoidable consequence of war", "A domestic civil dispute"],
    ans: 0
  },
  {
    q: "Including gender perspectives in all stages of peacebuilding and policy design is referred to as what?",
    opts: ["Gender Mainstreaming", "Gender Neutrality", "Gender Isolation", "Structural Parity"],
    ans: 0
  },

  // ==========================================
  // TOPIC 19: EARLY WARNING & CRISIS RESPONSE
  // ==========================================
  {
    q: "What is the primary function of a Conflict Early Warning System (CEWS)?",
    opts: ["To collect and analyze data to predict, detect, and prevent emerging conflicts", "To deploy military forces to active war zones", "To calculate post-war damage costs", "To draft national constitutions"],
    ans: 0
  },
  {
    q: "What is ECOWARN in the context of West African security?",
    opts: ["ECOWAS Early Warning and Response Network", "European Coalition for War Reduction", "Eastern Coast Operational Risk System", "Economic Western Area Rehabilitation Plan"],
    ans: 0
  },
  {
    q: "In early warning methodologies, indicators such as sudden increases in hate speech or stockpiling of weapons are classified as what?",
    opts: ["Proximate (accelerating) indicators", "Structural (root) factors", "Systemic baseline factors", "Post-conflict indicators"],
    ans: 0
  },
  {
    q: "Structural causes of conflict (like poverty or systemic discrimination) are also known as what type of factors?",
    opts: ["Root causes / Latent factors", "Triggers / Direct drivers", "Accelerators", "Proximate factors"],
    ans: 0
  },

  // ==========================================
  // TOPIC 20: RESOURCES, CLIMATE, & EMERGING CONFLICTS
  // ==========================================
  {
    q: "The phenomenon where countries rich in non-renewable natural resources experience poorer economic growth and worse security outcomes is called what?",
    opts: ["Resource Curse (Paradox of Plenty)", "Dutch Disease", "Economic Stagnation", "Structural Deficit"],
    ans: 0
  },
  {
    q: "Conflict minerals such as tantalum, tin, tungsten, and gold extracted in eastern DRC are collectively referred to as what?",
    opts: ["3TG minerals", "Heavy rare earths", "Strategic base metals", "Precious battery alloys"],
    ans: 0
  },
  {
    q: "How does climate change act as a 'threat multiplier' in conflict regions?",
    opts: ["It exacerbates existing vulnerabilities, resource scarcity, and displacement", "It directly creates ideological terrorist doctrines", "It reduces the physical accuracy of modern weaponry", "It completely stops trade between neighboring nations"],
    ans: 0
  },
  {
    q: "Disputes between upstream and downstream nations over shared river basins (such as the Nile) are examples of what type of conflict?",
    opts: ["Hydro-political conflict", "Agrarian conflict", "Boundary demarcation war", "Maritime piracy"],
    ans: 0
  },

  // ==========================================
  // TOPIC 21: DISARMAMENT, ARMS CONTROL, & TERRORISM
  // ==========================================
  {
    q: "The proliferation of Small Arms and Light Weapons (SALW) is particularly dangerous because SALWs are what?",
    opts: ["Easy to obtain, operate, conceal, and transport", "Exclusively manufactured by non-state militias", "Incapable of causing civilian casualties", "Regulated strictly by local municipal councils"],
    ans: 0
  },
  {
    q: "What global treaty adopted in 2013 regulates the international trade in conventional arms to prevent their illicit diversion?",
    opts: ["Arms Trade Treaty (ATT)", "Non-Proliferation Treaty (NPT)", "Ottawa Treaty", "Chemical Weapons Convention"],
    ans: 0
  },
  {
    q: "The international agreement prohibiting the use, stockpiling, production, and transfer of anti-personnel landmines is known as what?",
    opts: ["Ottawa Treaty (Mine Ban Treaty)", "Geneva Protocol", "Oslo Accords", "Kinshasa Agreement"],
    ans: 0
  },
  {
    q: "The process of removing explosives, landmines, and unexploded ordnance (UXO) from post-conflict areas is called what?",
    opts: ["Demining / Humanitarian Mine Action", "Disarmament", "Demobilization", "Vetting"],
    ans: 0
  },
  {
    q: "Programmes aimed at preventing individuals from joining extremist groups or reversing extremist ideologies are known as what?",
    opts: ["PVE / CVE (Preventing / Countering Violent Extremism)", "DDR initiatives", "Sanctions regimes", "Coercive containment"],
    ans: 0
  },

  // ==========================================
  // TOPIC 22: NIGERIAN LEGAL & CONSTITUTIONAL ISSUES
  // ==========================================
  {
    q: "Under the 1999 Constitution of Nigeria (as amended), which tier of government holds primary authority over national security and police control?",
    opts: ["Federal Government", "State Governments", "Local Governments", "Traditional Councils"],
    ans: 0
  },
  {
    q: "What contentious legal clause in Nigeria gives state governors no direct operational command over state police commissioners?",
    opts: ["Centralized police structure under Section 214/215", "Land Use Act provision", "Derivation principle clause", "State of Emergency provision"],
    ans: 0
  },
  {
    q: "The controversial 1978 legislation in Nigeria that vests all urban land within a state in the state governor is called what?",
    opts: ["Land Use Act", "Customary Rights Order", "Territorial Allocation Act", "Agricultural Reserve Decree"],
    ans: 0
  },
  {
    q: "Which constitutional principle in Nigeria dictates that public appointments must reflect the diverse ethnic and regional character of the nation?",
    opts: ["Federal Character Principle", "Derivation Formula", "Quotas and Entitlements Act", "Zoning Provision"],
    ans: 0
  },
  {
    q: "The fiscal distribution principle returning a percentage of revenue directly to the state where natural resources were extracted is called what?",
    opts: ["Derivation Principle", "Federal Allocation Principle", "Equalization Grant", "Statutory Revenue Sharing"],
    ans: 0
  },

  // ==========================================
  // TOPIC 23: KEY HISTORICAL PEACE AGREEMENTS
  // ==========================================
  {
    q: "The 1993 accords intended to end the Rwandan Civil War between the government and the RPF were known as what?",
    opts: ["Arusha Accords", "Lusaka Agreement", "Maputo Protocol", "Lomé Agreement"],
    ans: 0
  },
  {
    q: "Which 2005 peace agreement ended the long-running second Sudanese civil war and paved the way for South Sudan's 2011 independence?",
    opts: ["Comprehensive Peace Agreement (CPA)", "Abuja Peace Accords", "Darfur Peace Agreement", "Naivasha Protocol"],
    ans: 0
  },
  {
    q: "The 1999 agreement signed to end the civil war in Sierra Leone, which granted controversial amnesties to rebel leaders, was called what?",
    opts: ["Lomé Peace Agreement", "Conakry Accord", "Freetown Decree", "Monrovia Protocol"],
    ans: 0
  },
  {
    q: "Which agreement signed in 1999 aimed at bringing a ceasefire to the complex multi-nation conflict in the Democratic Republic of Congo?",
    opts: ["Lusaka Ceasefire Agreement", "Pretoria Accord", "Sun City Agreement", "Goma Accord"],
    ans: 0
  },

  // ==========================================
  // TOPIC 24: MEDIA, MISINFORMATION, & HYBRID WARFARE
  // ==========================================
  {
    q: "The intentional creation and spreading of false information with the explicit intent to deceive or harm is defined as what?",
    opts: ["Disinformation", "Misinformation", "Malinformation", "Unverified reporting"],
    ans: 0
  },
  {
    q: "The unintentional spread of incorrect or false information without malicious intent is called what?",
    opts: ["Misinformation", "Disinformation", "Propaganda", "Strategic deception"],
    ans: 0
  },
  {
    q: "A conflict strategy that blends conventional warfare, irregular tactics, cyberattacks, and fake news campaigns is called what?",
    opts: ["Hybrid Warfare", "Asymmetric Warfare", "Conventional Warfare", "Total War"],
    ans: 0
  },
  {
    q: "Conflict between two sides whose military power, resources, and tactics differ significantly is known as what?",
    opts: ["Asymmetric Warfare", "Symmetric Conflict", "Conventional Engagement", "Bilateral Conflict"],
    ans: 0
  },

  // ==========================================
  // TOPIC 25: ADDITIONAL ADVANCED CONFLICT CONCEPTS
  // ==========================================
  {
    q: "What term describes peace that is maintained merely by the absence of open physical violence without addressing underlying structural causes?",
    opts: ["Negative Peace", "Positive Peace", "Structural Peace", "Sustainable Peace"],
    ans: 0
  },
  {
    q: "What term (coined by Johan Galtung) describes a state where social justice, equality, and structural harmony are fully achieved?",
    opts: ["Positive Peace", "Negative Peace", "Armed Neutrality", "Latent Harmony"],
    ans: 0
  },
  {
    q: "Violence built into social, economic, and political structures that prevents people from meeting their basic human needs is called what?",
    opts: ["Structural Violence", "Direct Violence", "Cultural Violence", "Physical Violence"],
    ans: 0
  },
  {
    q: "Aspects of culture, language, religion, or ideology used to justify or legitimize direct or structural violence constitute what?",
    opts: ["Cultural Violence", "Systemic Discrimination", "Symbolic Aggression", "Latent Oppression"],
    ans: 0
  },

  // ==========================================
  // TOPIC 26: GENERAL KNOWLEDGE & RECAP CONFLICT DATA
  // ==========================================
  {
    q: "The diplomatic principle of respecting a sovereign nation's right to manage its internal affairs without external interference is known as what?",
    opts: ["Non-Interference / Sovereignty", "Universal Jurisdiction", "Responsibility to Protect (R2P)", "Extraterritoriality"],
    ans: 0
  },
  {
    q: "The global political commitment endorsed by the UN in 2005 to prevent genocide, war crimes, ethnic cleansing, and crimes against humanity is known as what?",
    opts: ["Responsibility to Protect (R2P)", "Geneva Accord", "Millennium Security Declaration", "Universal Human Rights Mandate"],
    ans: 0
  },
  {
    q: "Which specialized international judicial body sits at The Hague to settle legal disputes submitted to it by sovereign states?",
    opts: ["International Court of Justice (ICJ)", "International Criminal Court (ICC)", "Permanent Court of Arbitration", "Special Court for Security"],
    ans: 0
  },
  {
    q: "In contrast to the ICJ (which handles state-vs-state disputes), what entity prosecutes individual people for mass atrocities?",
    opts: ["International Criminal Court (ICC)", "International Court of Justice (ICJ)", "UN Security Council", "Human Rights Council"],
    ans: 0
  },
  {
    q: "In ADR terminology, what is a key distinction between mediation and arbitration?",
    opts: ["A mediator facilitates a solution; an arbitrator renders a binding decision", "A mediator enforces military force; an arbitrator writes court fines", "An arbitrator is always a government minister; a mediator is a judge", "Mediation occurs only in open courts; arbitration occurs in private homes"],
    ans: 0
  },
  {
    q: "What term describes the process where parties in a conflict voluntarily isolate themselves or break off contact completely?",
    opts: ["Avoidance / Withdrawal", "Compromise", "Accommodation", "Confrontation"],
    ans: 0
  },
  {
    q: "A conflict resolution approach where both sides yield some demands to reach a mutually acceptable middle ground is called what?",
    opts: ["Compromise", "Domination", "Avoidance", "Collaboration"],
    ans: 0
  },
  {
    q: "When one party in a dispute surrenders its own interests to satisfy the concerns of the opposing party, this strategy is called what?",
    opts: ["Accommodation", "Competition", "Collaboration", "Arbitration"],
    ans: 0
  },
  {
    q: "An unyielding conflict strategy where one party pursues its own goals at the complete expense of the other side is called what?",
    opts: ["Competition / Domination", "Compromise", "Mediation", "Avoidance"],
    ans: 0
  },
  {
    q: "In humanitarian operations, what core principle ensures that assistance is provided based solely on need, without discrimination?",
    opts: ["Impartiality", "Reciprocity", "Sovereignty", "Conditionality"],
    ans: 0
  },
  {
    q: "Which principle dictates that humanitarian actors must not take sides in hostilities or engage in controversies of a political, racial, or religious nature?",
    opts: ["Neutrality", "Distinction", "Proportionality", "Amnesty"],
    ans: 0
  },
  {
    q: "Humanitarian operations must act autonomously from political, economic, or military objectives under which core principle?",
    opts: ["Independence", "Legality", "Jurisdiction", "Bilateralism"],
    ans: 0
  },
  {
    q: "The deliberate destruction, in whole or in part, of a national, ethnic, racial, or religious group is legally defined as what?",
    opts: ["Genocide", "War crime", "Insurgency", "Mutiny"],
    ans: 0
  },
  {
    q: "Broad, systematic attacks directed against any civilian population, with knowledge of the attack, constitute what legal category?",
    opts: ["Crimes against humanity", "Piracy", "Seditious libel", "Minor civil breach"],
    ans: 0
  },
  {
    q: "Grave breaches of the Geneva Conventions committed during armed conflict (e.g., willful killing, torture, intention attack on hospitals) are termed what?",
    opts: ["War crimes", "Crimes against peace", "Structural offenses", "Administrative violations"],
    ans: 0
  },
  {
    q: "The deployment of military forces to enforce a peace agreement that parties have violated or where consent is lacking is known as what?",
    opts: ["Peace Enforcement", "Peacekeeping", "Peacebuilding", "Preventive Diplomacy"],
    ans: 0
  },

  // ==========================================
  // TOPIC 27: CLOSING RECAP & GENERAL STUDIES
  // ==========================================
  {
    q: "What term describes the post-conflict phase dedicated to rebuilding physical infrastructure, institutions, and community trust?",
    opts: ["Post-Conflict Reconstruction", "Pre-emptive Containment", "Latent Mobilization", "Demarcation"],
    ans: 0
  },
  {
    q: "In security studies, what is the 'Security Dilemma'?",
    opts: ["Actions taken by one state to increase its security cause other states to feel insecure and arm themselves", "A state facing a choice between economic growth and environmental safety", "A military commander deciding between defense and retreat", "A citizen deciding whether to join the police or army"],
    ans: 0
  },
  {
    q: "Which theory of international relations assumes that states are the primary actors driven by self-interest, power, and survival in an anarchy?",
    opts: ["Realism", "Liberalism", "Constructivism", "Marxism"],
    ans: 0
  },
  {
    q: "Which international relations school of thought emphasizes the role of international institutions, trade, and diplomacy in fostering cooperation?",
    opts: ["Liberalism / Neoliberalism", "Realism", "Realpolitik", "Mercantilism"],
    ans: 0
  },
  {
    q: "What concept highlights how social identities like ethnicity, state origin, and religion intersect to form unique experiences of discrimination or privilege?",
    opts: ["Intersectionality", "Structural Functionalism", "Cohesion Theory", "Bipolarity"],
    ans: 0
  },
  {
    q: "When a third-party state or non-state actor fights another power indirectly through third-party combatants, the conflict is termed what?",
    opts: ["Proxy War", "Total War", "Direct Confrontation", "Civil Rebellion"],
    ans: 0
  },
  {
    q: "The deliberate manipulation of history, identity, or grievances to mobilize a population for war is known as what?",
    opts: ["Conflict Mobilization", "Demobilization", "Mediation", "Reconciliation"],
    ans: 0
  },
  {
    q: "Which term describes the unlawful use of force or violence against persons or property to intimidate or coerce a government or civilians for political goals?",
    opts: ["Terrorism", "Conventional warfare", "Civil disobedience", "Arbitration"],
    ans: 0
  },
  {
    q: "What mechanism allows local communities to manage natural resource access agreements directly between herders and farmers?",
    opts: ["Local Resource Management Agreements / Grazing Commitments", "Federal Judicial Sanctions", "International Trade Agreements", "Statutory Land confiscation"],
    ans: 0
  },
  {
    q: "Which peacekeeping generation involves multidisciplinary components like police, civilian administrators, human rights monitors, and electoral supervisors?",
    opts: ["Multidimensional Peacekeeping", "Traditional Peacekeeping", "Peace Enforcement", "Unilateral Intervention"],
    ans: 0
  },
  {
    q: "What is the primary role of a peacebuilder during the post-conflict phase?",
    opts: ["Addressing root causes of conflict and supporting sustainable peace structures", "Enforcing strict martial law indefinitely", "Conducting military combat patrols", "Representing state actors in commercial disputes"],
    ans: 0
  },
  {
    q: "What type of justice focuses on repairing the harm caused to victims and restoring community harmony through dialogue?",
    opts: ["Restorative Justice", "Retributive Justice", "Punitive Justice", "Distributive Justice"],
    ans: 0
  },
  {
    q: "Which term describes a peaceful state where equitable resource distribution and social justice are structural realities?",
    opts: ["Positive Peace", "Negative Peace", "Armed Truce", "Temporary Ceasefire"],
    ans: 0
  },
  {
    q: "What is the primary goal of the Disarmament component in a DDR program?",
    opts: ["Collection, documentation, control, and disposal of small arms and heavy weapons", "Retraining ex-combatants in farming techniques", "Distributing monthly stipends to civilians", "Rebuilding destroyed schools"],
    ans: 0
  },
  {
    q: "What is the ultimate objective of the Reintegration component in a DDR program?",
    opts: ["Assisting ex-combatants to acquire sustainable civilian employment and social acceptance", "Transporting weapons to national armories", "Organizing national parliamentary elections", "Issuing foreign travel passports"],
    ans: 0
  },
  {
    q: "Which international agency leads the global response to protect and support refugees worldwide?",
    opts: ["UNHCR", "UNICEF", "UNDP", "UNESCO"],
    ans: 0
  },
  {
    q: "Which document guarantees basic standards for the treatment of internally displaced persons (IDPs)?",
    opts: ["Guiding Principles on Internal Displacement", "Geneva Convention III", "Treaty of Rome", "SADC Protocol"],
    ans: 0
  },
  {
    q: "What term describes non-violent actions such as strikes, boycotts, and rallies used to demand political or social change?",
    opts: ["Civil Resistance / Non-violent Action", "Armed Insurgency", "Hybrid Aggression", "Mutiny"],
    ans: 0
  },
  {
    q: "What is the core function of a mediator during formal peace talks?",
    opts: ["To facilitate constructive communication and help parties reach their own agreement", "To impose a legally binding verdict on all parties", "To command military forces in the area", "To arrest representatives who disagree"],
    ans: 0
  },
  {
    q: "Which African regional peace agreement signed in 2003 brought an end to the Second Liberian Civil War?",
    opts: ["Accra Comprehensive Peace Agreement", "Lomé Agreement", "Arusha Accords", "Addis Ababa Agreement"],
    ans: 0
  },
  {
    q: "What is the principal aim of conflict mapping in peace studies?",
    opts: ["To visually map out actors, relationships, issues, and power dynamics in a conflict", "To draw military topographic maps for weapon deployment", "To measure the physical distance between national capitals", "To calculate property tax allocations"],
    ans: 0
  },
  {
    q: "Which term best describes an agreement between warring parties to temporarily or permanently suspend active fighting?",
    opts: ["Ceasefire", "Demarcation", "Arbitration", "Lustration"],
    ans: 0
  },
  {
    q: "What is the ultimate purpose of studying peace and conflict dynamics?",
    opts: ["To understand the causes of violence and develop sustainable pathways to peace", "To learn how to win armed military battles", "To eliminate the need for national constitutions", "To replace civil law courts with military tribunals"],
    ans: 0
  }
];
