"use client";
import Link from "next/link";
import coursesData from "@/Data/music_course.json";
import { BackgroundGradient } from "./ui/background-gradient";

const FeaturesSections = () => {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
  }
  const courses = coursesData.courses.filter(
    (course: Course) => course.isFeatured,
  );

  return (
    <div className="py-12 ">
      <div className="text-center">
        <h2
          className="text-base text-gray-600 
        font-semibold tracking-wide uppercase"
        >
          Featured Courses
        </h2>
        <p className="md:text-3xl mt-2 leading-8 font-extrabold text-white sm:text-4xl">
          Learn with the best
        </p>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {courses.map((course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col gap-4 items-center text-center grow">
                  <h1 className="font-semibold text-lg">{course.title}</h1>
                  <p className="text-gray-600 ">{course.description}</p>
                  <Link
                    className="px-6 py-4 border border-gray-400 rounded-2xl font-medium text-sm"
                    href={`/courses/${course.slug}`}
                  >
                    Learn More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href={"/courses"}
          className="px-6 py-4 border border-gray-400 rounded-2xl font-medium text-sm"
        >
          View all Courses
        </Link>
      </div>
    </div>
  );
};

export default FeaturesSections;
