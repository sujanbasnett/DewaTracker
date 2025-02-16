import styles from "../../styles/Cards/CategoryCard.module.scss";
import { FiBox } from "react-icons/fi";
import { IoGameControllerOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { HiOutlineFire } from "react-icons/hi";

import { useEffect, useState } from "react";

const CategoryCard = ({category,money}) => {
  const [style, setStyle] = useState({});
  console.log(category);
  const categoryStyle = () => {
    switch (category) {
      
      default: {
        return {
          ctg: "Other",
          icon: <HiOutlineFire style={{ color: "#ffbece" }} />,
          background: "#ff6275",
        };
      }
      
      case "Products": {
        return {
          ctg: "Products",
          icon: <FiBox style={{ color: "#fdeacc" }} />,
          background: "#f8aa35",
        };
      }
      case "Entertainment": {
        return {
          ctg: "Entertainment",
          icon: <IoGameControllerOutline style={{ color: "#e4f1d5" }} />,
          background: "#92c44c",
        };
      }

      case "Bills": {
        return {
          ctg: "Bills",
          icon: <BsHouseDoor style={{ color: "#b7dffd" }} />,
          background: "#5a92d6",
        };
      }
      
    }
  };

useEffect(() => {
    setStyle(categoryStyle());
  }, []);

  return (
    <div className={styles.container} style={{ background: style.background }}>
      <div className={styles.inner}>
        <div className={styles.iconContainer}>{style.icon}</div>
        <div className={styles.info}>
          <div className={styles.title}>{style.ctg}</div>
          <div className={styles.money}>{`-$${money}`}</div>
        </div>
      </div>
    </div>
  );
};


export default CategoryCard;
