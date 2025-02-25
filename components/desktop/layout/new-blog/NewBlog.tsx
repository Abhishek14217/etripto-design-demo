import Link from "next/link";
import Image from "next/image";

import Wrapper from "@/components/common/ui/Wrapper";
import SectionHeaderCommon from "@/components/desktop/ui/SectionHeaderCommon";
import Button from "@/components/common/ui/Button";

import newBlogOne from "@/images/new-blog-one.png";
import newBlogTwo from "@/images/new-blog-two.png";
import newBlogThree from "@/images/new-blog-three.png";
import newBlogFour from "@/images/new-blog-four.png";
import calender from "@/icons/calender.svg";
import readMore from "@/icons/read-more.svg";
import balloon from "@/images/balloon.svg";

const newBlogData = [
  {
    image: newBlogOne,
    title: "Load Boards Show Flat Demand & Higher Rates",
    date: "April 6, 2021",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    redirect: "#",
  },
  {
    image: newBlogTwo,
    title: "Load Boards Show Flat Demand & Higher Rates",
    date: "April 6, 2021",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    redirect: "#",
  },
  {
    image: newBlogThree,
    title: "Load Boards Show Flat Demand & Higher Rates",
    date: "April 6, 2021",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    redirect: "#",
  },
  {
    image: newBlogFour,
    title: "Load Boards Show Flat Demand & Higher Rates",
    date: "April 6, 2021",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    redirect: "#",
  },
];

type NewBlogProps = {
  isMob?: boolean;
};

const NewBlog: React.FC<NewBlogProps> = ({ isMob }) => {
  return (
    <div className="mt-gapLargest lg:mt-sectionGap relative">
      <Wrapper>
        <SectionHeaderCommon
          mainText="Our New Blog"
          subText="What clients say about us"
          isMob={isMob}
          hasBtn
          redirectLink="#"
        />

        <div className="mt-gap flex overflow-x-scroll no-scrollbar lg:grid grid-cols-4 gap-gap">
          {newBlogData.map((item, index) => (
            <div
              key={index}
              className="flex min-w-[13rem] lg:min-w-[unset] flex-col gap-gapSmall"
            >
              <Image
                src={item.image}
                alt="new-blog-img"
                className="size-full"
              />
              <Link
                href={item.redirect}
                className="text-black text-fontDeskLarge font-bold"
              >
                {item.title}
              </Link>
              <h6 className="flex items-center gap-gapSmall text-fontDesk text-steelGray">
                <Image
                  src={calender}
                  alt="calender"
                  width={15}
                  height={15}
                  unoptimized
                />
                {item.date}
              </h6>
              <p className="text-fontDesk text-steelGray">{item.content}</p>
              <Link
                href={item.redirect}
                className="flex gap-gapSmall items-center text-fontDeskSmall text-steelGray"
              >
                Read More
                <Image
                  src={readMore}
                  alt="read-more"
                  width={7}
                  height={7}
                  unoptimized
                />
              </Link>
            </div>
          ))}
        </div>
        {isMob && (
          <div className="flex items-center justify-center mt-gapLarge">
            <Button redirect="#" />
          </div>
        )}
      </Wrapper>
      {!isMob && (
        <Image
          width={100}
          src={balloon}
          alt="balloon"
          className="absolute left-0 top-[8rem]"
        />
      )}
    </div>
  );
};

export default NewBlog;
