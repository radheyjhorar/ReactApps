import { Box } from "@mui/material";

function Item({ item }) {
  return (
    <Box>
      <img
        src={item.image}
        alt={item.title}
        style={{ width: "100%", height: "45vh", objectFit: 'cover' }}
      />
    </Box>
  );
}

export default Item;
