"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Eye, BarChart2, Cpu, Database } from "lucide-react";

const pillars = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: "Custom ML Model Development",
        brief: "We design, train, and deploy machine learning models tailored to your exact business problem — from classification and regression to complex sequence models. We don't use off-the-shelf models where custom training produces measurably better results.",
        points: [
            "Supervised, unsupervised, and reinforcement learning",
            "Model selection, hyperparameter tuning, and validation",
            "Scikit-learn, XGBoost, LightGBM for structured data",
            "PyTorch and TensorFlow for deep learning pipelines",
            "MLflow experiment tracking and model versioning",
            "Automated retraining pipelines with drift detection",
        ],
    },
    {
        icon: <Bot className="w-6 h-6" />,
        title: "Generative AI & LLM Integration",
        brief: "We integrate large language models into your products and workflows — from intelligent document processing and automated report generation to customer-facing AI chatbots and internal knowledge assistants.",
        points: [
            "OpenAI GPT-4o and Claude API integrations",
            "Retrieval-Augmented Generation (RAG) pipelines",
            "Vector database setup: Pinecone, Weaviate, pgvector",
            "Fine-tuning open-source LLMs (Llama, Mistral, Phi)",
            "Prompt engineering and evaluation frameworks",
            "LangChain and LlamaIndex agent orchestration",
        ],
    },
    {
        icon: <Eye className="w-6 h-6" />,
        title: "Computer Vision",
        brief: "From attendance automation via facial recognition to defect detection in manufacturing, we deploy production-grade computer vision systems that process visual data with high accuracy and real-time throughput.",
        points: [
            "Object detection: YOLOv8, DETR, EfficientDet",
            "Image classification with transfer learning",
            "Face detection, recognition, and liveness detection",
            "OCR pipelines for document digitisation",
            "Video analytics and real-time stream processing",
            "Edge deployment with TensorRT and ONNX Runtime",
        ],
    },
    {
        icon: <BarChart2 className="w-6 h-6" />,
        title: "Predictive Analytics",
        brief: "We transform your historical data into forward-looking intelligence — demand forecasting, churn prediction, fraud detection — implemented as production APIs your applications can query in real time.",
        points: [
            "Time-series forecasting: Prophet, ARIMA, N-BEATS",
            "Customer churn and lifetime value prediction",
            "Fraud detection and anomaly scoring systems",
            "Inventory demand and supply chain optimisation",
            "Feature engineering from raw transactional data",
            "A/B test design and causal inference frameworks",
        ],
    },
    {
        icon: <Database className="w-6 h-6" />,
        title: "Data Engineering & MLOps",
        brief: "ML is only as good as the data pipeline feeding it. We build robust ETL pipelines, feature stores, and MLOps infrastructure that ensure your models are always trained on clean, fresh, and well-governed data.",
        points: [
            "Apache Airflow and Prefect pipeline orchestration",
            "dbt for analytics engineering and data transformation",
            "Feature store implementation: Feast, Tecton",
            "Model serving with FastAPI, BentoML, or TorchServe",
            "Kubernetes-based inference scaling",
            "Model monitoring: data drift, performance degradation",
        ],
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "AI Automation & Process Intelligence",
        brief: "We deploy AI agents and intelligent automation to eliminate repetitive bottlenecks — document classification, invoice processing, approval workflows, and institutional data entry — without replacing human judgement where it matters.",
        points: [
            "Intelligent Document Processing (IDP) pipelines",
            "RPA augmentation with AI classification layers",
            "Workflow automation with event-driven AI triggers",
            "NLP for form parsing, ticket routing, and categorisation",
            "AI quality assurance testing for software systems",
            "Multi-agent orchestration for complex task chains",
        ],
    },
];

const process = [
    { num: "01", title: "Problem Framing & Data Audit", desc: "We start by rigorously defining the problem — what will the model predict, what data exists, what quality is needed, and what success looks like. Many AI projects fail because the business problem is poorly framed. We fix that before writing any code." },
    { num: "02", title: "Data Pipeline & Feature Engineering", desc: "We build the data infrastructure first — ingestion, cleaning, enrichment, and feature engineering pipelines. The quality of this layer determines the quality of everything above it." },
    { num: "03", title: "Modelling & Experimentation", desc: "We run structured experiments using MLflow to compare models, architectures, and training strategies. Every hypothesis is tracked, documented, and reproducible. No black-box decisions." },
    { num: "04", title: "Evaluation & Validation", desc: "Models are evaluated against held-out test sets, business-relevant metrics, and adversarial edge cases. We set clear performance thresholds before any model goes to production." },
    { num: "05", title: "Deployment & Monitoring", desc: "Models are deployed behind versioned APIs with canary rollouts. We instrument monitoring dashboards that alert on performance degradation, data drift, and prediction distribution shifts." },
];

const techStack = [
    "PyTorch", "TensorFlow", "Scikit-learn", "OpenAI API", "LangChain",
    "LlamaIndex", "FastAPI", "MLflow", "Apache Airflow", "Pinecone",
    "YOLOv8", "Hugging Face", "dbt", "Kubernetes", "Ray",
];

export default function AiMlPage() {
    return (
        <main style={{ background: "var(--background)", color: "var(--foreground)" }}>

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-24 px-6 md:px-12 lg:px-24">
                <div className="absolute top-[-15%] right-[-10%] w-[800px] h-[800px] rounded-full pointer-events-none"
                    style={{ background: "#3150aa", filter: "blur(260px)", opacity: 0.1 }} />
                <div className="absolute bottom-0 left-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "#b05d41", filter: "blur(220px)", opacity: 0.07 }} />

                <div className="relative z-10 max-w-[1400px] mx-auto w-full">
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-10">
                        <Link href="/services" className="text-[11px] font-black uppercase tracking-[0.45em] font-mono hover:opacity-100 transition-opacity"
                            style={{ color: "var(--brand)", opacity: 0.8 }}>← Services</Link>
                        <span className="w-16 h-px" style={{ background: "var(--border)" }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.45em] font-mono"
                            style={{ color: "var(--foreground)", opacity: 0.35 }}>AI & Machine Learning</span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[0.9] tracking-tighter mb-10 max-w-5xl"
                        style={{ color: "var(--foreground)", letterSpacing: "-3px" }}>
                        AI & Machine<br /><span style={{ color: "var(--brand)" }}>Learning Systems.</span>
                    </motion.h1>

                    <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
                        className="text-xl md:text-2xl max-w-2xl leading-relaxed mb-14"
                        style={{ color: "var(--foreground)", opacity: 0.6 }}>
                        We build production-grade AI systems that generate real business value — predictive models, LLM integrations, computer vision pipelines, and intelligent automation deployed at scale.
                    </motion.p>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                        className="flex flex-wrap items-center gap-5">
                        <Link href="/contact?service=AI%20%26%20Machine%20Learning%20Solutions&type=Custom%20Software" className="btn-glow px-10 py-4 text-base font-bold inline-flex items-center gap-3">
                            Explore AI Solutions <ArrowRight size={16} />
                        </Link>
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-[1400px] mx-auto w-full mt-24">
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4"
                        style={{ color: "var(--foreground)", opacity: 0.3 }}>Technologies & Frameworks</p>
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
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                                style={{ color: "var(--brand)" }}>{`// AI Capabilities`}</p>
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Intelligence,<br />engineered.
                            </h2>
                        </div>
                        <div className="lg:col-span-7 flex items-end">
                            <p className="text-lg leading-relaxed" style={{ color: "var(--foreground)", opacity: 0.55 }}>
                                We approach AI as a product engineering discipline — not a research exercise. Every model we build is designed to be deployed, monitored, and improved over time. The emphasis is always on measurable business outcomes.
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
                    <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-5"
                        style={{ color: "var(--brand)" }}>{`// Our AI Delivery Process`}</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-20"
                        style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                        From raw data to production model.
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
                        <div className="absolute right-0 top-0 w-96 h-96 rounded-full pointer-events-none"
                            style={{ background: "#3150aa", filter: "blur(180px)", opacity: 0.09 }} />
                        <div className="relative z-10">
                            <p className="text-[10px] uppercase tracking-[0.45em] font-black font-mono mb-4" style={{ color: "var(--brand)" }}>{`// Build AI`}</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter"
                                style={{ color: "var(--foreground)", letterSpacing: "-1.5px" }}>
                                Ready to bring AI<br />into your product?
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
