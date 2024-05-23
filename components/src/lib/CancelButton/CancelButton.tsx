import styles from "./CancelButton.module.css";
import { CancelButtonProps } from "../interfaces";

const CancelButton = (props: CancelButtonProps) => {
  return (
    <button
      className={styles["button-cancel"]}
      style={{
        color: `${props.fontColor || "black"}`,
        backgroundColor: `${props.backgroundColor || "white"}`,
        width: `${(props.buttonSize && props.buttonSize.width) || "100%"}`,
        height: `${(props.buttonSize && props.buttonSize.height) || "3rem"}`,
        fontSize: `${(props.fontSize && props.fontSize) || "15px"}`,
        fontWeight: `${(props.fontWeight && props.fontWeight) || "500"}`,
      }}
      onClick={props.onCancel}
    >
      {props.content}
    </button>
  );
};

export default CancelButton;
