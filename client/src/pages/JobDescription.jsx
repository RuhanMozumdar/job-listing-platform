// import { Link } from "react-router-dom";

import React, { useState } from "react";
const TruncatedParagraph = ({ text }) => {
  const [truncated, setTruncated] = useState(true);

  const toggleTruncated = () => {
    setTruncated(!truncated);
  };

  const displayText = truncated ? `${text.slice(0, 70)}...` : text;
  return (
    <div>
      <p className="text-xl pb-2">
        <span className="inline">
          {displayText}
          {text.length > 70 && (
            <span className="text-gray-500 pl-1" onClick={toggleTruncated}>
              {truncated ? "Read more" : "Read less"}
            </span>
          )}
        </span>
      </p>
    </div>
  );
};
export default function JobDescription() {
  return (
    <div>
      <div className="text-3xl text-logo text-center py-3">
        Job Description{" "}
        <span className="pl-3 block md:inline md:pl-0 md:mt-2">
          ( WORK FROM HOME )
        </span>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Customer Service Representative
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            " We are seeking a dedicated and motivated Customer Service" +
            "Representative to join our dynamic team. As a Customer Service" +
            "Representative, you will play a crucial role in providing exceptional" +
            "customer experiences, resolving inquiries, and ensuring customer" +
            "satisfaction. Your excellent communication skills, problem-solving" +
            "abilities, and positive attitude will contribute to maintaining and" +
            "enhancing our company's reputation for top-tier customer service."
          }
        />
        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Interact with customers via multiple communication channels (phone,
            email, chat) to address inquiries, resolve issues, and provide
            information about products and services.
          </li>
          <li className="text-xl">
            Handle a high volume of incoming calls and messages while
            maintaining a professional and friendly demeanor.
          </li>
          <li className="text-xl">
            Collaborate with internal teams to address customer issues, relay
            feedback, and contribute to process improvements that enhance
            customer satisfaction.
          </li>
        </ul>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Online English Tutor
          <span className="no-underline pl-3">(class 5 to 8)</span>
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            "We are seeking a passionate and dedicated English Teacher to join our" +
            "educational institution. As an English Teacher, you will play a vital" +
            "role in fostering language proficiency, communication skills, and a" +
            "love for the English language in students."
          }
        />
        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Teach English language skills, including reading, writing,
            listening, and speaking, using a variety of instructional methods
            and resources.{" "}
          </li>
          <li className="text-xl">
            Provide constructive feedback to students to help them improve their
            language skills and overall understanding.
          </li>
          <li className="text-xl">
            Encourage students to express their thoughts and opinions, fostering
            a respectful and open classroom environment
          </li>
        </ul>
      </div>

      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Online Math Tutor
          <span className="pl-3 no-underline">(class 5 to 8)</span>
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            "As a Math Tutor, you will provide personalized instruction and support" +
            "to students, helping them develop a strong foundation in mathematics," +
            "improve their problem-solving skills, and build confidence in their" +
            "abilities."
          }
        />
        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Provide one-on-one or small group tutoring sessions in mathematics,
            addressing specific topics, concepts, and problem-solving
            techniques.
          </li>
          <li className="text-xl">
            Assist students in completing assignments, homework, and projects,
            guiding them through challenging problems.
          </li>
          <li className="text-xl">
            Utilize various teaching resources, educational technology, and
            real-world examples to enhance the learning experience.
          </li>
        </ul>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Online Science Teacher
          <span className="pl-3 no-underline">(class 5 to 8)</span>
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            " As a Science Teacher, you will play a pivotal role in inspiring" +
            "students to explore and appreciate the wonders of the natural world," +
            "scientific concepts, and critical thinking. Your expertise in science" +
            "education, creative teaching methods, and commitment to student growth" +
            "will contribute to fostering a deep understanding of scientific" +
            "principles and a lifelong curiosity for learning."
          }
        />
        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Develop engaging and comprehensive lesson plans that align with
            curriculum standards and cater to different learning styles.
          </li>
          <li className="text-xl">
            Teach a variety of science subjects, such as biology, chemistry,
            physics, or earth sciences, using innovative instructional methods
            and resources.
          </li>
          <li className="text-xl">
            Administer quizzes, tests, and assignments to assess student
            understanding and track progress.
          </li>
        </ul>
      </div>

      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Sales Representative
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            "We are seeking a dynamic and results-driven Sales Representative to" +
            " join our sales team. As a Sales Representative, you will play a" +
            "pivotal role in expanding our customer base, building relationships," +
            "and driving revenue growth. Your exceptional communication skills," +
            "persuasive abilities, and strategic thinking will contribute to" +
            "achieving and exceeding sales targets"
          }
        />
        <div className="text-xl font-bold underline ">
          Key Responsibilities:
        </div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Identify and prospect potential clients through various channels,
            including cold calling, networking, and referrals.
          </li>
          <li className="text-xl">
            Conduct thorough research on target industries, markets, and clients
            to tailor sales strategies effectively.
          </li>
          <li className="text-xl">
            Present and demonstrate our products/services to potential clients,
            showcasing their value and benefits.
          </li>
        </ul>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">CopyWriter :</div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>

        <TruncatedParagraph
          text={
            "We are seeking a talented and creative Copywriter to join our marketing team. As a Copywriter, you will be responsible for crafting compelling written content that effectively communicates our brand's message and engages our target audience."
          }
        />

        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Develop and execute comprehensive social media strategies that align
            with our brand identity, goals, and target audience.
          </li>
          <li className="text-xl">
            Identify opportunities for partnerships, collaborations, and
            influencer engagement to extend our reach and impact.
          </li>
          <li className="text-xl">
            Monitor social media channels for trends, conversations, and
            mentions related to our brand, industry, and competitors.
          </li>
        </ul>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Remote Social Media Manager:
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>

        <TruncatedParagraph
          text={
            "We are looking for a creative and strategic Remote Social Media" +
            "Manager to lead our online presence across various social media" +
            "platforms. As the Social Media Manager, you will play a critical role" +
            "in shaping and executing our social media strategy, building brand" +
            "awareness, engaging audiences, and driving growth through compelling" +
            "content and community interaction."
          }
        />

        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Develop and execute comprehensive social media strategies that align
            with our brand identity, goals, and target audience.
          </li>
          <li className="text-xl">
            Identify opportunities for partnerships, collaborations, and
            influencer engagement to extend our reach and impact.
          </li>
          <li className="text-xl">
            Monitor social media channels for trends, conversations, and
            mentions related to our brand, industry, and competitors.
          </li>
        </ul>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Market Researcher
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            "We're searching for a Market Researcher to join our team. As a Market Researcher, you'll gather and analyze data to help us make better decisions. Your work will give us insights into customer preferences, market trends, and what our competitors are up to. Your role is important for shaping our strategies, and prior experience is not necessary."
          }
        />
        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Collect data through various methods, including surveys, interviews,
            focus groups, and online research.
          </li>
          <li className="text-xl">
            Collaborate with cross-functional teams, including marketing,
            product development, and sales, to provide insights that drive
            strategic decision-making.
          </li>
          <li className="text-xl">
            Monitor industry trends, competitor activities, and emerging market
            opportunities.
          </li>
        </ul>
      </div>
      <div className="px-[5%] py-2">
        <div className="text-logo text-2xl py-2 underline">
          Social Media Video Editor
        </div>
        <div className="text-xl font-bold py-2 underline">
          Position Overview:
        </div>
        <TruncatedParagraph
          text={
            "We are seeking a talented and creative Social Media Video Editor to" +
            "join our marketing team. As a Video Editor, you will be responsible" +
            "for crafting visually appealing and engaging video content for our" +
            "social media platforms. Your expertise in video editing, storytelling," +
            "and a deep understanding of social media trends will be pivotal in" +
            "driving our brand's online presence and user engagement."
          }
        />
        <div className="text-xl font-bold underline">Key Responsibilities:</div>
        <ul className="list-disc pl-6">
          <li className="text-xl">
            Edit and produce high-quality video content for various social media
            platforms, including short-form videos, GIFs, reels, and stories.
          </li>
          <li className="text-xl">
            Optimize videos for different social media platforms, ensuring they
            meet platform-specific requirements and best practices.
          </li>
          <li className="text-xl">
            Collaborate with the marketing team to develop video content
            strategies that align with brand goals and target audiences.
          </li>
        </ul>
      </div>
    </div>
  );
}
