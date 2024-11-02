import { Section } from "@/app/components/Section";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Section className="bg-green-500">
        <h2 className="text-4xl font-bold text-white">Section 1</h2>
      </Section>
      <Section className="bg-red-600">
        <h2 className="text-4xl font-bold text-white">Section 2</h2>
      </Section>
      <Section className="bg-blue-500">
        <h2 className="text-4xl font-bold text-white">Section 3</h2>
      </Section>
      <Section className="bg-yellow-500">
        <h2 className="text-4xl font-bold text-white">Section 4</h2>
      </Section>
    </div>
  );
}
