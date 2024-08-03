import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
    transition: "width 1s easeOut",
  },
}));

const ProgressBar = ({ selectedCards }) => {
  const count = selectedCards.length;
  const progressValue = (count / 3) * 100;

  return (
    <Box className="w-full lg:w-[80%]">
      <p className="text-start font-semibold font-inter pb-3 lg:text-center">
        {count}/3 causes added
      </p>
      <BorderLinearProgress variant="determinate" value={progressValue} />
    </Box>
  );
};

export default ProgressBar;
