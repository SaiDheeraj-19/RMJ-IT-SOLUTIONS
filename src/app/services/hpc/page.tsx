"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Server, Cpu, Network, HardDrive, Zap, Shield } from "lucide-react";

const pillars = [
    {
        icon: <Server className="w-6 h-6" />,
        title: "HPC Cluster Design & Deployment",
        brief: "We architect and deploy high-performance computing clusters — from small GPU workstations for AI research labs to multi-node clusters for large-scale simulation, data processing, and model training workloads.",
        points: [
            "Multi-node cluster architecture with InfiniBand or 100GbE interconnects",
            "GPU cluster configuration: NVIDIA A100, H100, RTX 4090",
            "Slurm and PBS job scheduler setup and optimisation",
            "MPI and OpenMP parallel programming environment setup",
            "CUDA toolkit, cuDNN, and NCCL installation and tuning",
            "Benchmarking with LINPACK, HPL, and STREAM",
        ],
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "AI Workstation Configuration",
        brief: "Purpose-built AI workstations for deep learning research, computer vision development, and LLM fine-tuning. Every component is selected for thermal efficiency, memory bandwidth, and compute density.",
        points: [
            "Custom GPU workstation builds for ML/DL workflows",
            "Driver stack: CUDA, ROCm, and PyTorch/TensorFlow profiling",
            "NVMe RAID arrays for ultra-fast dataset I/O",
            "ECC memory configuration for training stability",
            "Water-cooling and thermal management systems",
            "Remote access via JupyterHub and VS Code Server",
        ],
    },
    {
        icon: <Network className="w-6 h-6" />,
        title: "Distributed Training Infrastructure",
        brief: "Training large models requires more than one GPU. We set up distributed training environments using Horovod, PyTorch DDP, and DeepSpeed — enabling efficient multi-GPU and multi-node training for large-scale ML.",
        points: [
            "PyTorch Distributed Data Parallel (DDP) configuration",
            "DeepSpeed ZeRO optimisation for LLM training",
            "Horovod multi-GPU training setup",
            "NCCL communication backend tuning",
            "RDMA over InfiniBand for low-latency gradient exchange",
            "Checkpoint management and fault-tolerant training",
        ],
    },
    {
        icon: <HardDrive className="w-6 h-6" />,
        title: "High-Performance Storage Systems",
        brief: "HPC workloads are I/O bound as much as compute bound. We design parallel file systems and tiered storage architectures that eliminate storage bottlenecks in your data pipelines and training loops.",
        points: [
            "Lustre and GPFS parallel filesystem deployment",
            "Ceph distributed storage cluster configuration",
            "NVMe-oF fabric for low-latency block storage",
            "Tiered storage: NVMe → NAS → Object Storage (S3)",
            "Data staging pipelines for training dataset loading",
            "Backup and disaster recovery for research data",
        ],
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Performance Optimisation",
        brief: "Raw hardware is only part of the equation. We tune your software stack — memory allocation, kernel compilation, I/O scheduling, and network configuration — to extract maximum utilisation from every resource.",
        points: [
            "NUMA topology awareness and CPU affinity tuning",
            "GPU memory management and batch size optimisation",
            "Mixed-precision training (FP16/BF16) with AMP",
            "Profiling with NVIDIA Nsight and PyTorch Profiler",
            "Network stack tuning for high-throughput data transfer",
            "Operating system kernel parameter optimisation",
        ],
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Infrastructure Management & Monitoring",
        brief: "HPC systems require active management. We deploy monitoring stacks, resource allocation policies, and automated alerting so your infrastructure runs at peak efficiency and downtime is anticipated, not discovered.",
        points: [
            "Grafana + Prometheus monitoring dashboards",
            "NVIDIA DCGM GPU telemetry integration",
            "Automated health checks and failure alerting",
            "Resource quota management for multi-user environments",
            "OS image management with Warewulf or xCAT",
            "Predictive maintenance via hardware telemetry analysis",
        ],
    },
];

const process = [
    { num: "01", title: "Workload Assessment", desc: "We assess your compute workloads in depth — what algorithms, what data volumes, what parallelism strategies are possible. This determines the optimal hardware configuration and software stack before any procurement happens." },
    { num: "02", title: "Architecture Design", desc: "We produce a detailed system architecture document: compute nodes, storage tiers, interconnect topology, cooling infrastructure, and power requirements. Every design decision is justified with performance projections." },
    { num: "03", title: "Procurement Guidance", desc: "We provide vendor-agnostic procurement recommendations — NVIDIA, AMD, Intel, and storage vendors — including negotiation support and specification validation to ensure you get exactly what was designed." },
    { num: "04", title: "Deployment & Configuration", desc: "Physical installation, rack configuration, OS deployment, network setup, and full software stack installation. We handle everything from hardware burn-in testing to benchmark validation before handoff." },
    { num: "05", title: "Training & Ongoing Support", desc: "We train your team on cluster management, job scheduling, and monitoring dashboards. Post-deployment, we offer SLA-backed support contracts for ongoing maintenance and capacity planning." },
];

const techStack = [
    "NVIDIA CUDA", "ROCm", "Slurm", "OpenMPI", "DeepSpeed",
    "PyTorch DDP", "InfiniBand", "Lustre FS", "Ceph", "Horovod",
    "Grafana", "Prometheus", "DCGM", "Warewulf", "JupyterHub",
];

export default function HpcPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-15%] left-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(260px)", opacity: 0.09 }} />
                <div className="absolute bottom-0 right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(220px)", opacity: 0.07 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>← Services</Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>HPC Systems</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-10 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        High-Performance<br /><span style={{ color: "var(--brand)" }}>Computing Infrastructure.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        We design, build, and manage high-performance computing systems — GPU clusters, AI workstations, parallel storage, and distributed training infrastructure — for research labs, AI teams, and engineering organisations.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-5">
                        <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                            Design My HPC System <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full mt-24">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                        style={{ color: "var(--foreground)", opacity: 0.3 }}>Technologies & Platforms</p>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((t) => (
                            <span key={t} className="px-3 py-1.5 rounded-full text-[11px] font-bold tracking-wider"
                                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)", opacity: 0.7 }}>{t}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CAPABILITIES ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
                        <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5" style={{ color: "var(--brand)" }}>{`// HPC Capabilities`}</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Compute without<br />compromise.
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                Modern AI and scientific computing demands infrastructure purpose-built for the task. We provide end-to-end HPC services — from initial architecture design through procurement, deployment, tuning, and ongoing management.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {pillars.map((p, i) => (
                            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                                className="rounded-[20px] p-8 transition-transform duration-300 hover:-translate-y-1"
                                style={{ background: "var(--surface-soft)", border: "1px solid var(--border)" }}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                                    style={{ background: "var(--background)", color: "var(--brand)", border: "1px solid var(--border)" }}>
                                    {p.icon}
                                </div>
                                <h3 className="text-xl font-black tracking-tight mb-3" style={{ color: "var(--foreground)" }}>{p.title}</h3>
                                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--foreground)", opacity: 0.55 }}>{p.brief}</p>
                                <ul className="space-y-2">
                                    {p.points.map((pt, j) => (
                                        <li key={j} className="text-[12px] font-semibold flex items-start gap-2"
                                            style={{ color: "var(--foreground)", opacity: 0.45 }}>
                                            <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--brand)" }} />{pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── PROCESS ── */}
            <section className="px-6 md:px-12 lg:px-24 py-32" style={{ background: "var(--background)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5" style={{ color: "var(--brand)" }}>{`// Delivery Process`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20"
                        style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        From design to deployment.
                    </h2>
                    <div className="space-y-0">
                        {process.map((step, i) => (
                            <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                                className="grid grid-cols-12 gap-8 py-10 border-t px-4"
                                style={{ borderColor: "var(--border)" }}>
                                <div className="col-span-2 md:col-span-1">
                                    <span className="text-5xl font-black tabular-nums" style={{ color: "var(--foreground)", opacity: 0.12 }}>{step.num}</span>
                                </div>
                                <div className="col-span-10 md:col-span-4">
                                    <h3 className="text-xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                                </div>
                                <div className="col-span-12 md:col-span-7">
                                    <p className="text-base leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="px-6 md:px-12 lg:px-24 py-24" style={{ background: "var(--surface)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="rounded-[36px] p-14 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
                        style={{ background: "var(--background)", border: "1px solid var(--border)" }}>
                        <div className="absolute left-0 top-0 w-96 h-96 rounded-full pointer-events-none"
                            style={{ background: "#3150aa", filter: "blur(180px)", opacity: 0.08 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4" style={{ color: "var(--brand)" }}>{`// Scale Your Compute`}</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Ready to build your<br />HPC infrastructure?
                            </h2>
                        </div>
                        <div className="relative z-10">
                            <Link href="/contact" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                                Start the Conversation <ArrowRight size={16} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
