import React, { useEffect, useState } from "react";
import { RiverItem } from "../../common/types";
import { getRiverInformation } from "../services/Rivers";

type Props = {
  name: string;
}

const RiverInformation: React.FC<Props> = ({ name }) => {
  const [riverInformation, setRiverInformation] = useState<RiverItem>();

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      const data = await getRiverInformation(name);
      if (mounted) {
        setRiverInformation(data);
      }
    }
    fetchData();
    return () => {
      mounted = false;
    }
  }, [name]);

  return (
    <React.Fragment>
      <h2>River Information</h2>
      <ul>
        <li>Continent: {riverInformation?.continent}</li>
        <li>Length: {riverInformation?.length}</li>
        <li>Outflow: {riverInformation?.outflow}</li>
      </ul>
    </React.Fragment>
  );
}

export default RiverInformation;