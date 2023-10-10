import { SkeletonCardStyled } from "../styles/SkeletonCardStyles";
const SkeletonCard = () => {
  return (
    <SkeletonCardStyled>
      <div className="skeleton-image"></div>
      <div className="itemdescription">
        <div className="skeleton-text"></div>
      </div>
      <div className="itemfoot">
        <div className="skeleton-text"></div>
      </div>
    </SkeletonCardStyled>
  );
};
export default SkeletonCard;
