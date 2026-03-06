import Title from "@/app/_components/Title";
import React from "react";

const Tutorials = async ({ params }) => {
  const { slug } = await params;
  const [technology, topic, page_no, subject] = slug;

  return (
    <div>
      <Title>{technology} Tutorials</Title>
      <h2>{topic}</h2>
      <hr />
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <p>{page_no}</p>
      </div>
    </div>
  );
};

export default Tutorials;
