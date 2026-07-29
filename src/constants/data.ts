import {
  Code2,
  Terminal,
  Brain,
  Shield,
  Wrench,
  Code,
  Briefcase,
  Camera,
  Globe,
  Phone,
  Award,
  Layers,
  GraduationCap
} from "lucide-react";
import {
  Project,
  Experience,
  Education,
  SkillCategory,
  Certification,
  ContactInfo,
  SocialLink,
  StatCard,
  NavItem
} from "../types";

export const personalInfo = {
  name: "Hafiz Abdullah",
  title: "AI/ML Engineer & CS Student",
  roles: [
    "AI/ML Engineer",
    "Deep Learning Researcher",
    "Cybersecurity Enthusiast",
    "CS Student"
  ],
  summary: "BS Computer Science student focused on AI/ML, deep learning, and cybersecurity with hands-on healthcare prediction projects using Python, Scikit-learn, TensorFlow/Keras, Pandas, NumPy, and OpenCV. Experienced in CNN-based medical image classification, machine learning prediction workflows, and cybersecurity fundamentals including ethical hacking, penetration testing, Kali Linux, Wireshark, and TCP/IP.",
};

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    company: "Spurvance Labs",
    position: "AI/ML Lead",
    duration: "June 2026 – Present",
    responsibilities: [
      "Assigned AI/ML tasks to interns.",
      "Coordinated progress across projects.",
      "Guided interns and maintained team communication."
    ]
  },
  {
    id: "exp-2",
    company: "FlyRank",
    position: "AI/ML Intern",
    duration: "July 2026 – Aug 2026",
    responsibilities: [
      "Worked on NLP and AI/ML tasks.",
      "Completed machine learning projects.",
      "Developed NLP projects.",
      "Built Deep Learning projects.",
      "Worked on Computer Vision projects."
    ]
  }
];

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "BS Computer Science",
    institution: "University of the Punjab, Lahore",
    duration: "Aug 2024 – Nov 2028",
    coursework: [
      "Data Structures & Algorithms",
      "OOP",
      "Database Systems",
      "Computer Networks",
      "Discrete Mathematics"
    ]
  },
  {
    id: "edu-2",
    degree: "Intermediate in Computer Science",
    institution: "Superior College",
    duration: "2021 – 2023",
    coursework: []
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      { name: "Python", category: "Programming" },
      { name: "C", category: "Programming" },
      { name: "C++", category: "Programming" },
      { name: "SQL", category: "Programming" },
      { name: "JavaScript", category: "Programming" },
      { name: "HTML", category: "Programming" },
      { name: "CSS", category: "Programming" }
    ]
  },
  {
    name: "AI / Machine Learning",
    skills: [
      { name: "Machine Learning", category: "AI/ML" },
      { name: "Deep Learning", category: "AI/ML" },
      { name: "CNN, RNN, LSTM", category: "AI/ML" },
      { name: "NLP", category: "AI/ML" },
      { name: "Transfer Learning", category: "AI/ML" },
      { name: "Scikit-learn", category: "AI/ML" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "PyTorch", category: "AI/ML" },
      { name: "Keras", category: "AI/ML" },
      { name: "Pandas", category: "AI/ML" },
      { name: "NumPy", category: "AI/ML" },
      { name: "OpenCV", category: "AI/ML" }
    ]
  },
  {
    name: "Cybersecurity",
    skills: [
      { name: "Ethical Hacking", category: "Cybersecurity" },
      { name: "Penetration Testing", category: "Cybersecurity" },
      { name: "Network Security", category: "Cybersecurity" },
      { name: "Kali Linux", category: "Cybersecurity" },
      { name: "Wireshark", category: "Cybersecurity" },
      { name: "TCP/IP", category: "Cybersecurity" }
    ]
  },
  {
    name: "Web & Tools",
    skills: [
      { name: "Git, GitHub", category: "Tools" },
      { name: "Linux", category: "Tools" },
      { name: "Google Colab", category: "Tools" },
      { name: "Visual Studio Code", category: "Tools" },
      { name: "Streamlit", category: "Tools" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "COVID-19 Detection using CNN",
    description: "CNN model for COVID-19 detection. Precision, Recall, F1-score evaluation.",
    image: "/images/projects/covid.png",
    technologies: ["Python", "CNN", "TensorFlow", "Keras"],
    features: [
      "Image preprocessing",
      "Model training & evaluation",
      "Classification metrics"
    ],
    github: "https://github.com/Professor-Abdullah/COVID-19-Detection",
  },
  {
    id: "proj-2",
    title: "ADHD Detection and Prediction",
    description: "Machine learning prediction system for ADHD.",
    image: "/images/projects/adhd.png",
    technologies: ["Machine Learning", "Scikit-learn", "Pandas"],
    features: [
      "Data preprocessing",
      "Feature engineering",
      "Multiple ML models evaluation"
    ],
    github: "https://github.com/Professor-Abdullah/ADHD-Detection",
  },
  {
    id: "proj-3",
    title: "Text Prediction using LSTM",
    description: "Deep learning model for text prediction utilizing Long Short-Term Memory networks.",
    image: "/images/projects/lstm.png",
    technologies: ["Deep Learning", "LSTM", "NLP"],
    features: ["Sequence learning", "Text generation"],
    github: "https://github.com/Professor-Abdullah/Text-Prediction-LSTM",
  },
  {
    id: "proj-4",
    title: "Sequence Prediction using RNN",
    description: "Recurrent Neural Network model designed for sequence prediction tasks.",
    image: "/images/projects/rnn.png",
    technologies: ["Deep Learning", "RNN", "Python"],
    features: ["Time-series analysis", "Sequential data processing"],
    github: "https://github.com/Professor-Abdullah/Sequence-Prediction-RNN",
  },
  {
    id: "proj-5",
    title: "Transfer Learning Models",
    description: "Implementation of advanced transfer learning architectures including VGG16 and ResNet50.",
    image: "/images/projects/transfer-learning.png",
    technologies: ["VGG16", "ResNet50", "Computer Vision"],
    features: ["Pre-trained weights", "Fine-tuning", "Image Classification"],
    github: "https://github.com/Professor-Abdullah/Transfer-Learning",
  },
  {
    id: "proj-6",
    title: "Explainable AI (XAI)",
    description: "Integrating Explainable AI techniques like Grad-CAM and LIME to interpret model predictions.",
    image: "/images/projects/xai.png",
    technologies: ["Grad-CAM", "LIME", "XAI"],
    features: ["Model interpretability", "Visual explanations"],
    github: "https://github.com/Professor-Abdullah/Explainable-AI",
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    name: "Artificial Intelligence & Full-Stack Machine Learning with Data Science",
    provider: "Micro Tech Solutions",
    duration: "2025",
    image: "/certificates/MS Office Certificate_page-0001.jpg"
  },
  {
    id: "cert-2",
    name: "Cybersecurity 2 – Penetration Testing",
    provider: "Bano Qabil",
    duration: "2025",
    image: "/certificates/Professional-Freelancing-Training-Program_Cyber_Security.jpeg"
  },
  {
    id: "cert-3",
    name: "AI, Cybersecurity & Ethical Hacking",
    provider: "PFTP",
    duration: "2024–2025",
    image: "/certificates/Professional-Freelancing-Training-Program_Artificail_Intelligenc.jpeg"
  },
  {
    id: "cert-4",
    name: "Web Development",
    provider: "NAVTTC",
    duration: "2024",
    image: "/certificates/Web Dev-NAVTTC certificate.jpeg"
  },
  {
    id: "cert-5",
    name: "SEO, Digital Marketing, WordPress & Freelancing",
    provider: "DigiSkills",
    duration: "2023",
    image: "/certificates/opswat certificate_page-0001.jpg"
  }
];

export const contactInfo: ContactInfo = {
  location: "Lahore, Pakistan",
  phone: "+92 314 4345078",
  email: "hafizabdullah4515069@gmail.com",
  github: "https://github.com/Professor-Abdullah",
  linkedin: "https://linkedin.com/in/muhammad-yousuf-9388753a0",
  instagram: "https://www.instagram.com/2be_abdullah",
  facebook: "https://www.facebook.com/profile.php?id=100058474064645",
  whatsapp: "https://wa.me/923144345078"
};

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: contactInfo.github, icon: Code },
  { name: "LinkedIn", url: contactInfo.linkedin, icon: Briefcase },
  { name: "Instagram", url: contactInfo.instagram, icon: Camera },
  { name: "Facebook", url: contactInfo.facebook, icon: Globe },
  { name: "WhatsApp", url: contactInfo.whatsapp, icon: Phone }
];

export const statistics: StatCard[] = [
  { label: "Years Experience", value: "2+", icon: Briefcase },
  { label: "Projects Completed", value: "6+", icon: Layers },
  { label: "Certifications", value: "5", icon: Award },
  { label: "Technologies", value: "20+", icon: Wrench }
];

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" }
];
