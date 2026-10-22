import React from "react";
import { Link, useLocation } from "react-router-dom";

// These image files are in src/assets/.
// Keep imports limited to filenames confirmed in your VS Code screenshot.
import alertOverview from "../assets/alert-overview.png";
import alertDetails from "../assets/alert-details.png";
import alertAnalysis from "../assets/alert-analysis.png";
import alertTimeline from "../assets/alert-timeline.png";
import alertAssignment from "../assets/alert-assignment.png";

const screens = [
  {
    number: "01",
    title: "Alert overview",
    question: "Where should I focus first?",
    description:
      "The overview gives teams one place to scan alerts and understand which ones may need attention. Severity, status, affected resources, and financial impact help users compare alerts without opening each one.",
    decision:
      "Prioritise scanability with consistent labels and a clear visual order. Active Alerts and Alert Rules represent different tasks: responding to alerts and managing the rules that generate them.",
    principle: "Visual hierarchy · Consistency · Recognition over recall",
    image: alertOverview,
    alt: "Opsolute Alerting overview showing the alert list",
  },
  {
    number: "02",
    title: "Alert details",
    question: "What exactly happened?",
    description:
      "Selecting an alert opens a focused view of the issue, including its severity, status, financial impact, affected resources, ownership, and relevant context.",
    decision:
      "A side panel keeps the alert connected to the original list. Users can inspect details and return to the wider list without losing their place.",
    principle: "Context preservation · Spatial continuity · Proximity",
    image: alertDetails,
    alt: "Opsolute alert detail panel",
  },
  {
    number: "03",
    title: "Alert analysis",
    question: "What could be causing this?",
    description:
      "The analysis view helps users investigate a possible cause instead of relying on the alert summary alone. For example, a NAT Gateway cost alert may require reviewing network traffic and relevant usage metrics.",
    decision:
      "Keep the initial summary focused, then let users explore diagnostic information when they need it. A suspected cause should remain distinct from a confirmed root cause.",
    principle: "Progressive disclosure · Information hierarchy · Cognitive load",
    image: alertAnalysis,
    alt: "Opsolute alert analysis view",
  },
  {
    number: "04",
    title: "Supporting evidence",
    question: "What supports this explanation?",
    description:
      "Relevant metrics and resource context give users a way to inspect the signals associated with an alert. Evidence helps users assess an explanation rather than treating a suggested cause as a confirmed diagnosis.",
    decision:
      "Place supporting evidence close to the explanation so users can understand the relationship between a possible cause and the signals behind it.",
    principle: "Proximity · Transparency · Progressive disclosure",
    image: alertAnalysis,
    alt: "Supporting evidence for an Opsolute alert",
  },
  {
    number: "05",
    title: "Alert timeline",
    question: "What has happened so far?",
    description:
      "The timeline shows relevant events in chronological order, such as an alert being triggered, acknowledged, assigned, updated, or resolved. It helps teammates understand the current state and previous activity.",
    decision:
      "Keep event history separate from comments. The timeline explains what happened and when; notes capture what people want to communicate.",
    principle: "Visibility of system status · Temporal hierarchy · Consistency",
    image: alertTimeline,
    alt: "Opsolute alert timeline",
  },
  {
    number: "06",
    title: "Investigation notes",
    question: "What have we learned so far?",
    description:
      "Notes give users a place to record observations, document checks, share a hypothesis, or leave context for a teammate. They support continuity when an investigation moves between people.",
    decision:
      "Give human-written updates their own space so they do not compete with structured workflow events in the timeline.",
    principle: "Clear categorisation · Separation of concerns · Collaboration",
    image: alertDetails,
    alt: "Opsolute investigation notes",
  },
  {
    number: "07",
    title: "Assignment and actions",
    question: "Who owns the next step?",
    description:
      "The assignment flow connects the alert to the person or team responsible for follow-up. An optional handoff message can provide context for the next person.",
    decision:
      "Keep ownership and status actions close to the alert details. Assign, Acknowledge, and Resolve should remain distinct because each communicates a different state.",
    principle: "Clear system status · Familiar language · Error prevention",
    image: alertAssignment,
    alt: "Opsolute alert assignment workflow",
  },
];

const designGoals = [
  {
    number: "01",
    title: "Scan",
    description:
      "Help users recognise which alerts need attention through severity, status, and financial impact.",
  },
  {
    number: "02",
    title: "Investigate",
    description:
      "Connect the alert summary with analysis and supporting evidence without losing context.",
  },
  {
    number: "03",
    title: "Act",
    description:
      "Make ownership, acknowledgement, notes, history, and resolution part of one connected workflow.",
  },
];

const validationTasks = [
  {
    title: "Find the alert that needs attention",
    description:
      "Can users prioritise an alert using its severity, status, and financial impact?",
  },
  {
    title: "Investigate a potential cause",
    description:
      "Can users find the affected resource, relevant analysis, and supporting evidence?",
  },
  {
    title: "Hand off an alert",
    description:
      "Can users assign the alert and leave enough context for the next person?",
  },
  {
    title: "Understand the alert history",
    description:
      "Can users distinguish timeline events from investigation notes?",
  },
  {
    title: "Update the alert status",
    description:
      "Do users understand the difference between acknowledging and resolving an alert?",
  },
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-base leading-8 text-neutral-600 sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}

function ScreenSection({ screen, index }) {
  const imageFirst = index % 2 === 1;

  return (
    <section
      id={`screen-${screen.number}`}
      className="border-t border-neutral-200 py-16 sm:py-24"
    >
      <div
        className={`grid items-start gap-10 lg:grid-cols-2 lg:gap-16 ${
          imageFirst ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="mb-3 text-sm font-semibold tracking-[0.16em] text-blue-600">
            {screen.number} / THE SOLUTION
          </p>
          <h3 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
            {screen.title}
          </h3>
          <p className="mt-4 text-xl font-medium text-neutral-800">
            {screen.question}
          </p>
          <p className="mt-5 text-base leading-8 text-neutral-600">
            {screen.description}
          </p>

          <div className="mt-7 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Design decision
            </p>
            <p className="mt-3 leading-7 text-neutral-700">
              {screen.decision}
            </p>
            <p className="mt-4 text-sm leading-6 text-blue-700">
              <span className="font-semibold">UX principles:</span>{" "}
              {screen.principle}
            </p>
          </div>
        </div>

        <figure className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
          <img
            src={screen.image}
            alt={screen.alt}
            loading="lazy"
            className="h-auto w-full object-contain"
          />
          <figcaption className="border-t border-neutral-200 px-4 py-3 text-sm text-neutral-500">
            {screen.title} · Opsolute Alerting
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Alerting() {
  const { pathname } = useLocation();

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-neutral-950">
      {/* Top navigation — matches the existing Figma1/Bitecraft page */}
      <div className="w-full fixed top-0 left-0 bg-black z-50">
        <div className="max-w-7xl mx-auto flex justify-end items-center px-5 py-3 gap-10 text-md">
          <Link
            to="/"
            className={`pb-1 tracking-tight text-md md:text-lg border-b-2 transition-all duration-300 ${
              pathname === "/"
                ? "text-[#5F9448] tracking-tight text-md md:text-lg"
                : "border-transparent text-[#5F9448] hover:text-gray-400"
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            className={`pb-1 tracking-tight text-md md:text-lg border-b-2 transition-all duration-300 ${
              pathname === "/about"
                ? "text-[#5F9448] tracking-tight text-md md:text-lg"
                : "border-transparent text-[#5F9448] hover:text-gray-400"
            }`}
          >
            About Me
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-24 sm:px-8 sm:pt-28">
        {/* Hero — smaller type and a more restrained preview image */}
        <section className="grid items-center gap-8 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:pb-16">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 sm:text-sm">
              Product design · Cloud FinOps
            </p>
            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Making cloud alerts easier to understand and act on.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
              Designing a connected workflow that helps teams scan alerts,
              investigate potential causes, and understand what needs to happen
              next.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-5 border-y border-neutral-200 py-5 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Product</p>
                <p className="mt-2 font-medium">Opsolute</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-neutral-500">Role</p>
                <p className="mt-2 font-medium">UX Designer</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs uppercase tracking-wider text-neutral-500">Focus</p>
                <p className="mt-2 font-medium">Alert investigation</p>
              </div>
            </div>
          </div>

          <figure className="w-full max-w-[560px] justify-self-end overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <img
              src={alertOverview}
              alt="Opsolute Alerting dashboard overview"
              className="h-auto w-full object-contain"
            />
            <figcaption className="border-t border-neutral-200 px-4 py-3 text-sm text-neutral-500">
              Opsolute · Alert overview
            </figcaption>
          </figure>
        </section>

        {/* Context */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="01 / Context" title="An alert is only the beginning of the investigation.">
            <p>
              Cloud cost alerts can flag unexpected spending, unusual resource
              usage, or a service crossing a defined threshold. But identifying
              an alert is only the first step.
            </p>
            <p>
              Users also need to understand its severity, identify the affected
              resource, investigate a possible cause, review supporting evidence,
              and decide who should take action.
            </p>
            <p>
              The Alerting experience was designed to bring these steps into a
              more connected workflow—so users can move from noticing an alert
              to understanding it and deciding what to do next.
            </p>
          </SectionTitle>
        </section>

        {/* Problem */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="02 / Problem" title="An alert tells users something is wrong. It doesn't always tell them what to do next.">
            <p>
              During an investigation, users need to know what happened, how
              important it is, what might be causing it, which evidence to
              inspect, who owns the next step, and what has already happened.
            </p>
            <p>
              When those answers are scattered, users have to spend extra effort
              navigating the interface, remembering context, and deciding where
              to go next.
            </p>
          </SectionTitle>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["01", "What happened?", "Identify the alert and affected resource."],
              ["02", "How urgent is it?", "Understand severity, status, and impact."],
              ["03", "What might be wrong?", "Investigate a possible cause."],
              ["04", "What is the evidence?", "Inspect related metrics and resources."],
              ["05", "Who owns it?", "Make responsibility clear."],
              ["06", "What happened so far?", "Review updates and investigation notes."],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <p className="text-sm font-semibold text-blue-700">{number}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-neutral-600">{description}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-neutral-950 p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Design challenge
            </p>
            <p className="mt-4 max-w-4xl text-2xl font-medium leading-relaxed sm:text-3xl">
              How might we help cloud cost teams scan alerts, investigate
              potential causes, and take action through one clear experience?
            </p>
          </div>
        </section>

        {/* Goals */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="03 / Design goals" title="Three needs shaped the experience.">
            <p>
              I organised the workflow around what users need to do: scan,
              investigate, and act.
            </p>
          </SectionTitle>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {designGoals.map((goal) => (
              <article key={goal.number} className="rounded-2xl border border-neutral-200 bg-white p-7">
                <p className="text-sm font-semibold text-blue-700">{goal.number}</p>
                <h3 className="mt-5 text-2xl font-semibold">{goal.title}</h3>
                <p className="mt-3 leading-7 text-neutral-600">{goal.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Solution screens */}
        <section className="border-t border-neutral-200 pt-16 sm:pt-24">
          <SectionTitle eyebrow="04 / The solution" title="One alert, from first glance to follow-through.">
            <p>
              The overview supports scanning across alerts. A detail panel keeps
              the selected alert in context, while dedicated views support deeper
              investigation, evidence review, collaboration, and action.
            </p>
          </SectionTitle>

          <div className="mt-8 flex flex-wrap gap-2">
            {screens.map((screen) => (
              <a
                key={screen.number}
                href={`#screen-${screen.number}`}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:border-blue-500 hover:text-blue-700"
              >
                {screen.number}. {screen.title}
              </a>
            ))}
          </div>

          <div className="mt-8">
            {screens.map((screen, index) => (
              <ScreenSection key={screen.number} screen={screen} index={index} />
            ))}
          </div>
        </section>

        {/* Key decisions */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="05 / Design decisions" title="The details work together as one workflow.">
            <p>
              Each screen has a distinct purpose, but the experience depends on
              how these parts connect.
            </p>
          </SectionTitle>

          <div className="mt-10 space-y-0">
            {[
              ["Keep the list and investigation connected", "The side panel preserves the user's position in the alert list, making it easier to inspect multiple alerts."],
              ["Separate summary from diagnosis", "The overview explains what happened and how important it appears. Analysis and evidence help users explore why it might have happened."],
              ["Keep explanations close to evidence", "Users should be able to inspect relevant signals instead of treating a suggested cause as confirmed."],
              ["Distinguish history from discussion", "The timeline records events; notes capture observations and handoff context."],
              ["Connect investigation to ownership", "Assignment and status actions help turn understanding into a clear next step."],
            ].map(([title, description], index) => (
              <article key={title} className="grid gap-3 border-b border-neutral-200 py-6 sm:grid-cols-[60px_0.8fr_1.2fr] sm:gap-8">
                <p className="text-sm font-semibold text-blue-700">0{index + 1}</p>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="leading-7 text-neutral-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* UX principles */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="06 / UX principles" title="Designing for clarity, not just information density.">
            <p>
              The interface needs to support quick scanning without hiding the
              detail required for investigation.
            </p>
          </SectionTitle>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              ["Visual hierarchy", "Severity, status, and financial impact should be easy to compare."],
              ["Progressive disclosure", "Show the summary first, then reveal deeper diagnostic information when needed."],
              ["Context preservation", "Keep the selected alert connected to the wider list."],
              ["Recognition over recall", "Use consistent labels and visible actions so users do not have to remember details."],
              ["Visibility of system status", "Make acknowledgement, assignment, and resolution states clear."],
              ["Gestalt proximity", "Place a possible cause close to the evidence that helps explain it."],
            ].map(([title, description]) => (
              <article key={title} className="rounded-2xl border border-neutral-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 leading-7 text-neutral-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Validation */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="07 / Validation" title="What I would test next.">
            <p>
              These are proposed usability tests, not completed research results.
              I would use realistic alert-investigation tasks to find where
              people hesitate or misunderstand the interface.
            </p>
          </SectionTitle>

          <div className="mt-10 space-y-4">
            {validationTasks.map((task, index) => (
              <article key={task.title} className="flex gap-5 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{task.title}</h3>
                  <p className="mt-2 leading-7 text-neutral-600">{task.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-6 sm:p-8">
            <h3 className="text-xl font-semibold">How I would measure success</h3>
            <p className="mt-3 leading-7 text-neutral-700">
              I would track task completion, time on task, navigation errors,
              and user-reported confidence. These measures would help identify
              which parts of the workflow need further refinement.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="border-t border-neutral-200 py-16 sm:py-24">
          <SectionTitle eyebrow="08 / Reflection" title="Help users move from an alert to a clear next step.">
            <p>
              Designing an alerting experience is not only about showing users
              that something has gone wrong. It is about helping them understand
              the situation, investigate it with enough context, and decide what
              should happen next.
            </p>
            <p>
              The side panel preserves context, progressive disclosure keeps the
              initial view focused, and separating evidence, notes, and timeline
              events gives each type of information a clearer role.
            </p>
            <p>
              The next step would be to validate these decisions with users and
              refine the experience based on where they hesitate, what they
              misunderstand, and what information they need before taking action.
            </p>
          </SectionTitle>

          <div className="mt-4 rounded-sm bg-neutral-950 px-6 py-10 text-center text-white sm:px-12 sm:py-16">
            <p className="mx-auto max-w-3xl text-3xl font-semibold leading-tight sm:text-5xl">
             Thank you
            </p>
           
          </div>
        </section>

       
      </div>
    </main>
  );
}

export default Alerting;
