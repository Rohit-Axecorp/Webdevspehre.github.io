import HashLoader from "react-spinners/HashLoader";

function Loader({ loading }) {
  return (
    <HashLoader
      color="#ef4444"
      cssOverride={{}}
      loading={loading}
      size={80}
      speedMultiplier={1}
    />
  );
}
