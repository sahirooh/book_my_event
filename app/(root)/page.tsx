import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="h1-bold">
            Host, Connect, Celebrate: Your Events, Our Platform!
          </h1>
          <p>
            Book and learn helpful tips from 4k+ mentors in world-class
            companies with our global community
          </p>
        </div>
      </div>
    </section>
  );
}
