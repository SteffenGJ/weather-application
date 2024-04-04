import { AddCircle } from "@mui/icons-material";
import { useState } from "react";
import Popup from "reactjs-popup";
import Pop from "./Pop";

const AddCard = ({ setDark }) => {
  const [open, setOpen] = useState(false);
  const closeModal = () => {
    setOpen(false);
    setDark(false);
  };

  const handleClick = () => {
    setOpen((prev) => !prev);
    setDark((prev) => !prev);
  };

  return (
    <div className="border-4 border-dashed border-gray-200 rounded-xl p-5 flex justify-center items-center h-fit">
      <div className="w-20 h-36 flex justify-center items-center">
        <button onClick={handleClick}>
          <AddCircle htmlColor="Gainsboro" sx={{ fontSize: 30 }} />
        </button>
        <Popup open={open} modal onClose={closeModal} nested>
          <Pop closer={closeModal} />
        </Popup>
      </div>
    </div>
  );
};

export default AddCard;
