import React, { useEffect, useState } from 'react'

const Image = () => {
    const [image,setImage] = useState(null)

     useEffect(() => {
    const handlePaste = (e) => {
      const items = e.clipboardData.items;
      for (let item of items) {
        if (item.type.indexOf("image") !== -1) {
          const blob = item.getAsFile();
          const url = URL.createObjectURL(blob);
          setImage(url);
        }
      }
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, []);
  return (
    <div>
          <div>
      <h2>Paste an Image from Clipboard (Ctrl + V)</h2>
      {image && (
        <div>
          <p>Preview:</p>
          <img src={image} alt="Pasted" style={{ maxWidth: "300px" }} />
        </div>
      )}
    </div>
    </div>
  )
}

export default Image
