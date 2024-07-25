import {
  StyledCol,
  StyledFlexBetween,
  StyledHeader,
  StyledRow,
  StyledShowcase,
} from "@/styles/styled";
import CustomImage from "../common/CustomImage";

const Opportunities: React.FC = () => {
  const opps = [
    {
      id: 1,
      title: "Fırsat 1",
      image: "/opp1.webp",
    },
    {
      id: 2,
      title: "Fırsat 2",
      image: "/opp2.webp",
    },
    {
      id: 3,
      title: "Fırsat 3",
      image: "/opp3.webp",
    },
    {
      id: 4,
      title: "Fırsat 4",
      image: "/opp4.webp",
    },
  ];
  return (
    <StyledShowcase>
      <StyledHeader as="h1">Kaçırılmayacak Fırsatlar</StyledHeader>
      <StyledFlexBetween>
        {opps.map((opp) => (
          <StyledCol key={opp.id} $sizemd={2.75}>
            <CustomImage
              src={opp.image}
              alt={opp.title}
              height="420px"
              objectFit="cover"
            />
          </StyledCol>
        ))}
      </StyledFlexBetween>
    </StyledShowcase>
  );
};

export default Opportunities;
