/**
 * Workshop content. Everything shown in the Workshops section comes from here.
 * The curriculum modules are a PROPOSED learning plan — edit them freely to
 * match the final teaching plan. Anything not yet confirmed should stay
 * "To be confirmed" rather than being guessed.
 */
import type { LucideIcon } from "lucide-react";
import {
  BookOpenCheck,
  Brain,
  Code2,
  Compass,
  Gamepad2,
  Lightbulb,
  ListChecks,
  MessageSquareText,
  Palette,
  PenTool,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Wand2,
  Wrench,
} from "lucide-react";
import type { WhatsAppMessageKey } from "./whatsapp";

export interface CurriculumModule {
  title: string;
  summary: string;
  icon: LucideIcon;
  /** Label for the list below, e.g. "Topics" or "Possible project examples". */
  listLabel: string;
  items: string[];
  /** Optional numbered workflow shown under the module. */
  workflow?: string[];
  /** Optional small print shown under the module. */
  note?: string;
}

export interface Outcome {
  text: string;
  icon: LucideIcon;
}

export interface DetailRow {
  label: string;
  value: string;
  /** Marks rows that are still awaiting confirmation. */
  pending?: boolean;
}

export interface Workshop {
  id: "explorers" | "builders";
  title: string;
  classRange: string;
  tagline: string;
  shortDescription: string;
  description: string;
  emphasis: string;
  mainTopics: string[];
  keyOutcomes: string[];
  modules: CurriculumModule[];
  outcomes: Outcome[];
  whoShouldJoin: string;
  details: DetailRow[];
  ctaLabel: string;
  whatsappKey: WhatsAppMessageKey;
  accent: "blue" | "purple";
  illustration: "explorer" | "builder";
}

const TBC = "To be confirmed";

export const WORKSHOPS_COPY = {
  heading: "Choose Your AI Adventure",
  description:
    "Two exciting learning experiences designed for different stages of your school journey. Explore the course topics, discover what you can learn, and contact our educators to get the upcoming workshop details.",
};

export const WORKSHOPS: Workshop[] = [
  {
    id: "explorers",
    title: "AI Explorers Lab",
    classRange: "Classes 5–9",
    tagline: "Discover, Play, Imagine!",
    shortDescription:
      "A beginner-friendly adventure into AI through creative tools, games, storytelling and simple guided projects.",
    description:
      "Explore the exciting world of artificial intelligence through creative tools, games, storytelling, interactive experiments, and simple AI projects. Discover how AI works and use your imagination to turn ideas into interesting creations.",
    emphasis:
      "Beginner-friendly, hands-on and playful — made for curious students who want to explore AI through creative and practical activities.",
    mainTopics: ["AI basics", "Creative AI tools", "AI art", "Games & experiments", "Simple projects", "Responsible AI"],
    keyOutcomes: [
      "Understand basic AI concepts",
      "Experiment with prompts and instructions",
      "Develop a simple guided project",
    ],
    modules: [
      {
        title: "Discover Artificial Intelligence",
        summary: "Introduce AI using simple, relatable examples.",
        icon: Compass,
        listLabel: "Topics",
        items: [
          "What artificial intelligence means",
          "Where AI is used in everyday life",
          "How AI-powered tools may help people",
          "What AI can and cannot reliably do",
        ],
      },
      {
        title: "Explore Creative AI Tools",
        summary:
          "Introduce suitable AI tools for creative exploration, subject to their availability and applicable age requirements.",
        icon: Sparkles,
        listLabel: "Topics",
        items: [
          "Brainstorming ideas with AI",
          "Creative writing and storytelling",
          "Using AI to explore digital creativity",
          "Experimenting with different tools and instructions",
        ],
      },
      {
        title: "AI Art and Imagination",
        summary: "Help students experiment with turning ideas into creative outputs.",
        icon: Palette,
        listLabel: "Topics",
        items: [
          "Turning ideas into visual concepts",
          "Writing simple prompts",
          "Experimenting with different creative instructions",
          "Comparing and improving AI-generated results",
        ],
      },
      {
        title: "AI Games and Experiments",
        summary: "Use games and simple experiments to introduce AI concepts in an accessible manner.",
        icon: Gamepad2,
        listLabel: "Topics",
        items: [
          "AI-related puzzles and games",
          "Pattern recognition and logical thinking",
          "Interactive learning activities",
          "Testing different inputs and observing outcomes",
        ],
      },
      {
        title: "Create a Simple AI Project",
        summary: "Introduce students to a beginner-friendly project with guidance.",
        icon: Rocket,
        listLabel: "Possible project examples",
        items: [
          "An AI-assisted story or comic concept",
          "A creative digital artwork project",
          "A simple AI-assisted idea-generation activity",
          "A small interactive project using an appropriate beginner-friendly tool",
        ],
        note: "These are possible examples, not promises that every project will be covered.",
      },
      {
        title: "Use AI Responsibly",
        summary: "Teach students to use AI thoughtfully.",
        icon: ShieldCheck,
        listLabel: "Topics",
        items: [
          "Why AI-generated answers can be incorrect",
          "Why important information should be checked",
          "Why personal information should not be shared carelessly",
          "How to use AI to support their own creativity and thinking",
        ],
      },
    ],
    outcomes: [
      { text: "Understand basic AI concepts", icon: Lightbulb },
      { text: "Explore creative AI tools", icon: Wand2 },
      { text: "Experiment with prompts and instructions", icon: MessageSquareText },
      { text: "Discover AI through games and activities", icon: Puzzle },
      { text: "Develop a simple guided project", icon: Rocket },
      { text: "Build responsible AI habits", icon: ShieldCheck },
    ],
    whoShouldJoin:
      "Students in Classes 5–9 who are curious about technology, games, creative tools, and the possibilities of artificial intelligence.",
    details: [
      { label: "Class range", value: "Classes 5–9" },
      { label: "Level", value: "Beginner-friendly" },
      { label: "Format", value: "Live online workshop" },
      { label: "Topics", value: "AI basics, creativity, games, experiments, and simple projects" },
      { label: "Activities", value: "Creative experiments, demonstrations, and guided activities" },
      { label: "Project examples", value: "Examples from the proposed curriculum above" },
      { label: "Schedule", value: "Upcoming details available through WhatsApp" },
      { label: "Duration & sessions", value: TBC, pending: true },
      { label: "Required device & tools", value: TBC, pending: true },
      { label: "Certificate / recordings", value: TBC, pending: true },
    ],
    ctaLabel: "Join Free Explorers Workshop",
    whatsappKey: "explorers",
    accent: "blue",
    illustration: "explorer",
  },
  {
    id: "builders",
    title: "AI Builders Lab",
    classRange: "Classes 10–12",
    tagline: "Learn, Create, Build!",
    shortDescription:
      "Go beyond using AI — explore generative AI, prompt engineering and AI-assisted coding through practical projects.",
    description:
      "Move beyond simply using AI. Explore generative AI, learn prompt engineering, discover AI-assisted coding, and apply these concepts through practical projects designed for senior school students.",
    emphasis:
      "Practical exploration, problem-solving, technical curiosity and project development for senior school students.",
    mainTopics: ["Generative AI", "Prompt engineering", "AI productivity tools", "AI-assisted coding", "Practical project", "Critical thinking"],
    keyOutcomes: [
      "Write and refine effective prompts",
      "Use AI assistance while learning to code",
      "Develop a practical project with guidance",
    ],
    modules: [
      {
        title: "Understanding Generative AI",
        summary: "Introduce modern generative AI in an accessible way.",
        icon: Brain,
        listLabel: "Topics",
        items: [
          "What generative AI is",
          "How AI tools can generate text, images, and other outputs",
          "Common applications of generative AI",
          "Limitations of AI-generated information",
          "The importance of checking AI outputs",
        ],
      },
      {
        title: "Prompt Engineering",
        summary: "Learn how to write and refine useful prompts.",
        icon: PenTool,
        listLabel: "Topics",
        items: [
          "Structuring an effective prompt",
          "Giving context and constraints",
          "Specifying the desired output format",
          "Improving prompts through iteration",
          "Comparing results from different prompts",
          "Evaluating and refining outputs",
        ],
      },
      {
        title: "AI Tools for Productivity and Problem-Solving",
        summary: "Explore suitable AI tools for learning and practical work.",
        icon: Wrench,
        listLabel: "Topics",
        items: [
          "Brainstorming and organising ideas",
          "Breaking complex tasks into smaller steps",
          "Summarising and explaining concepts",
          "Checking AI-generated answers",
          "Selecting suitable tools for different tasks",
          "Using AI as an assistant rather than blindly accepting its outputs",
        ],
      },
      {
        title: "AI-Assisted Coding",
        summary: "See how AI can help students understand and create software.",
        icon: Code2,
        listLabel: "Topics",
        items: [
          "Using AI to explain programming concepts",
          "Generating simple code through prompts",
          "Understanding what generated code does",
          "Finding and correcting errors",
          "Testing code instead of assuming it works",
          "Using AI to support learning rather than merely copying solutions",
        ],
        note: "Programming language and coding tools: to be confirmed.",
      },
      {
        title: "Build a Practical AI Project",
        summary: "Plan, create, test and improve a beginner-friendly project with guidance.",
        icon: Rocket,
        listLabel: "Possible project examples",
        items: [
          "A small web application developed with AI assistance",
          "A study or productivity assistant prototype",
          "A practical tool designed around a clear problem",
          "An interactive application using generated code",
          "A creative project combining prompting and AI-generated content",
        ],
        workflow: [
          "Identify a problem or idea",
          "Define what the project should accomplish",
          "Explore a possible solution",
          "Use appropriate AI tools to develop the implementation",
          "Test the result and correct errors",
          "Improve the project and explain how it works",
        ],
        note: "Project examples are possibilities from the proposed plan, not a guaranteed deliverable.",
      },
      {
        title: "Responsible AI and Critical Thinking",
        summary: "Use AI thoughtfully, honestly and safely.",
        icon: ShieldCheck,
        listLabel: "Topics",
        items: [
          "Why AI outputs need verification",
          "Recognising limitations and mistakes",
          "Responsible use of generated content and code",
          "Privacy and appropriate data handling",
          "Copyright awareness and attribution where relevant",
          "The importance of independent thinking and understanding the work being created",
        ],
      },
    ],
    outcomes: [
      { text: "Understand generative AI fundamentals", icon: Brain },
      { text: "Write and refine effective prompts", icon: PenTool },
      { text: "Explore AI tools for problem-solving", icon: Wrench },
      { text: "Use AI assistance while learning to code", icon: Code2 },
      { text: "Develop a practical project with guidance", icon: Rocket },
      { text: "Evaluate AI-generated content critically", icon: Search },
      { text: "Improve structured thinking and technical problem-solving", icon: ListChecks },
    ],
    whoShouldJoin:
      "Students in Classes 10–12 who want to understand generative AI, learn prompt engineering, explore AI-assisted coding, and experiment with practical projects.",
    details: [
      { label: "Class range", value: "Classes 10–12" },
      { label: "Level", value: TBC, pending: true },
      { label: "Format", value: "Live online workshop" },
      { label: "Topics", value: "Generative AI, prompt engineering, coding, and practical projects" },
      { label: "Skills explored", value: "AI-assisted problem-solving, coding, project development, and critical evaluation" },
      { label: "Project examples", value: "Examples from the proposed curriculum above" },
      { label: "Programming language & tools", value: TBC, pending: true },
      { label: "Required AI accounts / software", value: TBC, pending: true },
      { label: "Schedule", value: "Upcoming details available through WhatsApp" },
      { label: "Duration & sessions", value: TBC, pending: true },
      { label: "Prerequisites", value: TBC, pending: true },
      { label: "Certificate / recordings", value: TBC, pending: true },
    ],
    ctaLabel: "Join Free Builders Workshop",
    whatsappKey: "builders",
    accent: "purple",
    illustration: "builder",
  },
];

/** Hero learning highlights. */
export const HERO_HIGHLIGHTS = [
  { label: "Learn by Exploring", icon: Compass },
  { label: "Create With AI", icon: Wand2 },
  { label: "Live Online Learning", icon: BookOpenCheck },
];
