import Wrapper from "@/components/common/ui/Wrapper";
import CategoriesFilter from "../categories-filter/CategoriesFilter";
import CategoriesViewtype from "../categories-viewtype/CategoriesViewtype";

const CategoriesDetail = () => {
  return (
    <div className="mt-sectionGap bg-lightGray py-gap">
      <Wrapper>
        <div className="grid grid-cols-[1fr_3fr] gap-gap">
          <CategoriesFilter />
          <CategoriesViewtype />
        </div>
      </Wrapper>
    </div>
  );
};

export default CategoriesDetail;
