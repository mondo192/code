import React, { ChangeEvent, MouseEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";

const Test: React.FC = () => {

  const [data, setData] = useState<String>();

  const downloadText = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const text: BlobPart = data as BlobPart;
    console.log(text);

    const blob = new Blob([text], {
      type: "application/text"
    });

    const url = URL.createObjectURL(blob);

    // create element
    const a = document.createElement("a");
    a.href = url;
    a.download = "MyDocument.txt";
    a.click();

    console.log(blob);
    
    
  }

  useEffect(() => {
    setData("Hello, World");
    return () => {
      setData(undefined);
    }
  }, []);

  return (
    <React.Fragment>
      <h1>{data}</h1>
      <button onClick={downloadText}>Download</button>
    </React.Fragment>
  );
}

export default Test;