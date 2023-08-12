import { useEffect, useState } from "react";
import { getDataByID } from "../../services/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import "../ItemListContainer/ItemListContainer.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getDataByID(id);
      setProduct(respuesta);
      setIsLoading(false);
    }

    requestProduct();
  }, [id]);

  if (isLoading) {
    return <CircularProgress className="loader" />;
  }

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;
