import FadeContent from "@/components/react-bits/fade-content";
import IndexLayout from "@/layouts/IndexLayout";

export default function IndexPage() {
  return (
    <IndexLayout>
      <div className="flex flex-col pt-5 pb-10 w-5xl mx-auto font-inter text-amber-50">
        <div className="flex flex-col my-10">
          <FadeContent
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={0.1}
          >
            <h1
              id="next-section"
              className="font-instrument text-7xl text-center"
            >
              what we aim
            </h1>
          </FadeContent>
          <FadeContent
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={0.3}
          >
            <p className="text-center max-w-xl mx-auto my-5 leading-5.5">
              Our mission is to bring the community together in support of
              quality education through donations and fundraising. Every
              contribution makes a meaningful impact in the lives of students.
            </p>
          </FadeContent>
          <FadeContent
            duration={1000}
            easing="ease-out"
            initialOpacity={0}
            delay={0.5}
          >
            <img
              src="src/img/retriever.png"
              className="w-175 mx-auto rounded-lg shadow-2xl mt-5"
            />
          </FadeContent>
        </div>
        <div className="flex flex-col my-10">
          <h1
            id="next-section"
            className="font-instrument text-7xl text-center"
          >
            why trust us?
          </h1>
          <p className="text-center max-w-xl mx-auto my-5 leading-5.5">
            With years of experience in organizing transparent and effective
            donation drives, we ensure that every peso reaches the right hands.
            Our team is composed of trusted educators, students, and volunteers
            dedicated to making a difference.
          </p>
          <img
            src="src/img/dalmatian.png"
            className="w-175 mx-auto rounded-lg shadow-2xl mt-5"
          />
        </div>
      </div>
    </IndexLayout>
  );
}
